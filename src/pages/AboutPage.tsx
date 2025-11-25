import React from 'react';
import { motion } from 'framer-motion';
import { Target, Database, Lightbulb } from 'lucide-react';
import { CardContainer, CardBody, CardItem } from '../components/ui/3d-card';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  const principles = [
    {
      icon: Database,
      title: 'We Go Deeper',
      points: [
        'Data-Driven Insights: Leverage advanced analytics to uncover hidden growth opportunities',
        'Market Intelligence: In-depth research to identify emerging trends and untapped segments',
        'Customer Analysis: Delve into behavior, preferences, and pain points',
      ],
      direction: 'left',
    },
    {
      icon: Target,
      title: 'We Bring Discipline',
      points: [
        'Strategic Framework: Disciplined approach ensuring alignment with business objectives',
        'Performance Metrics: Establish KPIs to track progress and measure effectiveness',
        'Continuous Optimization: Refine strategy based on real-time data and market dynamics',
      ],
      direction: 'right',
    },
    {
      icon: Lightbulb,
      title: 'We Are Dynamic & Creative',
      points: [
        'Innovative Thinking: Fresh perspectives and out-of-the-box ideas to drive innovation',
        'Customer-Centric Approach: Solutions that address customer needs and desires',
        'Experimentation: Test new ideas and learn from results for continuous improvement',
      ],
      direction: 'top',
    },
  ];

  const getInitialPosition = (direction: string) => {
    switch (direction) {
      case 'left':
        return { x: -1000, y: 0 };
      case 'right':
        return { x: 1000, y: 0 };
      case 'top':
        return { x: 0, y: -1000 };
      default:
        return { x: 0, y: 0 };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1e293b] to-[#0F172A] pt-20">
      <section className="py-24 px-6 md:px-12 relative overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              x: [0, 100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
              x: [0, -100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: 0.3,
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="text-7xl md:text-9xl font-bold mb-6 text-white relative inline-block"
              style={{ fontFamily: "'Merienda', cursive" }}
            >
              <motion.span
                animate={{
                  textShadow: [
                    '0 0 20px rgba(16,185,129,0.5)',
                    '0 0 40px rgba(16,185,129,0.8)',
                    '0 0 20px rgba(16,185,129,0.5)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent"
              >
                About Us
              </motion.span>
              
              {/* Decorative underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
                style={{ transformOrigin: 'center' }}
              />
            </motion.h1>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-4xl mx-auto mb-20"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-2xl text-gray-300 leading-relaxed mb-8 text-center"
            >
              We pride ourselves on being more than consultants - we are your{' '}
              <span className="text-emerald-400 font-semibold italic">growth partners</span>.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-gray-400 leading-relaxed text-center"
            >
              Marketing is a constantly evolving field. With a deep understanding of market dynamics and a passion for 
              innovation, we help you navigate challenges, enhance efficiency, and capitalize on opportunities that drive 
              measurable results. Whether breaking into new markets, optimizing your digital presence, or scaling your 
              operations - Growth Supercharged is here to provide you with the insights and strategies needed to gain an 
              edge over the competition and thrive.
            </motion.p>
          </motion.div>

          {/* Why We Are Different Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6 text-white"
              style={{ fontFamily: "'Merienda', cursive" }}
            >
              Why We Are <span className="text-emerald-400">Different</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: "'Merienda', cursive" }}
            >
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                Deep. Data-Driven. Dynamic.
              </span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="text-lg text-gray-400 max-w-3xl mx-auto"
            >
              At Growth Supercharged, we go beyond the surface to deliver transformative growth. Our approach combines 
              the depth of data-driven insights with the dynamism of creative problem-solving.
            </motion.p>
          </motion.div>

          {/* Principles Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={getInitialPosition(principle.direction)}
                animate={{ x: 0, y: 0 }}
                transition={{ 
                  delay: 0.2,
                  duration: 1.2,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                <CardContainer className="inter-var">
                  <CardBody className="bg-gradient-to-br from-white/5 to-white/[0.02] relative group/card backdrop-blur-sm w-full h-auto rounded-2xl p-8 border border-white/10 hover:border-emerald-500/50">
                    <CardItem
                      translateZ="50"
                      className="w-16 h-16 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover/card:bg-emerald-500/20 transition-all duration-300"
                    >
                      <principle.icon className="w-8 h-8 text-emerald-400" />
                    </CardItem>

                    <CardItem
                      translateZ="60"
                      className="text-2xl font-bold text-white mb-6 group-hover/card:text-emerald-400 transition-colors duration-300"
                    >
                      {principle.title}
                    </CardItem>

                    <CardItem translateZ="40" as="ul" className="space-y-4">
                      {principle.points.map((point, idx) => (
                        <li key={idx} className="text-gray-400 leading-relaxed text-sm flex items-start gap-2">
                          <span className="text-emerald-400 mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="mt-20"
          >
            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-xl rounded-3xl p-12 border border-emerald-500/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { value: '500+', label: 'Projects Completed' },
                  { value: '98%', label: 'Client Satisfaction' },
                  { value: '50+', label: 'Happy Clients' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.7 + index * 0.1 }}
                    className="text-center"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      }}
                      className="text-5xl md:text-6xl font-bold text-emerald-400 mb-2"
                      style={{ fontFamily: "'Merienda', cursive" }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-lg text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-40 right-20 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-40 left-20 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
