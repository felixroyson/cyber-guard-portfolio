import { Github, Linkedin, Mail, Shield } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const contacts = [
  { icon: Github, label: "GitHub", href: "https://github.com", value: "github.com/felix" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", value: "linkedin.com/in/felix" },
  { icon: Mail, label: "Email", href: "mailto:felix@example.com", value: "felix@example.com" },
];

const ContactSection = () => (
  <section id="contact" className="py-24 relative">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <h2 className="text-3xl font-bold mb-2 text-foreground">Get in <span className="text-primary">Touch</span></h2>
        <div className="w-16 h-1 bg-primary/50 rounded mb-10" />
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <div className="glass-card neon-border p-8 md:p-12 max-w-2xl">
          <p className="text-muted-foreground mb-8">
            Interested in collaborating on cybersecurity projects or discussing security research? Feel free to reach out.
          </p>
          <div className="space-y-4">
            {contacts.map((c, i) => (
              <motion.a
                key={i}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass-card p-4 group hover:border-primary/30 transition-all duration-300"
                whileHover={{ x: 8, scale: 1.01 }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <c.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{c.label}</p>
                  <p className="text-xs text-muted-foreground font-mono">{c.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-border/20 flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <Shield className="w-4 h-4 text-primary" />
        <span>© 2026 Felix Roysom A. Built with security in mind.</span>
      </div>
    </div>
  </section>
);

export default ContactSection;
