import { Github, Linkedin, Mail, ExternalLink, Shield, Send, MapPin, Copy, Check, Download } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const EMAIL = "felixroys2004@gmail.com";

const contacts = [
  { icon: Mail, label: "Email", value: EMAIL, href: `https://mail.google.com/mail/u/0/?fs=1&to=${EMAIL}&tf=cm` },
  { icon: Github, label: "GitHub", value: "felixroyson", href: "https://github.com/felixroyson/" },
  { icon: Linkedin, label: "LinkedIn", value: "Felix Royson A", href: "https://www.linkedin.com/in/felix-royson-a-72894a374/" },
];

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSendViaGmail = () => {
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`);
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${subject}&body=${body}`, "_blank");
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const handleDownloadVCard = () => {
    const vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "FN:Felix Royson A",
      "N:Royson;Felix;;;",
      "TITLE:Cybersecurity Enthusiast",
      `EMAIL;TYPE=INTERNET:${EMAIL}`,
      "URL:https://github.com/felixroyson",
      "URL:https://www.linkedin.com/in/felix-royson-a-72894a374/",
      "ADR;TYPE=HOME:;;;Tamil Nadu;;;India",
      "END:VCARD",
    ].join("\n");
    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Felix-Royson-A.vcf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-2 text-foreground">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-primary/50 rounded mb-4" />
          <p className="text-muted-foreground mb-10 max-w-lg">
            Have a project in mind or want to collaborate? Let's connect!
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6 max-w-6xl mx-auto">
          {/* Send Message – larger */}
          <AnimatedSection delay={0.1}>
            <div className="glass-card neon-border p-8 h-full">
              <h3 className="text-xl font-bold text-foreground mb-6">Send Message</h3>
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-secondary/50 border border-border/40 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-all duration-300 focus:shadow-[0_0_15px_hsl(195_100%_50%/0.1)]"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-secondary/50 border border-border/40 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-all duration-300 focus:shadow-[0_0_15px_hsl(195_100%_50%/0.1)]"
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-secondary/50 border border-border/40 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-all duration-300 resize-none focus:shadow-[0_0_15px_hsl(195_100%_50%/0.1)]"
                />
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    className="w-full rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground py-3 font-semibold shadow-[0_0_20px_hsl(195_100%_50%/0.2)] hover:shadow-[0_0_30px_hsl(195_100%_50%/0.35)] transition-all duration-300"
                    onClick={handleSendViaGmail}
                  >
                    <Send className="w-4 h-4 mr-2" /> Send via Gmail
                  </Button>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Info – right */}
          <AnimatedSection delay={0.2}>
            <div className="glass-card neon-border p-8 h-full flex flex-col">
              <h3 className="text-xl font-bold text-foreground mb-6">Contact Info</h3>
              <div className="space-y-4 flex-1">
                {contacts.map((c, i) => (
                  <motion.a
                    key={i}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between glass-card p-4 group hover:border-primary/30 transition-all duration-300"
                    whileHover={{ x: 4, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 border border-primary/20 group-hover:shadow-[0_0_15px_hsl(195_100%_50%/0.15)]">
                        <c.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{c.label}</p>
                        <p className="text-sm font-semibold text-foreground">{c.value}</p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border/20">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm">Tamil Nadu, India</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

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
