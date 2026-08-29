/* Fossil Signal page: industrial retrofuturism, amber signal accents, evidence-led storytelling, and an approachable software-first portfolio console. */
import { useState } from "react";
import {
  ArrowUpRight,
  Atom,
  Award,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Code2,
  Cpu,
  Database,
  Dna,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  MessageSquare,
  Microscope,
  Phone,
  ScanLine,
  ShieldAlert,
  Sparkles,
  Terminal,
  Trophy,
  Users,
  X,
} from "lucide-react";

const projects = [
  {
    id: "PX-01",
    title: "Parkinson's Disease Multi-Dataset Transcriptomics",
    kicker: "TRANSCRIPTOMICS / CONSENSUS FEATURE ENGINEERING",
    description:
      "A production-grade biomarker discovery pipeline integrating five feature-selection methods with machine learning classifiers. Identifies 12 consensus biomarkers across multi-cohort RNA-seq datasets, validated through LOOCV and SHAP interpretability.",
    stack: ["Python", "R", "limma", "edgeR", "Scikit-learn", "SHAP"],
    image: "/images/fossil-signal-genomics.svg",
    metric: "12 consensus biomarkers",
    github: "https://github.com/Bondae1103/PD-DEG-MultipleML-Analyses",
  },
  {
    id: "PX-02",
    title: "Serverless Genomic Variant Classifier (TB-Classifier)",
    kicker: "ANTIBIOTIC RESISTANCE / AWS LAMBDA & DOCKER",
    description:
      "A containerized Random Forest inference pipeline running on AWS Lambda with S3 event triggers to predict drug-resistance profiles from M. tuberculosis genomic VCF files in real time. Built with Docker and cyvcf2 for scalable serverless execution.",
    stack: ["Python", "AWS Lambda", "S3", "Docker", "cyvcf2", "Random Forest"],
    image: "/images/fossil-signal-variant.svg",
    metric: "82% model accuracy",
    github: "https://github.com/Bondae1103/TB-Classifier",
  },
  {
    id: "PX-03",
    title: "PhytoScan",
    kicker: "PLANT HEALTH / COMPUTER VISION & EDGE AI",
    description:
      "An end-to-end plant pathology detection pipeline developed for the AgriThon Hackathon 2025. Combines CVAT dataset annotation, automated image preprocessing, and custom YOLOv8/ResNet models for real-time edge diagnostic inference in agriculture.",
    stack: ["Python", "YOLOv8", "ResNet", "OpenCV", "CVAT", "PyTorch"],
    image: "/images/fossil-signal-vision.svg",
    metric: "78% validation accuracy",
    github: "https://github.com/Mo-Kash/PhytoScan",
  },
  {
    id: "PX-04",
    title: "MD Simulation Analyses using Bio3D in R",
    kicker: "MOLECULAR DYNAMICS / AUTOMATION & R",
    description:
      "A modular Bash and R automation suite for high-throughput trajectory parsing from GROMACS runs. Computes RMSD, RMSF, dynamic cross-correlation matrices (DCCM), and radius of gyration to evaluate HIV-1 protease and receptor-ligand stability.",
    stack: ["R", "Bio3D", "GROMACS", "Bash", "Linux", "PyMOL"],
    image: "/images/fossil-signal-md.svg",
    metric: "4 trajectory metrics",
    github: "https://github.com/Bondae1103/ligand-analyses",
  },
];

const skillGroups = [
  {
    label: "LANGUAGES & CORE",
    icon: Code2,
    items: "Python · Java · C/C++ · R · SQL · Bash · JavaScript / TypeScript",
  },
  {
    label: "SOFTWARE ENGINEERING & TESTING",
    icon: Terminal,
    items: "Playwright · Selenium · AWS (Lambda, S3) · Docker · Git · CI/CD · REST APIs · Linux · Embedded Systems / IoT",
  },
  {
    label: "MACHINE LEARNING & AI",
    icon: Atom,
    items: "Scikit-learn · XGBoost · Random Forest · YOLOv8 · ResNet · SHAP · Prompt Engineering · Agentic AI (Codex)",
  },
  {
    label: "COMPUTATIONAL BIOLOGY",
    icon: Dna,
    items: "GROMACS · AutoDock · Bio3D · PyMOL · VMD · Chimera · cyvcf2 · edgeR · limma · CHARMM-GUI",
  },
];

const experiences = [
  {
    role: "Software Developer Intern",
    company: "THERMO FISHER SCIENTIFIC",
    location: "BENGALURU, INDIA",
    period: "MAY — JUL 2026",
    status: "● LIVE LOG",
    statusClass: "status-live",
    bullets: [
      "Built automated test scripts for four cloud-based Thermo Fisher Scientific enterprise applications.",
      "Evaluated and migrated legacy Selenium test scripts to Playwright, significantly improving execution speed, test reliability, and maintainability.",
      "Applied agentic AI techniques (Codex) alongside Git and CI/CD pipelines to streamline test creation, validation, and automated refactoring.",
      "Optimized overall software testing efficiency and coverage across cross-functional engineering teams.",
    ],
  },
  {
    role: "Bioinformatics Trainee",
    company: "BRIC — RAJIV GANDHI CENTRE FOR BIOTECHNOLOGY",
    location: "THIRUVANANTHAPURAM, INDIA",
    period: "MAY — JUN 2025",
    status: "● BIO SIGNAL",
    statusClass: "status-bio",
    bullets: [
      "Developed automated computational pipelines for protein–ligand interaction modeling and virtual screening using GROMACS and AutoDock.",
      "Conducted molecular dynamics simulations and trajectory analytics with Bio3D in R, contributing to research on HIV protease and nicotinic acetylcholine receptors.",
      "Automated RMSD, RMSF, Rg, and DCCM dynamical cross-correlation calculations to ensure statistical reproducibility across simulation batches.",
      "Worked hands-on with VMD, PyMOL, UCSF Chimera, and CHARMM-GUI for 3D macromolecular modeling and biophysical structural characterization.",
    ],
  },
  {
    role: "Digital Marketing Intern",
    company: "THOUGHTLINE DIGITAL",
    location: "THIRUVANANTHAPURAM, INDIA",
    period: "JUN 2024",
    status: "● FIELD LOG",
    statusClass: "status-active",
    bullets: [
      "Contributed to digital campaign strategy, user outreach analytics, and data-driven marketing workflows.",
      "Gained valuable experience in cross-functional communication and analytics-driven optimization.",
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
    specialization: "Science & Computer Science Stream",
    period: "2010 — 2022",
    location: "THIRUVANANTHAPURAM, KERALA, INDIA",
    score: "Class XII: 92% · Class X: 91%",
    description:
      "Graduated with top academic honors in Physics, Chemistry, Mathematics, and Computer Science.",
  },
];

const certifications = [
  {
    title: "AI Fluency Framework & Foundations",
    issuer: "PROFESSIONAL CERTIFICATION",
    badge: "AI & PROMPT ENGINEERING",
    description:
      "Comprehensive certification covering modern LLM fundamentals, prompt engineering architectures, AI fluency, and applied agentic workflows.",
  },
  {
    title: "Playwright & Java Test Automation",
    issuer: "ENTERPRISE QA AUTOMATION",
    badge: "TESTING & CI/CD",
    description:
      "Practical experience building robust end-to-end browser automation suites, Page Object Models, and continuous testing workflows.",
  },
  {
    title: "Applied Machine Learning & Bio-Data Pipelines",
    issuer: "DATA SCIENCE & ML",
    badge: "ML FOR LIFE SCIENCES",
    description:
      "Expertise in multi-cohort feature selection, consensus modeling, validation techniques (LOOCV), and genomic variant inference.",
  },
];

const achievements = [
  {
    title: "AgriThon Hackathon 2025 Finalist / Contributor",
    meta: "HACKATHON 2025 // COMPUTER VISION",
    badge: "TOP CONTENDER",
    description:
      "Co-developed PhytoScan, an end-to-end edge AI plant disease diagnostic pipeline leveraging YOLOv8 and ResNet with custom CVAT annotation.",
  },
  {
    title: "Top-Tier Academic Standing (8.82 CGPA)",
    meta: "VIT VELLORE // 2023—2027",
    badge: "EXCELLENCE",
    description:
      "Consistent academic excellence across rigorous Computer Science Engineering and Computational Biology coursework.",
  },
  {
    title: "Research Traineeship at BRIC-RGCB",
    meta: "NATIONAL BIOTECH LAB // 2025",
    badge: "RESEARCH",
    description:
      "Successfully developed automated MD trajectory analysis pipelines for HIV-1 protease and nicotinic acetylcholine receptor complexes.",
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

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

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
          <a href="#certifications" onClick={closeMobile}>06 / CERTS & LOGS</a>
          <a href="#leadership" onClick={closeMobile}>07 / LEADERSHIP</a>
          <a href="#contact" onClick={closeMobile}>08 / CONTACT</a>
        </nav>
        <div className="system-status"><CircleDot size={11} /> AVAILABLE FOR SIGNALS</div>
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
            <a href="#certifications"><span>06</span> CERTS & ACHIEVEMENTS</a>
            <a href="#leadership"><span>07</span> LEADERSHIP</a>
            <a href="#contact"><span>08</span> TRANSMIT</a>
          </nav>
          <div className="rail-footer">VIT VELLORE / CS-BIO<br />THIRUVANANTHAPURAM → VELLORE</div>
        </aside>

        <main>
          {/* HERO SECTION */}
          <section className="hero-section">
            <div className="hero-copy">
              <div className="eyebrow"><ScanLine size={14} /> FIELD NOTE 00 — SOFTWARE & BIOSYSTEMS</div>
              <h1>Engineering code,<br />cloud & <em>biological</em><br />systems.</h1>
              <p className="hero-intro">
                Hey, I’m <strong>Anoop Nair</strong> — a Computer Science Engineering student at <strong>VIT Vellore</strong>. I take problems from messy, raw data all the way to robust, working software — whether that’s containerized cloud inference on AWS, automated QA with Playwright, or machine learning for genomics.
              </p>
              <div className="hero-actions">
                <a className="primary-action" href="#work">VIEW SELECTED WORK <ChevronRight size={17} /></a>
                <a className="text-action" href="https://github.com/Bondae1103" target="_blank" rel="noopener noreferrer">GITHUB REPOS <Github size={15} /></a>
              </div>
            </div>
            <div className="hero-art">
              <img src="/images/fossil-signal-hero.svg" alt="Amber-lit computational biology research console" />
              <div className="hero-overlay-label top">SPECIMEN / AN-001<br /><span>BIOSYSTEMS & SOFTWARE CONSOLE</span></div>
              <div className="hero-overlay-label bottom"><span className="pulse-dot" /> SIGNAL LOCKED<br /><span>LAT 08.52° N / LONG 76.94° E</span></div>
            </div>
            <div className="hero-footnote">SCROLL TO INVESTIGATE <span>↓</span></div>
          </section>

          {/* 01 / ABOUT */}
          <section className="intel-band" id="about">
            <div className="section-tag">01 / SUBJECT PROFILE</div>
            <div className="intel-grid">
              <div className="section-heading">
                <span className="micro-label">CURRENT POSITION</span>
                <h2>Between the<br /><em>lab & the stack.</em></h2>
                <div className="stamp">AN / CS-BIO<br /><b>8.82</b> CGPA @ VIT</div>
              </div>
              <div className="about-copy">
                <p>
                  I’m a final-year <strong>Computer Science Engineering (Bioinformatics)</strong> undergraduate at <strong>Vellore Institute of Technology (VIT)</strong>. While I love computational biology, I approach it first and foremost as a software engineer: writing clean, modular code, setting up resilient test suites, leveraging cloud architectures, and applying AI to noisy data.
                </p>
                <p>
                  My toolkit ranges from general-purpose languages like <strong>Java, Python, C++, and Bash</strong> to cloud & DevOps tools like <strong>AWS Lambda, Docker, and Git</strong>. Whether migrating enterprise test suites to Playwright at <strong>Thermo Fisher Scientific</strong>, automating molecular dynamics pipelines at <strong>BRIC-RGCB</strong>, or tinkering with <strong>embedded systems & IoT</strong>, I love building systems that just work.
                </p>
                <p>
                  Beyond engineering, serving as Vice President Membership at <strong>SOL Toastmasters Club</strong> taught me that great software requires great communication. I love collaborating with curious teams to solve hard problems with clear questions and reproducible code.
                </p>
              </div>
            </div>
            <div className="interest-strip">
              <span>TECH VECTORS</span>
              <b>SOFTWARE ENGINEERING</b><i>×</i>
              <b>MACHINE LEARNING</b><i>×</i>
              <b>TEST AUTOMATION</b><i>×</i>
              <b>COMPUTATIONAL BIOLOGY</b><i>×</i>
              <b>EMBEDDED SYSTEMS</b>
            </div>
          </section>

          {/* 02 / PROJECTS */}
          <section className="work-section" id="work">
            <div className="section-header">
              <div>
                <div className="section-tag">02 / EVIDENCE LOG</div>
                <h2>Selected <em>work.</em></h2>
              </div>
              <span className="section-caption">04 CODE REPOSITORIES // 2024—26</span>
            </div>
            <div className="projects-list">
              {projects.map((project, index) => (
                <article className="project-card" key={project.id}>
                  <div className="project-index">
                    {project.id}
                    <span>0{index + 1}</span>
                  </div>
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="image-scan" />
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
                      <b>{project.metric}</b>
                      <a
                        className="github-action"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github size={13} /> VIEW ON GITHUB <ArrowUpRight size={13} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* 03 / EXPERIENCE */}
          <section className="log-section" id="experience">
            <div className="section-tag">03 / EXPERIENCE & INDUSTRY LOG</div>
            <div className="log-grid">
              <div className="section-heading">
                <h2>Time <em>logged.</em></h2>
                <p>Software development, test automation, and biophysical pipeline engineering.</p>
              </div>
              <div className="timeline">
                {experiences.map((exp, i) => (
                  <div className="timeline-entry" key={i}>
                    <div className="timeline-date">
                      {exp.period}
                      <br />
                      <span className={`log-status ${exp.statusClass}`}>{exp.status}</span>
                    </div>
                    <div>
                      <h3>{exp.role}</h3>
                      <b>{exp.company} // {exp.location}</b>
                      <ul className="timeline-bullets">
                        {exp.bullets.map((b, bi) => (
                          <li key={bi}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
                  <div className="education-card" key={idx}>
                    <div className="education-card-top">
                      <div>
                        <h3>{edu.institution}</h3>
                        <b>{edu.location} // {edu.period}</b>
                      </div>
                      <span className="education-tag">{edu.score}</span>
                    </div>
                    <div style={{ color: "#f2b84b", fontFamily: "'Space Mono', monospace", fontSize: "11px", marginBottom: "8px" }}>
                      {edu.degree} — <span style={{ color: "#d5e0c7" }}>{edu.specialization}</span>
                    </div>
                    <p>{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 05 / SKILLS */}
          <section className="skills-section" id="skills">
            <div className="section-header">
              <div>
                <div className="section-tag">05 / TOOLKIT & CAPABILITIES</div>
                <h2>Technical <em>stack.</em></h2>
              </div>
              <span className="section-caption">MODERN SOFTWARE & SCIENTIFIC ARSENAL</span>
            </div>
            <div className="skills-grid">
              {skillGroups.map(({ label, icon: Icon, items }) => (
                <div className="skill-card" key={label}>
                  <Icon size={22} />
                  <div>
                    <h3>{label}</h3>
                    <p>{items}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 06 / CERTIFICATIONS & ACHIEVEMENTS */}
          <section className="certifications-section" id="certifications">
            <div className="section-header">
              <div>
                <div className="section-tag">06 / VERIFIED CREDENTIALS</div>
                <h2>Certifications & <em>milestones.</em></h2>
              </div>
              <span className="section-caption">PROFESSIONAL ACCREDITATIONS & HONORS</span>
            </div>
            
            <div style={{ marginBottom: "40px" }}>
              <div className="micro-label" style={{ color: "#f2b84b", marginBottom: "20px" }}>TECHNICAL CERTIFICATIONS</div>
              <div className="cards-grid-3">
                {certifications.map((cert, i) => (
                  <div className="cert-card" key={i}>
                    <div className="cert-card-header">
                      <Award size={18} color="#f2b84b" />
                      <span className="cert-badge">{cert.badge}</span>
                    </div>
                    <h3>{cert.title}</h3>
                    <p>{cert.description}</p>
                    <div className="cert-issuer">{cert.issuer}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="micro-label" style={{ color: "#f2b84b", marginBottom: "20px" }}>KEY ACHIEVEMENTS & CONTRIBUTIONS</div>
              <div className="cards-grid-3">
                {achievements.map((ach, i) => (
                  <div className="achievement-card" key={i}>
                    <div className="achievement-card-header">
                      <Trophy size={18} color="#f2b84b" />
                      <span className="cert-badge" style={{ color: "#f2b84b", borderColor: "#554422" }}>{ach.badge}</span>
                    </div>
                    <h3>{ach.title}</h3>
                    <p>{ach.description}</p>
                    <div className="achievement-meta">{ach.meta}</div>
                  </div>
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
                <div className="club-feature">
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
                </div>
              </div>
            </div>
          </section>

          {/* 08 / CONTACT */}
          <section className="contact-section" id="contact">
            <div className="contact-top">
              <div className="section-tag">08 / OPEN CHANNEL</div>
              <ShieldAlert size={22} />
            </div>
            <h2>Have a project or<br />role worth <em>talking about?</em></h2>
            <p>
              Whether you’re working on healthcare AI, cloud test automation, computational biology research, or full-stack software engineering, transmit a message.
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
                  href="https://www.linkedin.com/in/anoop-nair-4a180928a"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Anoop Nair LinkedIn Profile"
                >
                  <Linkedin size={17} />
                </a>
                <a
                  href="https://github.com/Bondae1103"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Anoop Nair GitHub Profile"
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
        <span>BUILT WITH CURIOSITY / POWERED BY EVIDENCE</span>
        <span>AN-001 // END OF TRANSMISSION</span>
      </footer>
    </div>
  );
}

