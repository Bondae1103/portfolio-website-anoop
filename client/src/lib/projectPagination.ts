export interface Project {
  id: string;
  title: string;
  kicker: string;
  description: string;
  stack: string[];
  image: string;
  imageAlt: string;
  imageCaption?: string;
  metric: string;
  github: string;
  starred?: boolean;
  starredOrder?: number;
  order?: number;
}

export interface PaginationResult {
  currentProjects: Project[];
  currentPage: number;
  totalPages: number;
  totalProjects: number;
  startIndex: number;
  endIndex: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

/**
 * Sorts projects deterministically:
 * 1. Starred projects come first
 * 2. Among starred: sorted ascending by starredOrder
 * 3. Among unstarred (or ties): sorted ascending by secondary order
 * 4. Deterministic tie-breaker: alphabetical by id
 */
export function sortProjects(projects: Project[]): Project[] {
  return [...projects].sort((a, b) => {
    const aStarred = Boolean(a.starred);
    const bStarred = Boolean(b.starred);

    // Starred projects take priority over unstarred
    if (aStarred !== bStarred) {
      return aStarred ? -1 : 1;
    }

    // Both are starred: sort by starredOrder
    if (aStarred && bStarred) {
      const aOrder = a.starredOrder ?? Infinity;
      const bOrder = b.starredOrder ?? Infinity;
      if (aOrder !== bOrder) {
        return aOrder - bOrder;
      }
    }

    // Secondary order comparison
    const aSecondary = a.order ?? Infinity;
    const bSecondary = b.order ?? Infinity;
    if (aSecondary !== bSecondary) {
      return aSecondary - bSecondary;
    }

    // Final deterministic tie-breaker by ID
    return a.id.localeCompare(b.id);
  });
}

/**
 * Paginates an array of projects with deterministic sorting and strict input clamping.
 *
 * @param projects All available projects
 * @param requestedPage The desired 1-indexed page number
 * @param pageSize Number of projects per page (default: 4)
 */
export function getPaginatedProjects(
  projects: Project[],
  requestedPage: number | string,
  pageSize: number = 4
): PaginationResult {
  const safePageSize = Math.max(1, Math.floor(pageSize) || 4);
  const totalProjects = projects?.length ?? 0;
  const totalPages = Math.max(1, Math.ceil(totalProjects / safePageSize));

  if (totalProjects === 0) {
    return {
      currentProjects: [],
      currentPage: 1,
      totalPages: 1,
      totalProjects: 0,
      startIndex: 0,
      endIndex: 0,
      hasNextPage: false,
      hasPrevPage: false,
    };
  }

  // Parse and sanitize requested page
  let page = Number(requestedPage);
  if (isNaN(page) || !Number.isFinite(page) || page < 1) {
    page = 1;
  } else if (!Number.isInteger(page)) {
    page = Math.floor(page);
  }

  // Clamp upper bound
  if (page > totalPages) {
    page = totalPages;
  }
  if (page < 1) {
    page = 1;
  }

  const sortedProjects = sortProjects(projects);
  const startIndex = (page - 1) * safePageSize;
  const endIndex = Math.min(startIndex + safePageSize, totalProjects);
  const currentProjects = sortedProjects.slice(startIndex, endIndex);

  return {
    currentProjects,
    currentPage: page,
    totalPages,
    totalProjects,
    startIndex,
    endIndex,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1,
  };
}
