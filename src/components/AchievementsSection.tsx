import { Trophy, Award, Medal, Calendar } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

type Category = "all" | "hackathon" | "certification" | "award";

const achievements = [
  {
    type: "hackathon" as const,
    icon: Trophy,
    title: "Best Innovative Idea Award",
    org: "HACKZILLA, KPRIET",
    date: "Sep 2025",
    desc: "Recognized for presenting the most innovative solution at the RACE/CILLA Hackathon.",
  },
  {
    type: "hackathon" as const,
    icon: Trophy,
    title: "Finalist - BITNBUILD'25",
    org: "Google Developers Group(GDG), Fr. Conceicao Rodrigues College of Engineering(FRCRCE), Bandra",
    date: "Sep 2025",
    desc: "24 hours Online hackathon, Reached the finals in Tamil Nadu Exclusive State Hackathon.",
  },
  {
    type: "award" as const,
    icon: Medal,
    title: "Best Innovative Idea Award",
    org: "HACKZILLA, KPRIET",
    date: "Sep 2025",
    desc: "Recognized for presenting the most innovative solution at the RACE/CILLA Hackathon.",
  },
  {
    type: "award" as const,
    icon: Medal,
    title: "2nd Prize - Case Conclave",
    org: "VYASA 2K26, ESEC",
    date: "2026",
    desc: "Recognized for presenting our idea as an innovative solution at the VYASA/Case Conclave Event.",
  },
  {
    type: "certification" as const,
    icon: Award,
    title: "Cybersecurity Professional Certification",
    org: "Google, Coursera",
    date: "Jan 2024",
    desc: "Completed comprehensive cybersecurity training program.",
  },
  {
    type: "certification" as const,
    icon: Award,
    title: "Cybersecurity",
    org: "Infosys Springboard",
    date: "2024",
    desc: "Cybersecurity fundamentals and best practices.",
  },
  {
    type: "certification" as const,
    icon: Award,
    title: "Introduction to Python",
    org: "Infosys Springboard",
    date: "2024",
    desc: "Python programming fundamentals.",
  },
];

const filters: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Hackathons", value: "hackathon" },
  { label: "Certifications", value: "certification" },
  { label: "Awards", value: "award" },
];

const badgeColor: Record<string, string> = {
  hackathon: "bg-primary/20 text-primary",
  certification: "bg-emerald-500/20 text-emerald-400",
  award: "bg-amber-500/20 text-amber-400",
};

const iconBg: Record<string, string> = {
  hackathon: "bg-primary/10",
  certification: "bg-emerald-500/10",
  award: "bg-amber-500/10",
};

const iconColor: Record<string, string> = {
  hackathon: "text-primary",
  certification: "text-emerald-400",
  award: "text-amber-400",
};

const AchievementsSection = () => {
  const [active, setActive] = useState<Category>("all");
  const filtered = active === "all" ? achievements : achievements.filter((a) => a.type === active);

  return (
    <section id="achievements" className="py-24 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-2 text-foreground">
            Achievements & <span className="text-primary">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-primary/50 rounded mb-10" />
        </AnimatedSection>

        {/* Filters */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap gap-3 mb-10">
            {filters.map((f) => (
              <motion.button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  active === f.value
                    ? "text-primary-foreground border-primary"
                    : "bg-card/60 text-muted-foreground border-border/40 hover:border-primary/40 hover:text-foreground"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {active === f.value && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{f.label}</span>
              </motion.button>
            ))}
          </div>
        </AnimatedSection>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.title + item.org + item.type}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass-card p-6 flex flex-col gap-3 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-12 h-12 rounded-xl ${iconBg[item.type]} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={`w-6 h-6 ${iconColor[item.type]}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full capitalize ${badgeColor[item.type]}`}>
                        {item.type}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {item.date}
                      </span>
                    </div>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-primary font-medium">{item.org}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
