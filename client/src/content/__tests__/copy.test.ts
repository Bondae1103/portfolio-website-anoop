import { describe, expect, it } from "vitest";
import * as copyModule from "../copy";
import { projectsData } from "@/data/projects";

const BAN_LIST = [
  "leverage",
  "robust",
  "bulletproof",
  "seamless",
  "thrive on",
  "second nature",
  "core pillars",
  "spearheaded",
  "delve",
  "testament to",
  "tapestry",
  "sharpens this discipline",
  "just works",
  "rigorous blend",
  "distinguished academic honors",
];

function extractStrings(obj: unknown): string[] {
  if (typeof obj === "string") {
    return [obj];
  }
  if (Array.isArray(obj)) {
    return obj.flatMap(extractStrings);
  }
  if (obj !== null && typeof obj === "object") {
    return Object.values(obj).flatMap(extractStrings);
  }
  return [];
}

describe("Fossil Signal v2 Copy Guardrails", () => {
  const allCopyStrings = extractStrings(copyModule);
  const projectStrings = projectsData.flatMap((p) => [p.title, p.description, p.kicker]);
  const combinedStrings = [...allCopyStrings, ...projectStrings];

  it("contains zero banned terms from the Section 1.2 ban list", () => {
    const violations: Array<{ term: string; snippet: string }> = [];

    for (const text of combinedStrings) {
      const lower = text.toLowerCase();
      for (const banned of BAN_LIST) {
        if (lower.includes(banned.toLowerCase())) {
          violations.push({ term: banned, snippet: text });
        }
      }
    }

    expect(
      violations,
      `Found banned terms in copy:\n${violations
        .map((v) => `[BANNED: "${v.term}"] in: "${v.snippet}"`)
        .join("\n")}`
    ).toEqual([]);
  });

  it("ensures every project has an explicit limitation or failure disclosure", () => {
    for (const project of projectsData) {
      // Must contain evidence of limitations or honest assessment
      const desc = project.description.toLowerCase();
      const hasLimitation =
        desc.includes("eval set") ||
        desc.includes("before believing") ||
        desc.includes("computational candidates") ||
        desc.includes("without wet-lab") ||
        desc.includes("still requires") ||
        desc.includes("drowned out") ||
        desc.includes("still fail") ||
        desc.includes("unclassified") ||
        desc.includes("nowhere near deployable") ||
        desc.includes("too small");

      expect(
        hasLimitation,
        `Project ${project.id} (${project.title}) description lacks an honest limitation sentence.`
      ).toBe(true);
    }
  });

  it("ensures all projects have pre-build and post-build confidence numbers", () => {
    for (const project of projectsData) {
      expect(typeof project.confidencePre).toBe("number");
      expect(typeof project.confidencePost).toBe("number");
      expect(project.confidencePre).toBeGreaterThan(0);
      expect(project.confidencePost).toBeGreaterThan(0);
    }
  });
});
