import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";
import { JaipurLogo } from "./JaipurLogo";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Rooms", href: "#rooms" },
    { name: "Gallery", href: "#gallery" },
    { name: "Amenities", href: "#amenities" },
    { name: "Dining", href: "#dining" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-transparent ${
        scrolled ? "bg-secondary/95 backdrop-blur-md py-4 shadow-lg border-primary/20" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="group">
          <JaipurLogo />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm uppercase tracking-widest text-foreground dark:text-primary-foreground hover:text-primary transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#booking"
            onClick={(e) => handleNavClick(e, "#booking")}
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded hover:bg-primary/90 transition-all duration-300 uppercase tracking-widest text-sm font-medium shadow-[0_0_15px_rgba(201,162,39,0.3)] hover:shadow-[0_0_25px_rgba(201,162,39,0.5)]"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-foreground dark:text-primary-foreground hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden fixed inset-0 bg-secondary/98 backdrop-blur-xl transition-transform duration-500 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "72px" }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 pb-20">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xl uppercase tracking-widest text-primary-foreground hover:text-primary transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#booking"
            onClick={(e) => handleNavClick(e, "#booking")}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-sm hover:bg-primary/90 transition-colors duration-300 uppercase tracking-widest text-lg mt-4 shadow-lg shadow-primary/20"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}
