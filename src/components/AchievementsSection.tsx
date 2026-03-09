import { Trophy, Award } from "lucide-react";

const AchievementsSection = () => (
  <section id="achievements" className="py-24 relative">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold mb-2 text-foreground">Achievements & <span className="neon-text">Certifications</span></h2>
      <div className="w-16 h-1 bg-primary/50 rounded mb-10" />

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
        {/* Achievement */}
        <div className="glass-card neon-glow-hover p-6 flex gap-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <Trophy className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-1">HackZILLA Hackathon</h3>
            <p className="text-sm text-primary font-mono mb-1">Best Innovative Idea Award</p>
            <p className="text-sm text-muted-foreground">Recognized for innovative approach to cybersecurity challenges.</p>
          </div>
        </div>

        {/* Certifications */}
        {[
          { title: "Cybersecurity", issuer: "Infosys Springboard" },
          { title: "Introduction to Python", issuer: "Infosys Springboard" },
        ].map((cert, i) => (
          <div key={i} className="glass-card neon-glow-hover p-6 flex gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-1">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
