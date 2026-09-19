interface AnnotationProps {
  text: string;
  className?: string;
}

export function Annotation({ text, className = "" }: AnnotationProps) {
  return (
    <div
      className={`font-mono text-[11px] tracking-wide text-[#8a806d] select-none ${className}`}
      style={{ fontFamily: "'Space Mono', monospace" }}
    >
      <span className="text-[#a39985] font-semibold">//</span> {text}
    </div>
  );
}
