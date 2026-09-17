import type { Project } from "@/lib/projectPagination";

export const projectsData: Project[] = [
  {
    id: "PX-01",
    title: "PaleoRAG: Distributed Hybrid RAG Engine",
    kicker: "DISTRIBUTED SYSTEMS / HYBRID VECTOR RAG & SSE",
    description:
      "An asynchronous distributed RAG microservice integrating FastAPI, Celery, and Redis for concurrent scientific literature ingestion. Features hybrid dense (PubMedBERT) and sparse (BM25) retrieval via Reciprocal Rank Fusion in Qdrant, real-time SSE token streaming, post-hoc citation verification (0% hallucination rate, 100% Recall@5), and a 44-test Pytest harness.",
    stack: ["FastAPI", "Qdrant", "Redis"],
    image: "/images/projects/paleorag-console.svg",
    imageAlt:
      "Architecture console of PaleoRAG distributed hybrid RAG microservice with Celery, Redis, and Qdrant",
    imageCaption: "FASTAPI + QDRANT + CELERY // SSE HYBRID RAG",
    metric: "100% Recall@5",
    github: "https://github.com/Bondae1103/Paleo-RAG",
    starred: true,
    starredOrder: 1,
  },
  {
    id: "PX-02",
    title: "Parkinson's Disease Multi-Dataset Transcriptomics",
    kicker: "TRANSCRIPTOMICS / CONSENSUS FEATURE ENGINEERING",
    description:
      "A biomarker discovery pipeline integrating five feature-selection methods (LASSO, Boruta, SVM-RFE, Mutual Information) with gradient-boosted classifiers. Identifies 12 consensus biomarkers across multi-cohort RNA-seq datasets, validated through LOOCV and SHAP interpretability.",
    stack: ["Python", "XGBoost", "SHAP"],
    image: "/images/projects/pd-volcano-console.svg",
    imageAlt:
      "Volcano plot of differentially expressed genes in Parkinson's disease RNA-seq analysis",
    imageCaption: "LIMMA-EDGER // 12 CONSENSUS BIOMARKERS",
    metric: "12 consensus biomarkers",
    github: "https://github.com/Bondae1103/PD-DEG-MultipleML-Analyses",
    starred: true,
    starredOrder: 2,
  },
  {
    id: "PX-03",
    title: "AfroTB: Phylogeny-Aware Graph Neural Network",
    kicker: "DEEP LEARNING / GRAPH NEURAL NETWORKS & GENOMICS",
    description:
      "A phylogeny-aware Graph Neural Network (GNN) for joint multi-task prediction of M. tuberculosis drug resistance and bacterial lineage across the Afro-TB dataset. Formulates genomic isolate topological graphs from 13,753 isolates via SNP-distance matrices, integrating PyG architectures with reproducible Python validation pipelines.",
    stack: ["PyTorch", "PyG (GNN)", "Python"],
    image: "/images/projects/afrotb-gnn-console.svg",
    imageAlt:
      "Topological graph and architecture of AfroTB phylogeny-aware Graph Neural Network",
    imageCaption: "PYTORCH GEOMETRIC // TOPOLOGICAL PHYLO-GNN",
    metric: "13,753 isolates",
    github: "https://github.com/Bondae1103/AfroTB-phylo-GNN-AMR-predictor",
    starred: true,
    starredOrder: 3,
  },
  {
    id: "PX-04",
    title: "Serverless Genomic Variant Classifier (TB-Classifier)",
    kicker: "CLOUD MICROSERVICES / AWS LAMBDA & DOCKER",
    description:
      "A containerized machine learning inference pipeline running on AWS Lambda with S3 event triggers to predict drug-resistance profiles from M. tuberculosis VCF files in sub-second latency. Built with Docker, cyvcf2, and soft-voting ensembles with automated Pytest mock fixtures.",
    stack: ["AWS Lambda", "Docker", "Scikit-learn"],
    image: "/images/projects/tb-classifier-console.svg",
    imageAlt:
      "Architecture diagram of serverless genomic variant classification pipeline on AWS Lambda",
    imageCaption: "CYVCF2 + AWS LAMBDA INFERENCE",
    metric: "82% model accuracy",
    github: "https://github.com/Bondae1103/TB-Classifier",
    starred: false,
    order: 1,
  },
  {
    id: "PX-05",
    title: "PhytoScan: Real-Time Pathology Vision System",
    kicker: "EDGE AI / COMPUTER VISION & EMBEDDED INFERENCE",
    description:
      "An end-to-end plant pathology detection pipeline developed for the AgriThon Hackathon 2025. Combines CVAT dataset annotation, automated image preprocessing, and custom YOLOv8/ResNet models for real-time edge diagnostic inference with sub-50ms latency.",
    stack: ["YOLOv8", "OpenCV", "PyTorch"],
    image: "/images/projects/phytoscan-console.svg",
    imageAlt:
      "Plant pathology computer vision detection pipeline using CVAT and YOLOv8",
    imageCaption: "YOLOV8 + RESNET EDGE AI",
    metric: "78% validation accuracy",
    github: "https://github.com/Mo-Kash/PhytoScan",
    starred: false,
    order: 2,
  },
];
