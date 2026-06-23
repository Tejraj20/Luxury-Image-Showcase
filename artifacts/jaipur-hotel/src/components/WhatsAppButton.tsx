import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const WA_NUMBER = "919828676825";
const WA_MESSAGE = encodeURIComponent(
  "Hello! I would like to enquire about booking a room at Jaipur Hotel New. 🙏"
);
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3">
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 12, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 12, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-[#1A1A1A] text-white text-sm font-light px-4 py-2 rounded-sm shadow-xl whitespace-nowrap border border-white/10"
          >
            Chat with us on WhatsApp
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-2xl focus:outline-none"
        style={{ background: "#25D366" }}
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ background: "#25D366" }} />

        {/* WhatsApp icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-7 h-7 relative z-10"
          fill="white"
        >
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.738 5.49 2.027 7.8L0 32l8.433-2.007A15.94 15.94 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.793-1.867l-.487-.29-5.007 1.193 1.22-4.873-.317-.5A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.907c-.397-.2-2.347-1.16-2.713-1.29-.363-.133-.627-.2-.89.2-.263.397-1.02 1.29-1.253 1.557-.227.263-.457.297-.853.1-.397-.2-1.677-.62-3.197-1.977-1.18-1.053-1.977-2.353-2.207-2.75-.23-.397-.023-.61.173-.807.177-.177.397-.46.593-.69.2-.23.263-.397.397-.66.133-.263.067-.497-.033-.697-.1-.197-.89-2.147-1.22-2.94-.32-.773-.647-.667-.89-.68-.227-.01-.49-.013-.753-.013-.263 0-.69.1-1.053.497-.363.397-1.387 1.357-1.387 3.307 0 1.95 1.42 3.833 1.617 4.097.197.263 2.793 4.263 6.767 5.98.947.41 1.687.653 2.263.837.95.303 1.817.26 2.5.157.763-.113 2.347-.96 2.677-1.887.33-.927.33-1.72.23-1.887-.1-.163-.363-.263-.76-.46z" />
        </svg>
      </a>
    </div>
  );
}
