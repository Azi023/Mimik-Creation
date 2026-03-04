import { useState, useRef, useEffect } from "react";
import { Play, Instagram, Loader2 } from "lucide-react";

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
    // Poll for instgrm to be available
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
    loadCallbacks.length = 0;
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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activated) return;

    setLoading(true);
    loadEmbedScript(() => {
      // Small delay for DOM to render the blockquote
      setTimeout(() => {
        window.instgrm?.Embeds.process();
        setLoading(false);
      }, 200);
    });
  }, [activated]);

  if (!activated) {
    return (
      <div
        className="relative aspect-[9/16] w-[320px] rounded-2xl overflow-hidden cursor-pointer group bg-mimik-slate border border-white/10"
        onClick={() => setActivated(true)}
      >
        {/* Instagram gradient border accent */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6">
          {/* Play button */}
          <div className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center group-hover:bg-white/25 group-hover:scale-110 transition-all">
            <Play className="w-8 h-8 text-white ml-1" fill="white" />
          </div>

          {/* Caption */}
          {caption && (
            <p className="text-white/80 text-sm text-center font-medium line-clamp-2">
              {caption}
            </p>
          )}

          <span className="text-white/50 text-xs font-medium">
            Watch on Instagram
          </span>
        </div>

        {/* Instagram logo watermark */}
        <div className="absolute top-3 right-3">
          <Instagram className="w-5 h-5 text-white/30" />
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative aspect-[9/16] w-[320px] rounded-2xl overflow-hidden bg-mimik-slate"
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <Loader2 className="w-8 h-8 text-white/60 animate-spin" />
        </div>
      )}
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
    </div>
  );
};

export default InstagramReel;
