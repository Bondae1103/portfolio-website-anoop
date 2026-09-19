import { createContext, useContext, useState, type ReactNode } from "react";
import { useReducedMotion } from "./useReducedMotion";

interface NerdModeContextType {
  nerdMode: boolean;
  toggleNerdMode: () => void;
  active: boolean; // false if reduced motion is preferred
}

const NerdModeContext = createContext<NerdModeContextType>({
  nerdMode: false,
  toggleNerdMode: () => {},
  active: false,
});

export function NerdModeProvider({ children }: { children: ReactNode }) {
  const isReduced = useReducedMotion();
  const [nerdMode, setNerdMode] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    try {
      return localStorage.getItem("nerd_mode") === "true";
    } catch {
      return false;
    }
  });

  const toggleNerdMode = () => {
    setNerdMode((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("nerd_mode", String(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const active = nerdMode && !isReduced;

  return (
    <NerdModeContext.Provider value={{ nerdMode, toggleNerdMode, active }}>
      {children}
    </NerdModeContext.Provider>
  );
}

export function useNerdMode() {
  return useContext(NerdModeContext);
}
