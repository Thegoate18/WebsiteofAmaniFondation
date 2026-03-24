import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Heart, Search, Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Qui sommes-nous ?", href: "/about" },
  { name: "Nos actions", href: "/actions" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-2"
          : "bg-white py-4"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center overflow-hidden">
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FXrJCxlH1WTcDEuJdZ8NQKYjo8Ze2%2Flogo__db85be3d.jpeg?alt=media&token=528f9286-2b11-4e24-b046-2bc2ceac9003" 
                alt="Amani Kwetu Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-foreground font-serif font-bold text-lg lg:text-xl leading-none">
                Amani Kwetu
              </span>
              <span className="text-primary text-[10px] lg:text-xs font-medium uppercase tracking-widest mt-0.5">
                Fondation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors relative py-2 group text-sm xl:text-base"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 lg:gap-4">
            <button className="p-2 text-foreground/70 hover:text-primary transition-colors hidden sm:block">
              <Search className="w-5 h-5" />
            </button>
            <div className="h-6 w-px bg-border mx-2 hidden lg:block" />
            <Button
              variant="secondary"
              className="hidden lg:flex items-center gap-2 font-bold"
            >
              <Heart className="w-4 h-4 fill-current" />
              Faire un don
            </Button>
            <Button
              variant="default"
              className="lg:flex items-center gap-2 font-bold"
            >
              S'engager
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="p-2 lg:hidden text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-[60px] bg-white z-40 transition-transform duration-300 ease-in-out transform",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col p-6 gap-6 h-full overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xl font-serif font-bold text-foreground border-b border-border pb-4"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-4 mt-auto pt-6 pb-20">
            <Button
              variant="secondary"
              className="w-full h-14 text-lg font-bold flex items-center justify-center gap-2"
            >
              <Heart className="w-5 h-5 fill-current" />
              Faire un don
            </Button>
            <Button
              variant="default"
              className="w-full h-14 text-lg font-bold"
            >
              Devenir bénévole
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
