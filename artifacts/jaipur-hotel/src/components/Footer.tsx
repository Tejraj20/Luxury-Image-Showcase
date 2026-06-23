import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Send } from "lucide-react";

const quickLinks = ["Home", "Rooms", "Gallery", "Amenities", "Dining", "Contact"];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1A1A1A] pt-20 pb-10 overflow-hidden">
      {/* Animated Gold Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent mb-16 origin-left"
      />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl text-white mb-2 tracking-wider">JAIPUR HOTEL NEW</h3>
            <div className="w-12 h-[1px] bg-primary mb-4" />
            <p className="text-white/50 text-sm font-light leading-relaxed">
              A Heritage Hotel in the heart of Jaipur's Pink City. Where royal tradition meets modern comfort.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.2em] mb-6 font-medium">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={(e) => handleNavClick(e, link)}
                    className="text-white/50 hover:text-primary text-sm font-light transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-3 h-[1px] bg-primary/40 group-hover:w-5 group-hover:bg-primary transition-all duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Snippet */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.2em] mb-6 font-medium">Contact</h4>
            <div className="space-y-4 text-white/50 text-sm font-light">
              <p>7, Chaura Rasta Rd,<br />Nehru Bazar, Jaipur 302003</p>
              <a href="tel:+919828676825" className="hover:text-primary transition-colors block">+91 9828676825</a>
              <p>info@jaipurhotelnew.com</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.2em] mb-6 font-medium">Newsletter</h4>
            <p className="text-white/50 text-sm font-light mb-5">Get exclusive offers and heritage travel stories.</p>
            {subscribed ? (
              <p className="text-primary text-sm font-light">Thank you for subscribing.</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex border border-primary/20 focus-within:border-primary/50 transition-colors">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 bg-transparent text-white/70 placeholder:text-white/25 px-4 py-3 text-sm outline-none"
                  data-testid="input-newsletter"
                />
                <button
                  type="submit"
                  data-testid="button-newsletter-submit"
                  className="px-4 text-primary hover:bg-primary/10 transition-colors"
                >
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-light">
            © 2024 Jaipur Hotel New – A Heritage Hotel. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {[
              { icon: Instagram, label: "Instagram" },
              { icon: Facebook, label: "Facebook" },
              { icon: Twitter, label: "Twitter" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                data-testid={`link-social-${label.toLowerCase()}`}
                className="w-9 h-9 flex items-center justify-center border border-white/15 hover:border-primary text-white/40 hover:text-primary transition-all duration-300 hover:shadow-[0_0_15px_rgba(201,162,39,0.3)]"
              >
                <Icon size={15} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
