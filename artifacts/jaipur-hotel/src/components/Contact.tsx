import { motion } from "framer-motion";
import { Phone, MapPin, Mail } from "lucide-react";

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
