import { useState, useEffect } from "react";
import { Menu, X, Shield, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const links = ["Home", "About", "Skills", "Projects", "Achievements", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Intersection observer for active section tracking
  useEffect(() => {
    const sectionIds = links.map((l) => l.toLowerCase());
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id.charAt(0).toUpperCase() + id.slice(1));
          }
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleClick = (id: string) => {
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-2 bg-background/60 backdrop-blur-2xl border-b border-primary/10 shadow-[0_4px_30px_hsl(195_100%_50%/0.06)]"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Shield className="w-6 h-6 text-primary" />
          <span className="font-mono font-bold text-lg text-foreground">
            Felix<span className="text-primary">.</span>sec
          </span>
        </motion.div>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l, i) => {
            const isActive = activeSection === l;
            return (
              <motion.button
                key={l}
                onClick={() => handleClick(l)}
                className={`relative text-sm px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-full bg-primary/10 border border-primary/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{l}</span>
              </motion.button>
            );
          })}
        </div>

        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 shadow-[0_0_20px_hsl(195_100%_50%/0.2)] hover:shadow-[0_0_30px_hsl(195_100%_50%/0.35)] transition-shadow duration-300"
            onClick={() => handleClick("Contact")}
          >
            Contact Me
          </Button>
        </motion.div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <motion.div
          className="md:hidden bg-card/80 backdrop-blur-2xl border border-border/30 mx-4 mt-2 p-4 space-y-1 rounded-2xl"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {links.map((l) => {
            const isActive = activeSection === l;
            return (
              <button
                key={l}
                onClick={() => handleClick(l)}
                className={`block w-full text-left text-sm px-4 py-2.5 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "text-primary bg-primary/10 font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {l}
              </button>
            );
          })}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
