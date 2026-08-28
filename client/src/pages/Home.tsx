/* Fossil Signal page: industrial retrofuturism, amber signal accents, evidence-led storytelling, and an asymmetric mission-console layout. */
import { useState } from "react";
import {
  ArrowUpRight,
  Atom,
  ChevronRight,
  CircleDot,
  Code2,
  Database,
  Dna,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Microscope,
  Orbit,
  ScanLine,
  ShieldAlert,
  Terminal,
  X,
} from "lucide-react";
import { toast } from "sonner";

const projects = [
  {
    id: "PX-01",
    title: "Transcriptomics Biomarker Discovery Pipeline",
    kicker: "DISEASE SIGNAL / CONSENSUS MODEL",
    description:
      "An end-to-end pipeline that combines five feature-selection methods with machine learning to identify 12 consensus biomarkers, then tests robustness through LOOCV and SHAP interpretation.",
    stack: ["Python", "R", "limma", "edgeR", "Scikit-learn", "SHAP"],
    image: "/manus-storage/fossil-signal-genomics_8ca245e3.png",
    metric: "12 consensus biomarkers",
  },
  {
    id: "PX-02",
    title: "Serverless Genomic Variant Classifier",
    kicker: "ANTIBIOTIC RESISTANCE / CLOUD INFERENCE",
    description:
      "A containerized Random Forest inference pipeline using AWS Lambda and S3 event triggers to automate antibiotic-resistance prediction from M. tuberculosis VCF files.",
    stack: ["Python", "AWS Lambda", "S3", "Docker", "cyvcf2"],
    image: "/manus-storage/fossil-signal-hero_1b7ae681.png",
    metric: "82% model accuracy",
  },
  {
    id: "PX-03",
    title: "PhytoScan",
    kicker: "PLANT HEALTH / COMPUTER VISION",
    description:
      "An end-to-end plant disease detection workflow: dataset annotation with CVAT, image preparation, and YOLOv8/ResNet model development for the AgriThon Hackathon 2025.",
    stack: ["Python", "YOLOv8", "ResNet", "OpenCV", "CVAT"],
    image: "/manus-storage/fossil-signal-vision_af31d612.png",
    metric: "78% validation accuracy",
  },
  {
    id: "PX-04",
    title: "Protein–Ligand Interaction Profiling",
    kicker: "MOLECULAR DYNAMICS / REPRODUCIBILITY",
    description:
      "A Bash automation pipeline integrating GROMACS and Bio3D to profile RMSD, RMSF, DCCM, and radius of gyration for HIV protease–ligand complexes.",
    stack: ["GROMACS", "Bash", "Bio3D", "R", "Linux"],
    image: "/manus-storage/fossil-signal-md_a8e4f06e.png",
    metric: "4 trajectory measures",
  },
];

const skillGroups = [
  { label: "DATA & ANALYTICS", icon: Database, items: "Python · R · SQL · Pandas · NumPy · SciPy · Matplotlib · EDA · CVAT" },
  { label: "MACHINE LEARNING", icon: Atom, items: "Scikit-learn · XGBoost · Random Forest · Feature Selection · SHAP · Computer Vision" },
  { label: "BIOINFORMATICS", icon: Dna, items: "edgeR · limma · cyvcf2 · Bio3D · GROMACS · AutoDock · Molecular Dynamics" },
  { label: "ENGINEERING & AUTOMATION", icon: Terminal, items: "AWS Lambda · Amazon S3 · Docker · Git · CI/CD · Playwright · Selenium · Bash" },
];

function PlaceholderLink({ children = "OPEN CASE FILE" }: { children?: React.ReactNode }) {
  return (
    <button className="case-link" onClick={() => toast("Project link pending — replace this placeholder with your live URL.")}>{children}<ArrowUpRight size={15} /></button>
  );
}

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient-grid" aria-hidden="true" />
      <header className="topbar">
        <a className="brand-lockup" href="#top" onClick={closeMobile} aria-label="Anoop Nair home">
          <img src="/manus-storage/fossil-signal-mark_1394e5a7.png" alt="" className="brand-mark" />
          <span><b>ANOOP</b><small>/ NAIR</small></span>
        </a>
        <button className="mobile-menu" aria-label={mobileOpen ? "Close navigation" : "Open navigation"} onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X /> : <Menu />}</button>
        <nav className={mobileOpen ? "topnav is-open" : "topnav"}>
          <a href="#about" onClick={closeMobile}>01 / ABOUT</a>
          <a href="#work" onClick={closeMobile}>02 / WORK</a>
          <a href="#experience" onClick={closeMobile}>03 / LOG</a>
          <a href="#contact" onClick={closeMobile}>04 / CONTACT</a>
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
            <a href="#contact"><span>04</span> TRANSMIT</a>
          </nav>
          <div className="rail-footer">VIT / 23BCB0004<br />THIRUVANANTHAPURAM → VELLORE</div>
        </aside>

        <main>
          <section className="hero-section">
            <div className="hero-copy">
              <div className="eyebrow"><ScanLine size={14} /> FIELD NOTE 00 — COMPUTATIONAL BIOLOGY</div>
              <h1>Turning noisy<br /><em>biological systems</em><br />into signals.</h1>
              <p className="hero-intro">Anoop Nair is a bioinformatics-focused computer science engineer exploring the space where <strong>code, data, and life sciences</strong> intersect.</p>
              <div className="hero-actions"><a className="primary-action" href="#work">VIEW SELECTED WORK <ChevronRight size={17} /></a><a className="text-action" href="#contact">SEND A SIGNAL <ArrowUpRight size={15} /></a></div>
            </div>
            <div className="hero-art">
              <img src="/manus-storage/fossil-signal-hero_1b7ae681.png" alt="Amber-lit computational biology research console" />
              <div className="hero-overlay-label top">SPECIMEN / AN-001<br /><span>BIOSYSTEMS INTERFACE</span></div>
              <div className="hero-overlay-label bottom"><span className="pulse-dot" /> SIGNAL LOCKED<br /><span>LAT 08.52° N / LONG 76.94° E</span></div>
            </div>
            <div className="hero-footnote">SCROLL TO INVESTIGATE <span>↓</span></div>
          </section>

          <section className="intel-band" id="about">
            <div className="section-tag">01 / SUBJECT PROFILE</div>
            <div className="intel-grid">
              <div className="section-heading"><span className="micro-label">CURRENT POSITION</span><h2>Between the<br /><em>lab & the stack.</em></h2><div className="stamp">AN / CS-BIO<br /><b>8.82</b> CGPA</div></div>
              <div className="about-copy"><p>Hi, I’m <strong>Anoop Nair</strong>, a Computer Science Engineering student specializing in Bioinformatics at <strong>Vellore Institute of Technology</strong>.</p><p>I work with biological datasets that are large, noisy, and difficult to interpret — structuring the problem first, then building computational methods that make the underlying signal easier to see. My interests span genomics, disease-associated genes, evolutionary conservation, molecular dynamics, and AI/ML for life sciences.</p><p>Beyond the lab, Toastmasters and collaborative work have taught me that difficult problems need more than technical ability. They need clear questions, clear communication, and a team willing to follow the evidence.</p></div>
            </div>
            <div className="interest-strip"><span>INTEREST VECTOR</span><b>GENOMICS</b><i>×</i><b>ML FOR LIFE SCIENCES</b><i>×</i><b>DRUG DISCOVERY</b><i>×</i><b>BIOLOGICAL IMAGING</b></div>
          </section>

          <section className="work-section" id="work">
            <div className="section-header"><div><div className="section-tag">02 / EVIDENCE LOG</div><h2>Selected <em>work.</em></h2></div><span className="section-caption">04 CASE FILES / 2024—26</span></div>
            <div className="projects-list">{projects.map((project, index) => <article className="project-card" key={project.id}><div className="project-index">{project.id}<span>0{index + 1}</span></div><div className="project-image"><img src={project.image} alt="" /><div className="image-scan" /></div><div className="project-content"><div className="project-kicker">{project.kicker}</div><h3>{project.title}</h3><p>{project.description}</p><div className="stack-list">{project.stack.map(item => <span key={item}>{item}</span>)}</div><div className="project-bottom"><b>{project.metric}</b><PlaceholderLink /></div></div></article>)}</div>
          </section>

          <section className="log-section" id="experience">
            <div className="section-tag">03 / FIELD LOG</div>
            <div className="log-grid"><div className="section-heading"><h2>Time <em>logged.</em></h2><p>Learning by following the problem all the way down.</p></div><div className="timeline"><div className="timeline-entry"><div className="timeline-date">MAY—JUL 2026<br /><span className="log-status status-live">● LIVE LOG</span></div><div><h3>Software Developer Intern</h3><b>THERMO FISHER SCIENTIFIC / BENGALURU</b><p>Evaluated and migrated Selenium automation to Playwright across four cloud applications. Integrated Agentic AI into QA workflows for test generation, validation, and execution, while collaborating across teams to improve coverage and CI/CD reliability.</p></div></div><div className="timeline-entry"><div className="timeline-date">MAY—JUN 2025<br /><span className="log-status status-bio">● BIO SIGNAL</span></div><div><h3>Computational Biology Research Trainee</h3><b>BRIC — RGCB / THIRUVANANTHAPURAM</b><p>Analyzed protein–ligand interactions through molecular docking and molecular dynamics. Automated RMSD, RMSF, Rg, and DCCM trajectory analysis using Bash and R to improve reproducibility.</p></div></div><div className="timeline-entry"><div className="timeline-date">SEP 2023—NOW<br /><span className="log-status status-active">● ACTIVE TRACK</span></div><div><h3>B.Tech Computer Science Engineering</h3><b>VELLore INSTITUTE OF TECHNOLOGY / BIOINFORMATICS</b><p>Building deeper expertise in computational biology and AI-driven life sciences. Class XII: 92% · Class X: 91%.</p></div></div></div></div>
          </section>

          <section className="skills-section"><div className="section-tag">04 / TOOLKIT</div><div className="skills-grid">{skillGroups.map(({ label, icon: Icon, items }) => <div className="skill-card" key={label}><Icon size={21} /><div><h3>{label}</h3><p>{items}</p></div></div>)}</div></section>

          <section className="contact-section" id="contact"><div className="contact-top"><div className="section-tag">05 / OPEN CHANNEL</div><ShieldAlert size={22} /></div><h2>Have a problem<br />worth <em>solving?</em></h2><p>For research collaborations, software projects, or conversations about AI for life sciences, transmit a message.</p><a className="primary-action" href="mailto:anoop.nair.1103@gmail.com">CONTACT ANOOP <Mail size={16} /></a><div className="contact-meta"><a href="mailto:anoop.nair.1103@gmail.com"><Mail size={15} /> anoop.nair.1103@gmail.com</a><span><Microscope size={15} /> VELLORE, INDIA</span><div className="socials"><button onClick={() => toast("LinkedIn placeholder — add your profile URL here.")} aria-label="LinkedIn placeholder"><Linkedin size={17} /></button><button onClick={() => toast("GitHub placeholder — add your profile URL here.")} aria-label="GitHub placeholder"><Github size={17} /></button></div></div></section>
        </main>
      </div>
      <footer><span>© 2026 ANOOP NAIR</span><span>BUILT WITH CURIOSITY / POWERED BY EVIDENCE</span><span>AN-001 / END OF TRANSMISSION</span></footer>
    </div>
  );
}
