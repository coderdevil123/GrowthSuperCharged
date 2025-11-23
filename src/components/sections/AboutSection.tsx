import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-gradient-to-br from-[#FFF5F8] to-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              About
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Every Brand has a <span className="italic font-serif text-[#D33163]">story</span>,
                We give it a <span className="italic font-serif text-[#D33163]">soul</span> through
                strategic growth.
              </p>
              <p>
                Growth SuperCharged is a growth and strategy studio blending creative storytelling 
                with strategic insights to build identities, experiences, and systems that move 
                people and grow brands.
              </p>
              <p>
                We partner with ambitious companies to design data-driven growth strategies, 
                performance marketing campaigns, and operational scaling solutions—measured 
                by results and driven by discipline.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
              {[
                { value: '500+', label: 'Projects' },
                { value: '98%', label: 'Success Rate' },
                { value: '50+', label: 'Clients' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <div className="text-4xl font-bold text-[#D33163] mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#D33163]/20 to-[#0000FF]/20">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#D33163]/30 rounded-full blur-2xl"
              />
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#0000FF]/30 rounded-full blur-2xl"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-[#D33163] mb-4">GSC</div>
                  <div className="text-xl text-gray-700">Growth SuperCharged</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
