import type { Project } from "@/lib/projectPagination";

export const projectsData: Project[] = [
  {
    id: "PX-01",
    title: "PaleoRAG: Distributed Hybrid RAG Engine",
    kicker: "DISTRIBUTED SYSTEMS / HYBRID VECTOR RAG & SSE",
    description:
      "Hybrid dense + sparse retrieval with Reciprocal Rank Fusion, SSE token streaming, and post-hoc citation checking — 100% Recall@5, zero hallucinated citations on my eval set. The eval set is small enough that I'd want to test this on someone else's corpus before believing my own numbers.",
    stack: ["FastAPI", "Qdrant", "Redis"],
    image: "/images/projects/paleorag-console.svg",
    imageAlt:
      "Architecture console of PaleoRAG distributed hybrid RAG microservice with Celery, Redis, and Qdrant",
    imageCaption: "FASTAPI + QDRANT + CELERY // SSE HYBRID RAG",
    metric: "100% Recall@5",
    github: "https://github.com/Bondae1103/Paleo-RAG",
    starred: true,
    starredOrder: 1,
    confidencePre: 15,
    confidencePost: 88,
  },
  {
    id: "PX-02",
    title: "Parkinson's Disease Multi-Dataset Transcriptomics",
    kicker: "TRANSCRIPTOMICS / CONSENSUS FEATURE ENGINEERING",
    description:
      "A biomarker discovery pipeline integrating five feature-selection methods with gradient-boosted classifiers, isolating 12 consensus biomarkers across multi-cohort RNA-seq datasets. Validated through LOOCV and SHAP, though without wet-lab assay verification on patient tissue, they remain computational candidates.",
    stack: ["Python", "XGBoost", "SHAP"],
    image: "/images/projects/pd-volcano-console.svg",
    imageAlt:
      "Volcano plot of differentially expressed genes in Parkinson's disease RNA-seq analysis",
    imageCaption: "LIMMA-EDGER // 12 CONSENSUS BIOMARKERS",
    metric: "12 consensus biomarkers",
    github: "https://github.com/Bondae1103/PD-DEG-MultipleML-Analyses",
    starred: true,
    starredOrder: 2,
    confidencePre: 60,
    confidencePost: 74,
  },
  {
    id: "PX-03",
    title: "AfroTB: Phylogeny-Aware Graph Neural Network",
    kicker: "DEEP LEARNING / GRAPH NEURAL NETWORKS & GENOMICS",
    description:
      "A phylogeny-aware Graph Neural Network formulating topological graphs from 13,753 isolates via SNP distances for joint drug resistance and lineage prediction. Training on sparse sub-lineages still requires manual class reweighting to keep minority variants from getting drowned out.",
    stack: ["PyTorch", "PyG (GNN)", "Python"],
    image: "/images/projects/afrotb-gnn-console.svg",
    imageAlt:
      "Topological graph and architecture of AfroTB phylogeny-aware Graph Neural Network",
    imageCaption: "PYTORCH GEOMETRIC // TOPOLOGICAL PHYLO-GNN",
    metric: "13,753 isolates",
    github: "https://github.com/Bondae1103/AfroTB-phylo-GNN-AMR-predictor",
    starred: true,
    starredOrder: 3,
    confidencePre: 30,
    confidencePost: 55,
  },
  {
    id: "PX-04",
    title: "Serverless Genomic Variant Classifier (TB-Classifier)",
    kicker: "CLOUD MICROSERVICES / AWS LAMBDA & DOCKER",
    description:
      "A containerized machine learning inference pipeline on AWS Lambda with S3 event triggers to predict drug-resistance from VCF files in sub-second latency. Soft-voting ensemble hits 82% accuracy on benchmark VCFs, though multi-allelic indels still fail parsing and fall back to unclassified.",
    stack: ["AWS Lambda", "Docker", "Scikit-learn"],
    image: "/images/projects/tb-classifier-console.svg",
    imageAlt:
      "Architecture diagram of serverless genomic variant classification pipeline on AWS Lambda",
    imageCaption: "CYVCF2 + AWS LAMBDA INFERENCE",
    metric: "82% model accuracy",
    github: "https://github.com/Bondae1103/TB-Classifier",
    starred: false,
    order: 1,
    confidencePre: 70,
    confidencePost: 91,
  },
  {
    id: "PX-05",
    title: "PhytoScan: Real-Time Pathology Vision System",
    kicker: "EDGE AI / COMPUTER VISION & EMBEDDED INFERENCE",
    description:
      "Built in a weekend for AgriThon 2025. Sub-50ms inference on edge hardware, 78% validation accuracy — which is decent for a hackathon and nowhere near deployable. The annotation set was too small and I knew it while labelling.",
    stack: ["YOLOv8", "OpenCV", "PyTorch"],
    image: "/images/projects/phytoscan-console.svg",
    imageAlt:
      "Plant pathology computer vision detection pipeline using CVAT and YOLOv8",
    imageCaption: "YOLOV8 + RESNET EDGE AI",
    metric: "78% validation accuracy",
    github: "https://github.com/Mo-Kash/PhytoScan",
    starred: false,
    order: 2,
    confidencePre: 85,
    confidencePost: 41,
  },
];
