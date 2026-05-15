import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// Active MutationObserver to instantly neutralize external injected preview widgets / floating banner
if (typeof window !== "undefined") {
  const executeNeutralizationSweep = () => {
    const neutralizeWin = (win: Window) => {
      try {
        if (!win || !win.document) return;
        const doc = win.document;

        // 1. Programmatically trigger native dismissal
        if (typeof (win as any).dismissBanner === 'function') {
          try { (win as any).dismissBanner(); } catch(e){}
        }

        // 2. Programmatically click the close button
        const closeBtn = doc.querySelector('#floating-banner button, .floating-banner button, button[aria-label*="Close"], button[aria-label*="dismiss"]');
        if (closeBtn && typeof (closeBtn as HTMLElement).click === 'function') {
          try { (closeBtn as HTMLElement).click(); } catch(e){}
        }

        // 3. Locate banner and wipe content without deleting node (bypassing recreation loops)
        doc.querySelectorAll('#floating-banner, .floating-banner, [id*="arena"], [class*="arena"], a[href*="arena.ai"], iframe[src*="arena"], iframe[src*="posthog"]').forEach(el => {
          if (el && el.id !== "root" && el.id !== "core-app-root") {
            (el as HTMLElement).style.setProperty('display', 'none', 'important');
            (el as HTMLElement).style.setProperty('opacity', '0', 'important');
            (el as HTMLElement).style.setProperty('visibility', 'hidden', 'important');
            (el as HTMLElement).style.setProperty('pointer-events', 'none', 'important');
            (el as HTMLElement).style.setProperty('width', '0px', 'important');
            (el as HTMLElement).style.setProperty('height', '0px', 'important');
            (el as HTMLElement).style.setProperty('position', 'absolute', 'important');
            (el as HTMLElement).style.setProperty('top', '-999999px', 'important');
            (el as HTMLElement).style.setProperty('z-index', '-2147483648', 'important');
            el.innerHTML = '';
          }
        });

        // 4. Inject killer style if missing
        if (!doc.getElementById('react-banner-killer')) {
          const s = doc.createElement('style');
          s.id = 'react-banner-killer';
          s.innerHTML = '#floating-banner, .floating-banner, a[href*="arena.ai"] { display: none !important; opacity: 0 !important; pointer-events: none !important; width: 0 !important; height: 0 !important; position: absolute !important; top: -999999px !important; }';
          doc.head.appendChild(s);
        }
      } catch(e) {}
    };

    neutralizeWin(window);
    try { if (window.parent) neutralizeWin(window.parent); } catch(e){}
    try { if (window.top) neutralizeWin(window.top); } catch(e){}
  };

  // Run on mount
  executeNeutralizationSweep();

  // Watch for any subsequent dynamic injections
  const observer = new MutationObserver(() => {
    executeNeutralizationSweep();
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
