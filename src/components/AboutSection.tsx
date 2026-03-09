import { Shield, Lock, Server } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const cards = [
  { icon: Shield, title: "Cyber Defense", desc: "Threat analysis, incident response, and security monitoring." },
  { icon: Lock, title: "Secure Systems", desc: "Building resilient infrastructure with defense-in-depth." },
  { icon: Server, title: "Network Security", desc: "Protocol analysis, firewall management, and intrusion detection." },
];

const AboutSection = () => (
  <section id="about" className="py-24 relative">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <h2 className="text-3xl font-bold mb-2 text-foreground">About <span className="text-primary">Me</span></h2>
        <div className="w-16 h-1 bg-primary/50 rounded mb-10" />
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <div className="glass-card neon-border p-8 md:p-12 max-w-4xl">
          <p className="text-muted-foreground leading-relaxed mb-8">
            I'm a Computer Science Engineering student with a deep passion for cybersecurity and secure system architecture. My focus lies in understanding and building resilient digital infrastructure — from network-level defenses to application security monitoring. I'm driven by the challenge of staying ahead of threats and building systems that protect critical data and services.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {cards.map((item, i) => (
              <motion.div
                key={i}
                className="glass-card p-5 group hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.03 }}
              >
                <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default AboutSection;
