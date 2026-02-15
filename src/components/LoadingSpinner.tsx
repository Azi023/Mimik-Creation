const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-4">
      <div
        className="w-12 h-12 rounded-full border-4 border-t-transparent animate-spin"
        style={{ borderColor: "#FDD51E", borderTopColor: "transparent" }}
      />
      <p className="text-sm font-medium text-muted-foreground">Loading…</p>
    </div>
  </div>
);

export default LoadingSpinner;
