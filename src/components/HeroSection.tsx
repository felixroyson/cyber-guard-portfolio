import { Github, Linkedin, Mail, ChevronRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import profileImg from "@/assets/profile.png";

const socialIcons = [
  { icon: Github, label: "GitHub", href: "https://github.com/felixroyson/", position: { top: "8%", right: "5%" } },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/felix-royson-a-72894a374/", position: { bottom: "15%", left: "2%" } },
  { icon: Mail, label: "Gmail", href: "https://mail.google.com/mail/u/0/?fs=1&to=felixroys2004@gmail.com&tf=cm", position: { top: "20%", left: "8%" } },
];

const stats = [
  { value: "3+", label: "Projects Completed" },
  { value: "2+", label: "Certifications" },
  { value: "10+", label: "Skills" },
];

const HeroSection = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

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
<<<<<<< HEAD
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] text-foreground max-w-3xl">
            Cybersecurity &
            <span className="block text-primary">
              Secure Systems Engineer
            </span>
=======
            <p className="text-muted-foreground text-sm">Felix Roysom A+</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] text-foreground">
              Cybersecurity &{" "}
              <span className="text-primary">Secure Systems</span>{" "}
              <span className="text-foreground">Engineer.</span>
>>>>>>> 3eb901b6153539f57bc0b9de46975dbc7030dad7
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

            {/* Stats */}
            <div className="flex gap-8 pt-6">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                >
                  <p className="text-2xl md:text-3xl font-bold text-foreground">{s.value}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right – Profile with floating social icons */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-80 h-72 md:w-[480px] md:h-[380px]">
              {/* Glow behind avatar */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-primary/10 blur-3xl" />
              </div>

              {/* Orbit rings */}
              <div className="absolute inset-8 rounded-full border border-primary/10" />
              <div className="absolute inset-2 rounded-full border border-primary/5" />

              {/* Center avatar with profile photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-primary/40 shadow-[0_0_30px_hsl(195_100%_50%/0.2)]">
                  <img src={profileImg} alt="Felix Roysom A" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Client Feedback dialogue box */}
              <motion.div
<<<<<<< HEAD
                className="absolute -bottom-4 right-0 md:-bottom-2 md:-right-4 glass-card p-3 md:p-4 max-w-[320px] md:max-w-[420px] shadow-lg"
=======
                className="absolute -bottom-4 right-0 md:-bottom-2 md:-right-4 glass-card p-3 md:p-4 max-w-[260px] md:max-w-[300px] shadow-lg"
>>>>>>> 3eb901b6153539f57bc0b9de46975dbc7030dad7
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

              {/* Floating social icons */}
              {socialIcons.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute group"
                    style={item.position}
                    onMouseEnter={() => setHoveredIdx(i)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className={`w-11 h-11 md:w-14 md:h-14 rounded-full bg-card border border-border/40 flex items-center justify-center transition-all duration-300 ${hoveredIdx === i ? "scale-125 bg-primary/20 border-primary/50 shadow-[0_0_20px_hsl(195_100%_50%/0.4)]" : "hover:border-primary/30"}`}>
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    {hoveredIdx === i && (
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono text-primary whitespace-nowrap bg-card border border-border/40 rounded-lg px-2 py-1">
                        {item.label}
                      </div>
                    )}
                  </motion.a>
                );
              })}

              {/* Connecting lines SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                <line x1="50" y1="50" x2="85" y2="12" stroke="hsl(195 100% 50% / 0.08)" strokeWidth="0.3" />
                <line x1="50" y1="50" x2="12" y2="78" stroke="hsl(195 100% 50% / 0.08)" strokeWidth="0.3" />
                <line x1="50" y1="50" x2="15" y2="25" stroke="hsl(195 100% 50% / 0.08)" strokeWidth="0.3" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
