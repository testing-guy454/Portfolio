import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import "./styles/custom.css";
import App from "./App.tsx";
import { SEO } from "./components/SEO.tsx";
import { ThemeProvider } from "./contexts/ThemeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <HelmetProvider>
        <SEO />
        <App />
      </HelmetProvider>
    </ThemeProvider>
  </StrictMode>
);
