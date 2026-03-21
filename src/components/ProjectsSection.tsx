<<<<<<< HEAD
import { Github } from "lucide-react";
=======
import { ExternalLink } from "lucide-react";
>>>>>>> 3eb901b6153539f57bc0b9de46975dbc7030dad7
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "SOC-X",
    desc: "Security operations dashboard that visualizes security alerts from a Flask API and simulates incident response playbooks.",
    tech: ["Python", "Flask", "React", "REST API"],
<<<<<<< HEAD
    github: "https://github.com/felixroyson/soc-command-center",
=======
>>>>>>> 3eb901b6153539f57bc0b9de46975dbc7030dad7
  },
  {
    title: "PUP – Pentest Unified Platform",
    desc: "Dashboard for packet analysis and vulnerability insights with real-time monitoring capabilities.",
    tech: ["Python", "Scapy", "React", "Node.js"],
<<<<<<< HEAD
    github: "https://github.com/felixroyson/pup",
=======
>>>>>>> 3eb901b6153539f57bc0b9de46975dbc7030dad7
  },
  {
    title: "FASA – File Automation Security Assistant",
    desc: "Automation platform for file analysis and classification using intelligent security heuristics.",
    tech: ["Python", "Automation", "ML", "REST API"],
<<<<<<< HEAD
    github: "https://github.com/felixroyson/trusty-file-protector",
=======
>>>>>>> 3eb901b6153539f57bc0b9de46975dbc7030dad7
  },
  {
    title: "GC – Guardian Companion",
    desc: "A smart personal safety and routine monitoring application designed to enhance user security through real-time tracking and alerts.",
    tech: ["React", "Supabase", "Maps API"],
<<<<<<< HEAD
    github: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-2 text-foreground">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary/50 rounded mb-10" />
        </AnimatedSection>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <AnimatedSection key={i} delay={i * 0.12}>
              <motion.div
                className="glass-card p-6 flex flex-col gap-4 h-full group hover:border-primary/30 transition-all duration-300"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
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

                {/* Tech */}
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* GitHub Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-fit text-primary hover:bg-primary/10 mt-auto group-hover:translate-x-1 transition-transform duration-300"
                  asChild
                >
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    GitHub
                  </a>
                </Button>

              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
=======
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 relative">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <h2 className="text-3xl font-bold mb-2 text-foreground">Featured <span className="text-primary">Projects</span></h2>
        <div className="w-16 h-1 bg-primary/50 rounded mb-10" />
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <AnimatedSection key={i} delay={i * 0.12}>
            <motion.div
              className="glass-card p-6 flex flex-col gap-4 h-full group hover:border-primary/30 transition-all duration-300"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_hsl(195_100%_50%/0.15)] transition-all duration-300">
                <span className="font-mono text-primary font-bold text-sm">0{i + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/10">{t}</span>
                ))}
              </div>
              <Button variant="ghost" size="sm" className="w-fit text-primary hover:bg-primary/10 mt-auto group-hover:translate-x-1 transition-transform duration-300">
                <ExternalLink className="w-4 h-4 mr-1" /> GitHub
              </Button>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
>>>>>>> 3eb901b6153539f57bc0b9de46975dbc7030dad7
