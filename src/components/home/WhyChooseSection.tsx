import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, TrendingUp, Zap } from 'lucide-react';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';

const features = [
  {
    icon: Users,
    title: 'Experienced Team and Network',
    description: 'Our team brings wealth of experience from premier institutions and leading companies with extensive client network.',
  },
  {
    icon: Target,
    title: 'End-to-End Growth Solutions',
    description: 'Personalized strategies that align with your vision from digital marketing to scaling operations.',
  },
  {
    icon: TrendingUp,
    title: 'Data-Driven Insights',
    description: 'Every decision backed by data to ensure maximum ROI and measurable results.',
  },
  {
    icon: Zap,
    title: 'Dynamic and Disciplined',
    description: 'Creative approach combined with disciplined growth planning aligned with business objectives.',
  },
];

const WhyChooseSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-[#1e293b] to-[#0F172A]">
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
            Why Choose <span className="text-emerald-400">Us</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <CardContainer className="inter-var">
                <CardBody className="bg-gradient-to-br from-white/5 to-white/[0.02] relative group/card backdrop-blur-sm w-full h-auto rounded-2xl p-8 border border-white/10 hover:border-emerald-500/50 text-center">
                  <CardItem
                    translateZ="50"
                    className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover/card:bg-emerald-500/20 transition-all duration-300"
                  >
                    <feature.icon className="w-8 h-8 text-emerald-400" />
                  </CardItem>

                  <CardItem
                    translateZ="60"
                    className="text-xl font-bold text-white mb-4 group-hover/card:text-emerald-400 transition-colors duration-300"
                  >
                    {feature.title}
                  </CardItem>

                  <CardItem
                    translateZ="40"
                    as="p"
                    className="text-gray-400 leading-relaxed text-sm"
                  >
                    {feature.description}
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
