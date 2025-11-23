import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CtaSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#1B1B1B] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,122,0,0.15),transparent_70%)]" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#FF7A00]/10 to-[#FFD13F]/10 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-[#FF7A00]/20 text-center"
        >
          <h2
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            How can we help you <span className="text-[#FF7A00]">grow?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Ready to supercharge your business? Let's create something extraordinary together.
          </p>

          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-[#FF7A00] text-white rounded-full text-lg font-bold hover:bg-[#FF8C1A] transition-all duration-300 shadow-2xl shadow-[#FF7A00]/50 inline-flex items-center gap-2"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
