import { Github, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "SOC-X",
    desc: "Security operations dashboard that visualizes security alerts from a Flask API and simulates incident response playbooks.",
    tech: ["Python", "Flask", "React", "REST API"],
    github: "https://github.com/felixroyson/soc-command-center",
  },
  {
    title: "PUP – Pentest Unified Platform",
    desc: "Dashboard for packet analysis and vulnerability insights with real-time monitoring capabilities.",
    tech: ["Python", "Scapy", "React", "Node.js"],
    github: "https://github.com/felixroyson/pup",
  },
  {
    title: "FASA – File Automation Security Assistant",
    desc: "Automation platform for file analysis and classification using intelligent security heuristics.",
    tech: ["Python", "Automation", "ML", "REST API"],
    github: "https://github.com/felixroyson/trusty-file-protector",
  },
];

const ProjectsSection = () => {
  const [activeTech, setActiveTech] = useState<string | null>(null);

  const allTech = useMemo(
    () => Array.from(new Set(projects.flatMap((p) => p.tech))).sort(),
    []
  );

  const filtered = activeTech
    ? projects.filter((p) => p.tech.includes(activeTech))
    : projects;

  const toggleTech = (t: string) =>
    setActiveTech((cur) => (cur === t ? null : t));

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-2 text-foreground">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary/50 rounded mb-6" />
        </AnimatedSection>

        {/* Tech filters */}
        <AnimatedSection delay={0.08}>
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground mr-1">
              Filter by tech:
            </span>
            {allTech.map((t) => {
              const active = activeTech === t;
              return (
                <button
                  key={t}
                  onClick={() => toggleTech(t)}
                  className={`text-xs font-mono px-2.5 py-1 rounded-full border transition-all duration-300 ${
                    active
                      ? "bg-primary text-primary-foreground border-primary shadow-[0_0_15px_hsl(195_100%_50%/0.35)]"
                      : "bg-primary/10 text-primary border-primary/20 hover:border-primary/60"
                  }`}
                >
                  {t}
                </button>
              );
            })}
            {activeTech && (
              <button
                onClick={() => setActiveTech(null)}
                className="text-xs font-mono px-2 py-1 rounded-full border border-border/40 text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-all duration-300 flex items-center gap-1"
              >
                <X className="w-3 h-3" /> Clear
              </button>
            )}
          </div>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card p-6 flex flex-col gap-4 h-full group hover:border-primary/30"
              >
                {/* Index */}
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_hsl(195_100%_50%/0.15)] transition-all duration-300">
                  <span className="font-mono text-primary font-bold text-sm">
                    0{i + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {p.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {p.desc}
                </p>

                {/* Tech (clickable) */}
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => {
                    const active = activeTech === t;
                    return (
                      <button
                        key={t}
                        onClick={() => toggleTech(t)}
                        className={`text-xs font-mono px-2.5 py-1 rounded-full border transition-all duration-300 cursor-pointer ${
                          active
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-primary/10 text-primary border-primary/10 hover:border-primary/50 hover:bg-primary/20"
                        }`}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>

                {/* GitHub Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-fit text-primary hover:bg-primary/10 mt-auto group-hover:translate-x-1 transition-transform duration-300"
                  asChild
                >
                  <a href={p.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-1" />
                    GitHub
                  </a>
                </Button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground mt-10 text-sm">
            No projects match "{activeTech}".
          </p>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
