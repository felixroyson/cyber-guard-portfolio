import { Github, Linkedin, Mail, ExternalLink, Shield, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const contacts = [
  { icon: Mail, label: "Email", value: "felixroys2004@gmail.com", href: "https://mail.google.com/mail/u/0/?fs=1&to=felixroys2004@gmail.com&tf=cm" },
  { icon: Github, label: "GitHub", value: "felixroyson", href: "https://github.com/felixroyson/" },
  { icon: Linkedin, label: "LinkedIn", value: "Felix Royson A", href: "https://www.linkedin.com/in/felix-royson-a-72894a374/" },
];

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendViaGmail = () => {
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`);
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=felixroys2004@gmail.com&su=${subject}&body=${body}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-2 text-foreground text-center">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            Have a project in mind or want to collaborate? Let's connect!
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Contact Info */}
            <div className="glass-card neon-border p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Contact Info</h3>
              <div className="space-y-5">
                {contacts.map((c, i) => (
                  <motion.a
                    key={i}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between glass-card p-4 group hover:border-primary/30 transition-all duration-300"
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors border border-primary/20">
                        <c.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{c.label}</p>
                        <p className="text-sm font-semibold text-foreground">{c.value}</p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Send Message */}
            <div className="glass-card neon-border p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Send Message</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-secondary/50 border border-border/40 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-secondary/50 border border-border/40 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-secondary/50 border border-border/40 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
                <Button
                  className="w-full rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground py-3 font-semibold"
                  onClick={handleSendViaGmail}
                >
                  <Send className="w-4 h-4 mr-2" /> Send via Gmail
                </Button>
              </div>
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
};

export default ContactSection;
