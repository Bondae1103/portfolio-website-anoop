import type { Project } from "@/lib/projectPagination";

export const projectsData: Project[] = [
  {
    id: "PX-01",
    title: "Parkinson's Disease Multi-Dataset Transcriptomics",
    kicker: "TRANSCRIPTOMICS / CONSENSUS FEATURE ENGINEERING",
    description:
      "A production-grade biomarker discovery pipeline integrating five feature-selection methods with machine learning classifiers. Identifies 12 consensus biomarkers across multi-cohort RNA-seq datasets, validated through LOOCV and SHAP interpretability.",
    stack: ["Python", "R", "limma", "edgeR", "Scikit-learn", "SHAP"],
    image: "/images/projects/pd-volcano.webp",
    imageAlt:
      "Volcano plot of differentially expressed genes in Parkinson's disease RNA-seq analysis",
    imageCaption: "LIMMA-EDGER // 12 CONSENSUS BIOMARKERS",
    metric: "12 consensus biomarkers",
    github: "https://github.com/Bondae1103/PD-DEG-MultipleML-Analyses",
    starred: true,
    starredOrder: 1,
  },
  {
    id: "PX-02",
    title: "Serverless Genomic Variant Classifier (TB-Classifier)",
    kicker: "ANTIBIOTIC RESISTANCE / AWS LAMBDA & DOCKER",
    description:
      "A containerized Random Forest inference pipeline running on AWS Lambda with S3 event triggers to predict drug-resistance profiles from M. tuberculosis genomic VCF files in real time. Built with Docker and cyvcf2 for scalable serverless execution.",
    stack: ["Python", "AWS Lambda", "S3", "Docker", "cyvcf2", "Random Forest"],
    image: "/images/fossil-signal-variant.svg",
    imageAlt:
      "Architecture diagram of serverless genomic variant classification pipeline on AWS Lambda",
    imageCaption: "CYVCF2 + AWS LAMBDA INFERENCE",
    metric: "82% model accuracy",
    github: "https://github.com/Bondae1103/TB-Classifier",
    starred: true,
    starredOrder: 2,
  },
  {
    id: "PX-03",
    title: "PhytoScan",
    kicker: "PLANT HEALTH / COMPUTER VISION & EDGE AI",
    description:
      "An end-to-end plant pathology detection pipeline developed for the AgriThon Hackathon 2025. Combines CVAT dataset annotation, automated image preprocessing, and custom YOLOv8/ResNet models for real-time edge diagnostic inference in agriculture.",
    stack: ["Python", "YOLOv8", "ResNet", "OpenCV", "CVAT", "PyTorch"],
    image: "/images/fossil-signal-vision.svg",
    imageAlt:
      "Plant pathology computer vision detection pipeline using CVAT and YOLOv8",
    imageCaption: "YOLOV8 + RESNET EDGE AI",
    metric: "78% validation accuracy",
    github: "https://github.com/Mo-Kash/PhytoScan",
    starred: true,
    starredOrder: 3,
  },
  {
    id: "PX-04",
    title: "MD Simulation Analyses using Bio3D in R",
    kicker: "MOLECULAR DYNAMICS / AUTOMATION & R",
    description:
      "A modular Bash and R automation suite for high-throughput trajectory parsing from GROMACS runs. Computes RMSD, RMSF, dynamic cross-correlation matrices (DCCM), and radius of gyration to evaluate HIV-1 protease and receptor-ligand stability.",
    stack: ["R", "Bio3D", "GROMACS", "Bash", "Linux", "PyMOL"],
    image: "/images/projects/md-interpolated.webp",
    imageAlt:
      "3D macromolecular trajectory interpolation ribbon rendering from Bio3D molecular dynamics analyses",
    imageCaption: "GROMACS + BIO3D // CONFORMATIONAL TRAJECTORY",
    metric: "4 trajectory metrics",
    github: "https://github.com/Bondae1103/ligand-analyses",
    starred: false,
    order: 1,
  },
];
