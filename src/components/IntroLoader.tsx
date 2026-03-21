import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield } from "lucide-react";

const lines = [
  "Initializing secure connection...",
  "Loading encryption modules...",
  "Establishing protocols...",
  "System ready.",
];

const IntroLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const lineInterval = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev < lines.length - 1) return prev + 1;
        return prev;
      });
    }, 600);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 50);

    const exitTimer = setTimeout(() => {
      setExiting(true);
      setTimeout(onComplete, 800);
    }, 3200);

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
      animate={exiting ? { opacity: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 cyber-grid opacity-40" />

      {/* Scanning line */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
        initial={{ top: "0%" }}
        animate={{ top: "100%" }}
        transition={{ duration: 2.5, ease: "linear", repeat: Infinity }}
      />

      {/* Corner brackets */}
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

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6">
        {/* Logo */}
        <motion.div
          className="relative"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center shadow-[0_0_40px_hsl(195_100%_50%/0.2)]">
            <Shield className="w-10 h-10 text-primary" />
          </div>
          <motion.div
            className="absolute -inset-2 rounded-2xl border border-primary/20"
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Name */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h1 className="font-mono text-2xl font-bold text-foreground">
<<<<<<< HEAD
            FELIX<span className="text-primary">.</span>F2R
=======
            Felix<span className="text-primary">.</span>sec
>>>>>>> 3eb901b6153539f57bc0b9de46975dbc7030dad7
          </h1>
          <p className="text-xs text-muted-foreground mt-1 tracking-widest uppercase">
            Security Portfolio
          </p>
        </motion.div>

        {/* Terminal lines */}
        <div className="w-72 space-y-1.5">
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
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
              )}
              {i === lines.length - 1 && i <= currentLine && (
                <span className="text-emerald-400 text-xs">✓</span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="w-72">
          <div className="h-0.5 w-full bg-border/30 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
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
