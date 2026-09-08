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
    x: direction > 0 ? 18 : -18,
  }),
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.22,
      ease: [0.25, 1, 0.5, 1],
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -18 : 18,
    transition: {
      duration: 0.16,
      ease: [0.5, 0, 0.75, 0],
    },
  }),
};

export const cardItemVariants: Variants = {
  initial: {
    opacity: 0,
    y: 8,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.24,
      ease: "easeOut",
    },
  },
};

/**
 * Parses metric strings like "12 consensus biomarkers" or "82% model accuracy"
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

  // Regex to match leading number, optional %, and remaining suffix
  const match = fullMetricText.match(/^(\d+)(%?)(.*)$/);
  if (!match) {
    element.textContent = fullMetricText;
    return;
  }

  const targetValue = parseInt(match[1], 10);
  const percentSign = match[2];
  const suffix = match[3];

  const counter = { val: 0 };

  animate(counter, {
    val: targetValue,
    duration: 650,
    ease: "outExpo",
    onUpdate: () => {
      if (element) {
        element.textContent = `${Math.round(counter.val)}${percentSign}${suffix}`;
      }
    },
  });
}

