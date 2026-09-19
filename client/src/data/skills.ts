import {
  Atom,
  BookOpen,
  Code2,
  Compass,
  Cpu,
  Database,
  Dna,
  Microscope,
  ScanLine,
  ShieldAlert,
  Sparkles,
  Terminal,
  type LucideIcon,
} from "lucide-react";

export interface SkillGroup {
  category: "swe" | "ai" | "cloud" | "bio";
  label: string;
  icon: LucideIcon;
  tag: string;
  items: string;
  lastUsed: string; // ISO date YYYY-MM-DD
}

export const skillCategories = [
  { id: "all", label: "ALL CAPABILITIES [12]" },
  { id: "swe", label: "SOFTWARE & SYSTEMS [4]" },
  { id: "ai", label: "DATA SCIENCE & AI [3]" },
  { id: "cloud", label: "CLOUD & QA [2]" },
  { id: "bio", label: "BIOSYSTEMS & SCIENTIFIC [3]" },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "swe",
    label: "PROGRAMMING LANGUAGES",
    icon: Code2,
    tag: "POLYGLOT CORE",
    items: "Python · Java · C/C++ · TypeScript · JavaScript · SQL · Bash / Shell · R",
    lastUsed: "2026-09-15", // Recent
  },
  {
    category: "swe",
    label: "SOFTWARE ENGINEERING",
    icon: Cpu,
    tag: "SYSTEM DESIGN",
    items:
      "OOP/OOD (SOLID) · Data Structures & Algorithms · Modular Architecture · Design Patterns · Clean Code · Complexity Analysis",
    lastUsed: "2026-09-10", // Recent
  },
  {
    category: "swe",
    label: "BACKEND & DISTRIBUTED SYSTEMS",
    icon: Terminal,
    tag: "MICROSERVICES",
    items:
      "FastAPI · Express.js · RESTful APIs · Server-Sent Events (SSE) · Celery (Distributed Tasks) · Microservices Architecture",
    lastUsed: "2026-08-20", // Recent
  },
  {
    category: "ai",
    label: "DATA SCIENCE & ANALYTICS",
    icon: Compass,
    tag: "STATISTICAL RIGOR",
    items:
      "Pandas · NumPy · SciPy · Scikit-learn · Statistical Modeling · Feature Selection (LASSO, Boruta, SVM-RFE) · SHAP · LOOCV",
    lastUsed: "2025-11-10", // ~10 months ago -> Decayed
  },
  {
    category: "ai",
    label: "AI & MACHINE LEARNING",
    icon: Atom,
    tag: "DEEP LEARNING & CV",
    items:
      "PyTorch · PyG (Graph Neural Networks) · YOLOv8 · ResNet · OpenCV · Transformers (PubMedBERT) · XGBoost · Random Forest · Agentic AI (OpenAI Codex)",
    lastUsed: "2026-08-05", // Recent
  },
  {
    category: "swe",
    label: "DATABASES & VECTOR STORES",
    icon: Database,
    tag: "STORAGE & EMBEDDINGS",
    items:
      "PostgreSQL · MySQL · Redis (In-Memory Cache & Message Broker) · Qdrant (Vector Database) · Schema Design · SQL Optimization",
    lastUsed: "2026-05-15", // ~4 months ago -> Decayed
  },
  {
    category: "cloud",
    label: "CLOUD & DEVOPS",
    icon: Sparkles,
    tag: "CONTAINERS & CLOUD",
    items:
      "AWS (Lambda, S3) · Docker · Docker Compose · Git · GitHub Actions · CI/CD Pipelines · Linux/POSIX Environments",
    lastUsed: "2026-07-25", // Recent
  },
  {
    category: "cloud",
    label: "TESTING & AUTOMATION",
    icon: ShieldAlert,
    tag: "QUALITY ENGINEERING",
    items:
      "Playwright · Pytest · Selenium · Vitest · Test-Driven Development (TDD) · BDD (Gherkin) · Mock Fixtures · Headed/Headless QA",
    lastUsed: "2026-07-28", // Recent (Thermo Fisher)
  },
  {
    category: "swe",
    label: "WEB DEVELOPMENT",
    icon: BookOpen,
    tag: "FRONTEND ARSENAL",
    items:
      "React 19 · TypeScript · Vite · Tailwind CSS · Zod · Radix UI · Responsive UI Architecture",
    lastUsed: "2026-09-18", // Recent
  },
  {
    category: "bio",
    label: "BIOINFORMATICS & GENOMICS",
    icon: Dna,
    tag: "GENOMIC PIPELINES",
    items:
      "cyvcf2 (VCF Parsing) · RNA-seq / Transcriptomics · Differential Expression (limma, edgeR) · Biomarker Discovery · NCBI / BLAST",
    lastUsed: "2025-12-05", // ~9 months ago -> Decayed
  },
  {
    category: "bio",
    label: "SCIENTIFIC COMPUTING & BIOPHYSICS",
    icon: Microscope,
    tag: "MOLECULAR DYNAMICS",
    items:
      "Molecular Dynamics (GROMACS, Bio3D) · Molecular Docking (AutoDock Vina) · VMD · PyMOL · UCSF Chimera · CHARMM-GUI · PCA Trajectories",
    lastUsed: "2025-06-15", // ~15 months ago -> Decayed
  },
  {
    category: "ai",
    label: "DEVELOPER TOOLS & VISUALIZATION",
    icon: ScanLine,
    tag: "DATA VISUALIZATION",
    items:
      "Git · VS Code · CVAT (Annotation) · Postman · Linux Shell · Matplotlib · Seaborn · Tableau · Recharts",
    lastUsed: "2025-02-15",
  },
];

