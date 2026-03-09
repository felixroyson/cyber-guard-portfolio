import { Github, Linkedin, Mail, Globe, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const orbitIcons = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Mail, label: "Email", href: "mailto:felix@example.com" },
  { icon: Globe, label: "Portfolio", href: "#" },
  { icon: FileText, label: "Resume", href: "#" },
];

const HeroSection = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden hero-gradient">
      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-xs font-mono text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              Available for opportunities
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-foreground">
              Felix Roysom <span className="neon-text">A</span>
            </h1>
            <p className="font-mono text-sm text-primary tracking-wider">
              Cybersecurity · Secure Systems · Defense Tech
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-lg">
              Computer Science Engineering student focused on cybersecurity, network security, and secure digital infrastructure. Interested in cyber defense and security monitoring systems.
            </p>
            <div className="flex gap-4 pt-2">
              <Button variant="default" size="lg" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
                View Projects
              </Button>
              <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10">
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right – Orbit */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Orbit rings */}
              <div className="absolute inset-4 rounded-full border border-primary/10" />
              <div className="absolute inset-0 rounded-full border border-primary/5" />

              {/* Center avatar */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-secondary flex items-center justify-center neon-border">
                  <span className="text-3xl md:text-4xl font-bold font-mono neon-text">FR</span>
                </div>
              </div>

              {/* Orbiting icons */}
              <div className="absolute inset-0 animate-orbit">
                {orbitIcons.map((item, i) => {
                  const angle = (i * 360) / orbitIcons.length;
                  const rad = (angle * Math.PI) / 180;
                  const radius = 46;
                  const x = 50 + radius * Math.cos(rad);
                  const y = 50 + radius * Math.sin(rad);
                  const Icon = item.icon;

                  return (
                    <a
                      key={i}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute group"
                      style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
                      onMouseEnter={() => setHoveredIdx(i)}
                      onMouseLeave={() => setHoveredIdx(null)}
                    >
                      <div className="animate-orbit-reverse">
                        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full glass-card flex items-center justify-center transition-all duration-300 ${hoveredIdx === i ? "neon-border scale-110 bg-primary/20" : ""}`}>
                          <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                        </div>
                        {hoveredIdx === i && (
                          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono text-primary whitespace-nowrap glass-card px-2 py-1">
                            {item.label}
                          </div>
                        )}
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full animate-orbit" viewBox="0 0 100 100">
                {orbitIcons.map((_, i) => {
                  const angle = (i * 360) / orbitIcons.length;
                  const rad = (angle * Math.PI) / 180;
                  const radius = 46;
                  const x = 50 + radius * Math.cos(rad);
                  const y = 50 + radius * Math.sin(rad);
                  return (
                    <line key={i} x1="50" y1="50" x2={x} y2={y} stroke="hsl(270 100% 70% / 0.08)" strokeWidth="0.3" />
                  );
                })}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
