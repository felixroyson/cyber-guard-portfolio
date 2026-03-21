import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  /** Unique ambient glow config per section */
  variant?: "cyan-left" | "purple-right" | "dual" | "center" | "subtle";
}

const ParallaxSection = ({ children, className = "", variant = "subtle" }: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax layers move at different speeds
  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const glowConfigs = {
    "cyan-left": (
      <>
        <motion.div
          className="absolute -left-32 top-1/4 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[100px]"
          style={{ y: y1 }}
        />
        <motion.div
          className="absolute -right-48 bottom-1/4 w-[300px] h-[300px] rounded-full bg-accent/[0.03] blur-[80px]"
          style={{ y: y2 }}
        />
      </>
    ),
    "purple-right": (
      <>
        <motion.div
          className="absolute -right-32 top-1/3 w-[500px] h-[500px] rounded-full bg-accent/[0.05] blur-[100px]"
          style={{ y: y1 }}
        />
        <motion.div
          className="absolute -left-48 bottom-1/3 w-[300px] h-[300px] rounded-full bg-primary/[0.03] blur-[80px]"
          style={{ y: y2 }}
        />
      </>
    ),
    dual: (
      <>
        <motion.div
          className="absolute -left-24 top-1/4 w-[400px] h-[400px] rounded-full bg-primary/[0.04] blur-[100px]"
          style={{ y: y1 }}
        />
        <motion.div
          className="absolute -right-24 bottom-1/4 w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-[100px]"
          style={{ y: y2 }}
        />
      </>
    ),
    center: (
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[120px]"
        style={{ y: y1 }}
      />
    ),
    subtle: (
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/[0.02] blur-[100px]"
        style={{ y: y2 }}
      />
    ),
  };

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Parallax floating particles */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ opacity }}>
        {glowConfigs[variant]}

        {/* Floating dots */}
        <motion.div
          className="absolute left-[10%] top-[20%] w-1 h-1 rounded-full bg-primary/20"
          style={{ y: y1 }}
        />
        <motion.div
          className="absolute right-[15%] top-[40%] w-1.5 h-1.5 rounded-full bg-accent/20"
          style={{ y: y2 }}
        />
        <motion.div
          className="absolute left-[70%] bottom-[30%] w-1 h-1 rounded-full bg-primary/15"
          style={{ y: y1 }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ParallaxSection;
