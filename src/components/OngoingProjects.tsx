import { Github, FlaskConical } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";
import { ongoingProjects } from "@/data/ongoingProjects";

const OngoingProjects = () => {
  return (
    <section id="ongoing" className="py-24 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary mb-3">
            <FlaskConical className="w-4 h-4" />
            <span>In the lab</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
            Ongoing Projects <span className="text-primary">& Research</span>
          </h2>
          <div className="w-16 h-1 bg-primary/50 rounded mb-4" />
          <p className="text-muted-foreground max-w-3xl leading-relaxed mb-10">
            Projects currently being researched, designed, and developed. These initiatives represent
            ongoing exploration in cybersecurity, secure systems, digital safety, and intelligent
            monitoring technologies.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {ongoingProjects.map((p, i) => (
            <AnimatedSection key={p.slug} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="glass-card neon-border p-6 h-full flex flex-col gap-4 group hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-sm text-primary/90 font-medium mt-1">{p.tagline}</p>
                  </div>
                  <span className="shrink-0 text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/30">
                    {p.status}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>

                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                    Features
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5 text-sm text-foreground/90">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                    {p.focusAreas ? "Focus Areas" : "Tech Stack"}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(p.focusAreas ?? p.tech).map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {p.github && (
                  <div className="flex items-center gap-2 mt-auto pt-2">
                    <Button asChild size="sm" variant="ghost" className="text-primary hover:bg-primary/10">
                      <a href={p.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                )}
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OngoingProjects;
