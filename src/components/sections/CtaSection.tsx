import React from 'react';
import { motion } from 'framer-motion';

const CtaSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-gradient-to-br from-[#D33163] to-[#c12856] text-white">
      <div className="max-w-[1440px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-5xl md:text-7xl font-bold mb-8"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Join the Lok
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90">
            Ready to supercharge your growth? Let's create something extraordinary together.
          </p>

          {/* CTA Button */}
          <motion.a
            href="mailto:hello@growthsupercharged.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-5 bg-white text-[#D33163] rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-2xl"
          >
            Get in Touch
          </motion.a>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16 space-y-4 text-white/80"
          >
            <p className="text-lg">hello@growthsupercharged.com</p>
            <p className="text-lg">+1 (234) 567-890</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
