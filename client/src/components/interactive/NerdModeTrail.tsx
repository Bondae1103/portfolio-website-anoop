import { useEffect, useRef, useState } from "react";
import { useNerdMode } from "@/hooks/useNerdMode";

interface TrailGlyph {
  id: number;
  char: "A" | "T" | "G" | "C";
  x: number;
  y: number;
  createdAt: number;
}

const NUCLEOTIDES: Array<"A" | "T" | "G" | "C"> = ["A", "T", "G", "C"];

export function NerdModeTrail() {
  const { active } = useNerdMode();
  const [glyphs, setGlyphs] = useState<TrailGlyph[]>([]);
  const lastEmitTime = useRef<number>(0);
  const glyphCount = useRef<number>(0);

  useEffect(() => {
    if (!active) {
      setGlyphs([]);
      return;
    }

    const handlePointerMove = (e: PointerEvent) => {
      const now = performance.now();
      // Throttle to at least 40ms
      if (now - lastEmitTime.current < 42) return;
      lastEmitTime.current = now;

      const randomChar =
        NUCLEOTIDES[Math.floor(Math.random() * NUCLEOTIDES.length)];

      const newGlyph: TrailGlyph = {
        id: ++glyphCount.current,
        char: randomChar,
        x: e.clientX,
        y: e.clientY,
        createdAt: now,
      };

      setGlyphs((prev) => {
        // Cap at 20 live nodes
        const updated = [...prev, newGlyph];
        if (updated.length > 20) {
          return updated.slice(updated.length - 20);
        }
        return updated;
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    // Cleanup stale glyphs older than 650ms
    const interval = setInterval(() => {
      const now = performance.now();
      setGlyphs((prev) => prev.filter((g) => now - g.createdAt < 650));
    }, 120);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      clearInterval(interval);
      setGlyphs([]);
    };
  }, [active]);

  if (!active || glyphs.length === 0) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40 overflow-hidden"
    >
      {glyphs.map((g) => {
        const ageMs = performance.now() - g.createdAt;
        const progress = Math.min(1, ageMs / 650);
        const opacity = (1 - progress) * 0.75;
        const translateY = progress * -18; // floats slightly upward

        return (
          <span
            key={g.id}
            className="fixed select-none font-mono text-[11px] font-bold text-[#f5b738]"
            style={{
              left: `${g.x}px`,
              top: `${g.y}px`,
              opacity,
              transform: `translate(-50%, calc(-50% + ${translateY}px)) scale(${1 - progress * 0.3})`,
              fontFamily: "'Space Mono', monospace",
              textShadow: "0 0 4px rgba(245, 183, 56, 0.4)",
              transition: "opacity 0.1s ease-out",
            }}
          >
            {g.char}
          </span>
        );
      })}
    </div>
  );
}
