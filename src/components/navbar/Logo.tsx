import React from 'react';
import { motion } from 'framer-motion';

const Logo: React.FC = () => {
  return (
    <a
      href="/"
      className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
      aria-label="Go to homepage"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="w-10 h-10 bg-emerald-500 rounded-md flex items-center justify-center font-bold text-sm text-white shadow-lg"
      >
        GSC
      </motion.div>
      <motion.span
        whileHover={{ scale: 1.02 }}
        className="text-white text-sm tracking-[0.2em] uppercase font-normal hidden lg:block group-hover:text-emerald-400 transition-colors duration-200"
        style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
      >
        Growth SuperCharged
      </motion.span>
    </a>
  );
};

export default Logo;
