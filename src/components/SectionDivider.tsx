import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "cyber" | "pulse" | "scan" | "glitch";
}

const SectionDivider = ({ variant = "cyber" }: SectionDividerProps) => {
  if (variant === "pulse") {
    return (
      <div className="relative py-8 flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="relative z-10 w-3 h-3 rounded-full bg-primary/60 shadow-[0_0_20px_hsl(195_100%_50%/0.5)]"
          initial={{ scale: 0 }}
          whileInView={{ scale: [0, 1.5, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        <motion.div
          className="absolute w-8 h-8 rounded-full border border-primary/20"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: [0, 3, 2.5], opacity: [0, 0.5, 0] }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.5, delay: 0.6 }}
        />
      </div>
    );
  }

  if (variant === "scan") {
    return (
      <div className="relative py-10 overflow-hidden">
        <div className="absolute inset-x-0 top-1/2 h-px bg-border/20" />
        <motion.div
          className="absolute top-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent w-1/3"
          initial={{ left: "-33%" }}
          whileInView={{ left: "100%" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <div className="flex justify-center">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 bg-primary/40 rounded-full"
                initial={{ height: 4 }}
                whileInView={{ height: [4, 16 + i * 4, 4] }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: 0.4 + i * 0.1, ease: "easeInOut" }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    );
  }

  if (variant === "glitch") {
    return (
      <div className="relative py-8 overflow-hidden">
        <motion.div
          className="h-px w-full"
          style={{
            background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.3) 20%, hsl(var(--accent) / 0.3) 50%, hsl(var(--primary) / 0.3) 80%, transparent)",
          }}
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="flex justify-center gap-4 mt-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-8 h-0.5 rounded-full"
              style={{
                background: i === 1
                  ? "hsl(var(--accent))"
                  : "hsl(var(--primary) / 0.4)",
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: [0, 1, 0.6, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.8 + i * 0.15 }}
            />
          ))}
        </div>
      </div>
    );
  }

  // Default: cyber
  return (
    <div className="relative py-10 overflow-hidden">
      <motion.div
        className="absolute inset-x-0 top-1/2 h-px"
        style={{
          background: "linear-gradient(90deg, transparent 0%, hsl(var(--primary) / 0.15) 15%, hsl(var(--primary) / 0.4) 50%, hsl(var(--primary) / 0.15) 85%, transparent 100%)",
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="flex justify-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0, rotate: 45, scale: 0 }}
          whileInView={{ opacity: 1, rotate: 45, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="w-3 h-3 border border-primary/50 bg-background" />
          <div className="absolute inset-0.5 bg-primary/30" />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionDivider;
