import { Github, Linkedin, Mail, ChevronRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import profileImg from "@/assets/profile.png";
import TypingText from "@/components/TypingText";

const socialIcons = [
  { icon: Github, label: "GitHub", href: "https://github.com/felixroyson/" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/felix-royson-a-72894a374/" },
  { icon: Mail, label: "Gmail", href: "https://mail.google.com/mail/u/0/?fs=1&to=felixroys2004@gmail.com&tf=cm" },
];



const HeroSection = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [poppedIdx, setPoppedIdx] = useState<number | null>(null);


  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden hero-gradient">
      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-xs font-mono text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              Available for opportunities
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] text-foreground max-w-3xl min-h-[2.4em]">
              <TypingText text="Cybersecurity &" speed={55} />
              <span className="block text-primary">
                <TypingText text="Secure Systems Engineer" speed={55} delay={900} />
              </span>
            </h1>
            <p className="text-muted-foreground leading-relaxed max-w-lg">
              Computer Science Engineering student focused on cybersecurity, network security, and secure digital infrastructure. Interested in cyber defense and security monitoring systems.
            </p>
            <div className="flex gap-4 pt-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
                  View Projects <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button variant="outline" size="lg" className="rounded-full border-primary/30 text-primary hover:bg-primary/10 px-8" asChild>
                  <a href="/Felix_Royson_Resume.pdf" download>
                    Download Resume
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right – Profile with floating social icons */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-80 h-80 md:w-[480px] md:h-[480px] [--orbit-r:130px] md:[--orbit-r:175px]">
              {/* Glow behind avatar */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-primary/10 blur-3xl" />
              </div>

              {/* Orbit rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[calc(var(--orbit-r)*2)] h-[calc(var(--orbit-r)*2)] rounded-full border border-dashed border-primary/15" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[calc(var(--orbit-r)*2-28px)] h-[calc(var(--orbit-r)*2-28px)] rounded-full border border-primary/10" />
              </div>

              {/* Center avatar with profile photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-primary/40 shadow-[0_0_30px_hsl(195_100%_50%/0.2)]">
                  <img src={profileImg} alt="Felix Royson A" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Social bubbles — each in its own vertical lane (no overlap), rising loop, pop on click */}
              {socialIcons.map((item, i) => {
                const Icon = item.icon;
                const isHover = hoveredIdx === i;
                const isPopped = poppedIdx === i;
                // Distinct lanes — different left% & vertical anchor so paths never cross
                const lanes = [
                  { left: "6%",  top: "50%", range: "180px" },  // GitHub  – left lane (full height)
                  { left: "50%", top: "8%",  range: "90px"  },  // LinkedIn – top-center lane (short travel above avatar)
                  { left: "94%", top: "50%", range: "180px" },  // Gmail   – right lane (full height)
                ];
                const durations = [9, 11, 13];
                const delays   = [0, 2.6, 5.1];
                const lane = lanes[i];
                return (
                  <div
                    key={i}
                    className="absolute pointer-events-none"
                    style={{ left: lane.left, top: lane.top }}
                  >
                    <button
                      type="button"
                      aria-label={item.label}
                      onMouseEnter={() => setHoveredIdx(i)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      onClick={(e) => {
                        e.preventDefault();
                        if (isPopped) return;
                        setPoppedIdx(i);
                        window.setTimeout(() => {
                          window.open(item.href, "_blank", "noopener,noreferrer");
                        }, 450);
                        window.setTimeout(() => setPoppedIdx(null), 1400);
                      }}
                      className="relative pointer-events-auto group block bg-transparent border-0 p-0 cursor-pointer"
                      style={{
                        ["--lane-range" as any]: lane.range,
                        animation: isPopped
                          ? "bubble-pop 0.9s cubic-bezier(0.5,-0.3,0.7,1.4) forwards"
                          : `bubble-lane-rise ${durations[i]}s ease-in-out ${delays[i]}s infinite`,
                      }}
                    >
                      <div
                        className={`relative w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-300 overflow-hidden backdrop-blur-md border ${
                          isHover
                            ? "scale-110 border-primary/70 shadow-[0_0_24px_hsl(195_100%_50%/0.5)]"
                            : "border-primary/30 shadow-[0_0_18px_hsl(195_100%_50%/0.25)] hover:border-primary/50"
                        }`}
                        style={{
                          background:
                            "radial-gradient(circle at 30% 30%, hsl(195 100% 70% / 0.45), hsl(195 100% 50% / 0.18) 45%, hsl(220 30% 10% / 0.55) 75%)",
                        }}
                      >
                        <div className="absolute inset-1 rounded-full border border-primary/20 pointer-events-none" />
                        <div className="absolute top-1 left-1 w-3 h-3 md:w-4 md:h-4 rounded-full bg-white/60 blur-[2px] animate-bubble-shine" />
                        <div className="absolute top-2 left-3 w-1 h-1 rounded-full bg-white/70" />
                        <Icon className="relative z-10 w-5 h-5 md:w-6 md:h-6 text-primary drop-shadow-[0_0_6px_hsl(195_100%_60%/0.8)]" />
                      </div>
                      {isHover && !isPopped && (
                        <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 text-xs font-mono text-primary whitespace-nowrap bg-card/80 backdrop-blur border border-border/40 rounded-lg px-2 py-1">
                          {item.label}
                        </div>
                      )}
                    </button>
                  </div>
                );
              })}




              {/* Ambient rising bubbles */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {Array.from({ length: 10 }).map((_, i) => {
                  const size = 8 + ((i * 7) % 22);
                  const left = (i * 11 + 7) % 95;
                  const duration = 7 + (i % 5) * 1.5;
                  const delay = (i * 0.9) % 8;
                  return (
                    <span
                      key={i}
                      className="absolute bottom-0 rounded-full animate-bubble-rise"
                      style={{
                        left: `${left}%`,
                        width: size,
                        height: size,
                        animationDuration: `${duration}s`,
                        animationDelay: `${delay}s`,
                        background:
                          "radial-gradient(circle at 30% 30%, hsl(195 100% 80% / 0.7), hsl(195 100% 50% / 0.2) 55%, transparent 75%)",
                        boxShadow: "0 0 10px hsl(195 100% 50% / 0.35)",
                      }}
                    />
                  );
                })}
              </div>

              {/* Client Feedback dialogue box */}
              <motion.div
                className="absolute -bottom-4 right-0 md:-bottom-2 md:-right-4 glass-card p-3 md:p-4 max-w-[320px] md:max-w-[420px] shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <MessageCircle className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold text-primary">Proverbs 21:5</span>
                </div>
                <p className="text-sm text-muted-foreground italic leading-[1.8] whitespace-pre-line">
                  {"\"The plans of the diligent lead surely to abundance,\nbut everyone who is hasty comes only to poverty.\""}
                </p>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
