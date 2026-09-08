/* Fossil Signal page: industrial retrofuturism, amber signal accents, evidence-led storytelling, and an approachable software-first portfolio console. */
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
  X,
} from "lucide-react";
import { ProjectsSection } from "@/components/projects/ProjectsSection";


const skillGroups = [
  {
    label: "LANGUAGES & CORE",
    icon: Code2,
    items: "Python · Java · C/C++ · R · SQL · Bash · JavaScript / TypeScript",
  },
  {
    label: "SOFTWARE ENGINEERING & TESTING",
    icon: Terminal,
    items: "Playwright · Selenium · AWS (Lambda, S3) · Docker · Git · CI/CD · REST APIs · Linux",
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
    kicker: "CLADISTICS & DEEP TIME",
    title: "Evolutionary Biology & Phylogenetics",
    icon: Dna,
    description:
      "Endlessly fascinated by the tree of life, morphological transitions, and phylogenetic reconstruction. I love exploring how evolutionary mechanisms sculpt biological complexity across deep time.",
  },
  {
    kicker: "LITERATURE & WORLDBUILDING",
    title: "Fiction, Non-Fiction & Speculative Evolution",
    icon: BookOpen,
    description:
      "An avid reader of both fiction and non-fiction. I dabble heavily in speculative evolution thought experiments and am a huge fan of C. M. Kosemen's All Tomorrows and speculative biology worldbuilding.",
  },
  {
    kicker: "COLLECTIVE INTELLIGENCE",
    title: "Swarm Biology & Emergent Algorithms",
    icon: Cpu,
    description:
      "Deeply interested in social insect biology (ants, bees, termites) and how decentralized, stigmergic communication in nature translates into computational swarm intelligence, routing algorithms, and distributed systems.",
  },
  {
    kicker: "FIELD PURSUITS & ANALOG CHANNELS",
    title: "Swimming, Birdwatching & Deep Dives",
    icon: Compass,
    description:
      "Recharging through long-distance swimming, field birdwatching with binoculars, and falling down late-night Wikipedia rabbit holes tracing obscure historical genealogies and scientific breakthroughs.",
  },
];

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
          <a href="#certifications" onClick={closeMobile}>06 / CERTS & AWARDS</a>
          <a href="#leadership" onClick={closeMobile}>07 / LEADERSHIP</a>
          <a href="#interests" onClick={closeMobile}>08 / CURIOSITIES</a>
          <a href="#contact" onClick={closeMobile}>09 / CONTACT</a>
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
            <a href="#certifications"><span>06</span> CERTS & AWARDS</a>
            <a href="#leadership"><span>07</span> LEADERSHIP</a>
            <a href="#interests"><span>08</span> CURIOSITIES</a>
            <a href="#contact"><span>09</span> TRANSMIT</a>
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
                  My toolkit ranges from general-purpose languages like <strong>Java, Python, C++, and Bash</strong> to cloud & DevOps tools like <strong>AWS Lambda, Docker, and Git</strong>. Whether migrating enterprise test suites to Playwright at <strong>Thermo Fisher Scientific</strong>, automating molecular dynamics pipelines at <strong>BRIC-RGCB</strong>, or training machine learning models, I love building systems that just work.
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
              <b>CLOUD & DEVOPS</b>
            </div>
          </section>

          {/* 02 / PROJECTS (Paginated Menu-Style Console) */}
          <ProjectsSection />

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
                      {edu.degree} {edu.specialization ? <>— <span style={{ color: "#d5e0c7" }}>{edu.specialization}</span></> : null}
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
                <div className="section-tag">06 / VERIFIED CREDENTIALS & AWARDS</div>
                <h2>Certifications & <em>achievements.</em></h2>
              </div>
              <span className="section-caption">VERIFIED ACCREDITATIONS & HONORS</span>
            </div>
            
            {/* 1. Single AI Fluency Certification */}
            <div style={{ marginBottom: "50px" }}>
              <div className="micro-label" style={{ color: "#f2b84b", marginBottom: "20px" }}>VERIFIED CERTIFICATION</div>
              <div className="cert-single-box">
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
              </div>
            </div>

            {/* 2. Key Achievements */}
            <div id="achievements">
              <div className="micro-label" style={{ color: "#f2b84b", marginBottom: "20px" }}>KEY HONORS & AWARDS</div>
              <div className="cards-grid-2">
                {achievements.map((ach, i) => (
                  <div className="achievement-card" key={i}>
                    <div className="achievement-card-header">
                      <Trophy size={20} color="#f2b84b" />
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

          {/* 08 / HOBBIES & INTERESTS */}
          <section className="interests-section" id="interests">
            <div className="section-header">
              <div>
                <div className="section-tag">08 / CURIOSITIES & PURSUITS</div>
                <h2>Beyond the <em>terminal.</em></h2>
              </div>
              <span className="section-caption">EVOLUTIONARY BIOLOGY, LITERATURE & FIELD PURSUITS</span>
            </div>
            <div className="interests-grid">
              {interestTiles.map((tile, i) => {
                const Icon = tile.icon;
                return (
                  <div className="interest-tile" key={i}>
                    <div className="interest-tile-top">
                      <span className="interest-tile-kicker">{tile.kicker}</span>
                      <Icon size={18} color="#f2b84b" />
                    </div>
                    <h3>{tile.title}</h3>
                    <p>{tile.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 09 / CONTACT */}
          <section className="contact-section" id="contact">
            <div className="contact-top">
              <div className="section-tag">09 / OPEN CHANNEL</div>
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


