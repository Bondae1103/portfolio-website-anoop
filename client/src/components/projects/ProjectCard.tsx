import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";
import type { Project } from "@/lib/projectPagination";
import { animateMetric, cardItemVariants } from "@/lib/animations";

interface ProjectCardProps {
  project: Project;
  displayIndex: number;
  isFirstOnPageOne?: boolean;
  isPageOne?: boolean;
}

export function ProjectCard({
  project,
  displayIndex,
  isFirstOnPageOne = false,
  isPageOne = true,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const metricRef = useRef<HTMLElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-40px" });
  const isSpecimenPlot = project.image.includes("/images/projects/");

  useEffect(() => {
    if (isInView) {
      animateMetric(metricRef.current, project.metric);
    }
  }, [isInView, project.id, project.metric]);

  const paddedIndex = String(displayIndex + 1).padStart(2, "0");

  return (
    <motion.article
      ref={cardRef}
      variants={cardItemVariants}
      className={`project-card ${project.starred ? "is-starred" : ""}`}
      id={project.id}
    >
      <div className="project-index">
        <div className="project-code">{project.id}</div>
        <span className="project-num">{paddedIndex}</span>
        {project.starred && (
          <div className="starred-badge" title="Featured / Priority Specimen">
            <Sparkles size={10} className="starred-icon" />
            <span>PRIORITY</span>
          </div>
        )}
      </div>

      <div className={`project-image ${isSpecimenPlot ? "specimen-mount" : ""}`}>
        {project.imageCaption && (
          <div className="specimen-caption-tag" aria-hidden="true">
            {project.imageCaption}
          </div>
        )}
        <div className="image-viewport">
          <img
            src={project.image}
            alt={project.imageAlt}
            loading={isPageOne ? "eager" : "lazy"}
            decoding="async"
            {...(isFirstOnPageOne ? { fetchPriority: "high" as const } : {})}
          />
        </div>
        <div className="image-scan" aria-hidden="true" />
      </div>

      <div className="project-content">
        <div className="project-kicker">{project.kicker}</div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="stack-list">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="project-bottom">
          <b ref={metricRef}>{project.metric}</b>
          <a
            className="github-action"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} repository on GitHub`}
          >
            <Github size={13} /> VIEW ON GITHUB <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
