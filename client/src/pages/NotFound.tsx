import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useLocation } from "wouter";
import { Terminal, ArrowLeft } from "lucide-react";

export default function NotFound() {
  const [location, setLocation] = useLocation();
  const isReducedMotion = useReducedMotion();
  const [stage, setStage] = useState<number>(isReducedMotion ? 3 : 0);

  useEffect(() => {
    if (isReducedMotion) {
      setStage(3);
      return;
    }

    const t1 = setTimeout(() => setStage(1), 500);
    const t2 = setTimeout(() => setStage(2), 1100);
    const t3 = setTimeout(() => setStage(3), 1700);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [isReducedMotion]);

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-4 bg-[#12110c] text-[#eee8d7]"
      style={{ fontFamily: "'Space Mono', monospace" }}
    >
      <div className="w-full max-w-xl border border-[#383020] bg-[#16130d] p-6 sm:p-8 shadow-[0_0_30px_rgba(0,0,0,0.8)] relative overflow-hidden">
        {/* Top telemetry bar */}
        <div className="flex items-center justify-between border-b border-[#383020] pb-3 mb-6 text-xs text-[#a39985]">
          <div className="flex items-center gap-2 text-[#f5b738] font-bold">
            <Terminal size={15} />
            <span>BLAST-ALIGNMENT TERMINAL // 404</span>
          </div>
          <span className="text-[11px] text-[#e06c75]">0 MATCHES</span>
        </div>

        {/* BLAST Search Trace */}
        <div className="space-y-3 font-mono text-xs leading-relaxed">
          <div className="text-[#a39985]">
            <span className="text-[#f5b738] font-bold">QUERY:</span> {location || "/requested/locus"}
          </div>

          <div>
            <span className="text-[#a39985]">SEARCHING INDEX</span>
            <span className="text-[#f5b738] ml-1">
              {stage >= 1 ? "............................" : "......"}
            </span>
          </div>

          {stage >= 2 && (
            <div className="text-[#ffd56b]">
              RESULTS: 0 HITS. E-VALUE: ∞
            </div>
          )}

          {stage >= 3 && (
            <div className="pt-3 border-t border-[#383020]/60 space-y-2 animate-in fade-in duration-300">
              <div className="text-[#e06c75] font-bold tracking-wider">
                NO SIGNIFICANT ALIGNMENT FOUND.
              </div>
              <p className="text-[#a39985] text-xs leading-normal">
                Either it moved, or it never existed and one of us is misremembering.
              </p>
            </div>
          )}
        </div>

        {/* Navigation Action */}
        {stage >= 3 && (
          <div className="mt-8 pt-4 border-t border-[#383020] flex items-center justify-between animate-in fade-in duration-300">
            <button
              type="button"
              onClick={handleGoHome}
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#f5b738] bg-[#2a2214] text-[#f5b738] hover:bg-[#f5b738] hover:text-[#141006] transition-colors duration-200 text-xs font-bold tracking-wider cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#f5b738]"
            >
              <ArrowLeft size={13} />
              <span>RETURN TO 00 ORIGIN</span>
            </button>
            <span className="text-[10px] text-[#8a806d]">ERROR 404_INDEX_MISS</span>
          </div>
        )}

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#f5b738]" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#f5b738]" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#f5b738]" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#f5b738]" />
      </div>
    </div>
  );
}
