import { Shield, Lock, Server, Code, Database, Terminal, Cpu, Network } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const cards = [
  {
    icon: Shield,
    title: "Cyber Defense",
    desc: "Threat analysis, incident response, and security monitoring.",
    accent: "from-primary/30 to-cyan-400/10",
  },
  {
    icon: Lock,
    title: "Secure Systems",
    desc: "Building resilient infrastructure with defense-in-depth.",
    accent: "from-cyan-400/30 to-blue-500/10",
  },
  {
    icon: Server,
    title: "Network Security",
    desc: "Protocol analysis, firewall management, and intrusion detection.",
    accent: "from-blue-500/30 to-primary/10",
  },
];

const highlights = [
  { icon: Code, label: "Languages", value: "Python, Bash" },
  { icon: Database, label: "Databases", value: "MySQL, MongoDB, PostgreSQL" },
  { icon: Terminal, label: "OS", value: "Linux, Windows" },
  { icon: Shield, label: "Focus", value: "SOC, Pentesting, VAPT" },
];

const focusChips = [
  "Threat Hunting",
  "SOC Operations",
  "VAPT",
  "OSINT",
  "Network Forensics",
  "Secure Architecture",
];

const AboutSection = () => (
  <section id="about" className="py-24 relative overflow-hidden">
    {/* Ambient animated blobs */}
    <div className="absolute inset-0 pointer-events-none">
      <motion.div
        className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-primary/10 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -right-16 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl"
        animate={{ x: [0, -25, 0], y: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>

    <div className="container mx-auto px-6 relative">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary/50 rounded mb-10" />
      </AnimatedSection>

      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6 max-w-6xl mx-auto items-stretch">
        {/* Left – About text + specialty cards */}
        <AnimatedSection delay={0.1}>
          <div className="relative glass-card neon-border p-6 sm:p-8 md:p-10 h-full overflow-hidden">
            {/* Animated gradient border accent */}
            <motion.div
              aria-hidden
              className="absolute -inset-px rounded-2xl pointer-events-none opacity-60"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0deg, hsl(195 100% 50% / 0.25) 90deg, transparent 180deg, hsl(195 100% 50% / 0.15) 270deg, transparent 360deg)",
                WebkitMask:
                  "linear-gradient(#000,#000) content-box, linear-gradient(#000,#000)",
                WebkitMaskComposite: "xor" as unknown as string,
                padding: 1,
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            />

            <p className="text-muted-foreground leading-relaxed mb-8 text-[15px] relative">
              I'm a Computer Science Engineering student with a deep passion for cybersecurity and
              secure system architecture. My focus lies in understanding and building resilient
              digital infrastructure — from network-level defenses to application security
              monitoring. I'm driven by the challenge of staying ahead of threats and building
              systems that protect critical data and services.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 relative">
              {cards.map((item, i) => (
                <motion.div
                  key={i}
                  className="relative glass-card p-5 group overflow-hidden border border-primary/10 hover:border-primary/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.12, type: "spring", stiffness: 180, damping: 22 }}
                  whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* gradient wash */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  {/* shine sweep */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -inset-y-4 -left-1/2 w-1/2 rotate-12 bg-gradient-to-r from-transparent via-primary/15 to-transparent translate-x-0 group-hover:translate-x-[300%] transition-transform duration-[1100ms]" />
                  </div>

                  <div className="relative">
                    <div className="relative w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-3 border border-primary/20 group-hover:border-primary/50">
                      <motion.div
                        className="absolute inset-0 rounded-xl border border-primary/30"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                      />
                      <item.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Focus chips strip */}
            <div className="mt-8 pt-6 border-t border-border/20 relative">
              <p className="text-xs font-mono uppercase tracking-widest text-primary/80 mb-3 flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5" /> Areas I work on
              </p>
              <div className="flex flex-wrap gap-2">
                {focusChips.map((c, i) => (
                  <motion.span
                    key={c}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.06 }}
                    whileHover={{ y: -2, scale: 1.05 }}
                    className="text-xs font-mono px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 hover:border-primary/60 hover:bg-primary/20 transition-colors"
                  >
                    {c}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Right – Quick highlights */}
        <AnimatedSection delay={0.25}>
          <div className="relative glass-card neon-border p-6 sm:p-8 md:p-10 h-full flex flex-col justify-between overflow-hidden">
            {/* Decorative network icon corner */}
            <motion.div
              className="absolute -top-6 -right-6 text-primary/10"
              animate={{ rotate: [0, 6, 0, -6, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              <Network className="w-32 h-32" />
            </motion.div>

            <div className="relative">
              <h3 className="text-lg font-bold text-foreground mb-6">Quick Overview</h3>
              <div className="space-y-4">
                {highlights.map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-4 group p-2 -mx-2 rounded-xl hover:bg-primary/5 transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 200, damping: 22 }}
                    whileHover={{ x: 4 }}
                  >
                    <div className="relative w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/15 group-hover:border-primary/40 group-hover:shadow-[0_0_18px_hsl(195_100%_50%/0.25)] transition-all duration-300">
                      <motion.span
                        className="absolute inset-0 rounded-xl border border-primary/20"
                        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.4 }}
                      />
                      <h.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[11px] text-muted-foreground uppercase tracking-wider">
                        {h.label}
                      </p>
                      <p className="text-sm font-semibold text-foreground">{h.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative mt-8 pt-6 border-t border-border/20">
              <p className="text-xs text-muted-foreground leading-relaxed">
                Currently pursuing M.Tech in Computer Science & Engineering with a specialization in
                Cybersecurity.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AboutSection;
