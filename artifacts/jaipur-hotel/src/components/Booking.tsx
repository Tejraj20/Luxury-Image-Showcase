import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const schema = z.object({
  checkin: z.string().min(1, "Check-in date is required"),
  checkout: z.string().min(1, "Check-out date is required"),
  guests: z.string().min(1, "Select number of guests"),
  roomType: z.string().min(1, "Select a room type"),
  phone: z.string().min(7, "Enter a valid phone number"),
});

type BookingData = z.infer<typeof schema>;

const inputClass =
  "w-full bg-white/5 border border-primary/20 focus:border-primary text-primary-foreground placeholder:text-primary-foreground/30 px-4 py-3.5 text-sm outline-none focus:ring-1 focus:ring-primary/40 transition-all rounded-none";

const labelClass = "text-primary-foreground/70 text-xs uppercase tracking-widest mb-2 block font-medium";

export function Booking() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<BookingData>({
    resolver: zodResolver(schema),
    defaultValues: { checkin: "", checkout: "", guests: "", roomType: "", phone: "" },
  });

  const onSubmit = (_data: BookingData) => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    form.reset();
  };

  return (
    <section id="booking" className="py-24 md:py-32 bg-[#6D1F1F] relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-3xl">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary tracking-[0.3em] text-xs uppercase mb-4"
          >
            Reservations
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-white mb-4"
          >
            Reserve Your Heritage Stay
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-primary text-lg font-light tracking-wider"
          >
            Rooms Starting From ₹1500/night
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="w-24 h-[1px] bg-primary mx-auto mt-6"
          />
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 border border-primary/30 bg-white/5"
          >
            <CheckCircle2 size={48} className="text-primary mx-auto mb-5" strokeWidth={1.5} />
            <h3 className="font-serif text-2xl text-white mb-3">Reservation Received</h3>
            <p className="text-white/60 font-light">We'll call you within 2 hours to confirm your booking.</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="checkin"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={labelClass}>Check-in Date</FormLabel>
                        <FormControl>
                          <input data-testid="input-checkin" type="date" {...field} className={inputClass} style={{ colorScheme: "dark" }} />
                        </FormControl>
                        <FormMessage className="text-primary text-xs mt-1" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="checkout"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={labelClass}>Check-out Date</FormLabel>
                        <FormControl>
                          <input data-testid="input-checkout" type="date" {...field} className={inputClass} style={{ colorScheme: "dark" }} />
                        </FormControl>
                        <FormMessage className="text-primary text-xs mt-1" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="guests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={labelClass}>Guests</FormLabel>
                        <FormControl>
                          <select data-testid="select-guests" {...field} className={inputClass + " appearance-none"}>
                            <option value="" disabled>Number of guests</option>
                            {[1,2,3,4,5,6].map(n => <option key={n} value={String(n)} className="bg-[#6D1F1F]">{n} {n === 1 ? "Guest" : "Guests"}</option>)}
                          </select>
                        </FormControl>
                        <FormMessage className="text-primary text-xs mt-1" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="roomType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={labelClass}>Room Type</FormLabel>
                        <FormControl>
                          <select data-testid="select-roomtype" {...field} className={inputClass + " appearance-none"}>
                            <option value="" disabled>Select room type</option>
                            <option value="deluxe" className="bg-[#6D1F1F]">Deluxe Room — ₹1500/night</option>
                            <option value="heritage" className="bg-[#6D1F1F]">Heritage Room — ₹1800/night</option>
                            <option value="family" className="bg-[#6D1F1F]">Family Room — ₹2200/night</option>
                          </select>
                        </FormControl>
                        <FormMessage className="text-primary text-xs mt-1" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={labelClass}>Phone Number</FormLabel>
                      <FormControl>
                        <input data-testid="input-phone" type="tel" placeholder="+91 XXXXXXXXXX" {...field} className={inputClass} />
                      </FormControl>
                      <FormMessage className="text-primary text-xs mt-1" />
                    </FormItem>
                  )}
                />

                <motion.button
                  data-testid="button-submit-booking"
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full bg-primary text-primary-foreground py-5 uppercase tracking-widest text-sm font-semibold shadow-[0_0_30px_rgba(201,162,39,0.35)] hover:shadow-[0_0_50px_rgba(201,162,39,0.55)] transition-shadow mt-2"
                >
                  Reserve Your Heritage Stay
                </motion.button>
              </form>
            </Form>
          </motion.div>
        )}
      </div>
    </section>
  );
}
