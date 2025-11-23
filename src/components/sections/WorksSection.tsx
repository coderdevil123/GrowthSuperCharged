import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'TechStart Growth',
    category: 'Growth Strategy',
    description: 'Accelerated growth by 300% in 6 months through data-driven strategies',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Digital Ventures',
    category: 'Performance Marketing',
    description: 'ROI-focused campaigns delivering 5x return on ad spend',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Scale Solutions',
    category: 'Operational Scaling',
    description: 'Streamlined operations reducing costs by 40% while scaling',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Innovation Labs',
    category: 'Product Launch',
    description: 'Successful product launch reaching 100K users in first month',
    color: 'from-orange-500 to-red-500',
  },
];

const WorksSection: React.FC = () => {
  return (
    <section id="works" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            Every brand has a story, we give it a soul through strategic growth
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 cursor-pointer"
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              {/* Content */}
              <div className="relative p-8 md:p-12 h-[400px] flex flex-col justify-between">
                <div>
                  <span className="inline-block px-4 py-1 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-[#D33163] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {project.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex items-center text-[#D33163] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-semibold mr-2">View Case Study</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </div>
              </div>

              {/* Decorative Element */}
              <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${project.color} rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
