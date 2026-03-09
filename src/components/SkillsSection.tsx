import AnimatedSection from "./AnimatedSection";

const skills = [
  { name: "Python", icon: "🐍" },
  { name: "Linux", icon: "🐧" },
  { name: "Nmap", icon: "🔍" },
  { name: "Wireshark", icon: "🦈" },
  { name: "Burp Suite", icon: "🕷️" },
  { name: "Metasploit", icon: "💀" },
  { name: "Git", icon: "📦" },
  { name: "GitHub", icon: "🐙" },
  { name: "Networking", icon: "🌐" },
  { name: "TCP/IP", icon: "📡" },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 relative overflow-hidden">
    <div className="container mx-auto px-6 mb-10">
      <AnimatedSection>
        <h2 className="text-3xl font-bold mb-2 text-foreground">Skills & <span className="text-primary">Tools</span></h2>
        <div className="w-16 h-1 bg-primary/50 rounded" />
      </AnimatedSection>
    </div>

    <AnimatedSection delay={0.15}>
      <div className="relative w-full overflow-hidden py-8">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee w-max">
          {[...skills, ...skills].map((skill, i) => (
            <div
              key={i}
              className="mx-4 glass-card px-6 py-4 flex flex-col items-center gap-2 min-w-[120px] cursor-default hover:scale-110 hover:border-primary/30 hover:shadow-[0_0_20px_hsl(258_100%_62%/0.2)] transition-all duration-300"
            >
              <span className="text-3xl">{skill.icon}</span>
              <span className="text-sm font-mono text-muted-foreground whitespace-nowrap">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  </section>
);

export default SkillsSection;
