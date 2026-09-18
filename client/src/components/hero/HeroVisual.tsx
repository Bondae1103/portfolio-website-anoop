import { useEffect, useRef, useState, useCallback } from "react";
import { Activity, Cpu, Dna, Network } from "lucide-react";

interface Node {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  layer: number; // 0 for helix strand A, 1 for strand B, 2 for neural cluster
  pairIndex?: number;
  pulsePhase: number;
  color: string;
}

export function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });
  const [telemetry, setTelemetry] = useState({
    fps: 60,
    nodes: 48,
    activeTokens: "4,096",
    synapses: 64,
    coordX: "08.52° N",
    coordY: "76.94° E",
  });
  const [activeLayer, setActiveLayer] = useState<"all" | "helix" | "neural">("all");

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseRef.current = { x, y, active: true };
    setTelemetry((prev) => ({
      ...prev,
      coordX: `${(x / rect.width).toFixed(3)}λ`,
      coordY: `${(y / rect.height).toFixed(3)}φ`,
    }));
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current.active = false;
    setTelemetry((prev) => ({
      ...prev,
      coordX: "08.52° N",
      coordY: "76.94° E",
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let width = 0;
    let height = 0;
    let time = 0;
    let lastFrameTime = performance.now();
    let frameCount = 0;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Nodes state
    let nodes: Node[] = [];
    const HELIX_PAIRS = 16;
    const NEURAL_NODES = 18;

    const initNodes = () => {
      nodes = [];
      if (width === 0 || height === 0) return;

      // 1. Double Helix sinusoidal nodes (Bioinformatics + Genomics)
      const helixMargin = 40;
      const helixWidth = width - helixMargin * 2;
      const step = helixWidth / (HELIX_PAIRS - 1);
      const centerY = height * 0.46;
      const amplitude = Math.min(height * 0.24, 75);

      for (let i = 0; i < HELIX_PAIRS; i++) {
        const x = helixMargin + i * step;
        const phase = (i / HELIX_PAIRS) * Math.PI * 2.8;

        // Strand A
        nodes.push({
          x,
          y: centerY + Math.sin(phase) * amplitude,
          baseX: x,
          baseY: centerY,
          vx: 0,
          vy: 0,
          radius: 3.5,
          layer: 0,
          pairIndex: i,
          pulsePhase: phase,
          color: "#f5b738", // primary amber
        });

        // Strand B (phase shifted by PI)
        nodes.push({
          x,
          y: centerY + Math.sin(phase + Math.PI) * amplitude,
          baseX: x,
          baseY: centerY,
          vx: 0,
          vy: 0,
          radius: 3.5,
          layer: 1,
          pairIndex: i,
          pulsePhase: phase + Math.PI,
          color: "#ffd56b", // bright golden yellow
        });
      }

      // 2. Neural Graph Cluster (Computer Science + AI/Data)
      for (let i = 0; i < NEURAL_NODES; i++) {
        const angle = (i / NEURAL_NODES) * Math.PI * 2;
        const radius = 55 + (i % 3) * 35;
        const cx = width * 0.58;
        const cy = height * 0.52;
        const x = cx + Math.cos(angle) * radius + Math.sin(i * 1.5) * 20;
        const y = cy + Math.sin(angle) * (radius * 0.65) + Math.cos(i * 2) * 15;

        nodes.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: 2.5 + (i % 3),
          layer: 2,
          pulsePhase: Math.random() * Math.PI * 2,
          color: i % 2 === 0 ? "#f5b738" : "#e6a830",
        });
      }

      setTelemetry((prev) => ({
        ...prev,
        nodes: nodes.length,
        synapses: HELIX_PAIRS + NEURAL_NODES * 2,
      }));
    };

    // Handle canvas resize with DPI scaling
    const resize = () => {
      if (!containerRef.current || !canvas) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      initNodes();
    };

    // Pause when offscreen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);

    window.addEventListener("resize", resize);
    resize();

    // Render loop
    const render = (now: number) => {
      animationFrameId = requestAnimationFrame(render);
      if (!isVisible) return;

      // Calculate FPS every 45 frames
      frameCount++;
      if (frameCount % 45 === 0) {
        const elapsed = now - lastFrameTime;
        const currentFps = Math.min(60, Math.round((45 / elapsed) * 1000));
        setTelemetry((prev) => ({ ...prev, fps: currentFps }));
        lastFrameTime = now;
      }

      const speedMultiplier = prefersReducedMotion ? 0 : 0.022;
      time += speedMultiplier;

      // Clear with dark tech background
      ctx.fillStyle = "#14110b";
      ctx.fillRect(0, 0, width, height);

      // 1. Draw subtle background telemetry grid & crosshairs
      ctx.strokeStyle = "rgba(245, 183, 56, 0.045)";
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = gridSize; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = gridSize; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Center coordinate crosshairs
      ctx.strokeStyle = "rgba(245, 183, 56, 0.12)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(width * 0.5 - 20, height * 0.5);
      ctx.lineTo(width * 0.5 + 20, height * 0.5);
      ctx.moveTo(width * 0.5, height * 0.5 - 20);
      ctx.lineTo(width * 0.5, height * 0.5 + 20);
      ctx.stroke();

      // Mouse position & gravity
      const mouse = mouseRef.current;

      // 3. Update Helix Nodes
      const helixMargin = 40;
      const helixWidth = width - helixMargin * 2;
      const step = helixWidth / (HELIX_PAIRS - 1);
      const centerY = height * 0.46;
      const amplitude = Math.min(height * 0.24, 75);

      for (let i = 0; i < HELIX_PAIRS * 2; i++) {
        const node = nodes[i];
        if (!node) continue;
        const isStrandA = node.layer === 0;
        const pairIdx = node.pairIndex ?? 0;
        const phase = (pairIdx / HELIX_PAIRS) * Math.PI * 2.8 + time;

        const targetY =
          centerY +
          Math.sin(isStrandA ? phase : phase + Math.PI) * amplitude;
        const targetX = helixMargin + pairIdx * step;

        // Spring toward oscillation
        node.x += (targetX - node.x) * 0.1;
        node.y += (targetY - node.y) * 0.1;

        // Mouse reaction
        if (mouse.active) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            const force = (110 - dist) / 110;
            node.x += (dx / dist) * force * 10;
            node.y += (dy / dist) * force * 10;
          }
        }
      }

      // 4. Update Neural Nodes
      for (let i = HELIX_PAIRS * 2; i < nodes.length; i++) {
        const node = nodes[i];
        if (!node) continue;

        if (!prefersReducedMotion) {
          node.x += node.vx;
          node.y += node.vy;

          // Gentle bounding box bounce
          const bounds = {
            minX: width * 0.25,
            maxX: width * 0.85,
            minY: height * 0.2,
            maxY: height * 0.8,
          };
          if (node.x < bounds.minX || node.x > bounds.maxX) node.vx *= -1;
          if (node.y < bounds.minY || node.y > bounds.maxY) node.vy *= -1;
        }

        // Mouse attraction
        if (mouse.active) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const force = (140 - dist) / 140;
            node.x += (dx / dist) * force * 3.5;
            node.y += (dy / dist) * force * 3.5;
          }
        }
      }

      // 5. Draw Helix Hydrogen Base-Pair Rungs (Strand A to Strand B pairing)
      if (activeLayer === "all" || activeLayer === "helix") {
        for (let i = 0; i < HELIX_PAIRS; i++) {
          const nodeA = nodes[i * 2];
          const nodeB = nodes[i * 2 + 1];
          if (!nodeA || !nodeB) continue;

          // Gradient connection rung
          const grad = ctx.createLinearGradient(nodeA.x, nodeA.y, nodeB.x, nodeB.y);
          grad.addColorStop(0, "rgba(245, 183, 56, 0.45)");
          grad.addColorStop(0.5, "rgba(255, 213, 107, 0.18)");
          grad.addColorStop(1, "rgba(245, 183, 56, 0.45)");

          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(nodeA.x, nodeA.y);
          ctx.lineTo(nodeB.x, nodeB.y);
          ctx.stroke();

          // Base pair nucleotide dot midpoint
          const midX = (nodeA.x + nodeB.x) / 2;
          const midY = (nodeA.y + nodeB.y) / 2;
          ctx.fillStyle = "rgba(245, 183, 56, 0.3)";
          ctx.beginPath();
          ctx.arc(midX, midY, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }

        // Continuous strand backbone curves
        for (let strand = 0; strand < 2; strand++) {
          ctx.strokeStyle = strand === 0 ? "rgba(245, 183, 56, 0.75)" : "rgba(255, 213, 107, 0.65)";
          ctx.lineWidth = 1.8;
          ctx.beginPath();
          for (let i = 0; i < HELIX_PAIRS; i++) {
            const node = nodes[i * 2 + strand];
            if (!node) continue;
            if (i === 0) ctx.moveTo(node.x, node.y);
            else ctx.lineTo(node.x, node.y);
          }
          ctx.stroke();
        }
      }

      // 6. Draw Neural & Synaptic Interconnects (GNN Attention & Deep Learning)
      if (activeLayer === "all" || activeLayer === "neural") {
        const neuralStartIndex = HELIX_PAIRS * 2;
        ctx.lineWidth = 1;

        for (let i = neuralStartIndex; i < nodes.length; i++) {
          const n1 = nodes[i];
          for (let j = i + 1; j < nodes.length; j++) {
            const n2 = nodes[j];
            const dx = n1.x - n2.x;
            const dy = n1.y - n2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 100) {
              const alpha = (1 - dist / 100) * 0.35;
              ctx.strokeStyle = `rgba(245, 183, 56, ${alpha})`;
              ctx.beginPath();
              ctx.moveTo(n1.x, n1.y);
              ctx.lineTo(n2.x, n2.y);
              ctx.stroke();
            }
          }

          // Cross-connect neural nodes to nearby helix nodes (Bioinformatics + AI bridge)
          for (let h = 0; h < HELIX_PAIRS * 2; h += 3) {
            const hNode = nodes[h];
            const dx = n1.x - hNode.x;
            const dy = n1.y - hNode.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 85) {
              const alpha = (1 - dist / 85) * 0.22;
              ctx.strokeStyle = `rgba(255, 213, 107, ${alpha})`;
              ctx.setLineDash([2, 3]);
              ctx.beginPath();
              ctx.moveTo(n1.x, n1.y);
              ctx.lineTo(hNode.x, hNode.y);
              ctx.stroke();
              ctx.setLineDash([]);
            }
          }
        }
      }

      // 7. Draw Nodes with Amber Glow
      nodes.forEach((node) => {
        ctx.fillStyle = node.color === "#f5b738" ? "rgba(245, 183, 56, 0.2)" : "rgba(255, 213, 107, 0.18)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 2.2, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 8. Mouse Spotlight Halo & Crosshair
      if (mouse.active) {
        const radial = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 110);
        radial.addColorStop(0, "rgba(245, 183, 56, 0.18)");
        radial.addColorStop(0.6, "rgba(245, 183, 56, 0.04)");
        radial.addColorStop(1, "transparent");
        ctx.fillStyle = radial;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 110, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "rgba(245, 183, 56, 0.5)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 16, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(mouse.x - 22, mouse.y);
        ctx.lineTo(mouse.x - 18, mouse.y);
        ctx.moveTo(mouse.x + 18, mouse.y);
        ctx.lineTo(mouse.x + 22, mouse.y);
        ctx.moveTo(mouse.x, mouse.y - 22);
        ctx.lineTo(mouse.x, mouse.y - 18);
        ctx.moveTo(mouse.x, mouse.y + 18);
        ctx.lineTo(mouse.x, mouse.y + 22);
        ctx.stroke();
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, [activeLayer]);

  return (
    <div
      ref={containerRef}
      className="hero-art hero-visual-mount"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      role="img"
      aria-label="Interactive Genomic Neural Lattice and telemetry matrix visualization representing Computer Science, Bioinformatics, and AI/Data"
    >
      <canvas ref={canvasRef} className="hero-visual-canvas" />

      {/* Top Telemetry Header Bar */}
      <div className="hero-overlay-label top hero-visual-hud-top">
        <div className="hero-specimen-id">
          <span className="pulse-dot" />
          <b>SPECIMEN / AN-001</b>
        </div>
        <span className="hero-hud-sub">GENOMIC-NEURAL TOPOLOGY // APPLIED AI</span>
      </div>

      {/* Layer Filter Controls */}
      <div className="hero-visual-controls" aria-label="Visual layer controls">
        <button
          type="button"
          className={`hero-layer-btn ${activeLayer === "all" ? "is-active" : ""}`}
          onClick={() => setActiveLayer("all")}
          title="Display all systems: Double Helix & Neural Synapses"
        >
          <Network size={11} /> ALL [CS+BIO+AI]
        </button>
        <button
          type="button"
          className={`hero-layer-btn ${activeLayer === "helix" ? "is-active" : ""}`}
          onClick={() => setActiveLayer("helix")}
          title="Display Genomic Double Helix only"
        >
          <Dna size={11} /> GENOMICS
        </button>
        <button
          type="button"
          className={`hero-layer-btn ${activeLayer === "neural" ? "is-active" : ""}`}
          onClick={() => setActiveLayer("neural")}
          title="Display Neural Graph & Attention Weights only"
        >
          <Cpu size={11} /> NEURAL / GNN
        </button>
      </div>

      {/* Bottom Telemetry Footer */}
      <div className="hero-overlay-label bottom hero-visual-hud-bottom">
        <div className="hero-telemetry-row">
          <span className="telemetry-pill">
            <Activity size={10} className="pulse-dot" /> LIVE <b>{telemetry.fps} FPS</b>
          </span>
          <span className="telemetry-pill">
            NODES: <b>{telemetry.nodes}</b>
          </span>
          <span className="telemetry-pill">
            SYNAPSES: <b>{telemetry.synapses}</b>
          </span>
        </div>
        <div className="hero-coord-readout">
          COORD: <span>{telemetry.coordX}</span> · <span>{telemetry.coordY}</span>
        </div>
      </div>

      {/* Corner Tech Brackets */}
      <div className="hero-corner top-left" aria-hidden="true" />
      <div className="hero-corner top-right" aria-hidden="true" />
      <div className="hero-corner bottom-left" aria-hidden="true" />
      <div className="hero-corner bottom-right" aria-hidden="true" />
    </div>
  );
}
