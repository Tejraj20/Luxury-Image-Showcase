import { motion } from "framer-motion";
import { Phone, MapPin, Mail } from "lucide-react";

const WA_NUMBER = "919828676825";
const WA_MESSAGE = encodeURIComponent(
  "Hello! I would like to enquire about booking a room at Jaipur Hotel New. 🙏"
);
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary tracking-[0.3em] text-xs uppercase mb-4"
          >
            Find Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-foreground"
          >
            Contact & Location
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="w-24 h-[1px] bg-primary mx-auto mt-6"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div>
              <h3 className="font-serif text-2xl text-foreground mb-2">Jaipur Hotel New</h3>
              <p className="text-primary text-sm uppercase tracking-widest">A Heritage Hotel</p>
            </div>

            <div className="w-16 h-[1px] bg-primary" />

            <div className="space-y-7">
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 flex items-center justify-center border border-primary/30 rounded-sm flex-shrink-0 text-primary">
                  <MapPin size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Address</p>
                  <p className="text-foreground font-light leading-relaxed">
                    7, Chaura Rasta Rd, opposite Golcha Cinema,<br />
                    Nehru Bazar, Film Colony, Modikhana,<br />
                    Jaipur, Rajasthan 302003
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-10 h-10 flex items-center justify-center border border-primary/30 rounded-sm flex-shrink-0 text-primary">
                  <Phone size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Phone</p>
                  <a
                    href="tel:+919828676825"
                    data-testid="link-phone"
                    className="text-foreground hover:text-primary transition-colors font-light text-lg"
                  >
                    +91 9828676825
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-10 h-10 flex items-center justify-center border border-primary/30 rounded-sm flex-shrink-0 text-primary">
                  <Mail size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                  <p className="text-foreground font-light">info@jaipurhotelnew.com</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 flex items-center justify-center border border-[#25D366]/40 rounded-sm flex-shrink-0" style={{ color: "#25D366" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5" fill="currentColor">
                    <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.738 5.49 2.027 7.8L0 32l8.433-2.007A15.94 15.94 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.793-1.867l-.487-.29-5.007 1.193 1.22-4.873-.317-.5A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.907c-.397-.2-2.347-1.16-2.713-1.29-.363-.133-.627-.2-.89.2-.263.397-1.02 1.29-1.253 1.557-.227.263-.457.297-.853.1-.397-.2-1.677-.62-3.197-1.977-1.18-1.053-1.977-2.353-2.207-2.75-.23-.397-.023-.61.173-.807.177-.177.397-.46.593-.69.2-.23.263-.397.397-.66.133-.263.067-.497-.033-.697-.1-.197-.89-2.147-1.22-2.94-.32-.773-.647-.667-.89-.68-.227-.01-.49-.013-.753-.013-.263 0-.69.1-1.053.497-.363.397-1.387 1.357-1.387 3.307 0 1.95 1.42 3.833 1.617 4.097.197.263 2.793 4.263 6.767 5.98.947.41 1.687.653 2.263.837.95.303 1.817.26 2.5.157.763-.113 2.347-.96 2.677-1.887.33-.927.33-1.72.23-1.887-.1-.163-.363-.263-.76-.46z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">WhatsApp</p>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-[#25D366] transition-colors font-light text-lg"
                  >
                    +91 9828676825
                  </a>
                  <p className="text-xs text-muted-foreground mt-0.5">Tap to chat instantly</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-primary/20 overflow-hidden h-96 lg:h-[450px]"
          >
            <iframe
              title="Hotel Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.887476296835!2d75.82010077541!3d26.920696776664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3aebf99a3b3%3A0x2eff7c57c7f3f78e!2sJohari%20Bazar%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1688000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.3) contrast(1.1)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
