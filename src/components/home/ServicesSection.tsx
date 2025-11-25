import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Zap, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';

const services = [
  {
    icon: TrendingUp,
    title: 'Growth Strategy & Consulting',
    description: 'Tailored growth strategies aligned with your business goals, streamlining your setup and taking ownership of your growth metrics.',
  },
  {
    icon: Target,
    title: 'Performance Marketing',
    description: 'Maximize ROI across multiple channels with data-driven campaigns and continuous optimization.',
  },
  {
    icon: Zap,
    title: 'Operational Scaling',
    description: 'Optimize internal processes, technology infrastructure, and resource allocation for rapid growth.',
  },
  {
    icon: BarChart3,
    title: 'CRM & Consumer Insights',
    description: 'Implement CRM systems and uncover deep insights into customer behavior and preferences.',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#1e293b]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
            style={{ fontFamily: "'Merienda', cursive" }}
          >
            What We <span className="text-emerald-400">Do</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Growth Supercharged was founded with one mission: to help businesses grow and thrive 
            in an increasingly competitive market.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <CardContainer className="inter-var">
                <CardBody className="bg-gradient-to-br from-white/5 to-white/[0.02] relative group/card backdrop-blur-sm w-full h-auto rounded-2xl p-8 border border-white/10 hover:border-emerald-500/50">
                  <CardItem
                    translateZ="50"
                    className="w-16 h-16 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover/card:bg-emerald-500/20 transition-all duration-300"
                  >
                    <service.icon className="w-8 h-8 text-emerald-400" />
                  </CardItem>

                  <CardItem
                    translateZ="60"
                    className="text-2xl font-bold text-white mb-4 group-hover/card:text-emerald-400 transition-colors duration-300"
                  >
                    {service.title}
                  </CardItem>

                  <CardItem
                    translateZ="40"
                    as="p"
                    className="text-gray-400 leading-relaxed"
                  >
                    {service.description}
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-emerald-500 text-white rounded-full font-semibold hover:bg-emerald-600 transition-all duration-300 shadow-lg shadow-emerald-500/50"
            >
              View All Services
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
