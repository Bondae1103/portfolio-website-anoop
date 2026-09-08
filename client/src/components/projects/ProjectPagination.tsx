import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectPaginationProps {
  currentPage: number;
  totalPages: number;
  totalProjects: number;
  startIndex: number;
  endIndex: number;
  onPageChange: (page: number) => void;
}

export function ProjectPagination({
  currentPage,
  totalPages,
  totalProjects,
  startIndex,
  endIndex,
  onPageChange,
}: ProjectPaginationProps) {
  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  const handleKeyDown = (e: React.KeyboardEvent, targetPage: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onPageChange(targetPage);
    }
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const startFormatted = String(startIndex + 1).padStart(2, "0");
  const endFormatted = String(endIndex).padStart(2, "0");
  const totalFormatted = String(totalProjects).padStart(2, "0");

  return (
    <nav
      className="project-pagination"
      role="navigation"
      aria-label="Projects pagination console"
    >
      <div className="pagination-telemetry">
        <span className="telemetry-bracket">[</span>
        <span className="telemetry-text">
          SPECIMENS {startFormatted}—{endFormatted} // TOTAL {totalFormatted}
        </span>
        <span className="telemetry-bracket">]</span>
      </div>

      <div className="pagination-controls">
        <button
          type="button"
          className="pagination-btn nav-arrow"
          disabled={!hasPrev}
          aria-disabled={!hasPrev}
          onClick={() => hasPrev && onPageChange(currentPage - 1)}
          aria-label="Go to previous project page"
        >
          <ChevronLeft size={14} />
          <span className="btn-label">PREV</span>
        </button>

        <div className="pagination-pages" role="group" aria-label="Page selection">
          {pages.map((pageNum) => {
            const isActive = pageNum === currentPage;
            const padded = String(pageNum).padStart(2, "0");

            return (
              <button
                key={pageNum}
                type="button"
                className={`pagination-page-btn ${isActive ? "is-active" : ""}`}
                onClick={() => onPageChange(pageNum)}
                onKeyDown={(e) => handleKeyDown(e, pageNum)}
                aria-current={isActive ? "page" : undefined}
                aria-label={`Page ${pageNum} of ${totalPages}`}
              >
                <span className="page-num">{padded}</span>
                {isActive && <span className="active-pip" aria-hidden="true" />}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          className="pagination-btn nav-arrow"
          disabled={!hasNext}
          aria-disabled={!hasNext}
          onClick={() => hasNext && onPageChange(currentPage + 1)}
          aria-label="Go to next project page"
        >
          <span className="btn-label">NEXT</span>
          <ChevronRight size={14} />
        </button>
      </div>

      <div className="sr-only" aria-live="polite">
        Showing page {currentPage} of {totalPages}, specimens {startIndex + 1} to{" "}
        {endIndex} of {totalProjects}
      </div>
    </nav>
  );
}
