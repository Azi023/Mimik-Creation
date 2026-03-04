import { Play, Instagram } from "lucide-react";

interface InstagramReelProps {
  url: string;
  caption?: string;
}

const InstagramReel = ({ url, caption }: InstagramReelProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col items-center justify-center w-[280px] h-[350px] rounded-2xl overflow-hidden cursor-pointer bg-mimik-slate border-2 border-white/10 hover:border-mimik-lime/50 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(221,255,0,0.15)]"
    >
      {/* Instagram gradient accent overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#833AB4]/20 via-[#FD1D1D]/10 to-[#F77737]/20 opacity-60 group-hover:opacity-80 transition-opacity" />

      {/* Play button */}
      <div className="relative z-10 w-16 h-16 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/25 group-hover:scale-110 transition-all duration-300">
        <Play className="w-7 h-7 text-white ml-0.5" fill="white" />
      </div>

      {/* "Watch Reel" label */}
      <span className="relative z-10 text-white/70 text-xs font-medium mt-4 group-hover:text-white transition-colors">
        Watch Reel
      </span>

      {/* Client name */}
      {caption && (
        <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
          <p className="text-white text-sm font-semibold text-center truncate">
            {caption}
          </p>
        </div>
      )}

      {/* Instagram logo */}
      <div className="absolute top-3 right-3 z-10">
        <Instagram className="w-5 h-5 text-white/40 group-hover:text-white/70 transition-colors" />
      </div>
    </a>
  );
};

export default InstagramReel;
