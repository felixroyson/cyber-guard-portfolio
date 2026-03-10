import { Shield, Lock, Server, Code, Database, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const cards = [
  { icon: Shield, title: "Cyber Defense", desc: "Threat analysis, incident response, and security monitoring." },
  { icon: Lock, title: "Secure Systems", desc: "Building resilient infrastructure with defense-in-depth." },
  { icon: Server, title: "Network Security", desc: "Protocol analysis, firewall management, and intrusion detection." },
];

const highlights = [
  { icon: Code, label: "Languages", value: "Python, Bash, JavaScript" },
  { icon: Database, label: "Databases", value: "MySQL, MongoDB" },
  { icon: Terminal, label: "OS", value: "Kali Linux, Ubuntu, Windows" },
  { icon: Shield, label: "Focus", value: "SOC, Pentesting, VAPT" },
];

const AboutSection = () => (
  <section id="about" className="py-24 relative">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <h2 className="text-3xl font-bold mb-2 text-foreground">About <span className="text-primary">Me</span></h2>
        <div className="w-16 h-1 bg-primary/50 rounded mb-10" />
      </AnimatedSection>

      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 max-w-6xl">
        {/* Left – About text + specialty cards (60-70%) */}
        <AnimatedSection delay={0.1}>
          <div className="glass-card neon-border p-8 md:p-10 h-full">
            <p className="text-muted-foreground leading-relaxed mb-8 text-[15px]">
              I'm a Computer Science Engineering student with a deep passion for cybersecurity and secure system architecture. My focus lies in understanding and building resilient digital infrastructure — from network-level defenses to application security monitoring. I'm driven by the challenge of staying ahead of threats and building systems that protect critical data and services.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {cards.map((item, i) => (
                <motion.div
                  key={i}
                  className="glass-card p-5 group hover:border-primary/30 transition-all duration-300"
                  whileHover={{ y: -6, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <item.icon className="w-7 h-7 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Right – Quick highlights (30-40%) */}
        <AnimatedSection delay={0.25}>
          <div className="glass-card neon-border p-8 md:p-10 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-6">Quick Overview</h3>
              <div className="space-y-5">
                {highlights.map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-4 group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={{ x: 4 }}
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 border border-primary/10 group-hover:border-primary/30 group-hover:shadow-[0_0_15px_hsl(195_100%_50%/0.15)]">
                      <h.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{h.label}</p>
                      <p className="text-sm font-semibold text-foreground">{h.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border/20">
              <p className="text-xs text-muted-foreground">
                Currently pursuing B.E. in Computer Science & Engineering with a specialization in Cybersecurity.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AboutSection;
