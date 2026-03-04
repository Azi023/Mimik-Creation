import { useState, useRef, useEffect } from "react";
import { Instagram, Loader2 } from "lucide-react";

let embedScriptLoaded = false;
let embedScriptLoading = false;
const loadCallbacks: (() => void)[] = [];

function loadEmbedScript(callback: () => void) {
  if (embedScriptLoaded && window.instgrm) {
    callback();
    return;
  }

  loadCallbacks.push(callback);

  if (embedScriptLoading) return;
  embedScriptLoading = true;

  const script = document.createElement("script");
  script.src = "https://www.instagram.com/embed.js";
  script.async = true;
  script.onload = () => {
    embedScriptLoaded = true;
    const poll = setInterval(() => {
      if (window.instgrm) {
        clearInterval(poll);
        loadCallbacks.forEach((cb) => cb());
        loadCallbacks.length = 0;
      }
    }, 100);
  };
  script.onerror = () => {
    embedScriptLoading = false;
    loadCallbacks.forEach((cb) => cb());
    loadCallbacks.length = 0;
  };
  document.body.appendChild(script);
}

interface InstagramReelProps {
  url: string;
  caption?: string;
}

const InstagramReel = ({ url, caption }: InstagramReelProps) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-trigger when scrolled into view
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // start loading slightly before visible
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Load embed script once visible
  useEffect(() => {
    if (!visible) return;

    loadEmbedScript(() => {
      setTimeout(() => {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        } else {
          setFailed(true);
        }
        setLoading(false);
      }, 300);
    });
  }, [visible]);

  // Fallback: link to Instagram if embed fails (ad blockers, etc.)
  if (failed) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex flex-col items-center justify-center gap-4 p-6 aspect-[9/16] w-[320px] rounded-2xl bg-mimik-slate border border-white/10 hover:bg-mimik-slate/80 transition-colors"
      >
        <Instagram className="w-10 h-10 text-white/60" />
        {caption && (
          <p className="text-white/80 text-sm text-center font-medium">
            {caption}
          </p>
        )}
        <span className="text-white/50 text-xs font-medium">
          View on Instagram
        </span>
      </a>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-[320px] rounded-2xl overflow-hidden bg-mimik-slate"
    >
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-3 aspect-[9/16]">
          <Loader2 className="w-8 h-8 text-white/60 animate-spin" />
          {caption && (
            <p className="text-white/60 text-xs font-medium">{caption}</p>
          )}
        </div>
      )}
      {visible && (
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={url}
          data-instgrm-version="14"
          style={{
            width: "320px",
            margin: 0,
            padding: 0,
            border: 0,
          }}
        />
      )}
    </div>
  );
};

export default InstagramReel;
