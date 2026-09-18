import { useEffect, useRef, useState, useCallback } from "react";
import { Activity, Dna } from "lucide-react";

interface HelixNode {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  z: number; // depth: -1 (back) to +1 (front)
  radius: number;
  strand: 0 | 1; // 0 for Strand A (5'->3'), 1 for Strand B (3'->5')
  pairIndex: number;
  phase: number;
  baseType: "A" | "T" | "G" | "C";
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
    basePairs: 28,
    pitch: "3.4 nm",
    activeLocus: "chr1:10,248",
    activePair: "G ≡ C",
    coordX: "08.52° N",
    coordY: "76.94° E",
  });

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

    // Prominent DNA Double Helix Parameters
    const HELIX_PAIRS = 28;
    const BASE_SEQUENCES: Array<["A" | "T" | "G" | "C", "A" | "T" | "G" | "C"]> = [
      ["A", "T"],
      ["G", "C"],
      ["T", "A"],
      ["C", "G"],
    ];

    let nodes: HelixNode[] = [];

    const initNodes = () => {
      nodes = [];
      if (width === 0 || height === 0) return;

      const margin = 36;
      const helixWidth = width - margin * 2;
      const step = helixWidth / (HELIX_PAIRS - 1);
      const centerY = height * 0.48;

      for (let i = 0; i < HELIX_PAIRS; i++) {
        const x = margin + i * step;
        const seq = BASE_SEQUENCES[i % 4];

        // Strand A
        nodes.push({
          x,
          y: centerY,
          baseX: x,
          baseY: centerY,
          z: 0,
          radius: 5.5,
          strand: 0,
          pairIndex: i,
          phase: (i / HELIX_PAIRS) * Math.PI * 4.8,
          baseType: seq[0],
          color: "#f5b738", // Primary Golden Amber
        });

        // Strand B (with major/minor groove phase shift)
        nodes.push({
          x,
          y: centerY,
          baseX: x,
          baseY: centerY,
          z: 0,
          radius: 5.5,
          strand: 1,
          pairIndex: i,
          phase: (i / HELIX_PAIRS) * Math.PI * 4.8 + Math.PI * 0.88,
          baseType: seq[1],
          color: "#ffd56b", // Luminous Gold
        });
      }

      setTelemetry((prev) => ({
        ...prev,
        basePairs: HELIX_PAIRS,
      }));
    };

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

      frameCount++;
      if (frameCount % 45 === 0) {
        const elapsed = now - lastFrameTime;
        const currentFps = Math.min(60, Math.round((45 / elapsed) * 1000));
        setTelemetry((prev) => ({ ...prev, fps: currentFps }));
        lastFrameTime = now;
      }

      const speedMultiplier = prefersReducedMotion ? 0 : 0.024;
      time += speedMultiplier;

      // Dark console backdrop
      ctx.fillStyle = "#14110b";
      ctx.fillRect(0, 0, width, height);

      // 1. Subtle telemetry background grid
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

      // 2. Central Helical Axis Line
      const centerY = height * 0.48;
      ctx.strokeStyle = "rgba(245, 183, 56, 0.12)";
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 5]);
      ctx.beginPath();
      ctx.moveTo(25, centerY);
      ctx.lineTo(width - 25, centerY);
      ctx.stroke();
      ctx.setLineDash([]);

      const mouse = mouseRef.current;
      const margin = 36;
      const helixWidth = width - margin * 2;
      const step = helixWidth / (HELIX_PAIRS - 1);
      const amplitude = Math.min(height * 0.32, 105);

      // Track nearest pair to cursor for interactive probe telemetry
      let nearestPairIndex = -1;
      let minMouseDistX = Infinity;

      // 3. Update Helix Nodes with 3D Depth coordinates
      for (let i = 0; i < HELIX_PAIRS; i++) {
        const angle = (i / HELIX_PAIRS) * Math.PI * 4.8 + time;
        const targetX = margin + i * step;

        if (mouse.active) {
          const distX = Math.abs(mouse.x - targetX);
          if (distX < minMouseDistX) {
            minMouseDistX = distX;
            nearestPairIndex = i;
          }
        }

        // Strand A
        const nodeA = nodes[i * 2];
        if (nodeA) {
          const yA = centerY + Math.sin(angle) * amplitude;
          const zA = Math.cos(angle);
          nodeA.z = zA;

          let targetYA = yA;
          let targetXA = targetX;

          // Mouse Gravitational Elastic Ripple
          if (mouse.active) {
            const dx = mouse.x - nodeA.x;
            const dy = mouse.y - nodeA.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 130) {
              const force = (130 - dist) / 130;
              targetXA += (dx / dist) * force * 16;
              targetYA += (dy / dist) * force * 18;
            }
          }

          nodeA.x += (targetXA - nodeA.x) * 0.18;
          nodeA.y += (targetYA - nodeA.y) * 0.18;
          nodeA.radius = 4.0 + (zA + 1) * 2.2; // 4.0px to 8.4px depth scaling
        }

        // Strand B (Offset for biological major/minor grooving)
        const nodeB = nodes[i * 2 + 1];
        if (nodeB) {
          const angleB = angle + Math.PI * 0.88;
          const yB = centerY + Math.sin(angleB) * amplitude;
          const zB = Math.cos(angleB);
          nodeB.z = zB;

          let targetYB = yB;
          let targetXB = targetX;

          if (mouse.active) {
            const dx = mouse.x - nodeB.x;
            const dy = mouse.y - nodeB.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 130) {
              const force = (130 - dist) / 130;
              targetXB += (dx / dist) * force * 16;
              targetYB += (dy / dist) * force * 18;
            }
          }

          nodeB.x += (targetXB - nodeB.x) * 0.18;
          nodeB.y += (targetYB - nodeB.y) * 0.18;
          nodeB.radius = 4.0 + (zB + 1) * 2.2;
        }
      }

      // Update active probe telemetry
      if (mouse.active && nearestPairIndex >= 0 && nearestPairIndex < HELIX_PAIRS) {
        const seq = BASE_SEQUENCES[nearestPairIndex % 4];
        const isTriple = seq[0] === "G" || seq[0] === "C";
        setTelemetry((prev) => ({
          ...prev,
          activeLocus: `chr1:${(10240 + nearestPairIndex * 34).toLocaleString()} bp`,
          activePair: `${seq[0]} ${isTriple ? "≡" : "="} ${seq[1]}`,
        }));
      }

      // 4. DRAW 3D-OCCLUDED ELEMENTS
      // A) BACK NODES (z < -0.1)
      nodes
        .filter((n) => n.z < -0.1)
        .forEach((node) => {
          const depthAlpha = 0.35 + (node.z + 1) * 0.3;
          ctx.fillStyle = `rgba(168, 126, 42, ${depthAlpha})`;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fill();
        });

      // B) HYDROGEN BASE-PAIR RUNGS (connecting Strand A to Strand B)
      for (let i = 0; i < HELIX_PAIRS; i++) {
        const nodeA = nodes[i * 2];
        const nodeB = nodes[i * 2 + 1];
        if (!nodeA || !nodeB) continue;

        const avgZ = (nodeA.z + nodeB.z) / 2;
        const isInspected = mouse.active && i === nearestPairIndex;

        // Gradient rung
        const grad = ctx.createLinearGradient(nodeA.x, nodeA.y, nodeB.x, nodeB.y);
        if (isInspected) {
          grad.addColorStop(0, "#ffd56b");
          grad.addColorStop(0.5, "#ffffff");
          grad.addColorStop(1, "#ffd56b");
        } else {
          const alpha = 0.35 + (avgZ + 1) * 0.25;
          grad.addColorStop(0, `rgba(245, 183, 56, ${alpha})`);
          grad.addColorStop(0.5, `rgba(255, 213, 107, ${alpha * 0.7})`);
          grad.addColorStop(1, `rgba(245, 183, 56, ${alpha})`);
        }

        ctx.strokeStyle = grad;
        ctx.lineWidth = isInspected ? 2.4 : 1.6;
        ctx.beginPath();
        ctx.moveTo(nodeA.x, nodeA.y);
        ctx.lineTo(nodeB.x, nodeB.y);
        ctx.stroke();

        // Hydrogen Bonding Beads along rung (2 bonds for A=T, 3 bonds for G≡C)
        const seq = BASE_SEQUENCES[i % 4];
        const numBonds = seq[0] === "G" || seq[0] === "C" ? 3 : 2;

        for (let b = 1; b <= numBonds; b++) {
          const t = b / (numBonds + 1);
          const bx = nodeA.x + (nodeB.x - nodeA.x) * t;
          const by = nodeA.y + (nodeB.y - nodeA.y) * t;

          ctx.fillStyle = isInspected ? "#ffffff" : "rgba(255, 213, 107, 0.75)";
          ctx.beginPath();
          ctx.arc(bx, by, isInspected ? 2.2 : 1.4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // C) CONTINUOUS STRAND BACKBONE RIBBONS (Outer Aura + Core Curve)
      for (let strand = 0; strand < 2; strand++) {
        // Outer glowing aura
        ctx.strokeStyle = strand === 0 ? "rgba(245, 183, 56, 0.15)" : "rgba(255, 213, 107, 0.12)";
        ctx.lineWidth = 6;
        ctx.beginPath();
        for (let i = 0; i < HELIX_PAIRS; i++) {
          const node = nodes[i * 2 + strand];
          if (!node) continue;
          if (i === 0) ctx.moveTo(node.x, node.y);
          else ctx.lineTo(node.x, node.y);
        }
        ctx.stroke();

        // Crisp backbone line
        ctx.strokeStyle = strand === 0 ? "rgba(245, 183, 56, 0.85)" : "rgba(255, 213, 107, 0.8)";
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        for (let i = 0; i < HELIX_PAIRS; i++) {
          const node = nodes[i * 2 + strand];
          if (!node) continue;
          if (i === 0) ctx.moveTo(node.x, node.y);
          else ctx.lineTo(node.x, node.y);
        }
        ctx.stroke();
      }

      // D) FRONT NODES (z >= -0.1) with Glowing Corona
      nodes
        .filter((n) => n.z >= -0.1)
        .forEach((node) => {
          const isInspected = mouse.active && node.pairIndex === nearestPairIndex;

          // Glowing aura
          const glowGrad = ctx.createRadialGradient(
            node.x,
            node.y,
            0,
            node.x,
            node.y,
            node.radius * 2.6
          );
          glowGrad.addColorStop(
            0,
            isInspected ? "rgba(255, 255, 255, 0.65)" : "rgba(245, 183, 56, 0.45)"
          );
          glowGrad.addColorStop(
            0.6,
            isInspected ? "rgba(255, 213, 107, 0.2)" : "rgba(245, 183, 56, 0.15)"
          );
          glowGrad.addColorStop(1, "transparent");

          ctx.fillStyle = glowGrad;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 2.6, 0, Math.PI * 2);
          ctx.fill();

          // Solid core bead
          ctx.fillStyle = isInspected ? "#ffffff" : node.color;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fill();

          // Nucleotide letter code on front-facing nodes
          if (node.z > 0.4 && node.radius > 5.5) {
            ctx.fillStyle = "#141006";
            ctx.font = "bold 7px 'Space Mono', monospace";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(node.baseType, node.x, node.y + 0.5);
          }
        });

      // E) INTERACTIVE BIO-PROBE TARGETING RETICLE
      if (mouse.active && nearestPairIndex >= 0 && nearestPairIndex < HELIX_PAIRS) {
        const nodeA = nodes[nearestPairIndex * 2];
        const nodeB = nodes[nearestPairIndex * 2 + 1];

        if (nodeA && nodeB) {
          const midX = (nodeA.x + nodeB.x) / 2;
          const midY = (nodeA.y + nodeB.y) / 2;

          // Vertical probe guide
          ctx.strokeStyle = "rgba(245, 183, 56, 0.45)";
          ctx.lineWidth = 1;
          ctx.setLineDash([2, 3]);
          ctx.beginPath();
          ctx.moveTo(midX, 20);
          ctx.lineTo(midX, height - 20);
          ctx.stroke();
          ctx.setLineDash([]);

          // Center target reticle
          ctx.strokeStyle = "#f5b738";
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(midX, midY, 14, 0, Math.PI * 2);
          ctx.stroke();

          // Probe HUD tag box
          const tagX = Math.min(midX + 20, width - 150);
          const tagY = Math.max(midY - 35, 30);

          ctx.fillStyle = "rgba(20, 17, 11, 0.92)";
          ctx.strokeStyle = "#f5b738";
          ctx.lineWidth = 1;
          ctx.fillRect(tagX, tagY, 130, 42);
          ctx.strokeRect(tagX, tagY, 130, 42);

          ctx.fillStyle = "#f5b738";
          ctx.font = "bold 8px 'Space Mono', monospace";
          ctx.textAlign = "left";
          ctx.textBaseline = "top";
          ctx.fillText(`PAIR #${nearestPairIndex + 1}: ${seqAt(nearestPairIndex)}`, tagX + 8, tagY + 8);

          ctx.fillStyle = "#a89d87";
          ctx.font = "7px 'Space Mono', monospace";
          ctx.fillText(`LOCUS: chr1:${(10240 + nearestPairIndex * 34).toLocaleString()} bp`, tagX + 8, tagY + 20);
          ctx.fillStyle = "#ffd56b";
          ctx.fillText(`PITCH: 3.4Å · DUPLEX PASS`, tagX + 8, tagY + 30);
        }
      }

      function seqAt(idx: number) {
        const seq = BASE_SEQUENCES[idx % 4];
        const isTriple = seq[0] === "G" || seq[0] === "C";
        return `${seq[0]} ${isTriple ? "≡" : "="} ${seq[1]}`;
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero-art hero-visual-mount"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      role="img"
      aria-label="Interactive 3D Genomic Double Helix simulation with real-time base pair tracking and telemetry HUD"
    >
      <canvas ref={canvasRef} className="hero-visual-canvas" />

      {/* Top Telemetry Header Bar */}
      <div className="hero-overlay-label top hero-visual-hud-top">
        <div className="hero-specimen-id">
          <span className="pulse-dot" />
          <b>GENOMIC DUPLEX // B-DNA DYNAMICS</b>
        </div>
        <span className="hero-hud-sub">DOUBLE HELIX · 28 BASE PAIR RESOLUTION</span>
      </div>

      {/* Top-Right Status Badge */}
      <div className="hero-duplex-status" aria-label="Duplex stability">
        <Dna size={12} className="text-primary" />
        <span>B-DNA DUPLEX // 99.8% STABILITY</span>
      </div>

      {/* Bottom Telemetry Footer */}
      <div className="hero-overlay-label bottom hero-visual-hud-bottom">
        <div className="hero-telemetry-row">
          <span className="telemetry-pill">
            <Activity size={10} className="pulse-dot" /> LIVE <b>{telemetry.fps} FPS</b>
          </span>
          <span className="telemetry-pill">
            BASE PAIRS: <b>{telemetry.basePairs} [A·T / G·C]</b>
          </span>
          <span className="telemetry-pill">
            PITCH: <b>{telemetry.pitch}</b>
          </span>
          <span className="telemetry-pill">
            LOCUS: <b>{telemetry.activeLocus}</b>
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
