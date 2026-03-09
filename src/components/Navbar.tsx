import { useState, useEffect } from "react";
import { Menu, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = ["Home", "About", "Skills", "Projects", "Achievements", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id: string) => {
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-nav ${scrolled ? "py-3" : "py-4"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-primary" />
          <span className="font-mono font-bold text-lg text-foreground">Felix<span className="text-primary">.</span>sec</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button key={l} onClick={() => handleClick(l)} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 font-medium">
              {l}
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-6" onClick={() => handleClick("Contact")}>
            Contact Me
          </Button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-card mx-4 mt-2 p-4 space-y-3">
          {links.map((l) => (
            <button key={l} onClick={() => handleClick(l)} className="block w-full text-left text-sm text-muted-foreground hover:text-primary transition-colors py-1">
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
