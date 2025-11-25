import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-[#0F172A] to-[#1e293b]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
            style={{ fontFamily: "'Merienda', cursive" }}
          >
            About <span className="text-emerald-400">Us</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            At Growth Supercharged, we believe in more than just growth. We believe in <span className="text-emerald-400 font-semibold">transformation</span>.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            Whether scaling up or aiming to reach the next level, our team partners with you to create 
            customized strategies that fuel sustainable success. With years of combined experience and 
            expertise across various industries, our team brings a nuanced approach to business strategy, 
            digital marketing, and operational scaling.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            We understand that every business is unique, and we tailor our solutions to meet your specific 
            needs, ensuring your growth is accelerated and sustainable.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
