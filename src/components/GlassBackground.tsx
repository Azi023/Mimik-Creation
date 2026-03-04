/**
 * Reusable background blobs for sections that use glass cards on light backgrounds.
 * These give backdrop-filter something to actually blur against.
 */
const GlassBackground = ({ variant = "light" }: { variant?: "light" | "blue" }) => {
  if (variant === "blue") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[400px] h-[400px] rounded-full bg-mimik-yellow/[0.12] blur-3xl" />
        <div className="absolute -bottom-[15%] -right-[10%] w-[350px] h-[350px] rounded-full bg-white/[0.08] blur-3xl" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-[20%] -left-[10%] w-[400px] h-[400px] rounded-full bg-mimik-blue/[0.08] blur-3xl" />
      <div className="absolute -bottom-[15%] -right-[10%] w-[350px] h-[350px] rounded-full bg-mimik-yellow/[0.08] blur-3xl" />
    </div>
  );
};

export default GlassBackground;
