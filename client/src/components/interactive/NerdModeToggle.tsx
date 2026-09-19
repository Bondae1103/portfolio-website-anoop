import { useNerdMode } from "@/hooks/useNerdMode";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function NerdModeToggle() {
  const { nerdMode, toggleNerdMode } = useNerdMode();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          onClick={toggleNerdMode}
          aria-pressed={nerdMode}
          aria-label="Toggle Nerd Mode"
          className={`flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono tracking-wider transition-all duration-200 border rounded-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#f5b738] ${
            nerdMode
              ? "bg-[#2a2214] text-[#f5b738] border-[#f5b738] shadow-[0_0_8px_rgba(245,183,56,0.3)]"
              : "bg-[#191610] text-[#a39985] border-[#383020] hover:border-[#f5b738]/60 hover:text-[#eee8d7]"
          }`}
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          <span className="text-[10px] leading-none text-[#f5b738]">
            {nerdMode ? "●" : "◦"}
          </span>
          <span>NERD MODE</span>
        </button>
      </TooltipTrigger>
      <TooltipContent
        side="bottom"
        className="bg-[#191610] border border-[#383020] text-[#a39985] font-mono text-[10px] px-2.5 py-1"
        style={{ fontFamily: "'Space Mono', monospace" }}
      >
        <span className="text-[#f5b738]">//</span> weird UI element I'm unreasonably proud of
      </TooltipContent>
    </Tooltip>
  );
}
