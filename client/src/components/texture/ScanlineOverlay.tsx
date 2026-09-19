/**
 * Global CRT Scanline Overlay.
 * Subtle 1px repeating linear gradient at 2.5% opacity, fixed position,
 * pointer-events: none, sitting beneath interactive focus rings.
 */
export function ScanlineOverlay() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[8]"
      style={{
        background:
          "repeating-linear-gradient(to bottom, rgba(245, 183, 56, 0.025) 0px, rgba(245, 183, 56, 0.025) 1px, transparent 1px, transparent 3px)",
      }}
    />
  );
}
