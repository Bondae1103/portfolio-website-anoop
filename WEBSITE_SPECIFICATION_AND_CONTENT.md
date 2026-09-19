# Anoop Nair Portfolio — Website Content, Technical Specifications & Architecture

> **Document Summary:** Complete catalog of all textual content, descriptive narratives, project evidence, career archives, technical specifications, and key features of the portfolio website.

---

## Part 1: Comprehensive Website Text & Copy

### 1. Global Shell, Header & Brand Identifiers
- **Brand Lockup:** `ANOOP / NAIR`
- **Brand Mark:** Custom double-helix / orbital-bracket specimen icon (`/images/mark.svg`)
- **Top Bar System Status:** `AVAILABLE FOR SIGNALS`
- **Mission Index Nav Anchors:**
  - `00 ORIGIN` (`#top`)
  - `01 ABOUT` (`#about`)
  - `02 PROJECTS` (`#work`)
  - `03 EXPERIENCE` (`#experience`)
  - `04 EDUCATION` (`#education`)
  - `05 SKILLS` (`#skills`)
  - `06 CERTS & AWARDS` (`#certifications`)
  - `07 LEADERSHIP` (`#leadership`)
  - `08 INTERESTS` (`#interests`)
  - `09 HOBBIES` (`#hobbies`)
  - `10 TRANSMIT / CONTACT` (`#contact`)
- **Rail Footer:** `VIT VELLORE / CS-BIO` · `THIRUVANANTHAPURAM → VELLORE`
- **Social Profiles:**
  - GitHub: `https://github.com/Bondae1103`
  - LinkedIn: `https://www.linkedin.com/in/anoop-nair-4a180928a/`
- **Footer Text:**
  - `© 2026 ANOOP NAIR // B.TECH CSE (BIOINFORMATICS)`
  - `AN-001 // TRANSMISSION LOCKED`

---

### 2. Hero Section (Field Note 00)
- **Eyebrow:** `FIELD NOTE 00 — SOFTWARE, INTELLIGENCE & BIOSYSTEMS`
- **Display Headline:** `Engineering code, intelligence & biological systems.`
- **Descriptive Hero Intro:**
  > "Hey, I’m **Anoop Nair** — a Software Engineer & Data-Oriented Developer completing Computer Science Engineering at **VIT Vellore**. I take problems from messy, high-dimensional data all the way to robust, working software — whether that’s modern web design & intuitive frontends, distributed RAG microservices, containerized cloud inference on AWS, automated QA with Playwright, or machine learning for complex biosystems."
- **Primary Actions:**
  - `VIEW SELECTED WORK →`
  - `GITHUB`
  - `LINKEDIN`
- **Scroll Prompt:** `SCROLL TO INVESTIGATE ↓`
- **Hero Visual HUD & Telemetry:**
  - Header: `GENOMIC DUPLEX // B-DNA DYNAMICS` · `DOUBLE HELIX · 28 BASE PAIR RESOLUTION`
  - Status Badge: `B-DNA DUPLEX // 99.8% STABILITY`
  - Dynamic Telemetry: `LIVE {FPS} FPS` · `BASE PAIRS: 28 [A·T / G·C]` · `PITCH: 3.4 nm` · `LOCUS: chr1:10,248` · `COORD: 08.52° N · 76.94° E` (updates with cursor interaction)
  - Interactive Reticle: `PAIR #{N}: {A=T | G≡C}` · `LOCUS: chr1:{POS} bp` · `PITCH: 3.4Å · DUPLEX PASS`

---

### 3. Section 01: Subject Profile (About)
- **Section Tag:** `01 / SUBJECT PROFILE`
- **Micro-label:** `CURRENT POSITION`
- **Headline:** `Between the lab & the stack.`
- **Stamp:** `AN / CS-BIO` · `8.82 CGPA @ VIT`
- **Descriptive Narrative:**
  > "I’m a final-year **Computer Science Engineering (Bioinformatics)** undergraduate at **Vellore Institute of Technology (VIT)**. I approach engineering from a software-first foundation: crafting modern web design and responsive user interfaces, building clean, modular backends, **architecting comprehensive automated testing frameworks**, and deploying applied AI to complex data systems."
  >
  > "**Automated testing and quality engineering are core pillars of my workflow.** During my internship at **Thermo Fisher Scientific**, I built automated test suites across four enterprise cloud applications, spearheaded the migration of legacy Selenium suites to **Playwright** for significant execution speed and reliability gains, and leveraged **agentic AI (Codex)** alongside CI/CD pipelines to streamline test creation and maintainability. Whether developing rigorous **Pytest harnesses** with deterministic mocks for distributed microservices or implementing end-to-end browser automation, I treat bulletproof verification and zero-flakiness as essential software standards."
  >
  > "My background in computational biology and high-dimensional genomics further sharpens this engineering discipline: having engineered pipelines for 13,000+ bacterial genomes and multi-cohort RNA-seq datasets, I treat data integrity, algorithmic efficiency, and pipeline reproducibility as second nature. Combined with my work in distributed systems (**FastAPI, Celery, Qdrant**) and biophysical computing (**GROMACS, Bio3D** at **BRIC-RGCB**), I thrive on shipping robust, thoroughly tested software that just works."
  >
  > "Beyond engineering, serving as Vice President Membership at **SOL Toastmasters Club** taught me that great software requires great communication. I love collaborating with curious, ambitious teams to solve hard problems with clear questions and clean, tested code."
- **Tech Vectors Bar:**
  - `SOFTWARE ENGINEERING × MACHINE LEARNING × TEST AUTOMATION × COMPUTATIONAL BIOLOGY × CLOUD & DEVOPS`

---

### 4. Section 02: Selected Work (Evidence Log)
- **Section Tag:** `02 / EVIDENCE LOG`
- **Headline:** `Selected work.`
- **Telemetry Readout:** `PAGE 01/02 // 05 CODE REPOSITORIES`

#### Project PX-01: PaleoRAG: Distributed Hybrid RAG Engine
- **Priority Badge:** `PRIORITY` (Starred #1)
- **Kicker:** `DISTRIBUTED SYSTEMS / HYBRID VECTOR RAG & SSE`
- **Description:**
  > "An asynchronous distributed RAG microservice integrating FastAPI, Celery, and Redis for concurrent scientific literature ingestion. Features hybrid dense (PubMedBERT) and sparse (BM25) retrieval via Reciprocal Rank Fusion in Qdrant, real-time SSE token streaming, post-hoc citation verification (0% hallucination rate, 100% Recall@5), and a 44-test Pytest harness."
- **Stack Tags:** `FastAPI` · `Qdrant` · `Redis`
- **Metric:** `100% Recall@5` (Animated counter)
- **Caption:** `FASTAPI + QDRANT + CELERY // SSE HYBRID RAG`
- **Repository:** `https://github.com/Bondae1103/Paleo-RAG`

#### Project PX-02: Parkinson's Disease Multi-Dataset Transcriptomics
- **Priority Badge:** `PRIORITY` (Starred #2)
- **Kicker:** `TRANSCRIPTOMICS / CONSENSUS FEATURE ENGINEERING`
- **Description:**
  > "A biomarker discovery pipeline integrating five feature-selection methods (LASSO, Boruta, SVM-RFE, Mutual Information) with gradient-boosted classifiers. Identifies 12 consensus biomarkers across multi-cohort RNA-seq datasets, validated through LOOCV and SHAP interpretability."
- **Stack Tags:** `Python` · `XGBoost` · `SHAP`
- **Metric:** `12 consensus biomarkers` (Animated counter)
- **Caption:** `LIMMA-EDGER // 12 CONSENSUS BIOMARKERS`
- **Repository:** `https://github.com/Bondae1103/PD-DEG-MultipleML-Analyses`

#### Project PX-03: AfroTB: Phylogeny-Aware Graph Neural Network
- **Priority Badge:** `PRIORITY` (Starred #3)
- **Kicker:** `DEEP LEARNING / GRAPH NEURAL NETWORKS & GENOMICS`
- **Description:**
  > "A phylogeny-aware Graph Neural Network (GNN) for joint multi-task prediction of M. tuberculosis drug resistance and bacterial lineage across the Afro-TB dataset. Formulates genomic isolate topological graphs from 13,753 isolates via SNP-distance matrices, integrating PyG architectures with reproducible Python validation pipelines."
- **Stack Tags:** `PyTorch` · `PyG (GNN)` · `Python`
- **Metric:** `13,753 isolates` (Animated counter)
- **Caption:** `PYTORCH GEOMETRIC // TOPOLOGICAL PHYLO-GNN`
- **Repository:** `https://github.com/Bondae1103/AfroTB-phylo-GNN-AMR-predictor`

#### Project PX-04: Serverless Genomic Variant Classifier (TB-Classifier)
- **Priority Badge:** Standard Specimen (Page 2, Order 1)
- **Kicker:** `CLOUD MICROSERVICES / AWS LAMBDA & DOCKER`
- **Description:**
  > "A containerized machine learning inference pipeline running on AWS Lambda with S3 event triggers to predict drug-resistance profiles from M. tuberculosis VCF files in sub-second latency. Built with Docker, cyvcf2, and soft-voting ensembles with automated Pytest mock fixtures."
- **Stack Tags:** `AWS Lambda` · `Docker` · `Scikit-learn`
- **Metric:** `82% model accuracy` (Animated counter)
- **Caption:** `CYVCF2 + AWS LAMBDA INFERENCE`
- **Repository:** `https://github.com/Bondae1103/TB-Classifier`

#### Project PX-05: PhytoScan: Real-Time Pathology Vision System
- **Priority Badge:** Standard Specimen (Page 2, Order 2)
- **Kicker:** `EDGE AI / COMPUTER VISION & EMBEDDED INFERENCE`
- **Description:**
  > "An end-to-end plant pathology detection pipeline developed for the AgriThon Hackathon 2025. Combines CVAT dataset annotation, automated image preprocessing, and custom YOLOv8/ResNet models for real-time edge diagnostic inference with sub-50ms latency."
- **Stack Tags:** `YOLOv8` · `OpenCV` · `PyTorch`
- **Metric:** `78% validation accuracy` (Animated counter)
- **Caption:** `YOLOV8 + RESNET EDGE AI`
- **Repository:** `https://github.com/Mo-Kash/PhytoScan`

---

### 5. Section 03: Experience & Industry Log
- **Section Tag:** `03 / EXPERIENCE & INDUSTRY LOG`
- **Micro-label:** `INDUSTRY ARCHIVE`
- **Headline:** `Time logged.`
- **Introductory Text:** "Software development, enterprise QA automation, and biophysical simulation pipelines across commercial and research labs."
- **Experience Telemetry Console:**
  - `SYSTEM LOG AUDIT // ACTIVE`
  - `ENTERPRISE CODEBASES: 4 Cloud Apps (Thermo Fisher)`
  - `CORE DISCIPLINES: Automated QA · Molecular Dynamics`
  - `KEY TOOLSETS: Playwright · Codex AI · GROMACS`

#### Experience 01: Software Developer Intern
- **Company:** `THERMO FISHER SCIENTIFIC`
- **Division:** `Cloud Enterprise Applications // Automation QA`
- **Location:** `BENGALURU, INDIA`
- **Period:** `MAY — JUL 2026`
- **Status:** `● LIVE LOG` (`status-live`)
- **Key Impact:**
  > "Migrated enterprise test suites to Playwright with Agentic AI (Codex), achieving major performance gains and coverage across 4 cloud applications."
- **Key Bullets:**
  1. Built automated test scripts for four cloud-based Thermo Fisher Scientific enterprise applications.
  2. Evaluated and migrated legacy Selenium test scripts to Playwright, significantly improving execution speed, test reliability, and maintainability.
  3. Applied agentic AI techniques (Codex) alongside Git and CI/CD pipelines to streamline test creation, validation, and automated refactoring.
  4. Optimized overall software testing efficiency and coverage across cross-functional engineering teams.
- **Tags:** `Playwright` · `Selenium Migration` · `Agentic AI (Codex)` · `CI/CD Pipelines` · `Cloud Testing` · `Python`

#### Experience 02: Bioinformatics Trainee
- **Company:** `BRIC — RAJIV GANDHI CENTRE FOR BIOTECHNOLOGY`
- **Division:** `Structural Biology & Biophysical Simulations`
- **Location:** `THIRUVANANTHAPURAM, INDIA`
- **Period:** `MAY — JUN 2025`
- **Status:** `● BIO SIGNAL` (`status-bio`)
- **Key Impact:**
  > "Automated molecular dynamics pipelines and trajectory analyses for HIV protease & nAChR drug targets using GROMACS, AutoDock, and Bio3D in R."
- **Key Bullets:**
  1. Developed automated computational pipelines for protein–ligand interaction modeling and virtual screening using GROMACS and AutoDock.
  2. Conducted molecular dynamics simulations and trajectory analytics with Bio3D in R, contributing to research on HIV protease and nicotinic acetylcholine receptors.
  3. Automated RMSD, RMSF, Rg, and DCCM dynamical cross-correlation calculations to ensure statistical reproducibility across simulation batches.
  4. Worked hands-on with VMD, PyMOL, UCSF Chimera, and CHARMM-GUI for 3D macromolecular modeling and biophysical structural characterization.
- **Tags:** `GROMACS` · `AutoDock Vina` · `Bio3D (R)` · `VMD & PyMOL` · `RMSD / DCCM Analytics` · `CHARMM-GUI`

#### Experience 03: Digital Marketing Intern
- **Company:** `THOUGHTLINE DIGITAL`
- **Division:** `Campaign Analytics & Growth Telemetry`
- **Location:** `THIRUVANANTHAPURAM, INDIA`
- **Period:** `JUN 2024`
- **Status:** `● FIELD LOG` (`status-active`)
- **Key Impact:**
  > "Spearheaded user outreach analytics and conversion funnel tracking to optimize digital marketing workflows."
- **Key Bullets:**
  1. Contributed to digital campaign strategy, user outreach analytics, and data-driven marketing workflows.
  2. Gained valuable experience in cross-functional communication and analytics-driven optimization.
- **Tags:** `Audience Analytics` · `Funnel Tracking` · `Data Workflows` · `Cross-Functional Comm`

---

### 6. Section 04: Academic Profile (Education)
- **Section Tag:** `04 / ACADEMIC PROFILE`
- **Headline:** `Formal education.`
- **Introductory Text:** "Strong foundations in computer science theory, systems programming, and computational life sciences."

#### Institution 01: Vellore Institute of Technology (VIT)
- **Degree:** Bachelor of Technology (B.Tech) in Computer Science & Engineering
- **Specialization:** Specialization in Bioinformatics
- **Period:** `2023 — 2027`
- **Location:** `VELLORE, TAMIL NADU, INDIA`
- **Score:** `8.82 CGPA`
- **Description:**
  > "Pursuing a rigorous blend of core Computer Science foundations (Data Structures, Algorithms, OOP with Java/C++, Operating Systems, Cloud, QA Automation) and computational biology pipelines (Genomics, Structural Biology, Machine Learning for Life Sciences)."

#### Institution 02: St. Thomas Residential Central School
- **Degree:** Senior Secondary (Class XII) & High School (Class X)
- **Period:** `2010 — 2022`
- **Location:** `THIRUVANANTHAPURAM, KERALA, INDIA`
- **Score:** `Class XII: 92% · Class X: 91%`
- **Description:**
  > "Graduated with distinguished academic honors across secondary and senior secondary school education."

---

### 7. Section 05: Toolkit & Capabilities (Skills Arsenal)
- **Section Tag:** `05 / TOOLKIT & CAPABILITIES`
- **Headline:** `Technical arsenal.`
- **Caption:** `MODERN SOFTWARE & SCIENTIFIC SHOWCASE`
- **Category Filters:**
  1. `ALL CAPABILITIES [12]`
  2. `SOFTWARE & SYSTEMS [4]`
  3. `DATA SCIENCE & AI [3]`
  4. `CLOUD & QA [2]`
  5. `BIOSYSTEMS & SCIENTIFIC [3]`

#### Capability Breakdown (12 Modules):
1. **PROGRAMMING LANGUAGES** `[POLYGLOT CORE]` (Category: SWE)
   - *Items:* Python · Java · C/C++ · TypeScript · JavaScript · SQL · Bash / Shell · R
2. **SOFTWARE ENGINEERING** `[SYSTEM DESIGN]` (Category: SWE)
   - *Items:* OOP/OOD (SOLID) · Data Structures & Algorithms · Modular Architecture · Design Patterns · Clean Code · Complexity Analysis
3. **BACKEND & DISTRIBUTED SYSTEMS** `[MICROSERVICES]` (Category: SWE)
   - *Items:* FastAPI · Express.js · RESTful APIs · Server-Sent Events (SSE) · Celery (Distributed Tasks) · Microservices Architecture
4. **DATA SCIENCE & ANALYTICS** `[STATISTICAL RIGOR]` (Category: AI)
   - *Items:* Pandas · NumPy · SciPy · Scikit-learn · Statistical Modeling · Feature Selection (LASSO, Boruta, SVM-RFE) · SHAP · LOOCV
5. **AI & MACHINE LEARNING** `[DEEP LEARNING & CV]` (Category: AI)
   - *Items:* PyTorch · PyG (Graph Neural Networks) · YOLOv8 · ResNet · OpenCV · Transformers (PubMedBERT) · XGBoost · Random Forest · Agentic AI (OpenAI Codex)
6. **DATABASES & VECTOR STORES** `[STORAGE & EMBEDDINGS]` (Category: SWE)
   - *Items:* PostgreSQL · MySQL · Redis (In-Memory Cache & Message Broker) · Qdrant (Vector Database) · Schema Design · SQL Optimization
7. **CLOUD & DEVOPS** `[CONTAINERS & CLOUD]` (Category: Cloud)
   - *Items:* AWS (Lambda, S3) · Docker · Docker Compose · Git · GitHub Actions · CI/CD Pipelines · Linux/POSIX Environments
8. **TESTING & AUTOMATION** `[QUALITY ENGINEERING]` (Category: Cloud)
   - *Items:* Playwright · Pytest · Selenium · Vitest · Test-Driven Development (TDD) · BDD (Gherkin) · Mock Fixtures · Headed/Headless QA
9. **WEB DEVELOPMENT** `[FRONTEND ARSENAL]` (Category: SWE)
   - *Items:* React 19 · TypeScript · Vite · Tailwind CSS · Zod · Radix UI · Responsive UI Architecture
10. **BIOINFORMATICS & GENOMICS** `[GENOMIC PIPELINES]` (Category: Bio)
    - *Items:* cyvcf2 (VCF Parsing) · RNA-seq / Transcriptomics · Differential Expression (limma, edgeR) · Biomarker Discovery · NCBI / BLAST
11. **SCIENTIFIC COMPUTING & BIOPHYSICS** `[MOLECULAR DYNAMICS]` (Category: Bio)
    - *Items:* Molecular Dynamics (GROMACS, Bio3D) · Molecular Docking (AutoDock Vina) · VMD · PyMOL · UCSF Chimera · CHARMM-GUI · PCA Trajectories
12. **DEVELOPER TOOLS & VISUALIZATION** `[DATA VISUALIZATION]` (Category: AI)
    - *Items:* Git · VS Code · CVAT (Annotation) · Postman · Linux Shell · Matplotlib · Seaborn · Tableau · Recharts

---

### 8. Section 06: Verified Credentials & Awards
- **Section Tag:** `06 / VERIFIED CREDENTIALS & AWARDS`
- **Headline:** `Certifications & achievements.`
- **Caption:** `VERIFIED ACCREDITATIONS & HONORS`

#### Verified Certification:
- **Title:** AI Fluency Framework & Foundations
- **Issuer:** `VERIFIED CREDENTIAL // SKILLJAR`
- **Badge:** `AI & PROMPT ENGINEERING`
- **URL:** `https://verify.skilljar.com/c/ooi733esyygd`
- **Description:**
  > "Comprehensive certification validating core competencies in modern AI frameworks, prompt engineering architectures, LLM foundations, and applied agentic workflows."

#### Key Honors & Awards:
1. **Toastmasters International 'Triple Crown' Award**
   - *Meta:* `TOASTMASTERS INTERNATIONAL // 2025—26`
   - *Badge:* `TRIPLE CROWN`
   - *Description:* "Secured the prestigious Triple Crown award during my tenure in Toastmasters (2025–26), recognizing milestone achievements in speech delivery, executive communication, and educational pathways."
2. **Branch Merit List & Cash Prize (First Year)**
   - *Meta:* `VIT VELLORE // 1ST YEAR MERIT`
   - *Badge:* `9.42 GPA`
   - *Description:* "Placed on the branch merit list in my first year after securing a 9.42 GPA in the first semester, receiving an official certificate of merit and a cash prize for academic distinction."

---

### 9. Section 07: Leadership & Community
- **Section Tag:** `07 / LEADERSHIP & COMMUNITY`
- **Headline:** `Voice & leadership.`
- **Introductory Text:** "Developing executive presence, impromptu communication, and community leadership."
- **Organization:** `SOL TOASTMASTERS CLUB`
- **Role:** `VICE PRESIDENT MEMBERSHIP (VPM)`
- **Guiding Philosophy / Quote:**
  > “Turning complex technical concepts into clear, engaging human conversations.”
- **Descriptive Narrative:**
  > "Served as Vice President Membership at SOL Toastmasters Club, leading membership growth, guest onboarding, and community engagement initiatives. Regularly delivered prepared speeches and participated in impromptu Table Topics, continually refining executive communication, active listening, impromptu thinking, and team leadership."
- **Core Competencies:**
  - `Executive Leadership` · `Public Speaking` · `Technical Storytelling` · `Active Listening` · `Team Mentorship` · `Meeting Facilitation`

---

### 10. Section 08: Interests (Fascinations)
- **Section Tag:** `08 / INTERESTS`
- **Headline:** `Things that fascinate me.`
- **Caption:** `SWARM BIOLOGY, SPECULATIVE EVOLUTION & LINGUISTIC DIVERGENCE`

#### Tile 1: Swarm Intelligence & Emergence
- **Kicker:** `COLLECTIVE INTELLIGENCE & SOCIAL INSECTS`
- **Badge:** `BEES & ANTS → SWARM ALGORITHMS`
- **Descriptive Narrative:**
  > "I've had quite a fascination with ants and bees since I was younger—I even kept an ant farm as a kid. That early curiosity about how simple individual agents communicate through stigmergy and pheromone trails without central authority eventually developed into an interest in swarm biology, decentralized routing algorithms, and emergent collective intelligence."

#### Tile 2: Speculative Evolution
- **Kicker:** `PALEONTOLOGY & EVOLUTIONARY BIOLOGY`
- **Badge:** `DEEP TIME & ADAPTIVE MORPHOLOGY`
- **Descriptive Narrative:**
  > "This stemmed directly from my deep fascination with paleontology, especially dinosaurs. I’ve always been drawn to the thought experiment of predicting what kind of phenotypes, anatomical adaptations, and physiological traits can be observed under specific environmental conditions and selective pressures across deep time."

#### Tile 3: Etymology & Linguistic Evolution
- **Kicker:** `HISTORICAL LINGUISTICS & ANTHROPOLOGY`
- **Badge:** `PHONETICS & CULTURAL DRIFT`
- **Descriptive Narrative:**
  > "A more recent interest: I’m very fascinated by how different languages and cultures arose and evolved under different historical and geographical situations. Tracking phonetic sound shifts, sound laws, proto-languages, and how vocabulary diverges over centuries reveals striking parallels to evolutionary phylogenetics."

---

### 11. Section 09: Hobbies (Off the Clock)
- **Section Tag:** `09 / HOBBIES`
- **Headline:** `Off the clock.`
- **Caption:** `CASUAL PURSUITS, FAVORITE GAMES & DOWNTIME`

1. **PC & Console Gaming** `[GAMING]`
   > "Loves to play games like Elden Ring and The Witcher 3. In particular, I’ve completed the entirety of Elden Ring along with its DLC (Shadow of the Erdtree) and am now playing through The Witcher 3. I also enjoy dropping into Apex Legends, Warhammer: Vermintide 2, and StarCraft."
2. **Fiction & Non-Fiction** `[READING]`
   > "Enjoys reading across both fiction and non-fiction—from compelling narrative storytelling and sci-fi to books covering history, science, anthropology, and how things work."
3. **Distance Swimming** `[SWIMMING]`
   > "Long-distance swimming is my favorite way to stay active and clear my head. Doing laps in the pool provides a great rhythm and mental reset away from screens."
4. **Field Birdwatching** `[BIRDWATCHING]`
   > "Casual field birdwatching outdoors with a pair of binoculars. I enjoy exploring natural habitats, observing avian behaviors, and spotting resident and migratory species."

---

### 12. Section 10: Open Channel (Contact & Transmit)
- **Section Tag:** `10 / OPEN CHANNEL`
- **Headline:** `Have a project or role worth talking about?`
- **Descriptive Call to Action:**
  > "Whether you’re working on distributed systems, AI/ML engineering, cloud test automation, or computational biosystems research, transmit a message."
- **Direct Contacts:**
  - Email: `anoop.nair.1103@gmail.com`
  - Phone: `+91 8547560400`
  - Location: `VELLORE & THIRUVANANTHAPURAM, INDIA`
  - Social Channels: GitHub (`Bondae1103`), LinkedIn (`anoop-nair-4a180928a`)

---

### 13. System Pages & Fallbacks
- **404 Error Page (`/pages/NotFound.tsx`):**
  - Title: `404 - Page Not Found`
  - Copy: "Sorry, the page you are looking for doesn't exist. It may have been moved or deleted."
  - Action: `Go Home` button (redirects to `/`)

---

## Part 2: Technical Specifications

### 1. Architectural Overview
- **Pattern:** Modern Client-Rendered Single Page Application (SPA) with an Express 4 production server fallback.
- **Repository Structure:**
  - `/client`: Frontend source code, assets, styles, and tests.
  - `/server`: Minimalist Node.js / Express static file server routing all unmatched traffic to `index.html`.
  - `/shared`: Shared type definitions and session constants.
  - `/scripts`: Build automation and image optimization utilities.

### 2. Frontend Technology Stack
| Layer | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Core Framework** | React | `^19.2.1` | Concurrent UI rendering and component state |
| **Language** | TypeScript | `5.6.3` | End-to-end static typing and strict interface validation |
| **Bundler & Dev Server** | Vite | `^7.1.7` | Sub-millisecond HMR, Rollup production bundling |
| **CSS & Utility Engine** | Tailwind CSS | `^4.1.14` | High-performance CSS engine with inline design tokens |
| **Typography Styling** | `@tailwindcss/typography` | `^0.5.15` | Proportional prose formatting |
| **Client-side Routing** | Wouter | `^3.3.5` | Featherweight (~1.5KB) routing without heavy bundle overhead |
| **UI Primitives** | Radix UI | Latest (`^1.x`/`^2.x`) | Accessible, unstyled UI primitives (Dialog, Tooltip, Popover) |
| **Icons** | Lucide React | `^0.453.0` | Unified vector glyph system |
| **Form Validation** | React Hook Form & Zod | `^7.64.0` / `^4.1.12` | Schema-driven form validation |
| **Toast Notifications** | Sonner | `^2.0.7` | Accessible alert & toast stack |

### 3. Motion & Visual Computing Engines
- **Framer Motion (`framer-motion@^12.23.22`):**
  - Handles directional page transitions (`paginationPageVariants`) with bi-directional x-axis slide and stagger transitions.
  - Manages view-triggered entrance animations (`whileInView`) with conservative offsets (`-20px` to `-40px`) to prevent scroll jank.
- **Anime.js (`animejs@^4.5.0`):**
  - Powers the `animateMetric` utility. Dynamically parses numerical substrings (including percentage signs and comma separators) and smoothly animates numeric counters using `outExpo` easing over 850ms.
- **HTML5 Canvas 2D Engine (`HeroVisual.tsx`):**
  - Direct 2D canvas context executing an interactive B-DNA double-helix simulation.
  - Calculates 3D depth perspective ($z \in [-1, 1]$) with dynamic node radii, radial gradient glowing coronas, and major/minor groove phase offsets.
  - Implements an elastic mouse-repulsion physics vector and an interactive targeting reticle with real-time base pair locus telemetry.
  - Features real-time FPS telemetry calculation and automatic pause via `IntersectionObserver` when offscreen.

### 4. Typography & Color Design System ("Fossil Signal")
- **Color Tokens:**
  - `--background`: `#12110c` (Dark graphite charcoal with faint warm undertones)
  - `--primary` / Signature Signal: `#F5B738` / `#F2B84B` (Amber CRT Phosphor & specimen warning marker)
  - `--foreground`: `#EEE8D7` (Bone white archival text)
  - `--card` / Surfaces: `#191610` (Elevated console panels)
  - `--border` / Grid: `#383020` / `#332B1D` (Instrument enclosure boundaries)
  - Status Indicators: `#7ee787` (Live log green), `#56d364` (Bio signal lime), `#e3b341` (Active field amber)
- **Typography Suite:**
  - Display / Headlines: `Barlow Condensed` (tight tracking, uppercase fragments)
  - Body / Paragraphs: `IBM Plex Sans` (engineered legibility, 1.65 line height)
  - Monospace / Metadata / Telemetry: `Space Mono` (console coordinates, timestamps, metrics)

### 5. Build, Test & Asset Pipelines
- **Unit Testing:** Vitest (`vitest@^2.1.4`) with test-driven validation in `client/src/lib/__tests__/projectPagination.test.ts`.
- **Asset Optimization:** `scripts/convert-assets.ts` utilizing `sharp` to convert source high-res PNG/JPG images into WebP formats (`md-motions-pca.webp`, `pd-volcano.webp`).
- **Production Server:** Express server configured in `server/index.ts` listening on `PORT || 3000`, serving compressed static files from `dist/` with catch-all routing.

---

## Part 3: Main Features of the Site

### 1. Interactive 3D Genomic Duplex (Hero Visual Console)
- A biologically grounded DNA simulation displaying 28 complementary nucleotide base pairs (Adenine-Thymine, Guanine-Cytosine).
- Dynamic hydrogen bond visualization: renders 2 hydrogen bonding beads for $A=T$ pairs and 3 beads for $G \equiv C$ pairs.
- Interactive cursor probe: hovering over the helix displays an active targeting reticle, calculating genomic locus coordinates (e.g. `chr1:10,248 bp`) and bond configurations in real time.
- Fully adheres to `prefers-reduced-motion` accessibility standards, falling back to static presentation when reduced motion is requested.

### 2. Paginated Evidence Log (Selected Work Console)
- Paginated repository console displaying 4 projects per page, eliminating infinite scrolling fatigue.
- Custom deterministic sorting engine (`sortProjects` in `projectPagination.ts`) that prioritizes starred/flagship specimens (`PaleoRAG`, `Parkinson's Disease RNA-seq`, `AfroTB GNN`) while breaking ties alphabetically by ID.
- Seamless bi-directional page slide animations with directional knowledge (sliding right on next, left on previous).
- Synchronized metric number counter animations powered by Anime.js that trigger when project cards scroll into view.
- Complete keyboard accessibility with Enter/Space handling and ARIA live regions for screen readers.

### 3. Dual-Track Career Log & Education Separation
- Strict structural separation between industry experience and academic coursework.
- Real-time "System Log Audit" telemetry card highlighting cumulative metrics: 4 cloud applications migrated/tested at Thermo Fisher, molecular dynamics simulations at BRIC-RGCB, and key enterprise tools.
- Status badges (`LIVE LOG`, `BIO SIGNAL`, `FIELD LOG`) reflecting the operational domain of each tenure.

### 4. Interactive Capability Channel Matrix (Skills Arsenal)
- Multi-channel filtering allowing recruiters to filter across 5 domains: *All Capabilities*, *Software & Systems*, *Data Science & AI*, *Cloud & QA*, and *Biosystems & Scientific*.
- Categorized badges tagging each group with its architectural discipline (e.g., `[POLYGLOT CORE]`, `[SYSTEM DESIGN]`, `[GENOMIC PIPELINES]`, `[QUALITY ENGINEERING]`).

### 5. Intellectual & Personal Dimensions (Interests & Downtime)
- Dedicated essays on complex scientific fascinations: Swarm Intelligence & Stigmergy, Speculative Paleontology & Morphology, and Comparative Linguistics & Phonetics.
- Unfiltered, authentic personal downtime section detailing PC/console gaming achievements (completing *Elden Ring* & *Shadow of the Erdtree*), reading habits, distance swimming, and field birdwatching.

### 6. Persistent Mission Navigation Rail & Telemetry Wayfinding
- Desktop mission rail with numerical section indicators (`00` to `10`) offering immediate one-click wayfinding.
- Sticky topbar with real-time availability indicator (`AVAILABLE FOR SIGNALS`), responsive drawer menu for mobile devices, and direct links to GitHub and LinkedIn.
- High-contrast, keyboard-focusable interactive elements with prominent amber hover rings.
