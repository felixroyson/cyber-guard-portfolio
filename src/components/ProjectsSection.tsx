import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "SOC-X",
    desc: "Security operations dashboard that visualizes security alerts from a Flask API and simulates incident response playbooks.",
    tech: ["Python", "Flask", "React", "REST API"],
  },
  {
    title: "PUP – Pentest Unified Platform",
    desc: "Dashboard for packet analysis and vulnerability insights with real-time monitoring capabilities.",
    tech: ["Python", "Scapy", "React", "Node.js"],
  },
  {
    title: "FASA – File Automation Security Assistant",
    desc: "Automation platform for file analysis and classification using intelligent security heuristics.",
    tech: ["Python", "Automation", "ML", "REST API"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 relative">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold mb-2 text-foreground">Featured <span className="neon-text">Projects</span></h2>
      <div className="w-16 h-1 bg-primary/50 rounded mb-10" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="glass-card neon-glow-hover p-6 flex flex-col gap-4 hover:-translate-y-2 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="font-mono text-primary font-bold text-sm">0{i + 1}</span>
            </div>
            <h3 className="text-xl font-bold text-foreground">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="text-xs font-mono px-2 py-1 rounded bg-primary/10 text-primary">{t}</span>
              ))}
            </div>
            <Button variant="ghost" size="sm" className="w-fit text-primary hover:bg-primary/10 mt-auto">
              <ExternalLink className="w-4 h-4 mr-1" /> GitHub
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
