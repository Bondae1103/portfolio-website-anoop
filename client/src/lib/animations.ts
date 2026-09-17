import { animate } from "animejs";
import type { Variants } from "framer-motion";

export const isReducedMotionPreferred = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

// Motion variants for paginated card transitions
export const paginationPageVariants: Variants = {
  initial: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 24 : -24,
  }),
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.32,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -24 : 24,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1],
    },
  }),
};

export const cardItemVariants: Variants = {
  initial: {
    opacity: 0,
    y: 18,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.36,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/**
 * Parses metric strings like "12 consensus biomarkers", "82% model accuracy", or "13,753 isolates"
 * and animates the numerical component using Anime.js.
 */
export function animateMetric(
  element: HTMLElement | null,
  fullMetricText: string
): void {
  if (!element) return;

  if (isReducedMotionPreferred()) {
    element.textContent = fullMetricText;
    return;
  }

  // Regex to match leading number (with optional commas), optional %, and remaining suffix
  const match = fullMetricText.match(/^([\d,]+)(%?)(.*)$/);
  if (!match) {
    element.textContent = fullMetricText;
    return;
  }

  const rawNumStr = match[1].replace(/,/g, "");
  const targetValue = parseInt(rawNumStr, 10);
  const percentSign = match[2];
  const suffix = match[3];
  const hasComma = match[1].includes(",");

  const counter = { val: 0 };

  animate(counter, {
    val: targetValue,
    duration: 850,
    ease: "outExpo",
    onUpdate: () => {
      if (element) {
        const currentVal = Math.round(counter.val);
        const formattedNum = hasComma ? currentVal.toLocaleString() : String(currentVal);
        element.textContent = `${formattedNum}${percentSign}${suffix}`;
      }
    },
  });
}

