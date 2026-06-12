import { useState, useEffect } from "react";
import { Menu, X, Zap, ZapOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const links = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Achievements",
  "Contact",
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [reduced, setReduced] = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const sectionIds = links.map((link) => link.toLowerCase());
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);

      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(
              id.charAt(0).toUpperCase() + id.slice(1)
            );
          }
        },
        {
          rootMargin: "-40% 0px -55% 0px",
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const handleClick = (section: string) => {
    setOpen(false);

    document
      .getElementById(section.toLowerCase())
      ?.scrollIntoView({
        behavior: "smooth",
      });
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

        {/* Logo */}
        <motion.div
          className="flex items-center gap-3 cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => handleClick("Home")}
        >
          <div className="relative">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-primary/40 shadow-[0_0_15px_rgba(0,200,255,0.4)]">
              <img
                src="/f2r-logo.png"
                alt="F2R Logo"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute inset-0 rounded-full animate-ping border border-primary/20 opacity-20" />
          </div>

          <span className="font-mono font-bold text-lg text-foreground tracking-wide">
            FELIX
            <span className="text-primary">.</span>
            F2R
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link, index) => {
            const isActive = activeSection === link;

            return (
              <motion.button
                key={link}
                onClick={() => handleClick(link)}
                className={`relative text-sm px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-full bg-primary/10 border border-primary/20"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}

                <span className="relative z-10">
                  {link}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <motion.div
          className="hidden md:flex items-center gap-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => setReduced(!reduced)}
            aria-label={
              reduced
                ? "Enable animations"
                : "Reduce motion"
            }
            title={
              reduced
                ? "Animations off — click to enable"
                : "Animations on — click to reduce motion"
            }
            className="w-9 h-9 rounded-full border border-primary/20 text-primary flex items-center justify-center hover:bg-primary/10 transition-colors"
          >
            {reduced ? (
              <ZapOff className="w-4 h-4" />
            ) : (
              <Zap className="w-4 h-4" />
            )}
          </button>

          <Button
            className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 shadow-[0_0_20px_hsl(195_100%_50%/0.2)] hover:shadow-[0_0_30px_hsl(195_100%_50%/0.35)] transition-shadow duration-300"
            onClick={() => handleClick("Contact")}
          >
            Contact Me
          </Button>
        </motion.div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setReduced(!reduced)}
            aria-label={
              reduced
                ? "Enable animations"
                : "Reduce motion"
            }
            className="w-9 h-9 rounded-full border border-primary/20 text-primary flex items-center justify-center"
          >
            {reduced ? (
              <ZapOff className="w-4 h-4" />
            ) : (
              <Zap className="w-4 h-4" />
            )}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="text-foreground"
            aria-label="Menu"
          >
            {open ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          className="md:hidden bg-card/80 backdrop-blur-2xl border border-border/30 mx-4 mt-2 p-4 space-y-1 rounded-2xl"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {links.map((link) => {
            const isActive = activeSection === link;

            return (
              <button
                key={link}
                onClick={() => handleClick(link)}
                className={`block w-full text-left text-sm px-4 py-2.5 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "text-primary bg-primary/10 font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {link}
              </button>
            );
          })}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;