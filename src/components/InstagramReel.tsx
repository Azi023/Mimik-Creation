import { useState, useRef, useEffect } from "react";
import { Play, Instagram, Loader2 } from "lucide-react";

let embedScriptLoaded = false;
let embedScriptLoading = false;
let embedScriptFailed = false;
const successCallbacks: (() => void)[] = [];
const errorCallbacks: (() => void)[] = [];

function loadEmbedScript(onSuccess: () => void, onError: () => void) {
  if (embedScriptFailed) {
    onError();
    return;
  }
  if (embedScriptLoaded && window.instgrm) {
    onSuccess();
    return;
  }

  successCallbacks.push(onSuccess);
  errorCallbacks.push(onError);

  if (embedScriptLoading) return;
  embedScriptLoading = true;

  const script = document.createElement("script");
  script.src = "https://www.instagram.com/embed.js";
  script.async = true;
  script.onload = () => {
    embedScriptLoaded = true;
    // Poll for instgrm — capped at 50 attempts (5 seconds max)
    let attempts = 0;
    const poll = setInterval(() => {
      if (window.instgrm || ++attempts > 50) {
        clearInterval(poll);
        if (window.instgrm) {
          successCallbacks.forEach((cb) => cb());
        } else {
          embedScriptFailed = true;
          errorCallbacks.forEach((cb) => cb());
        }
        successCallbacks.length = 0;
        errorCallbacks.length = 0;
      }
    }, 100);
  };
  script.onerror = () => {
    embedScriptFailed = true;
    embedScriptLoading = false;
    errorCallbacks.forEach((cb) => cb());
    successCallbacks.length = 0;
    errorCallbacks.length = 0;
  };
  document.body.appendChild(script);
}

interface InstagramReelProps {
  url: string;
  caption?: string;
}

const InstagramReel = ({ url, caption }: InstagramReelProps) => {
  const [activated, setActivated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Auto-activate when the card scrolls into view
  useEffect(() => {
    if (activated) return;
    const el = wrapperRef.current;
    if (!el || !("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActivated(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [activated]);

  // Load Instagram embed when activated
  useEffect(() => {
    if (!activated) return;

    setLoading(true);
    let mo: MutationObserver | null = null;
    let fallbackTimer: ReturnType<typeof setTimeout> | null = null;

    loadEmbedScript(
      () => {
        window.instgrm?.Embeds.process();

        const container = wrapperRef.current;
        if (!container) {
          setLoading(false);
          return;
        }

        // Clear loading state exactly when Instagram injects the iframe
        mo = new MutationObserver(() => {
          if (container.querySelector("iframe")) {
            mo?.disconnect();
            mo = null;
            if (fallbackTimer) { clearTimeout(fallbackTimer); fallbackTimer = null; }
            setLoading(false);
          }
        });
        mo.observe(container, { childList: true, subtree: true });

        // 8-second fallback: if iframe never appears, treat as error
        fallbackTimer = setTimeout(() => {
          mo?.disconnect();
          mo = null;
          setError(true);
          setLoading(false);
        }, 8000);
      },
      () => {
        setError(true);
        setLoading(false);
      }
    );

    return () => {
      mo?.disconnect();
      if (fallbackTimer) clearTimeout(fallbackTimer);
    };
  }, [activated]);

  // Gradient is visible until the embed iframe is ready
  const showBackground = !activated || loading || error;

  return (
    <div
      ref={wrapperRef}
      className="relative aspect-[9/16] w-[320px] rounded-2xl overflow-hidden"
      style={{ cursor: activated ? "default" : "pointer" }}
      onClick={() => !activated && setActivated(true)}
    >
      {/* Instagram gradient background: fades out once embed renders */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-orange-800 transition-opacity duration-700 ${
          showBackground ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Placeholder: visible before auto-activation fires */}
      {!activated && !error && (
        <div className="group absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 z-10">
          <div className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center group-hover:bg-white/25 group-hover:scale-110 transition-all">
            <Play className="w-8 h-8 text-white ml-1" fill="white" />
          </div>
          {caption && (
            <p className="text-white/80 text-sm text-center font-medium line-clamp-2">
              {caption}
            </p>
          )}
          <span className="text-white/50 text-xs font-medium">Watch on Instagram</span>
          <div className="absolute top-3 right-3">
            <Instagram className="w-5 h-5 text-white/30" />
          </div>
        </div>
      )}

      {/* Loading spinner: shown while Instagram loads the embed */}
      {activated && loading && !error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10">
          <Loader2 className="w-8 h-8 text-white/60 animate-spin" />
          <span className="text-white/40 text-xs">Loading reel...</span>
        </div>
      )}

      {/* Error fallback with direct Instagram link */}
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 z-10">
          <Instagram className="w-8 h-8 text-white/40" />
          <p className="text-white/60 text-sm text-center">Could not load reel</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-mimik-lime text-xs font-medium underline underline-offset-2"
            onClick={(e) => e.stopPropagation()}
          >
            Open on Instagram
          </a>
        </div>
      )}

      {/* Instagram embed: blockquote rendered after activation for embed.js to process */}
      {activated && !error && (
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={url}
          data-instgrm-version="14"
          style={{ width: "320px", margin: 0, padding: 0, border: 0 }}
        />
      )}
    </div>
  );
};

export default InstagramReel;
