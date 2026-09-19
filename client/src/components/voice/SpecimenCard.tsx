import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Terminal } from "lucide-react";

interface SpecimenCardProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SpecimenCard({ open, onOpenChange }: SpecimenCardProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-lg border border-[#f5b738]/50 bg-[#14110b] p-6 text-left shadow-[0_0_24px_rgba(245,183,56,0.15)] rounded-none"
        style={{ fontFamily: "'Space Mono', monospace" }}
      >
        <DialogHeader className="border-b border-[#383020] pb-3 mb-3">
          <div className="flex items-center gap-2 text-[#f5b738] text-xs font-bold tracking-widest uppercase">
            <Terminal size={14} />
            <span>SPECIMEN AN-001 — ACQUISITION NOTES</span>
          </div>
          <DialogTitle className="sr-only">Specimen AN-001 Acquisition Notes</DialogTitle>
          <DialogDescription className="text-[10px] text-[#a39985] tracking-wide">
            TRANSMISSION RECORD // EASTER EGG DECLASSIFIED
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 text-[12px] leading-relaxed text-[#eee8d7]">
          <p>
            Yes, an LLM helped build this frontend. I'm a backend-and-pipelines
            person learning to design, and I treated it like a very fast
            pair-programmer who never gets bored of my CSS questions.
          </p>
          <p className="text-[#f5b738] font-semibold">
            What it didn't write: any of the prose, the canvas helix, or a
            single line of the actual projects.
          </p>
          <p className="text-[#a39985]">
            Those are load-bearing and they're mine.
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-[#383020] flex items-center justify-between text-[10px] text-[#8a806d]">
          <span>STATUS: AUTHENTICATED</span>
          <span>CLICK OUTSIDE OR ESC TO DISMISS</span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
