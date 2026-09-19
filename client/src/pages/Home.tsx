/* Fossil Signal v2: field-lab instrument console, amber phosphor accents, telemetry-driven storytelling. */
import { useState, useRef } from "react";
import {
  Award,
  ChevronRight,
  CircleDot,
  ExternalLink,
  Gamepad2,
  Github,
  Linkedin,
  Mail,
  Menu,
  Microscope,
  Phone,
  ScanLine,
  ShieldAlert,
  Terminal,
  Trophy,
  Users,
  Network,
  BookOpen,
  Dna,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { HeroVisual } from "@/components/hero/HeroVisual";
import { SectionTexture } from "@/components/texture/SectionTexture";
import { Annotation } from "@/components/voice/Annotation";
import { SpecimenCard } from "@/components/voice/SpecimenCard";
import { NerdModeToggle } from "@/components/interactive/NerdModeToggle";
import { LatencyEstimate } from "@/components/interactive/LatencyEstimate";
import { useNerdMode } from "@/hooks/useNerdMode";
import {
  heroCopy,
  aboutCopy,
  experienceCopy,
  educationCopy,
  certsAwardsCopy,
  toastmastersCopy,
  interestsCopy,
  hobbiesCopy,
  contactCopy,
  footerCopy,
} from "@/content/copy";
import { skillCategories, skillGroups } from "@/data/skills";

function SectionTag({ tag, telemetry }: { tag: string; telemetry?: string }) {
  const { active } = useNerdMode();
  return (
    <div className="section-tag-cluster mb-2">
      <div className="section-tag">{tag}</div>
      {active && telemetry && (
        <div
          className="font-mono text-[9px] text-[#f5b738]/70 tracking-widest uppercase mt-0.5 animate-in fade-in duration-200"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          {telemetry}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedSkillCategory, setSelectedSkillCategory] = useState("all");
  const [specimenOpen, setSpecimenOpen] = useState(false);

  // Triple-click handler on brand lockup
  const clickCountRef = useRef(0);
  const clickTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleBrandClick = (e: React.MouseEvent) => {
    clickCountRef.current += 1;
    if (clickTimerRef.current) clearTimeout(clickTimerRef.current);

    if (clickCountRef.current >= 3) {
      e.preventDefault();
      setSpecimenOpen(true);
      clickCountRef.current = 0;
      return;
    }

    clickTimerRef.current = setTimeout(() => {
      clickCountRef.current = 0;
    }, 450);
  };

  const closeMobile = () => setMobileOpen(false);

  const filteredSkills = skillGroups.filter(
    (s) => selectedSkillCategory === "all" || s.category === selectedSkillCategory
  );

  return (
    <div className="site-shell">
      <div className="ambient-grid" aria-hidden="true" />
      <header className="topbar">
        <a
          className="brand-lockup cursor-pointer select-none"
          href="#top"
          onClick={(e) => {
            closeMobile();
            handleBrandClick(e);
          }}
          aria-label="Anoop Nair home (Triple click for acquisition notes)"
          title="Triple-click for specimen acquisition notes"
        >
          <img src="/images/mark.svg" alt="" className="brand-mark" />
          <span>
            <b>ANOOP</b>
            <small>/ NAIR</small>
          </span>
        </a>

        <button
          className="mobile-menu"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>

        <nav className={mobileOpen ? "topnav is-open" : "topnav"}>
          <a href="#about" onClick={closeMobile}>01 / ABOUT</a>
          <a href="#work" onClick={closeMobile}>02 / PROJECTS</a>
          <a href="#experience" onClick={closeMobile}>03 / EXPERIENCE</a>
          <a href="#education" onClick={closeMobile}>04 / EDUCATION</a>
          <a href="#skills" onClick={closeMobile}>05 / SKILLS</a>
          <a href="#certifications" onClick={closeMobile}>06 / CERTS & AWARDS</a>
          <a href="#leadership" onClick={closeMobile}>07 / LEADERSHIP</a>
          <a href="#interests" onClick={closeMobile}>08 / INTERESTS</a>
          <a href="#hobbies" onClick={closeMobile}>09 / HOBBIES</a>
          <a href="#contact" onClick={closeMobile}>10 / CONTACT</a>
          <div className="mobile-socials-drawer">
            <a
              href="https://github.com/Bondae1103"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-link"
            >
              <Github size={13} /> GITHUB
            </a>
            <a
              href="https://www.linkedin.com/in/anoop-nair-4a180928a/"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-link"
            >
              <Linkedin size={13} /> LINKEDIN
            </a>
          </div>
        </nav>

        <div className="topbar-right-cluster">
          <NerdModeToggle />
          <div className="topbar-social-icons">
            <a
              href="https://github.com/Bondae1103"
              target="_blank"
              rel="noopener noreferrer"
              className="topbar-social-btn"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Github size={14} />
            </a>
            <a
              href="https://www.linkedin.com/in/anoop-nair-4a180928a/"
              target="_blank"
              rel="noopener noreferrer"
              className="topbar-social-btn"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={14} />
            </a>
          </div>
          <div className="system-status">
            <CircleDot size={11} /> AVAILABLE FOR SIGNALS
          </div>
        </div>
      </header>

      {/* Easter Egg Specimen Acquisition Dialog */}
      <SpecimenCard open={specimenOpen} onOpenChange={setSpecimenOpen} />

      <div className="mission-layout" id="top">
        <aside className="mission-rail">
          <div className="rail-label">MISSION INDEX</div>
          <div className="rail-line" />
          <nav>
            <a href="#top"><span>00</span> ORIGIN</a>
            <a href="#about"><span>01</span> ABOUT</a>
            <a href="#work"><span>02</span> PROJECTS</a>
            <a href="#experience"><span>03</span> EXPERIENCE</a>
            <a href="#education"><span>04</span> EDUCATION</a>
            <a href="#skills"><span>05</span> SKILLS</a>
            <a href="#certifications"><span>06</span> CERTS & AWARDS</a>
            <a href="#leadership"><span>07</span> LEADERSHIP</a>
            <a href="#interests"><span>08</span> INTERESTS</a>
            <a href="#hobbies"><span>09</span> HOBBIES</a>
            <a href="#contact"><span>10</span> TRANSMIT</a>
          </nav>
          <div className="rail-footer">
            VIT VELLORE / CS-BIO
            <br />
            THIRUVANANTHAPURAM → VELLORE
          </div>
        </aside>

        <main>
          {/* HERO SECTION */}
          <section className="hero-section relative overflow-hidden">
            <SectionTexture variant="grid" />
            <motion.div
              className="hero-copy relative z-10"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <div className="eyebrow">
                <ScanLine size={14} /> {heroCopy.eyebrow}
              </div>
              <h1 style={{ whiteSpace: "pre-line" }}>{heroCopy.headline}</h1>
              <p className="hero-intro">{heroCopy.intro}</p>
              <div className="hero-actions">
                <a className="primary-action" href="#work">
                  {heroCopy.viewWorkAction} <ChevronRight size={17} />
                </a>
                <a
                  className="hero-social-action"
                  href="https://github.com/Bondae1103"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={14} /> {heroCopy.githubAction}
                </a>
                <a
                  className="hero-social-action"
                  href="https://www.linkedin.com/in/anoop-nair-4a180928a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={14} /> {heroCopy.linkedinAction}
                </a>
              </div>
            </motion.div>
            <motion.div
              className="hero-art-wrapper relative z-10"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
            >
              <HeroVisual />
            </motion.div>
            <div className="hero-footnote">
              {heroCopy.scrollPrompt} <span>↓</span>
            </div>
          </section>

          {/* 01 / ABOUT */}
          <section className="intel-band" id="about">
            <SectionTag
              tag={aboutCopy.tag}
              telemetry="[ADDR: 0x414E · THREADS: 08 · LOC: 12.97°N]"
            />
            <motion.div
              className="intel-grid"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="section-heading">
                <span className="micro-label">{aboutCopy.microLabel}</span>
                <h2 style={{ whiteSpace: "pre-line" }}>{aboutCopy.headline}</h2>
                <div className="stamp">
                  {aboutCopy.stampRole}
                  <br />
                  <b>{aboutCopy.stampMetric}</b>
                </div>
              </div>
              <div className="about-copy">
                <p>{aboutCopy.p1}</p>
                <p>{aboutCopy.p2}</p>
                <p>{aboutCopy.p3}</p>
                <p>{aboutCopy.p4}</p>
                <div className="pt-2">
                  <Annotation text={aboutCopy.annotation} />
                </div>
              </div>
            </motion.div>
            <div className="interest-strip">
              <span>{aboutCopy.techVectorsLabel}</span>
              {aboutCopy.techVectors.map((vector, vi) => (
                <span key={vector} className="inline-flex items-center">
                  <b>{vector}</b>
                  {vi < aboutCopy.techVectors.length - 1 && <i>×</i>}
                </span>
              ))}
            </div>
          </section>

          {/* 02 / PROJECTS (Paginated Menu-Style Console) */}
          <ProjectsSection />

          {/* 03 / EXPERIENCE */}
          <section className="log-section relative overflow-hidden" id="experience">
            <SectionTexture variant="ticks" />
            <SectionTag
              tag={experienceCopy.tag}
              telemetry="[LOGS: 0x03 · BUFFER: VERIFIED · AUDIT: PASS]"
            />
            <div className="experience-layout">
              <div className="section-heading">
                <span className="micro-label">{experienceCopy.microLabel}</span>
                <h2 style={{ whiteSpace: "pre-line" }}>{experienceCopy.headline}</h2>
                <p>{experienceCopy.intro}</p>

                {/* Experience Telemetry Console */}
                <div className="experience-telemetry-box">
                  <div className="experience-telemetry-title">
                    <span className="pulse-dot" /> {experienceCopy.telemetry.title}
                  </div>
                  <div className="exp-telemetry-row">
                    <span className="exp-telemetry-key">
                      {experienceCopy.telemetry.enterpriseAppsKey}
                    </span>
                    <span className="exp-telemetry-val">
                      {experienceCopy.telemetry.enterpriseAppsVal}
                    </span>
                  </div>
                  <div className="exp-telemetry-row">
                    <span className="exp-telemetry-key">
                      {experienceCopy.telemetry.disciplinesKey}
                    </span>
                    <span className="exp-telemetry-val">
                      {experienceCopy.telemetry.disciplinesVal}
                    </span>
                  </div>
                  <div className="exp-telemetry-row">
                    <span className="exp-telemetry-key">
                      {experienceCopy.telemetry.toolsetsKey}
                    </span>
                    <span className="exp-telemetry-val">
                      {experienceCopy.telemetry.toolsetsVal}
                    </span>
                  </div>
                </div>
              </div>

              <div className="experience-stream">
                {experienceCopy.experiences.map((exp, i) => (
                  <motion.article
                    className="experience-card"
                    key={i}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <div className="exp-card-top">
                      <div className="exp-badge-group">
                        <span className="exp-index-badge">EXP-0{i + 1}</span>
                        <span className={`log-status-pill ${exp.statusClass}`}>
                          <span className="status-indicator-dot" /> {exp.status}
                        </span>
                      </div>
                      <div className="exp-meta-capsule">
                        <span className="exp-period-tag">{exp.period}</span>
                        <span className="exp-location-tag">{exp.location}</span>
                      </div>
                    </div>

                    <div className="exp-role-block">
                      <h3>{exp.role}</h3>
                      <div className="exp-company-sub">
                        <b className="exp-company-name">{exp.company}</b>
                        <span className="exp-division-tag">[{exp.division}]</span>
                      </div>
                    </div>

                    <div className="exp-highlight-strip">
                      <span className="exp-highlight-kicker">KEY IMPACT</span>
                      <p>{exp.highlight}</p>
                    </div>

                    <ul className="exp-bullet-list">
                      {exp.bullets.map((b, bi) => (
                        <li key={bi}>
                          <span className="exp-bullet-arrow">›</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="exp-tags-row">
                      {exp.tags.map((tag, ti) => (
                        <span key={ti} className="exp-tag-pill">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          {/* 04 / EDUCATION */}
          <section className="education-section" id="education">
            <SectionTag
              tag={educationCopy.tag}
              telemetry="[ACAD_TREE: VIT_CSE_BIO · CGPA_SIG: 8.82]"
            />
            <div className="education-layout">
              <div className="section-heading">
                <h2>{educationCopy.headline}</h2>
                <p>{educationCopy.intro}</p>
              </div>
              <div className="education-cards">
                {educationCopy.items.map((edu, idx) => (
                  <motion.div
                    className="education-card"
                    key={idx}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.35, delay: idx * 0.08 }}
                  >
                    <div className="education-card-top">
                      <div>
                        <h3>{edu.institution}</h3>
                        <b>
                          {edu.location} // {edu.period}
                        </b>
                      </div>
                      <span className="education-tag">{edu.score}</span>
                    </div>
                    <div
                      style={{
                        color: "#f2b84b",
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "11px",
                        marginBottom: "8px",
                      }}
                    >
                      {edu.degree}{" "}
                      {edu.specialization ? (
                        <>
                          — <span style={{ color: "#d5e0c7" }}>{edu.specialization}</span>
                        </>
                      ) : null}
                    </div>
                    <p>{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 05 / SKILLS ARSENAL */}
          <section className="skills-section relative overflow-hidden" id="skills">
            <SectionTexture variant="dots" />
            <div className="section-header relative z-10">
              <div>
                <SectionTag
                  tag="05 / TOOLKIT & CAPABILITIES"
                  telemetry="[MATRIX: 12_MODULES · DECAY_MONITOR: ACTIVE]"
                />
                <h2>Technical <em>arsenal.</em></h2>
              </div>
              <span className="section-caption">MODERN SOFTWARE & SCIENTIFIC SHOWCASE</span>
            </div>

            {/* Interactive Channel Filters */}
            <div className="skills-filter-bar relative z-10">
              {skillCategories.map((cat) => (
                <button
                  key={cat.id}
                  className={`skill-filter-btn cursor-pointer ${
                    selectedSkillCategory === cat.id ? "is-active" : ""
                  }`}
                  onClick={() => setSelectedSkillCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="skills-grid relative z-10">
              <AnimatePresence mode="popLayout">
                {filteredSkills.map((skill, idx) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      className="skill-card"
                      key={skill.label}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.25, delay: idx * 0.025 }}
                    >
                      <Icon size={22} />
                      <div>
                        <h3>
                          <span>{skill.label}</span>
                          <span
                            style={{
                              fontSize: "8.5px",
                              color: "#f5b738",
                              fontWeight: 400,
                              letterSpacing: "0.08em",
                            }}
                          >
                            [{skill.tag}]
                          </span>
                        </h3>
                        <p>{skill.items}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </section>

          {/* 06 / CERTIFICATIONS & ACHIEVEMENTS */}
          <section className="certifications-section" id="certifications">
            <div className="section-header">
              <div>
                <SectionTag
                  tag={certsAwardsCopy.tag}
                  telemetry="[HASH: 0x733ESYYGD · MERIT: BRANCH_TOP]"
                />
                <h2>{certsAwardsCopy.headline}</h2>
              </div>
              <span className="section-caption">{certsAwardsCopy.caption}</span>
            </div>

            {/* 1. Verified Certification */}
            <div style={{ marginBottom: "50px" }}>
              <div className="micro-label" style={{ color: "#f2b84b", marginBottom: "20px" }}>
                VERIFIED CERTIFICATION
              </div>
              <motion.div
                className="cert-single-box"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4 }}
              >
                <div className="cert-card-header" style={{ marginBottom: "4px" }}>
                  <Award size={22} color="#f2b84b" />
                  <span className="cert-badge">{certsAwardsCopy.singleCertification.badge}</span>
                </div>
                <h3>{certsAwardsCopy.singleCertification.title}</h3>
                <p>{certsAwardsCopy.singleCertification.description}</p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "16px",
                    marginTop: "8px",
                  }}
                >
                  <span className="cert-issuer">
                    {certsAwardsCopy.singleCertification.issuer}
                  </span>
                  <a
                    href={certsAwardsCopy.singleCertification.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-verify-link"
                    aria-label="Verify AI Fluency certification on Skilljar"
                  >
                    VERIFY CREDENTIAL <ExternalLink size={13} />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* 2. Key Achievements */}
            <div id="achievements">
              <div className="micro-label" style={{ color: "#f2b84b", marginBottom: "20px" }}>
                KEY HONORS & AWARDS
              </div>
              <div className="cards-grid-2">
                {certsAwardsCopy.achievements.map((ach, i) => (
                  <motion.div
                    className="achievement-card"
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.35, delay: i * 0.08 }}
                  >
                    <div className="achievement-card-header">
                      <Trophy size={20} color="#f2b84b" />
                      <span
                        className="cert-badge"
                        style={{ color: "#f2b84b", borderColor: "#554422" }}
                      >
                        {ach.badge}
                      </span>
                    </div>
                    <h3>{ach.title}</h3>
                    <p>{ach.description}</p>
                    <div className="achievement-meta">{ach.meta}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 07 / LEADERSHIP & COMMUNITY */}
          <section className="club-section" id="leadership">
            <SectionTag
              tag={toastmastersCopy.tag}
              telemetry="[VPM_KEY: SOL_TM · FREQ: 440Hz_VOX]"
            />
            <div className="club-layout">
              <div className="section-heading">
                <h2>{toastmastersCopy.headline}</h2>
                <p>{toastmastersCopy.intro}</p>
              </div>
              <div>
                <motion.div
                  className="club-feature"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="club-role-chip">
                    <Users size={14} /> {toastmastersCopy.role}
                  </div>
                  <h3>{toastmastersCopy.club}</h3>
                  <blockquote
                    style={{
                      margin: "0 0 16px",
                      color: "#f2b84b",
                      fontStyle: "italic",
                      fontSize: "15px",
                      fontFamily: "'IBM Plex Sans', sans-serif",
                    }}
                  >
                    {toastmastersCopy.quote}
                  </blockquote>
                  <p>{toastmastersCopy.description}</p>
                  <div className="club-skills">
                    {toastmastersCopy.skills.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* 08 / INTERESTS */}
          <section className="interests-section" id="interests">
            <div className="section-header">
              <div>
                <SectionTag
                  tag={interestsCopy.tag}
                  telemetry="[SYSTEM: DECENTRALIZED_EMERGENCE · STIGMERGY: TRUE]"
                />
                <h2>{interestsCopy.headline}</h2>
              </div>
              <span className="section-caption">{interestsCopy.caption}</span>
            </div>
            <div className="interests-grid interests-beehive-grid">
              {interestsCopy.tiles.map((tile, i) => {
                const Icon =
                  i === 0 ? Network : i === 1 ? Dna : BookOpen;
                return (
                  <motion.div
                    className="interest-tile group transition-all duration-250 cursor-pointer"
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ duration: 0.35, delay: i * 0.08 }}
                  >
                    <div className="interest-tile-top">
                      <span className="interest-tile-kicker">{tile.kicker}</span>
                      <Icon size={18} color="#f5b738" />
                    </div>
                    <h3>{tile.title}</h3>
                    <div className="interest-badge-pill">{tile.badge}</div>
                    <p>{tile.description}</p>
                    {tile.extra && (
                      <p className="mt-3 pt-2.5 border-t border-[#383020]/60 text-[12px] text-[#d5cbb5] font-mono leading-relaxed opacity-85 group-hover:opacity-100 transition-opacity">
                        <span className="text-[#f5b738] font-bold">// NOTE:</span>{" "}
                        {tile.extra}
                      </p>
                    )}
                    <div className="interest-tile-accent" aria-hidden="true" />
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* 09 / HOBBIES */}
          <section className="hobbies-section" id="hobbies">
            <div className="section-header">
              <div>
                <SectionTag
                  tag={hobbiesCopy.tag}
                  telemetry="[THREAD_STATE: IDLE · CORVUS: SPOTTED]"
                />
                <h2>{hobbiesCopy.headline}</h2>
              </div>
              <span className="section-caption">{hobbiesCopy.caption}</span>
            </div>
            <div className="hobbies-grid">
              {hobbiesCopy.tiles.map((tile, i) => {
                const Icon =
                  i === 0
                    ? Gamepad2
                    : i === 1
                    ? BookOpen
                    : i === 2
                    ? Terminal
                    : Microscope;
                return (
                  <motion.div
                    className="hobby-tile"
                    key={i}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ duration: 0.32, delay: i * 0.06 }}
                  >
                    <div className="hobby-tile-header">
                      <span className="hobby-tile-kicker">{tile.kicker}</span>
                      <Icon size={16} color="#ffd56b" />
                    </div>
                    <h3>{tile.title}</h3>
                    <p>{tile.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* 10 / CONTACT */}
          <section className="contact-section relative overflow-hidden" id="contact">
            <SectionTexture variant="vignette" />
            <div className="contact-top relative z-10">
              <SectionTag
                tag={contactCopy.tag}
                telemetry="[CHANNEL: OPEN · LATENCY: REALTIME_SCAN]"
              />
              <ShieldAlert size={22} />
            </div>
            <h2 className="relative z-10" style={{ whiteSpace: "pre-line" }}>
              {contactCopy.headline}
            </h2>
            <p className="relative z-10">{contactCopy.intro}</p>

            <div className="relative z-10 max-w-md mx-auto my-4 text-left">
              <LatencyEstimate />
            </div>

            <a
              className="primary-action relative z-10 cursor-pointer"
              href={`mailto:${contactCopy.email}`}
            >
              {contactCopy.actionText} <Mail size={16} />
            </a>

            <div className="contact-meta relative z-10">
              <a href={`mailto:${contactCopy.email}`}>
                <Mail size={15} /> {contactCopy.email}
              </a>
              <a href={`tel:${contactCopy.phone}`}>
                <Phone size={15} /> {contactCopy.phone}
              </a>
              <span>
                <Microscope size={15} /> {contactCopy.location}
              </span>
              <div className="socials">
                <a
                  href="https://www.linkedin.com/in/anoop-nair-4a180928a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Anoop Nair LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin size={17} />
                </a>
                <a
                  href="https://github.com/Bondae1103"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Anoop Nair GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github size={17} />
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>

      <footer>
        <div className="flex items-center justify-between flex-wrap gap-4 w-full pt-4 border-t border-[#383020]/60">
          <span>{footerCopy.copyright}</span>
          <div className="footer-social-links">
            <a
              href="https://github.com/Bondae1103"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <Github size={13} /> GITHUB
            </a>
            <a
              href="https://www.linkedin.com/in/anoop-nair-4a180928a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={13} /> LINKEDIN
            </a>
          </div>
          <span>{footerCopy.transmissionStatus}</span>
        </div>
      </footer>
    </div>
  );
}
