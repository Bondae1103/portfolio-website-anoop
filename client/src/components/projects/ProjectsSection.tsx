import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projectsData } from "@/data/projects";
import { getPaginatedProjects } from "@/lib/projectPagination";
import { paginationPageVariants } from "@/lib/animations";
import { ProjectCard } from "./ProjectCard";
import { ProjectPagination } from "./ProjectPagination";

export function ProjectsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);

  const pagination = getPaginatedProjects(projectsData, currentPage, 4);

  const handlePageChange = (newPage: number) => {
    if (newPage === currentPage) return;

    setDirection(newPage > currentPage ? 1 : -1);
    setCurrentPage(newPage);

    // If user is scrolled far down, scroll up to the section top smoothly
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < 0) {
        sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const totalFormatted = String(pagination.totalProjects).padStart(2, "0");
  const pageFormatted = String(pagination.currentPage).padStart(2, "0");
  const totalPagesFormatted = String(pagination.totalPages).padStart(2, "0");

  return (
    <section className="work-section" id="work" ref={sectionRef}>
      <div className="section-header">
        <div>
          <div className="section-tag">02 / EVIDENCE LOG</div>
          <h2>
            Selected <em>work.</em>
          </h2>
        </div>
        <div className="section-telemetry">
          <span className="section-caption">
            PAGE {pageFormatted}/{totalPagesFormatted} // {totalFormatted} CODE REPOSITORIES
          </span>
        </div>
      </div>

      <div className="projects-container">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={pagination.currentPage}
            custom={direction}
            variants={paginationPageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="projects-list"
          >
            {pagination.currentProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                displayIndex={pagination.startIndex + idx}
                isFirstOnPageOne={pagination.currentPage === 1 && idx === 0}
                isPageOne={pagination.currentPage === 1}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        <ProjectPagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          totalProjects={pagination.totalProjects}
          startIndex={pagination.startIndex}
          endIndex={pagination.endIndex}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
}
