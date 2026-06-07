import { Award, Calendar, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

type Cert = {
  title: string;
  org: string;
  date: string;
  dateISO: string; // sortable
  desc: string;
};

// Sorted newest-first
const certifications: Cert[] = [
  {
    title: "Cybersecurity Professional Certification",
    org: "Google · Coursera",
    date: "Jan 2024",
    dateISO: "2024-01",
    desc: "Comprehensive program covering threat detection, SIEM tooling, network defense, and incident response workflows used by SOC analysts.",
  },
  {
    title: "Cybersecurity Fundamentals",
    org: "Infosys Springboard",
    date: "2024",
    dateISO: "2024-06",
    desc: "Core security concepts: CIA triad, cryptography basics, vulnerability management, and best practices for securing modern infrastructure.",
  },
  {
    title: "Introduction to Python",
    org: "Infosys Springboard",
    date: "2024",
    dateISO: "2024-03",
    desc: "Foundations of Python programming with hands-on practice on data structures, scripting, and automation — the backbone of security tooling.",
  },
];

const CertificationsTimeline = () => {
  const sorted = [...certifications].sort((a, b) =>
    b.dateISO.localeCompare(a.dateISO)
  );

  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-2 text-foreground">
            Certifications <span className="text-primary">Timeline</span>
          </h2>
          <div className="w-16 h-1 bg-primary/50 rounded mb-10" />
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent md:-translate-x-1/2" />

          <div className="space-y-10">
            {sorted.map((c, i) => {
              const onLeft = i % 2 === 0;
              return (
                <AnimatedSection key={c.title} delay={i * 0.1}>
                  <div
                    className={`relative md:grid md:grid-cols-2 md:gap-10 items-start ${
                      onLeft ? "" : "md:[&>*:first-child]:order-2"
                    }`}
                  >
                    {/* Card side */}
                    <div
                      className={`pl-12 md:pl-0 ${
                        onLeft ? "md:pr-10 md:text-right" : "md:pl-10"
                      }`}
                    >
                      <motion.div
                        whileHover={{ y: -4, scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 300, damping: 22 }}
                        className="glass-card neon-border p-5 group hover:border-primary/40 transition-all duration-300"
                      >
                        <div
                          className={`flex items-center gap-2 text-xs text-muted-foreground mb-2 ${
                            onLeft ? "md:justify-end" : ""
                          }`}
                        >
                          <Calendar className="w-3.5 h-3.5 text-primary" />
                          <span className="font-mono">{c.date}</span>
                        </div>
                        <h3 className="text-base md:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                          {c.title}
                        </h3>
                        <p className="text-sm text-primary font-medium mt-1">
                          {c.org}
                        </p>
                        <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                          {c.desc}
                        </p>
                      </motion.div>
                    </div>

                    {/* Empty spacer for the opposite column on desktop */}
                    <div className="hidden md:block" />

                    {/* Dot on the spine */}
                    <div className="absolute left-4 md:left-1/2 top-5 -translate-x-1/2 z-10">
                      <div className="w-9 h-9 rounded-full bg-background border border-primary/40 flex items-center justify-center shadow-[0_0_15px_hsl(195_100%_50%/0.25)]">
                        <Award className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Tail */}
          <div className="relative pl-12 md:pl-0 mt-8 flex md:justify-center">
            <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2">
              <div className="w-3 h-3 rounded-full bg-primary/60 animate-pulse" />
            </div>
            <div className="md:text-center text-sm text-muted-foreground flex items-center gap-2">
              <BadgeCheck className="w-4 h-4 text-primary" />
              <span>More certifications in progress…</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsTimeline;
