import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PRELOADER_SESSION_KEY = "mimik_preloader_shown";

const Preloader = () => {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<"counting" | "wipe" | "done">("counting");

  // Skip entirely if reduced motion or already shown this session
  const shouldSkip =
    typeof window !== "undefined" &&
    (sessionStorage.getItem(PRELOADER_SESSION_KEY) === "true" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  const [visible, setVisible] = useState(!shouldSkip);

  // Lock body scroll while preloader is active
  useEffect(() => {
    if (!visible) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  // Counter animation: 0 → 100 over ~2 seconds
  useEffect(() => {
    if (!visible || phase !== "counting") return;

    const duration = 2000;
    const steps = 100;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= steps) {
        clearInterval(timer);
        // Brief pause at 100 before wipe
        setTimeout(() => setPhase("wipe"), 300);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [visible, phase]);

  // Mark session as shown & remove preloader after wipe completes
  const onWipeComplete = useCallback(() => {
    sessionStorage.setItem(PRELOADER_SESSION_KEY, "true");
    setPhase("done");
    setVisible(false);
  }, []);

  // Trigger onWipeComplete after wipe animation duration
  useEffect(() => {
    if (phase !== "wipe") return;
    const timeout = setTimeout(onWipeComplete, 800);
    return () => clearTimeout(timeout);
  }, [phase, onWipeComplete]);

  if (!visible || phase === "done") return null;

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center"
          style={{
            zIndex: 9999,
            backgroundColor: "#0147D3",
            clipPath:
              phase === "wipe"
                ? undefined
                : "inset(0 0 0 0)",
          }}
          animate={
            phase === "wipe"
              ? { clipPath: "inset(0 0 0 100%)" }
              : { clipPath: "inset(0 0 0 0)" }
          }
          transition={
            phase === "wipe"
              ? { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
              : undefined
          }
        >
          {/* Logo */}
          <motion.img
            src="/Logo.webp"
            alt="Mimik Creations"
            className="w-32 md:w-40 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />

          {/* Counter */}
          <motion.div
            className="text-white font-display text-6xl md:text-7xl font-extrabold tabular-nums mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {count}
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 md:w-64 h-1 rounded-full bg-white/20 overflow-hidden mb-6">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: "#FDD51E" }}
              initial={{ width: "0%" }}
              animate={{ width: `${count}%` }}
              transition={{ duration: 0.05, ease: "linear" }}
            />
          </div>

          {/* Tagline */}
          <motion.p
            className="text-white/70 text-sm md:text-base font-body tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Creative Marketing Agency
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
