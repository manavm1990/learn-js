import { createHighlighter, type Highlighter } from "shiki";
import theme from "@/app/syntax-theme.json";

declare global {
  var __shikiHighlighterPromise: Promise<Highlighter> | undefined;
  var __shikiCleanupRegistered: boolean | undefined;
  var __shikiWindowCleanupRegistered: boolean | undefined;
}
export async function disposeShikiHighlighter() {
  if (!globalThis.__shikiHighlighterPromise) return;

  const highlighter = await globalThis.__shikiHighlighterPromise;
  highlighter.dispose();
  globalThis.__shikiHighlighterPromise = undefined;
}

function registerShikiCleanup() {
  if (typeof process !== "undefined" && typeof process.once === "function") {
    if (!globalThis.__shikiCleanupRegistered) {
      globalThis.__shikiCleanupRegistered = true;
      const cleanup = () => {
        void disposeShikiHighlighter();
      };
      process.once("beforeExit", cleanup);
      process.once("SIGINT", cleanup);
      process.once("SIGTERM", cleanup);
    }
  }

  if (typeof window !== "undefined" && !globalThis.__shikiWindowCleanupRegistered) {
    globalThis.__shikiWindowCleanupRegistered = true;
    window.addEventListener(
      "beforeunload",
      () => {
        void disposeShikiHighlighter();
      },
      { once: true },
    );
  }
}

export async function getShikiHighlighter() {
  if (!globalThis.__shikiHighlighterPromise) {
    globalThis.__shikiHighlighterPromise = createHighlighter({
      langs: ["javascript", "css", "html", "bash", "json", "markdown", "jsx"],
      themes: [theme],
    });
    registerShikiCleanup();
  }

  return globalThis.__shikiHighlighterPromise;
}
