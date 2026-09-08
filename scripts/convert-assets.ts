import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const resourcesDir = path.resolve(rootDir, "resources");
const outputDir = path.resolve(rootDir, "client", "public", "images", "projects");

const force = process.argv.includes("--force");

interface AssetTask {
  name: string;
  source: string;
  target: string;
  process: (sourcePath: string, targetPath: string) => Promise<void>;
}

function shouldProcess(sourcePath: string, targetPath: string): boolean {
  if (force) return true;
  if (!fs.existsSync(targetPath)) return true;
  const sourceMtime = fs.statSync(sourcePath).mtimeMs;
  const targetMtime = fs.statSync(targetPath).mtimeMs;
  return sourceMtime > targetMtime;
}

const tasks: AssetTask[] = [
  {
    name: "PD Transcriptomics Volcano Plot (PDF -> WebP)",
    source: path.join(resourcesDir, "PD-transcriptomics", "volcano_plot.pdf"),
    target: path.join(outputDir, "pd-volcano.webp"),
    process: async (sourcePath, targetPath) => {
      console.log(`  Rendering PDF via PyMuPDF at 300 DPI...`);
      const tempPng = path.join(outputDir, "_temp_volcano.png");
      const pyCmd = `import fitz; doc = fitz.open(r'''${sourcePath}'''); page = doc[0]; pix = page.get_pixmap(dpi=300); pix.save(r'''${tempPng}''')`;
      execSync(`py -c "${pyCmd}"`, { stdio: "inherit" });

      console.log(`  Cropping margins and encoding WebP via sharp...`);
      await sharp(tempPng)
        .trim({
          background: { r: 255, g: 255, b: 255 },
          threshold: 10,
        })
        .webp({ quality: 90, effort: 6 })
        .toFile(targetPath);

      if (fs.existsSync(tempPng)) {
        fs.unlinkSync(tempPng);
      }
    },
  },
  {
    name: "MD Simulation Interpolated Trajectory (PNG -> WebP)",
    source: path.join(resourcesDir, "MD-sim", "interpolated.png"),
    target: path.join(outputDir, "md-interpolated.webp"),
    process: async (sourcePath, targetPath) => {
      console.log(`  Cropping white margins and encoding WebP via sharp...`);
      await sharp(sourcePath)
        .trim({
          background: { r: 255, g: 255, b: 255 },
          threshold: 10,
        })
        .webp({ quality: 90, effort: 6 })
        .toFile(targetPath);
    },
  },
  {
    name: "MD Simulation Motions PCA Trajectory (PNG -> WebP)",
    source: path.join(resourcesDir, "MD-sim", "motionsPCA.png"),
    target: path.join(outputDir, "md-motions-pca.webp"),
    process: async (sourcePath, targetPath) => {
      console.log(`  Cropping white margins and encoding WebP via sharp...`);
      await sharp(sourcePath)
        .trim({
          background: { r: 255, g: 255, b: 255 },
          threshold: 10,
        })
        .webp({ quality: 90, effort: 6 })
        .toFile(targetPath);
    },
  },
];

async function main() {
  console.log("=== Portfolio Asset Conversion Pipeline ===");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  let processedCount = 0;

  for (const task of tasks) {
    if (!fs.existsSync(task.source)) {
      console.log(`[SKIP] Source file missing: ${task.source}`);
      continue;
    }

    if (!shouldProcess(task.source, task.target)) {
      console.log(`[CACHED] ${task.name} is up to date.`);
      continue;
    }

    console.log(`[PROCESSING] ${task.name}...`);
    const startTime = Date.now();
    await task.process(task.source, task.target);
    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    const sizeKb = (fs.statSync(task.target).size / 1024).toFixed(1);
    console.log(`  ✓ Generated ${path.basename(task.target)} (${sizeKb} KB) in ${duration}s\n`);
    processedCount++;
  }

  console.log(`Done. Processed ${processedCount} asset(s).`);
}

main().catch((err) => {
  console.error("Asset conversion failed:", err);
  process.exit(1);
});
