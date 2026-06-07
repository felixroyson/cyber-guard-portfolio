import { useState } from "react";
import { motion } from "framer-motion";
import {
  SiPython, SiLinux, SiWireshark, SiMetasploit, SiGit, SiGithub,
  SiMysql, SiPostgresql, SiDocker, SiReact,
} from "react-icons/si";
import { TbNetwork, TbWorldSearch } from "react-icons/tb";
import { GiRadarSweep } from "react-icons/gi";
import { MdBugReport } from "react-icons/md";
import AnimatedSection from "./AnimatedSection";

const skills = [
  { name: "Python", Icon: SiPython },
  { name: "Linux", Icon: SiLinux },
  { name: "Nmap", Icon: GiRadarSweep },
  { name: "Wireshark", Icon: SiWireshark },
  { name: "Burp Suite", Icon: MdBugReport },
  { name: "Metasploit", Icon: SiMetasploit },
  { name: "OSINT", Icon: TbWorldSearch },
  { name: "Git", Icon: SiGit },
  { name: "GitHub", Icon: SiGithub },
  { name: "Networking", Icon: TbNetwork },
  { name: "MySQL", Icon: SiMysql },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Docker", Icon: SiDocker },
  { name: "React", Icon: SiReact },
];

const SkillsSection = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-10">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-2 text-foreground">Skills & <span className="text-primary">Tools</span></h2>
          <div className="w-16 h-1 bg-primary/50 rounded" />
        </AnimatedSection>
      </div>

      <AnimatedSection delay={0.15}>
        <div className="relative w-full overflow-hidden py-8">
          {/* Edge fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee w-max items-center">
            {[...skills, ...skills].map((skill, i) => {
              const realIdx = i % skills.length;
              return (
                <div
                  key={i}
                  className="mx-8 md:mx-12 relative cursor-default flex flex-col items-center"
                  onMouseEnter={() => setHoveredIdx(realIdx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  <motion.div
                    className="transition-all duration-300"
                    whileHover={{ scale: 1.2 }}
                  >
                    <skill.Icon
                      className={`w-12 h-12 md:w-[60px] md:h-[60px] transition-all duration-300 ${
                        hoveredIdx === realIdx
                          ? "text-primary drop-shadow-[0_0_15px_hsl(195_100%_50%/0.5)]"
                          : "text-muted-foreground/60"
                      }`}
                    />
                  </motion.div>
                  {hoveredIdx === realIdx && (
                    <motion.span
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -bottom-7 text-xs font-mono text-primary whitespace-nowrap bg-card border border-border/40 rounded-lg px-2 py-1"
                    >
                      {skill.name}
                    </motion.span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default SkillsSection;
