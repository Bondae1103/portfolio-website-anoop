import { describe, expect, it } from "vitest";
import {
  getPaginatedProjects,
  sortProjects,
  type Project,
} from "../projectPagination";

function mockProject(overrides: Partial<Project>): Project {
  return {
    id: overrides.id ?? "P-01",
    title: overrides.title ?? "Project",
    kicker: "TEST / KICKER",
    description: "Description",
    stack: ["TypeScript"],
    image: "/images/test.svg",
    imageAlt: "Alt",
    metric: "100%",
    github: "https://github.com/example",
    ...overrides,
  };
}

describe("sortProjects", () => {
  it("places starred projects before unstarred projects", () => {
    const p1 = mockProject({ id: "P-01", starred: false });
    const p2 = mockProject({ id: "P-02", starred: true, starredOrder: 1 });
    const p3 = mockProject({ id: "P-03", starred: false });

    const sorted = sortProjects([p1, p2, p3]);
    expect(sorted.map((p) => p.id)).toEqual(["P-02", "P-01", "P-03"]);
  });

  it("sorts starred projects according to starredOrder", () => {
    const p1 = mockProject({ id: "P-01", starred: true, starredOrder: 3 });
    const p2 = mockProject({ id: "P-02", starred: true, starredOrder: 1 });
    const p3 = mockProject({ id: "P-03", starred: true, starredOrder: 2 });

    const sorted = sortProjects([p1, p2, p3]);
    expect(sorted.map((p) => p.id)).toEqual(["P-02", "P-03", "P-01"]);
  });

  it("handles starredOrder collisions and undefined values deterministically", () => {
    const p1 = mockProject({ id: "P-C", starred: true, starredOrder: 1, order: 2 });
    const p2 = mockProject({ id: "P-A", starred: true, starredOrder: 1, order: 1 });
    const p3 = mockProject({ id: "P-B", starred: true, starredOrder: undefined, order: 1 });

    const sorted = sortProjects([p1, p2, p3]);
    // p2 has order: 1, p1 has order: 2, p3 has starredOrder: undefined (so Infinity)
    expect(sorted.map((p) => p.id)).toEqual(["P-A", "P-C", "P-B"]);
  });

  it("breaks ties with id alphabetically", () => {
    const p1 = mockProject({ id: "P-Z", starred: false, order: 1 });
    const p2 = mockProject({ id: "P-A", starred: false, order: 1 });

    const sorted = sortProjects([p1, p2]);
    expect(sorted.map((p) => p.id)).toEqual(["P-A", "P-Z"]);
  });
});

describe("getPaginatedProjects", () => {
  it("handles an empty project array gracefully", () => {
    const result = getPaginatedProjects([], 1, 4);
    expect(result.currentProjects).toEqual([]);
    expect(result.currentPage).toBe(1);
    expect(result.totalPages).toBe(1);
    expect(result.totalProjects).toBe(0);
    expect(result.hasNextPage).toBe(false);
    expect(result.hasPrevPage).toBe(false);
  });

  it("prioritizes exactly 3 starred projects in positions 1, 2, 3 on page 1", () => {
    const projects = [
      mockProject({ id: "P-UN1", starred: false, order: 1 }),
      mockProject({ id: "P-STAR2", starred: true, starredOrder: 2 }),
      mockProject({ id: "P-UN2", starred: false, order: 2 }),
      mockProject({ id: "P-STAR1", starred: true, starredOrder: 1 }),
      mockProject({ id: "P-STAR3", starred: true, starredOrder: 3 }),
      mockProject({ id: "P-UN3", starred: false, order: 3 }),
    ];

    const page1 = getPaginatedProjects(projects, 1, 4);
    expect(page1.currentPage).toBe(1);
    expect(page1.totalPages).toBe(2);
    expect(page1.totalProjects).toBe(6);
    expect(page1.currentProjects.map((p) => p.id)).toEqual([
      "P-STAR1",
      "P-STAR2",
      "P-STAR3",
      "P-UN1",
    ]);
    expect(page1.hasNextPage).toBe(true);
    expect(page1.hasPrevPage).toBe(false);

    const page2 = getPaginatedProjects(projects, 2, 4);
    expect(page2.currentPage).toBe(2);
    expect(page2.currentProjects.map((p) => p.id)).toEqual(["P-UN2", "P-UN3"]);
    expect(page2.hasNextPage).toBe(false);
    expect(page2.hasPrevPage).toBe(true);
  });

  it("dynamically handles more starred projects than pageSize (> 4)", () => {
    const projects = [
      mockProject({ id: "S1", starred: true, starredOrder: 1 }),
      mockProject({ id: "S2", starred: true, starredOrder: 2 }),
      mockProject({ id: "S3", starred: true, starredOrder: 3 }),
      mockProject({ id: "S4", starred: true, starredOrder: 4 }),
      mockProject({ id: "S5", starred: true, starredOrder: 5 }),
      mockProject({ id: "U1", starred: false, order: 1 }),
    ];

    const page1 = getPaginatedProjects(projects, 1, 4);
    expect(page1.currentProjects.map((p) => p.id)).toEqual(["S1", "S2", "S3", "S4"]);

    const page2 = getPaginatedProjects(projects, 2, 4);
    expect(page2.currentProjects.map((p) => p.id)).toEqual(["S5", "U1"]);
  });

  it("handles zero starred projects correctly", () => {
    const projects = [
      mockProject({ id: "U3", order: 3 }),
      mockProject({ id: "U1", order: 1 }),
      mockProject({ id: "U2", order: 2 }),
      mockProject({ id: "U4", order: 4 }),
      mockProject({ id: "U5", order: 5 }),
    ];

    const page1 = getPaginatedProjects(projects, 1, 4);
    expect(page1.currentProjects.map((p) => p.id)).toEqual(["U1", "U2", "U3", "U4"]);

    const page2 = getPaginatedProjects(projects, 2, 4);
    expect(page2.currentProjects.map((p) => p.id)).toEqual(["U5"]);
  });

  it("clamps invalid page values: 0, negative, NaN, non-integer, and > totalPages", () => {
    const projects = [
      mockProject({ id: "P1" }),
      mockProject({ id: "P2" }),
      mockProject({ id: "P3" }),
      mockProject({ id: "P4" }),
      mockProject({ id: "P5" }),
    ];

    // Page 0 -> clamps to 1
    expect(getPaginatedProjects(projects, 0, 4).currentPage).toBe(1);

    // Negative page -> clamps to 1
    expect(getPaginatedProjects(projects, -10, 4).currentPage).toBe(1);

    // NaN / string -> clamps to 1
    expect(getPaginatedProjects(projects, "invalid", 4).currentPage).toBe(1);
    expect(getPaginatedProjects(projects, NaN, 4).currentPage).toBe(1);

    // Non-integer -> floors to 1
    expect(getPaginatedProjects(projects, 1.8, 4).currentPage).toBe(1);

    // Greater than totalPages (totalPages is 2) -> clamps to 2
    expect(getPaginatedProjects(projects, 999, 4).currentPage).toBe(2);
  });
});
