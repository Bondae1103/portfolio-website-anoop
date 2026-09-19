/* Fossil Signal app shell: dark console theme, one-page mission navigation, and accessible toast feedback for placeholders. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

import { NerdModeProvider } from "./hooks/useNerdMode";
import { ScanlineOverlay } from "./components/texture/ScanlineOverlay";
import { NerdModeTrail } from "./components/interactive/NerdModeTrail";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <NerdModeProvider>
            <ScanlineOverlay />
            <NerdModeTrail />
            <Toaster />
            <Router />
          </NerdModeProvider>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
