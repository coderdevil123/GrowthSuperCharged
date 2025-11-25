import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CtaSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#0F172A] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.15),transparent_70%)]" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-emerald-500/20 text-center"
        >
          <h2
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
            style={{ fontFamily: "'Merienda', cursive" }}
          >
            How can we help you <span className="text-emerald-400">grow?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Ready to supercharge your business? Let's create something extraordinary together.
          </p>

          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-emerald-500 text-white rounded-full text-lg font-bold hover:bg-emerald-600 transition-all duration-300 shadow-2xl shadow-emerald-500/50 inline-flex items-center gap-2"
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
