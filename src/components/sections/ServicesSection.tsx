import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Zap, BarChart3, Rocket, Users } from 'lucide-react';

const services = [
  {
    icon: TrendingUp,
    title: 'Growth Strategy',
    description: 'Data-driven strategies designed to accelerate your business growth and market presence.',
  },
  {
    icon: Target,
    title: 'Performance Marketing',
    description: 'ROI-focused campaigns that deliver measurable results and sustainable growth.',
  },
  {
    icon: Zap,
    title: 'Operational Scaling',
    description: 'Streamline operations and build systems that scale with your ambitions.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Deep dive into your data to uncover opportunities and optimize performance.',
  },
  {
    icon: Rocket,
    title: 'Product Launch',
    description: 'Strategic planning and execution for successful product launches.',
  },
  {
    icon: Users,
    title: 'Team Building',
    description: 'Build high-performing teams aligned with your growth objectives.',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50">
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
            Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            Comprehensive solutions tailored to supercharge your business growth
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#D33163] transition-all duration-300 hover:shadow-xl h-full">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#D33163]/10 to-[#0000FF]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-[#D33163]" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#D33163] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
