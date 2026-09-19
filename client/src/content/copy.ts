/**
 * Centralized display copy for Fossil Signal v2.
 * Strictly adheres to the field-lab instrument register:
 * - Contractions always (I'm, that's, don't, etc.)
 * - Zero ban-listed terms (enforced by Vitest test)
 * - Concrete numbers instead of vague adjectives
 * - Grounded, honest voice
 */

export const heroCopy = {
  eyebrow: "FIELD NOTE 00 — ORIGIN // SOFTWARE, INTELLIGENCE & BIOSYSTEMS",
  headline: "Engineering code,\nintelligence & biological\nsystems.",
  intro:
    "I'm Anoop — final-year CSE (Bioinformatics) at VIT Vellore. I mostly build two kinds of things: systems that move a lot of data around without falling over, and models that try to say something useful about genomes. Sometimes the same project is both, which is how you end up running a graph neural network over 13,753 tuberculosis isolates at 2am.",
  viewWorkAction: "VIEW SELECTED WORK",
  githubAction: "GITHUB",
  linkedinAction: "LINKEDIN",
  scrollPrompt: "SCROLL TO INVESTIGATE",
};

export const aboutCopy = {
  tag: "01 / SUBJECT PROFILE",
  microLabel: "CURRENT POSITION",
  headline: "Between the\nlab & the stack.",
  stampRole: "AN / CS-BIO",
  stampMetric: "8.82 CGPA @ VIT",
  p1: "I came at biology through code rather than the other way around, which means I'm the person in the lab asking why the pipeline isn't in version control, and the person on the eng team who knows what a VCF file is. It's a strange niche. I like it here.",
  p2: "Three months at Thermo Fisher migrating Selenium suites to Playwright rearranged how I think about writing code at all. Flaky tests are a design smell, not a test problem. When I build backends or distributed workers now, the Pytest harness with deterministic mocks gets written right alongside the logic, not tacked on after. I'm now insufferable about this.",
  p3: "Genomics data is enormous and almost always slightly wrong, and you usually find out which part was wrong after the model has already trained on it. That's where most of my habits around reproducibility came from — not from a best-practices doc. If an analysis pipeline can't run twice on the same inputs and produce bit-identical results, it isn't done.",
  p4: "Beyond engineering, I ran membership for SOL Toastmasters, which was mostly the job of convincing people that standing up in front of strangers is a thing you can get good at. It's also the only reason I can now explain a graph neural network without putting a room to sleep.",
  techVectorsLabel: "TECH VECTORS",
  techVectors: [
    "SOFTWARE ENGINEERING",
    "MACHINE LEARNING",
    "TEST AUTOMATION",
    "COMPUTATIONAL BIOLOGY",
    "CLOUD & DEVOPS",
  ],
  annotation: "tests aren't an afterthought. if it isn't tested, it's just a rumor.",
};

export const experienceCopy = {
  tag: "03 / EXPERIENCE & INDUSTRY LOG",
  microLabel: "INDUSTRY ARCHIVE",
  headline: "Time\nlogged.",
  intro:
    "Software development, enterprise test automation, and biophysical simulation pipelines across commercial and research labs.",
  telemetry: {
    title: "SYSTEM LOG AUDIT // ACTIVE",
    enterpriseAppsKey: "ENTERPRISE CODEBASES",
    enterpriseAppsVal: "4 Cloud Apps (Thermo Fisher)",
    disciplinesKey: "CORE DISCIPLINES",
    disciplinesVal: "Automated QA · Molecular Dynamics",
    toolsetsKey: "KEY TOOLSETS",
    toolsetsVal: "Playwright · Codex AI · GROMACS",
  },
  experiences: [
    {
      role: "Software Developer Intern",
      company: "THERMO FISHER SCIENTIFIC",
      division: "Cloud Enterprise Applications // Automation QA",
      location: "BENGALURU, INDIA",
      period: "MAY — JUL 2026",
      status: "● ARCHIVED LOG",
      statusClass: "status-archived",
      highlight:
        "Migrated enterprise test suites to Playwright with Agentic AI (Codex), cutting suite runtimes and improving reliability across 4 cloud applications.",
      bullets: [
        "Built automated test scripts for four cloud-based Thermo Fisher Scientific enterprise applications.",
        "Evaluated and migrated legacy Selenium test scripts to Playwright, eliminating test flakiness and cutting maintenance overhead.",
        "Applied agentic AI techniques (Codex) alongside Git and CI/CD pipelines to streamline test creation, validation, and refactoring.",
        "Partnered with cross-functional engineering teams to integrate end-to-end regression runs into the active deployment pipeline.",
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
        "Ran molecular dynamics simulations and trajectory analytics with Bio3D in R, contributing to research on HIV protease and nicotinic acetylcholine receptors.",
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
        "Ran user outreach analytics and conversion funnel tracking to optimize digital marketing workflows.",
      bullets: [
        "Contributed to digital campaign strategy, user outreach analytics, and data-driven marketing workflows.",
        "Gained practical experience in cross-functional communication and analytics-driven optimization.",
      ],
      tags: [
        "Audience Analytics",
        "Funnel Tracking",
        "Data Workflows",
        "Cross-Functional Comm",
      ],
    },
  ],
};

export const educationCopy = {
  tag: "04 / ACADEMIC PROFILE",
  headline: "Formal education.",
  intro:
    "Computer science theory, systems programming, and computational life sciences.",
  items: [
    {
      institution: "VELLORE INSTITUTE OF TECHNOLOGY (VIT)",
      degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
      specialization: "Specialization in Bioinformatics",
      period: "2023 — 2027",
      location: "VELLORE, TAMIL NADU, INDIA",
      score: "8.82 CGPA",
      description:
        "Core Computer Science foundations (Data Structures, Algorithms, OOP with Java/C++, Operating Systems, Cloud, QA Automation) alongside computational biology pipelines (Genomics, Structural Biology, Machine Learning for Life Sciences).",
    },
    {
      institution: "ST. THOMAS RESIDENTIAL CENTRAL SCHOOL",
      degree: "Senior Secondary (Class XII) & High School (Class X)",
      specialization: null,
      period: "2010 — 2022",
      location: "THIRUVANANTHAPURAM, KERALA, INDIA",
      score: "Class XII: 92% · Class X: 91%",
      description:
        "Finished secondary and senior secondary school education in the top percentile.",
    },
  ],
};

export const certsAwardsCopy = {
  tag: "06 / VERIFIED CREDENTIALS & AWARDS",
  headline: "Certifications & achievements.",
  caption: "VERIFIED ACCREDITATIONS & HONORS",
  singleCertification: {
    title: "AI Fluency Framework & Foundations",
    issuer: "VERIFIED CREDENTIAL // SKILLJAR",
    badge: "AI & PROMPT ENGINEERING",
    url: "https://verify.skilljar.com/c/ooi733esyygd",
    description:
      "Covers core competencies in modern AI frameworks, prompt engineering architectures, LLM foundations, and applied agentic workflows.",
  },
  achievements: [
    {
      title: "Toastmasters International 'Triple Crown' Award",
      meta: "TOASTMASTERS INTERNATIONAL // 2025—26",
      badge: "TRIPLE CROWN",
      description:
        "Earned the Triple Crown award during my 2025–26 tenure in Toastmasters for speech delivery, executive communication, and educational pathways.",
    },
    {
      title: "Branch Merit List & Cash Prize (First Year)",
      meta: "VIT VELLORE // 1ST YEAR MERIT",
      badge: "9.42 GPA",
      description:
        "Placed on the branch merit list in first year after securing a 9.42 GPA in the first semester, with an official certificate of merit and cash prize.",
    },
  ],
};

export const toastmastersCopy = {
  tag: "07 / LEADERSHIP & COMMUNITY",
  headline: "Voice & leadership.",
  intro: "Developing executive presence, impromptu communication, and community leadership.",
  club: "SOL TOASTMASTERS CLUB",
  role: "VICE PRESIDENT MEMBERSHIP (VPM)",
  quote: "“Turning complex technical concepts into clear, engaging human conversations.”",
  description:
    "I ran membership for SOL Toastmasters, which was mostly the job of convincing people that standing up in front of strangers is a thing you can get good at. It's also the only reason I can now explain a graph neural network without putting a room to sleep. Handled guest onboarding, mentored new speakers, and ran regular impromptu Table Topics sessions.",
  skills: [
    "Executive Leadership",
    "Public Speaking",
    "Technical Storytelling",
    "Active Listening",
    "Team Mentorship",
    "Meeting Facilitation",
  ],
};

export const interestsCopy = {
  tag: "08 / INTERESTS",
  headline: "Things that fascinate me.",
  caption: "SWARM BIOLOGY, SPECULATIVE EVOLUTION & LINGUISTIC DIVERGENCE",
  tiles: [
    {
      kicker: "COLLECTIVE INTELLIGENCE & SOCIAL INSECTS",
      title: "Swarm Intelligence & Emergence",
      badge: "BEES & ANTS → SWARM ALGORITHMS",
      description:
        "I've had quite a fascination with ants and bees since I was younger—I even kept an ant farm as a kid. That early curiosity about how simple individual agents communicate through stigmergy and pheromone trails without central authority eventually developed into an interest in swarm biology, decentralized routing algorithms, and emergent collective intelligence.",
      extra:
        "Watching a hundred thousand individual insects make optimal shortest-path decisions through purely local chemical updates convinced me early on that emergence beats centralized coordination almost every time.",
    },
    {
      kicker: "PALEONTOLOGY & EVOLUTIONARY BIOLOGY",
      title: "Speculative Evolution",
      badge: "DEEP TIME & ADAPTIVE MORPHOLOGY",
      description:
        "This stemmed directly from my deep fascination with paleontology, especially dinosaurs. I've always been drawn to the thought experiment of predicting what kind of phenotypes, anatomical adaptations, and physiological traits can be observed under specific environmental conditions and selective pressures across deep time.",
      extra:
        "If you understand biomechanical constraints and metabolic tradeoffs, predicting how an organism might adapt to high gravity or low oxygen becomes a surprisingly quantitative exercise.",
    },
    {
      kicker: "HISTORICAL LINGUISTICS & ANTHROPOLOGY",
      title: "Etymology & Linguistic Evolution",
      badge: "PHONETICS & CULTURAL DRIFT",
      description:
        "A more recent interest: I'm very fascinated by how different languages and cultures arose and evolved under different historical and geographical situations. Tracking phonetic sound shifts, sound laws, proto-languages, and how vocabulary diverges over centuries reveals striking parallels to evolutionary phylogenetics.",
      extra:
        "Grimm's Law and Indo-European sound shifts feel eerily identical to calculating nucleotide substitution rates and tracing common ancestry in cladograms.",
    },
  ],
};

export const hobbiesCopy = {
  tag: "09 / HOBBIES",
  headline: "Off the clock.",
  caption: "CASUAL PURSUITS, FAVORITE GAMES & DOWNTIME",
  tiles: [
    {
      kicker: "GAMING",
      title: "PC & Console Gaming",
      description:
        "Loves to play games like Elden Ring and The Witcher 3. In particular, I've completed the entirety of Elden Ring along with its DLC (Shadow of the Erdtree) and am now playing through The Witcher 3. I also enjoy dropping into Apex Legends, Warhammer: Vermintide 2, and StarCraft.",
    },
    {
      kicker: "READING",
      title: "Fiction & Non-Fiction",
      description:
        "Enjoys reading across both fiction and non-fiction—from compelling narrative storytelling and sci-fi to books covering history, science, anthropology, and how things work.",
    },
    {
      kicker: "SWIMMING",
      title: "Distance Swimming",
      description:
        "Long-distance swimming is my favorite way to stay active and clear my head. Doing laps in the pool provides a great rhythm and mental reset away from screens.",
    },
    {
      kicker: "BIRDWATCHING",
      title: "Field Birdwatching",
      description:
        "Casual field birdwatching outdoors with a pair of binoculars. I enjoy exploring natural habitats, observing avian behaviors, and spotting resident and migratory species.",
    },
  ],
};

export const contactCopy = {
  tag: "10 / OPEN CHANNEL",
  headline: "Have a project or\nrole worth talking about?",
  intro:
    "Whether you're working on distributed systems, AI/ML engineering, cloud test automation, or computational biosystems research, transmit a message.",
  actionText: "CONTACT ANOOP",
  email: "anoop.nair.1103@gmail.com",
  phone: "+91 8547560400",
  location: "VELLORE & THIRUVANANTHAPURAM, INDIA",
  annotation: "calibrate expectations accordingly",
};

export const footerCopy = {
  copyright: "© 2026 ANOOP NAIR // B.TECH CSE (BIOINFORMATICS)",
  transmissionStatus: "AN-001 // TRANSMISSION LOCKED",
};
