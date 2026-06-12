import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const lines = [
  "Initializing secure connection...",
  "Loading encryption modules...",
  "Establishing protocols...",
  "System ready.",
];

const IntroLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const lineInterval = setInterval(() => {
      setCurrentLine((prev) =>
        prev < lines.length - 1 ? prev + 1 : prev
      );
    }, 600);

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 2));
    }, 50);

    const exitTimer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => {
      clearInterval(lineInterval);
      clearInterval(progressInterval);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-background flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-40" />

      {/* Scanning Line */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
        initial={{ top: "0%" }}
        animate={{ top: "100%" }}
        transition={{
          duration: 2.5,
          ease: "linear",
          repeat: Infinity,
        }}
      />

      {/* Corner Decorations */}
      {[
        "top-6 left-6 border-t border-l",
        "top-6 right-6 border-t border-r",
        "bottom-6 left-6 border-b border-l",
        "bottom-6 right-6 border-b border-r",
      ].map((pos, i) => (
        <motion.div
          key={i}
          className={`absolute w-8 h-8 border-primary/30 ${pos}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 + i * 0.1 }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6">

        {/* Logo */}
        <motion.div
          className="relative"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Outer Pulse Ring */}
          <motion.div
            className="absolute -inset-4 rounded-full border border-cyan-400/30"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 0, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />

          {/* Second Pulse Ring */}
          <motion.div
            className="absolute -inset-8 rounded-full border border-cyan-400/10"
            animate={{
              scale: [1, 1.35, 1],
              opacity: [0.4, 0, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />

          {/* Logo Container */}
          <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-cyan-400/50 shadow-[0_0_50px_rgba(0,200,255,0.5)]">
            <img
              src="/f2r-logo.png"
              alt="F2R Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Branding */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h1 className="font-mono text-3xl font-bold text-foreground">
            FELIX
            <span className="text-primary">.</span>
            F2R
          </h1>

          <p className="text-xs text-muted-foreground mt-2 tracking-[0.3em] uppercase">
            Cybersecurity Portfolio
          </p>
        </motion.div>

        {/* Terminal Output */}
        <div className="w-72 space-y-2">
          {lines.map((line, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -10 }}
              animate={i <= currentLine ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3 }}
            >
              <span className="text-primary font-mono text-xs">›</span>

              <span
                className={`font-mono text-xs ${
                  i < currentLine
                    ? "text-muted-foreground"
                    : i === currentLine
                    ? "text-primary"
                    : "text-muted-foreground/30"
                }`}
              >
                {line}
              </span>

              {i === currentLine && i < lines.length - 1 && (
                <motion.span
                  className="w-1.5 h-3.5 bg-primary inline-block"
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                  }}
                />
              )}

              {i === lines.length - 1 &&
                i <= currentLine && (
                  <span className="text-emerald-400 text-xs">
                    ✓
                  </span>
                )}
            </motion.div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-72">
          <div className="h-1 w-full bg-border/30 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary via-cyan-400 to-accent rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex justify-between mt-2">
            <span className="font-mono text-[10px] text-muted-foreground">
              LOADING
            </span>

            <span className="font-mono text-[10px] text-primary">
              {Math.min(progress, 100)}%
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default IntroLoader;