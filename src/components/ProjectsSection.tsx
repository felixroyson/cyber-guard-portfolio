import { Github, X, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import AnimatedSection from "./AnimatedSection";
import FeatureAccordion from "./FeatureAccordion";

const projects = [
  {
    title: "SOC-X",
    desc: "Security operations dashboard that visualizes security alerts from a Flask API and simulates incident response playbooks.",
    tech: ["Python", "Flask", "React", "REST API"],
    github: "https://github.com/felixroyson/soc-command-center",
    features: [
      "Real-time alert visualization dashboard",
      "Simulated incident response playbooks",
      "Flask REST API backend for alert ingestion",
      "Interactive React UI with severity filtering",
    ],
  },
  {
    title: "PUP – Pentest Unified Platform",
    desc: "Dashboard for packet analysis and vulnerability insights with real-time monitoring capabilities.",
    tech: ["Python", "Scapy", "React", "Node.js"],
    github: "https://github.com/felixroyson/pup",
    features: [
      "Live packet capture and inspection via Scapy",
      "Vulnerability insights aggregated in one view",
      "Node.js bridge between scanner and UI",
      "Modular architecture for new pentest modules",
    ],
  },
  {
    title: "FASA – File Automation Security Assistant",
    desc: "Automation platform for file analysis and classification using intelligent security heuristics.",
    tech: ["Python", "Automation", "ML", "REST API"],
    github: "https://github.com/felixroyson/trusty-file-protector",
    features: [
      "Automated file scanning and classification",
      "ML-driven heuristics for threat detection",
      "REST API for integration with other tools",
      "Configurable rule engine for custom policies",
    ],
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

        {/* Mobile-friendly sticky filter bar */}
        <AnimatedSection delay={0.08}>
          <div
            role="toolbar"
            aria-label="Filter projects by technology"
            className="sticky top-16 z-30 -mx-6 px-6 py-3 mb-8 bg-background/80 backdrop-blur-md border-y border-primary/10 md:static md:mx-0 md:px-0 md:py-0 md:border-0 md:bg-transparent md:backdrop-blur-0"
          >
            <div className="flex items-center gap-2 md:flex-wrap">
              <span className="hidden md:inline text-xs font-mono uppercase tracking-wider text-muted-foreground mr-1">
                Filter by tech:
              </span>
              <span className="md:hidden inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-muted-foreground shrink-0">
                <Filter className="w-3.5 h-3.5" aria-hidden="true" />
                Filter:
              </span>

              {/* Horizontal scroll on mobile, wrap on desktop */}
              <div className="flex md:flex-wrap items-center gap-2 overflow-x-auto scrollbar-none -mx-1 px-1 snap-x snap-mandatory md:overflow-visible md:mx-0 md:px-0">
                {allTech.map((t) => {
                  const active = activeTech === t;
                  return (
                    <button
                      key={t}
                      onClick={() => toggleTech(t)}
                      aria-pressed={active}
                      className={`shrink-0 snap-start text-xs font-mono px-3 py-1.5 md:px-2.5 md:py-1 rounded-full border transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
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
                    aria-label="Clear technology filter"
                    className="shrink-0 snap-start text-xs font-mono px-3 py-1.5 md:px-2 md:py-1 rounded-full border border-border/40 text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-all duration-300 flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                  >
                    <X className="w-3 h-3" aria-hidden="true" /> Clear
                  </button>
                )}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => {
              return (
                <motion.div
                  key={p.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 24 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  exit={{ opacity: 0, scale: 0.95, y: 24 }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 26,
                    delay: i * 0.06,
                  }}
                  whileHover={{ y: -8 }}
                  className="glass-card p-6 flex flex-col gap-4 h-full group hover:border-primary/30"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_hsl(195_100%_50%/0.15)] transition-all duration-300">
                    <span className="font-mono text-primary font-bold text-sm">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {p.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {p.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => {
                      const active = activeTech === t;
                      return (
                        <button
                          key={t}
                          onClick={() => toggleTech(t)}
                          aria-pressed={active}
                          className={`text-xs font-mono px-2.5 py-1 rounded-full border transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
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

                  <FeatureAccordion
                    id={`proj-${p.title}`}
                    items={p.features.map((f) => ({ title: f, content: null }))}
                    variant="inline"
                  />

                  <div className="flex items-center gap-2 mt-auto pt-1">
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:bg-primary/10"
                    >
                      <a href={p.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" aria-hidden="true" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </motion.div>
              );
            })}
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
