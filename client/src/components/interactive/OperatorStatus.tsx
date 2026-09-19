import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { AnimatePresence, motion } from "framer-motion";

const OPERATOR_STATUSES = [
  "CAFFEINE: NOMINAL",
  "LAST COMMIT: 4h AGO",
  "CONFIDENCE: UNVERIFIED",
  "REVIEWING OWN CODE FROM 2024 — REGRET DETECTED",
];

export function OperatorStatus() {
  const isReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (isReducedMotion) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % OPERATOR_STATUSES.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isReducedMotion]);

  const currentStatus = isReducedMotion ? OPERATOR_STATUSES[0] : OPERATOR_STATUSES[index];

  return (
    <span className="telemetry-pill operator-status-pill inline-flex items-center min-w-[210px] overflow-hidden text-[#f5b738]">
      OPERATOR:{" "}
      <AnimatePresence mode="wait">
        <motion.b
          key={currentStatus}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.25 }}
          className="ml-1 text-[#ffd56b] whitespace-nowrap"
        >
          {currentStatus}
        </motion.b>
      </AnimatePresence>
    </span>
  );
}
