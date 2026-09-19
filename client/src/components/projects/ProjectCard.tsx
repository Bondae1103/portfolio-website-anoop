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
  const confPreRef = useRef<HTMLElement>(null);
  const confPostRef = useRef<HTMLElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-40px" });
  const isSpecimenPlot = project.image.includes("/images/projects/");

  useEffect(() => {
    if (isInView) {
      animateMetric(metricRef.current, project.metric);
      if (project.confidencePre !== undefined) {
        animateMetric(confPreRef.current, `${project.confidencePre}%`);
      }
      if (project.confidencePost !== undefined) {
        animateMetric(confPostRef.current, `${project.confidencePost}%`);
      }
    }
  }, [
    isInView,
    project.id,
    project.metric,
    project.confidencePre,
    project.confidencePost,
  ]);

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
            <span className="specimen-caption-title">{project.imageCaption}</span>
            <span className="specimen-tag-badge">CONSOLE // 600×400</span>
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
          {project.stack.slice(0, 3).map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        {project.confidencePre !== undefined &&
          project.confidencePost !== undefined && (
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#a39985] tracking-wider py-1 border-t border-[#383020]/60 mt-2 mb-1 select-none">
              <span className="text-[#f5b738] font-bold">CONFIDENCE:</span>
              <span>
                PRE: <b ref={confPreRef} className="text-[#eee8d7]">{project.confidencePre}%</b>
              </span>
              <span className="text-[#f5b738]">/</span>
              <span>
                POST:{" "}
                <b
                  ref={confPostRef}
                  className={
                    project.confidencePost < project.confidencePre
                      ? "text-[#e06c75]"
                      : "text-[#ffd56b]"
                  }
                >
                  {project.confidencePost}%
                </b>
              </span>
            </div>
          )}

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
