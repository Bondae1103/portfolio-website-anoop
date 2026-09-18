/* Fossil Signal page: warm charcoal surfaces, golden-amber signal accents, evidence-led storytelling, and an approachable software-first portfolio console. */
import { useState } from "react";
import {
  ArrowUpRight,
  Atom,
  Award,
  BookOpen,
  ChevronRight,
  CircleDot,
  Code2,
  Compass,
  Cpu,
  Database,
  Dna,
  ExternalLink,
  Gamepad2,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Microscope,
  Phone,
  ScanLine,
  ShieldAlert,
  Sparkles,
  Terminal,
  Trophy,
  Users,
  Network,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { HeroVisual } from "@/components/hero/HeroVisual";

const skillCategories = [
  { id: "all", label: "ALL CAPABILITIES [12]" },
  { id: "swe", label: "SOFTWARE & SYSTEMS [4]" },
  { id: "ai", label: "DATA SCIENCE & AI [3]" },
  { id: "cloud", label: "CLOUD & QA [2]" },
  { id: "bio", label: "BIOSYSTEMS & SCIENTIFIC [3]" },
];

const skillGroups = [
  {
    category: "swe",
    label: "PROGRAMMING LANGUAGES",
    icon: Code2,
    tag: "POLYGLOT CORE",
    items: "Python · Java · C/C++ · TypeScript · JavaScript · SQL · Bash / Shell · R",
  },
  {
    category: "swe",
    label: "SOFTWARE ENGINEERING",
    icon: Cpu,
    tag: "SYSTEM DESIGN",
    items: "OOP/OOD (SOLID) · Data Structures & Algorithms · Modular Architecture · Design Patterns · Clean Code · Complexity Analysis",
  },
  {
    category: "swe",
    label: "BACKEND & DISTRIBUTED SYSTEMS",
    icon: Terminal,
    tag: "MICROSERVICES",
    items: "FastAPI · Express.js · RESTful APIs · Server-Sent Events (SSE) · Celery (Distributed Tasks) · Microservices Architecture",
  },
  {
    category: "ai",
    label: "DATA SCIENCE & ANALYTICS",
    icon: Compass,
    tag: "STATISTICAL RIGOR",
    items: "Pandas · NumPy · SciPy · Scikit-learn · Statistical Modeling · Feature Selection (LASSO, Boruta, SVM-RFE) · SHAP · LOOCV",
  },
  {
    category: "ai",
    label: "AI & MACHINE LEARNING",
    icon: Atom,
    tag: "DEEP LEARNING & CV",
    items: "PyTorch · PyG (Graph Neural Networks) · YOLOv8 · ResNet · OpenCV · Transformers (PubMedBERT) · XGBoost · Random Forest · Agentic AI (OpenAI Codex)",
  },
  {
    category: "swe",
    label: "DATABASES & VECTOR STORES",
    icon: Database,
    tag: "STORAGE & EMBEDDINGS",
    items: "PostgreSQL · MySQL · Redis (In-Memory Cache & Message Broker) · Qdrant (Vector Database) · Schema Design · SQL Optimization",
  },
  {
    category: "cloud",
    label: "CLOUD & DEVOPS",
    icon: Sparkles,
    tag: "CONTAINERS & CLOUD",
    items: "AWS (Lambda, S3) · Docker · Docker Compose · Git · GitHub Actions · CI/CD Pipelines · Linux/POSIX Environments",
  },
  {
    category: "cloud",
    label: "TESTING & AUTOMATION",
    icon: ShieldAlert,
    tag: "QUALITY ENGINEERING",
    items: "Playwright · Pytest · Selenium · Vitest · Test-Driven Development (TDD) · BDD (Gherkin) · Mock Fixtures · Headed/Headless QA",
  },
  {
    category: "swe",
    label: "WEB DEVELOPMENT",
    icon: BookOpen,
    tag: "FRONTEND ARSENAL",
    items: "React 19 · TypeScript · Vite · Tailwind CSS · Zod · Radix UI · Responsive UI Architecture",
  },
  {
    category: "bio",
    label: "BIOINFORMATICS & GENOMICS",
    icon: Dna,
    tag: "GENOMIC PIPELINES",
    items: "cyvcf2 (VCF Parsing) · RNA-seq / Transcriptomics · Differential Expression (limma, edgeR) · Biomarker Discovery · NCBI / BLAST",
  },
  {
    category: "bio",
    label: "SCIENTIFIC COMPUTING & BIOPHYSICS",
    icon: Microscope,
    tag: "MOLECULAR DYNAMICS",
    items: "Molecular Dynamics (GROMACS, Bio3D) · Molecular Docking (AutoDock Vina) · VMD · PyMOL · UCSF Chimera · CHARMM-GUI · PCA Trajectories",
  },
  {
    category: "ai",
    label: "DEVELOPER TOOLS & VISUALIZATION",
    icon: ScanLine,
    tag: "DATA VISUALIZATION",
    items: "Git · VS Code · CVAT (Annotation) · Postman · Linux Shell · Matplotlib · Seaborn · Tableau · Recharts",
  },
];

const experiences = [
  {
    role: "Software Developer Intern",
    company: "THERMO FISHER SCIENTIFIC",
    division: "Cloud Enterprise Applications // Automation QA",
    location: "BENGALURU, INDIA",
    period: "MAY — JUL 2026",
    status: "● LIVE LOG",
    statusClass: "status-live",
    highlight:
      "Migrated enterprise test suites to Playwright with Agentic AI (Codex), achieving major performance gains and coverage across 4 cloud applications.",
    bullets: [
      "Built automated test scripts for four cloud-based Thermo Fisher Scientific enterprise applications.",
      "Evaluated and migrated legacy Selenium test scripts to Playwright, significantly improving execution speed, test reliability, and maintainability.",
      "Applied agentic AI techniques (Codex) alongside Git and CI/CD pipelines to streamline test creation, validation, and automated refactoring.",
      "Optimized overall software testing efficiency and coverage across cross-functional engineering teams.",
    ],
    tags: [
      "Playwright",
      "Selenium Migration",
      "Agentic AI (Codex)",
      "CI/CD Pipelines",
      "Cloud Testing",
      "Python",
    ],
  },
  {
    role: "Bioinformatics Trainee",
    company: "BRIC — RAJIV GANDHI CENTRE FOR BIOTECHNOLOGY",
    division: "Structural Biology & Biophysical Simulations",
    location: "THIRUVANANTHAPURAM, INDIA",
    period: "MAY — JUN 2025",
    status: "● BIO SIGNAL",
    statusClass: "status-bio",
    highlight:
      "Automated molecular dynamics pipelines and trajectory analyses for HIV protease & nAChR drug targets using GROMACS, AutoDock, and Bio3D in R.",
    bullets: [
      "Developed automated computational pipelines for protein–ligand interaction modeling and virtual screening using GROMACS and AutoDock.",
      "Conducted molecular dynamics simulations and trajectory analytics with Bio3D in R, contributing to research on HIV protease and nicotinic acetylcholine receptors.",
      "Automated RMSD, RMSF, Rg, and DCCM dynamical cross-correlation calculations to ensure statistical reproducibility across simulation batches.",
      "Worked hands-on with VMD, PyMOL, UCSF Chimera, and CHARMM-GUI for 3D macromolecular modeling and biophysical structural characterization.",
    ],
    tags: [
      "GROMACS",
      "AutoDock Vina",
      "Bio3D (R)",
      "VMD & PyMOL",
      "RMSD / DCCM Analytics",
      "CHARMM-GUI",
    ],
  },
  {
    role: "Digital Marketing Intern",
    company: "THOUGHTLINE DIGITAL",
    division: "Campaign Analytics & Growth Telemetry",
    location: "THIRUVANANTHAPURAM, INDIA",
    period: "JUN 2024",
    status: "● FIELD LOG",
    statusClass: "status-active",
    highlight:
      "Spearheaded user outreach analytics and conversion funnel tracking to optimize digital marketing workflows.",
    bullets: [
      "Contributed to digital campaign strategy, user outreach analytics, and data-driven marketing workflows.",
      "Gained valuable experience in cross-functional communication and analytics-driven optimization.",
    ],
    tags: [
      "Audience Analytics",
      "Funnel Tracking",
      "Data Workflows",
      "Cross-Functional Comm",
    ],
  },
];

const educationList = [
  {
    institution: "VELLORE INSTITUTE OF TECHNOLOGY (VIT)",
    degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
    specialization: "Specialization in Bioinformatics",
    period: "2023 — 2027",
    location: "VELLORE, TAMIL NADU, INDIA",
    score: "8.82 CGPA",
    description:
      "Pursuing a rigorous blend of core Computer Science foundations (Data Structures, Algorithms, OOP with Java/C++, Operating Systems, Cloud, QA Automation) and computational biology pipelines (Genomics, Structural Biology, Machine Learning for Life Sciences).",
  },
  {
    institution: "ST. THOMAS RESIDENTIAL CENTRAL SCHOOL",
    degree: "Senior Secondary (Class XII) & High School (Class X)",
    specialization: null,
    period: "2010 — 2022",
    location: "THIRUVANANTHAPURAM, KERALA, INDIA",
    score: "Class XII: 92% · Class X: 91%",
    description:
      "Graduated with distinguished academic honors across secondary and senior secondary school education.",
  },
];

const singleCertification = {
  title: "AI Fluency Framework & Foundations",
  issuer: "VERIFIED CREDENTIAL // SKILLJAR",
  badge: "AI & PROMPT ENGINEERING",
  url: "https://verify.skilljar.com/c/ooi733esyygd",
  description:
    "Comprehensive certification validating core competencies in modern AI frameworks, prompt engineering architectures, LLM foundations, and applied agentic workflows.",
};

const achievements = [
  {
    title: "Toastmasters International 'Triple Crown' Award",
    meta: "TOASTMASTERS INTERNATIONAL // 2025—26",
    badge: "TRIPLE CROWN",
    description:
      "Secured the prestigious Triple Crown award during my tenure in Toastmasters (2025–26), recognizing milestone achievements in speech delivery, executive communication, and educational pathways.",
  },
  {
    title: "Branch Merit List & Cash Prize (First Year)",
    meta: "VIT VELLORE // 1ST YEAR MERIT",
    badge: "9.42 GPA",
    description:
      "Placed on the branch merit list in my first year after securing a 9.42 GPA in the first semester, receiving an official certificate of merit and a cash prize for academic distinction.",
  },
];

const toastmastersData = {
  club: "SOL TOASTMASTERS CLUB",
  role: "VICE PRESIDENT MEMBERSHIP (VPM)",
  quote: "“Turning complex technical concepts into clear, engaging human conversations.”",
  description:
    "Served as Vice President Membership at SOL Toastmasters Club, leading membership growth, guest onboarding, and community engagement initiatives. Regularly delivered prepared speeches and participated in impromptu Table Topics, continually refining executive communication, active listening, impromptu thinking, and team leadership.",
  skills: [
    "Executive Leadership",
    "Public Speaking",
    "Technical Storytelling",
    "Active Listening",
    "Team Mentorship",
    "Meeting Facilitation",
  ],
};

const interestTiles = [
  {
    kicker: "COLLECTIVE INTELLIGENCE & SOCIAL INSECTS",
    title: "Swarm Intelligence & Emergence",
    icon: Network,
    badge: "BEES & ANTS → SWARM ALGORITHMS",
    description:
      "I've had quite a fascination with ants and bees since I was younger—I even kept an ant farm as a kid. That early curiosity about how simple individual agents communicate through stigmergy and pheromone trails without central authority eventually developed into an interest in swarm biology, decentralized routing algorithms, and emergent collective intelligence.",
  },
  {
    kicker: "PALEONTOLOGY & EVOLUTIONARY BIOLOGY",
    title: "Speculative Evolution",
    icon: Dna,
    badge: "DEEP TIME & ADAPTIVE MORPHOLOGY",
    description:
      "This stemmed directly from my deep fascination with paleontology, especially dinosaurs. I’ve always been drawn to the thought experiment of predicting what kind of phenotypes, anatomical adaptations, and physiological traits can be observed under specific environmental conditions and selective pressures across deep time.",
  },
  {
    kicker: "HISTORICAL LINGUISTICS & ANTHROPOLOGY",
    title: "Etymology & Linguistic Evolution",
    icon: BookOpen,
    badge: "PHONETICS & CULTURAL DRIFT",
    description:
      "A more recent interest: I’m very fascinated by how different languages and cultures arose and evolved under different historical and geographical situations. Tracking phonetic sound shifts, sound laws, proto-languages, and how vocabulary diverges over centuries reveals striking parallels to evolutionary phylogenetics.",
  },
];

const hobbyTiles = [
  {
    kicker: "GAMING",
    title: "PC & Console Gaming",
    icon: Gamepad2,
    description:
      "Loves to play games like Elden Ring and The Witcher 3. In particular, I’ve completed the entirety of Elden Ring along with its DLC (Shadow of the Erdtree) and am now playing through The Witcher 3. I also enjoy dropping into Apex Legends, Warhammer: Vermintide 2, and StarCraft.",
  },
  {
    kicker: "READING",
    title: "Fiction & Non-Fiction",
    icon: BookOpen,
    description:
      "Enjoys reading across both fiction and non-fiction—from compelling narrative storytelling and sci-fi to books covering history, science, anthropology, and how things work.",
  },
  {
    kicker: "SWIMMING",
    title: "Distance Swimming",
    icon: Compass,
    description:
      "Long-distance swimming is my favorite way to stay active and clear my head. Doing laps in the pool provides a great rhythm and mental reset away from screens.",
  },
  {
    kicker: "BIRDWATCHING",
    title: "Field Birdwatching",
    icon: Microscope,
    description:
      "Casual field birdwatching outdoors with a pair of binoculars. I enjoy exploring natural habitats, observing avian behaviors, and spotting resident and migratory species.",
  },
];

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedSkillCategory, setSelectedSkillCategory] = useState("all");

  const closeMobile = () => setMobileOpen(false);

  const filteredSkills = skillGroups.filter(
    (s) => selectedSkillCategory === "all" || s.category === selectedSkillCategory
  );

  return (
    <div className="site-shell">
      <div className="ambient-grid" aria-hidden="true" />
      <header className="topbar">
        <a className="brand-lockup" href="#top" onClick={closeMobile} aria-label="Anoop Nair home">
          <img src="/images/mark.svg" alt="" className="brand-mark" />
          <span><b>ANOOP</b><small>/ NAIR</small></span>
        </a>
        <button className="mobile-menu" aria-label={mobileOpen ? "Close navigation" : "Open navigation"} onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X /> : <Menu />}</button>
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
            <a href="https://github.com/Bondae1103" target="_blank" rel="noopener noreferrer" className="mobile-social-link">
              <Github size={13} /> GITHUB
            </a>
            <a href="https://www.linkedin.com/in/anoop-nair-4a180928a/" target="_blank" rel="noopener noreferrer" className="mobile-social-link">
              <Linkedin size={13} /> LINKEDIN
            </a>
          </div>
        </nav>
        <div className="topbar-right-cluster">
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
          <div className="system-status"><CircleDot size={11} /> AVAILABLE FOR SIGNALS</div>
        </div>
      </header>

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
          <div className="rail-footer">VIT VELLORE / CS-BIO<br />THIRUVANANTHAPURAM → VELLORE</div>
        </aside>

        <main>
          {/* HERO SECTION */}
          <section className="hero-section">
            <motion.div
              className="hero-copy"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <div className="eyebrow"><ScanLine size={14} /> FIELD NOTE 00 — SOFTWARE, INTELLIGENCE & BIOSYSTEMS</div>
              <h1>Engineering code,<br />intelligence & <em>biological</em><br />systems.</h1>
              <p className="hero-intro">
                Hey, I’m <strong>Anoop Nair</strong> — a Software Engineer &amp; Data-Oriented Developer completing Computer Science Engineering at <strong>VIT Vellore</strong>. I take problems from messy, high-dimensional data all the way to robust, working software — whether that’s distributed RAG microservices, containerized cloud inference on AWS, automated QA with Playwright, or machine learning for complex biosystems.
              </p>
              <div className="hero-actions">
                <a className="primary-action" href="#work">VIEW SELECTED WORK <ChevronRight size={17} /></a>
                <a className="hero-social-action" href="https://github.com/Bondae1103" target="_blank" rel="noopener noreferrer">
                  <Github size={14} /> GITHUB
                </a>
                <a className="hero-social-action" href="https://www.linkedin.com/in/anoop-nair-4a180928a/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={14} /> LINKEDIN
                </a>
              </div>
            </motion.div>
            <motion.div
              className="hero-art-wrapper"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
            >
              <HeroVisual />
            </motion.div>
            <div className="hero-footnote">SCROLL TO INVESTIGATE <span>↓</span></div>
          </section>

          {/* 01 / ABOUT */}
          <section className="intel-band" id="about">
            <div className="section-tag">01 / SUBJECT PROFILE</div>
            <motion.div
              className="intel-grid"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="section-heading">
                <span className="micro-label">CURRENT POSITION</span>
                <h2>Between the<br /><em>lab & the stack.</em></h2>
                <div className="stamp">AN / CS-BIO<br /><b>8.82</b> CGPA @ VIT</div>
              </div>
              <div className="about-copy">
                <p>
                  I’m a final-year <strong>Computer Science Engineering (Bioinformatics)</strong> undergraduate at <strong>Vellore Institute of Technology (VIT)</strong>. I approach engineering from a software-first foundation: building clean, modular backends, architecting resilient test suites, leveraging cloud microservices, and deploying applied AI to complex data.
                </p>
                <p>
                  My background in computational biology and high-dimensional genomics is what sharpens my edge as a software developer: having engineered pipelines for 13,000+ bacterial genomes and multi-cohort RNA-seq datasets, I treat data integrity, algorithmic efficiency, and test repeatability as core engineering imperatives. Whether developing distributed RAG pipelines with <strong>FastAPI, Celery, and Qdrant</strong>, migrating enterprise test automation to Playwright at <strong>Thermo Fisher Scientific</strong>, or automating molecular dynamics pipelines at <strong>BRIC-RGCB</strong>, I thrive on building reliable systems that just work.
                </p>
                <p>
                  Beyond engineering, serving as Vice President Membership at <strong>SOL Toastmasters Club</strong> taught me that great software requires great communication. I love collaborating with curious, ambitious teams to solve hard problems with clear questions and reproducible code.
                </p>
              </div>
            </motion.div>
            <div className="interest-strip">
              <span>TECH VECTORS</span>
              <b>SOFTWARE ENGINEERING</b><i>×</i>
              <b>MACHINE LEARNING</b><i>×</i>
              <b>TEST AUTOMATION</b><i>×</i>
              <b>COMPUTATIONAL BIOLOGY</b><i>×</i>
              <b>CLOUD & DEVOPS</b>
            </div>
          </section>

          {/* 02 / PROJECTS (Paginated Menu-Style Console) */}
          <ProjectsSection />

          {/* 03 / EXPERIENCE */}
          <section className="log-section" id="experience">
            <div className="section-tag">03 / EXPERIENCE & INDUSTRY LOG</div>
            <div className="experience-layout">
              <div className="section-heading">
                <span className="micro-label">INDUSTRY ARCHIVE</span>
                <h2>Time<br /><em>logged.</em></h2>
                <p>Software development, enterprise QA automation, and biophysical simulation pipelines across commercial and research labs.</p>

                {/* Experience Telemetry Console */}
                <div className="experience-telemetry-box">
                  <div className="experience-telemetry-title">
                    <span className="pulse-dot" /> SYSTEM LOG AUDIT // ACTIVE
                  </div>
                  <div className="exp-telemetry-row">
                    <span className="exp-telemetry-key">ENTERPRISE CODEBASES</span>
                    <span className="exp-telemetry-val">4 Cloud Apps (Thermo Fisher)</span>
                  </div>
                  <div className="exp-telemetry-row">
                    <span className="exp-telemetry-key">CORE DISCIPLINES</span>
                    <span className="exp-telemetry-val">Automated QA · Molecular Dynamics</span>
                  </div>
                  <div className="exp-telemetry-row">
                    <span className="exp-telemetry-key">KEY TOOLSETS</span>
                    <span className="exp-telemetry-val">Playwright · Codex AI · GROMACS</span>
                  </div>
                </div>
              </div>

              <div className="experience-stream">
                {experiences.map((exp, i) => (
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

          {/* 04 / EDUCATION (Strictly separate from experience) */}
          <section className="education-section" id="education">
            <div className="section-tag">04 / ACADEMIC PROFILE</div>
            <div className="education-layout">
              <div className="section-heading">
                <h2>Formal <em>education.</em></h2>
                <p>Strong foundations in computer science theory, systems programming, and computational life sciences.</p>
              </div>
              <div className="education-cards">
                {educationList.map((edu, idx) => (
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
                        <b>{edu.location} // {edu.period}</b>
                      </div>
                      <span className="education-tag">{edu.score}</span>
                    </div>
                    <div style={{ color: "#f2b84b", fontFamily: "'Space Mono', monospace", fontSize: "11px", marginBottom: "8px" }}>
                      {edu.degree} {edu.specialization ? <>— <span style={{ color: "#d5e0c7" }}>{edu.specialization}</span></> : null}
                    </div>
                    <p>{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 05 / SKILLS ARSENAL */}
          <section className="skills-section" id="skills">
            <div className="section-header">
              <div>
                <div className="section-tag">05 / TOOLKIT & CAPABILITIES</div>
                <h2>Technical <em>arsenal.</em></h2>
              </div>
              <span className="section-caption">MODERN SOFTWARE & SCIENTIFIC SHOWCASE</span>
            </div>

            {/* Interactive Channel Filters */}
            <div className="skills-filter-bar">
              {skillCategories.map((cat) => (
                <button
                  key={cat.id}
                  className={`skill-filter-btn ${selectedSkillCategory === cat.id ? "is-active" : ""}`}
                  onClick={() => setSelectedSkillCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="skills-grid">
              <AnimatePresence mode="popLayout">
                {filteredSkills.map(({ label, icon: Icon, tag, items }, idx) => (
                  <motion.div
                    className="skill-card"
                    key={label}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25, delay: idx * 0.025 }}
                  >
                    <Icon size={22} />
                    <div>
                      <h3>
                        <span>{label}</span>
                        <span style={{ fontSize: "8.5px", color: "#f5b738", fontWeight: 400, letterSpacing: "0.08em" }}>[{tag}]</span>
                      </h3>
                      <p>{items}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </section>

          {/* 06 / CERTIFICATIONS & ACHIEVEMENTS */}
          <section className="certifications-section" id="certifications">
            <div className="section-header">
              <div>
                <div className="section-tag">06 / VERIFIED CREDENTIALS & AWARDS</div>
                <h2>Certifications & <em>achievements.</em></h2>
              </div>
              <span className="section-caption">VERIFIED ACCREDITATIONS & HONORS</span>
            </div>
            
            {/* 1. Single AI Fluency Certification */}
            <div style={{ marginBottom: "50px" }}>
              <div className="micro-label" style={{ color: "#f2b84b", marginBottom: "20px" }}>VERIFIED CERTIFICATION</div>
              <motion.div
                className="cert-single-box"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4 }}
              >
                <div className="cert-card-header" style={{ marginBottom: "4px" }}>
                  <Award size={22} color="#f2b84b" />
                  <span className="cert-badge">{singleCertification.badge}</span>
                </div>
                <h3>{singleCertification.title}</h3>
                <p>{singleCertification.description}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px", marginTop: "8px" }}>
                  <span className="cert-issuer">{singleCertification.issuer}</span>
                  <a
                    href={singleCertification.url}
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
              <div className="micro-label" style={{ color: "#f2b84b", marginBottom: "20px" }}>KEY HONORS & AWARDS</div>
              <div className="cards-grid-2">
                {achievements.map((ach, i) => (
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
                      <span className="cert-badge" style={{ color: "#f2b84b", borderColor: "#554422" }}>{ach.badge}</span>
                    </div>
                    <h3>{ach.title}</h3>
                    <p>{ach.description}</p>
                    <div className="achievement-meta">{ach.meta}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 07 / CLUB & VOLUNTEER WORK (Toastmasters) */}
          <section className="club-section" id="leadership">
            <div className="section-tag">07 / LEADERSHIP & COMMUNITY</div>
            <div className="club-layout">
              <div className="section-heading">
                <h2>Voice & <em>leadership.</em></h2>
                <p>Developing executive presence, impromptu communication, and community leadership.</p>
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
                    <Users size={14} /> {toastmastersData.role}
                  </div>
                  <h3>{toastmastersData.club}</h3>
                  <blockquote style={{ margin: "0 0 16px", color: "#f2b84b", fontStyle: "italic", fontSize: "15px", fontFamily: "'IBM Plex Sans', sans-serif" }}>
                    {toastmastersData.quote}
                  </blockquote>
                  <p>{toastmastersData.description}</p>
                  <div className="club-skills">
                    {toastmastersData.skills.map((s) => (
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
                <div className="section-tag">08 / INTERESTS</div>
                <h2>Things that <em>fascinate me.</em></h2>
              </div>
              <span className="section-caption">SWARM BIOLOGY, SPECULATIVE EVOLUTION &amp; LINGUISTIC DIVERGENCE</span>
            </div>
            <div className="interests-grid interests-beehive-grid">
              {interestTiles.map((tile, i) => {
                const Icon = tile.icon;
                return (
                  <motion.div
                    className="interest-tile"
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
                <div className="section-tag">09 / HOBBIES</div>
                <h2>Off the <em>clock.</em></h2>
              </div>
              <span className="section-caption">CASUAL PURSUITS, FAVORITE GAMES &amp; DOWNTIME</span>
            </div>
            <div className="hobbies-grid">
              {hobbyTiles.map((tile, i) => {
                const Icon = tile.icon;
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
          <section className="contact-section" id="contact">
            <div className="contact-top">
              <div className="section-tag">10 / OPEN CHANNEL</div>
              <ShieldAlert size={22} />
            </div>
            <h2>Have a project or<br />role worth <em>talking about?</em></h2>
            <p>
              Whether you’re working on distributed systems, AI/ML engineering, cloud test automation, or computational biosystems research, transmit a message.
            </p>
            <a className="primary-action" href="mailto:anoop.nair.1103@gmail.com">
              CONTACT ANOOP <Mail size={16} />
            </a>
            <div className="contact-meta">
              <a href="mailto:anoop.nair.1103@gmail.com">
                <Mail size={15} /> anoop.nair.1103@gmail.com
              </a>
              <a href="tel:+918547560400">
                <Phone size={15} /> +91 8547560400
              </a>
              <span>
                <Microscope size={15} /> VELLORE & THIRUVANANTHAPURAM, INDIA
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
        <span>© 2026 ANOOP NAIR // B.TECH CSE (BIOINFORMATICS)</span>
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
        <span>AN-001 // TRANSMISSION LOCKED</span>
      </footer>
    </div>
  );
}


