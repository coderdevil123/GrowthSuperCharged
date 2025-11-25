import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Zap, Share2, Users, Database, BarChart3, Package, Building, Palette } from 'lucide-react';
import { CardContainer, CardBody, CardItem } from '../components/ui/3d-card';
import Footer from '../components/Footer';

const services = [
  {
    icon: TrendingUp,
    title: 'Growth Strategy & Consulting',
    description: 'We offer tailored growth strategies aligned with your business goals, streamline your existing setup, and take ownership of your growth metrics. Our consultants conduct in-depth analysis and segmentation to create actionable plans that drive scalable growth.',
    direction: 'left',
  },
  {
    icon: Target,
    title: 'Performance Marketing & Optimization',
    description: 'Our performance marketing services focus on maximizing ROI across multiple channels, including PPC, display ads, and social media. We help boost conversions and minimize customer acquisition costs by implementing data-driven campaigns.',
    direction: 'right',
  },
  {
    icon: Zap,
    title: 'Operational Scaling',
    description: 'We enable your rapid growth by optimizing internal processes, technology infrastructure, and resource allocation. Our solutions streamline operations to ensure efficiency, scalability, and cost-effectiveness as you expand.',
    direction: 'left',
  },
  {
    icon: Share2,
    title: 'Paid Social',
    description: 'Growth Supercharged incorporates the latest advancements in social media advertising technology. We create highly targeted campaigns across Facebook, Instagram, LinkedIn, and Twitter to reach the right audience and drive conversions.',
    direction: 'right',
  },
  {
    icon: Users,
    title: 'Lead Generation & User Acquisition',
    description: 'Our team identifies high-quality prospects through targeted campaigns across digital platforms. We create multi-channel acquisition strategies using SEO, PPC, and email marketing to attract and convert users.',
    direction: 'left',
  },
  {
    icon: Database,
    title: 'Customer Relationship Management (CRM)',
    description: 'We implement and customize CRM systems to streamline your customer interactions, track leads, and automate sales processes. Our CRM solutions improve customer retention and provide comprehensive insights into customer behaviors.',
    direction: 'right',
  },
  {
    icon: BarChart3,
    title: 'Consumer Insight & Analytics',
    description: 'We uncover deep insights into customer behavior, preferences, and purchasing patterns using advanced analytics. Our data-driven approach helps businesses understand their audience, forecast trends, and make informed decisions.',
    direction: 'top',
  },
  {
    icon: Package,
    title: 'Product Management',
    description: 'We help businesses refine their product offerings by focusing on user needs, market demand, and competitive positioning. Our product management services involve the entire lifecycle, from ideation and development to optimization and scaling.',
    direction: 'bottom',
  },
  {
    icon: Building,
    title: 'Special Client Management',
    description: 'Specialized services for Real Estate and Immigration services. We handle lead generation, targeted digital campaigns, advanced CRM systems, and paid social media campaigns to ensure your business reaches the right audience and grows sustainably.',
    direction: 'left',
  },
  {
    icon: Palette,
    title: 'Build Your Own Brand',
    description: 'We provide a turnkey end-to-end solution for your brand, from developing visual identity, branding, logo & packaging design, to web content and website development, to social media marketing and performance tracking.',
    direction: 'right',
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
    case 'bottom':
      return { x: 0, y: 1000 };
    default:
      return { x: 0, y: 0 };
  }
};

const ServicesPage: React.FC = () => {
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
                Our Services
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

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mt-12"
            >
              Growth Supercharged was founded with one mission: to help businesses grow and thrive in an 
              increasingly competitive market. Whether you're a startup or an established enterprise, we 
              partner with you to take your business to new heights.
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={getInitialPosition(service.direction)}
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

export default ServicesPage;
