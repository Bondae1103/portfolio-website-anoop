import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { AnimatePresence, motion } from "framer-motion";
import { Annotation } from "../voice/Annotation";

const LATENCY_ESTIMATES = [
  "~18h",
  "~2h IF PROCRASTINATING SOMETHING WORSE",
  "UP TO 6d DURING EXAM WEEK",
  "INSTANT IF YOU MENTION DINOSAURS",
];

export function LatencyEstimate() {
  const isReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (isReducedMotion) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % LATENCY_ESTIMATES.length);
    }, 4200);

    return () => clearInterval(timer);
  }, [isReducedMotion]);

  const currentEstimate = isReducedMotion
    ? LATENCY_ESTIMATES[0]
    : LATENCY_ESTIMATES[index];

  return (
    <div className="flex flex-col gap-1.5 my-4">
      <div
        className="flex items-center gap-2 font-mono text-xs tracking-wider text-[#a39985]"
        style={{ fontFamily: "'Space Mono', monospace" }}
      >
        <span className="text-[#f5b738] font-bold">EST. RESPONSE LATENCY:</span>
        <div className="relative inline-block h-5 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentEstimate}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.25 }}
              className="inline-block text-[#ffd56b] font-semibold"
            >
              {currentEstimate}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
      <Annotation text="calibrate expectations accordingly" />
    </div>
  );
}
