interface SectionTextureProps {
  variant: "grid" | "sequence" | "ticks" | "dots" | "vignette";
  opacity?: number;
  className?: string;
}

export function SectionTexture({
  variant,
  opacity,
  className = "",
}: SectionTextureProps) {
  if (variant === "grid") {
    const effectiveOpacity = opacity ?? 0.04;
    return (
      <div
        aria-hidden="true"
        className={`absolute inset-0 pointer-events-none ${className}`}
        style={{
          opacity: effectiveOpacity,
          backgroundImage: `
            linear-gradient(to right, #383020 1px, transparent 1px),
            linear-gradient(to bottom, #383020 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />
    );
  }

  if (variant === "sequence") {
    const effectiveOpacity = opacity ?? 0.045;
    // Repeating nucleotide stream for the gutter
    const nucleotides =
      "ATGCAATCGGCTTAGCTAAGCCGATTAGCTAGCTAGCTAAGCTAGCCGATCGATCGAATCGGCTAAGCTAGC";
    return (
      <div
        aria-hidden="true"
        className={`absolute left-2 top-0 bottom-0 pointer-events-none select-none font-mono text-[9px] tracking-[0.3em] uppercase leading-relaxed writing-mode-vertical ${className}`}
        style={{
          writingMode: "vertical-rl",
          color: "#f5b738",
          opacity: effectiveOpacity,
          letterSpacing: "0.45em",
        }}
      >
        {nucleotides.split("").join(" ")}
      </div>
    );
  }

  if (variant === "ticks") {
    const effectiveOpacity = opacity ?? 0.05;
    return (
      <div
        aria-hidden="true"
        className={`absolute left-0 right-0 h-4 pointer-events-none ${className}`}
        style={{
          opacity: effectiveOpacity,
          backgroundImage: `repeating-linear-gradient(to right, #f5b738 0px, #f5b738 1px, transparent 1px, transparent 24px)`,
          borderBottom: "1px solid rgba(245, 183, 56, 0.4)",
        }}
      />
    );
  }

  if (variant === "dots") {
    const effectiveOpacity = opacity ?? 0.035;
    return (
      <div
        aria-hidden="true"
        className={`absolute inset-0 pointer-events-none ${className}`}
        style={{
          opacity: effectiveOpacity,
          backgroundImage: `radial-gradient(circle, #f5b738 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
    );
  }

  if (variant === "vignette") {
    const effectiveOpacity = opacity ?? 0.06;
    return (
      <div
        aria-hidden="true"
        className={`absolute inset-0 pointer-events-none ${className}`}
        style={{
          opacity: effectiveOpacity,
          background:
            "radial-gradient(ellipse at bottom, rgba(245, 183, 56, 0.35) 0%, transparent 70%)",
        }}
      />
    );
  }

  return null;
}
