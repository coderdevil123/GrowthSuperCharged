import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, Award, Briefcase, GraduationCap } from 'lucide-react';
import { CardContainer, CardBody, CardItem } from '../components/ui/3d-card';
import Footer from '../components/Footer';

const team = [
  {
    name: 'Rohan Kumar',
    role: 'Founder & CEO',
    credentials: 'OYO | Yes2Growth | IIT-M',
    bio: 'Rohan led online user acquisition for India and SEA at OYO Growth. Managed budgets ranging from $5k to $250k/month across Google, Meta, Programmatic, Affiliates, TikTok. Scaled paid user acquisition by 2.2x, 3x & 1.7x in India, Indonesia & Malaysia respectively.',
    color: 'from-emerald-500 to-teal-500',
    achievements: ['300% Growth', '10+ Markets', '$250K Budget'],
    direction: 'left',
  },
  {
    name: 'Gayatri Ramdas',
    role: 'Brand Strategy Lead',
    credentials: 'Conde Nast | Databricks | The Rockefeller Foundation',
    bio: 'Content strategist who has created digital content for diverse organizations including MNCs, NGOs, unicorn startups. Expertise in email marketing, user engagement, technical documentation, and social media management with proven track record in data-driven content strategies.',
    color: 'from-purple-500 to-pink-500',
    achievements: ['50+ Brands', 'Award Winner', 'Global Reach'],
    direction: 'right',
  },
  {
    name: 'Anubhav Mishra',
    role: 'Strategy Consultant',
    credentials: 'PWC | Bain | IIT-M | IIM-K',
    bio: 'Strategic consultant with extensive experience in business transformation and growth strategy across multiple industries. Specialized in operational excellence and market expansion.',
    color: 'from-blue-500 to-cyan-500',
    achievements: ['100+ Projects', 'Fortune 500', 'Strategy Expert'],
    direction: 'left',
  },
  {
    name: 'Ashok Kumar',
    role: 'Growth Specialist',
    credentials: 'IIT-M',
    bio: 'Growth specialist focused on scaling operations and optimizing business processes for sustainable expansion. Expert in performance optimization and revenue acceleration.',
    color: 'from-orange-500 to-red-500',
    achievements: ['5x Growth', 'Scale Expert', 'ROI Master'],
    direction: 'right',
  },
  {
    name: 'Ramnaresh Chouhan',
    role: 'Product & Data Analytics',
    credentials: 'Whatfix | Delhivery | IIT-M',
    bio: 'Seasoned data professional with proven track record in SaaS, product development, and logistics. Successfully implemented advanced analytics, A/B testing, and automation initiatives at leading tech companies.',
    color: 'from-indigo-500 to-purple-500',
    achievements: ['Data Wizard', 'AI/ML Expert', 'Product Guru'],
    direction: 'top',
  },
  {
    name: 'Yash Murty',
    role: 'Technical Lead',
    credentials: 'IIT-M',
    bio: 'Technical expert specializing in building scalable solutions and implementing cutting-edge technologies for business growth. Full-stack developer with cloud architecture expertise.',
    color: 'from-pink-500 to-rose-500',
    achievements: ['Tech Leader', 'Cloud Expert', 'Innovation'],
    direction: 'bottom',
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

const TeamPage: React.FC = () => {
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
            className="text-center mb-20"
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
                Our Dream Team
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
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mt-12"
            >
              Our team comprises experienced growth strategists, campaign managers, data analysts, and content marketers 
              from premier institutions. We take complete ownership of your growth journey.
            </motion.p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={getInitialPosition(member.direction)}
                animate={{ x: 0, y: 0 }}
                transition={{ 
                  delay: 0.2,
                  duration: 1.2,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                <CardContainer className="inter-var">
                  <CardBody className="bg-gradient-to-br from-white/5 to-white/[0.02] relative group/card backdrop-blur-sm w-full h-full rounded-2xl p-8 border border-white/10 hover:border-emerald-500/50 overflow-hidden">
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover/card:opacity-5 transition-opacity duration-500`} />

                    {/* Profile Image Placeholder */}
                    <CardItem translateZ="60" className="relative mb-6">
                      <div className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-br ${member.color} p-1 group-hover/card:scale-110 transition-transform duration-500`}>
                        <div className="w-full h-full rounded-full bg-[#0F172A] flex items-center justify-center">
                          <div className={`w-28 h-28 rounded-full bg-gradient-to-br ${member.color} opacity-20 flex items-center justify-center`}>
                            <Briefcase className="w-12 h-12 text-white" />
                          </div>
                        </div>
                      </div>
                      {/* Floating Badge */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.4, type: "spring" }}
                        className={`absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r ${member.color} rounded-full text-white text-xs font-bold shadow-lg`}
                      >
                        <Award className="w-3 h-3 inline mr-1" />
                        Expert
                      </motion.div>
                    </CardItem>
                    
                    {/* Name */}
                    <CardItem
                      translateZ="70"
                      className="text-center mb-2"
                    >
                      <h3 
                        className="text-2xl font-bold text-white group-hover/card:text-emerald-400 transition-colors duration-300"
                        style={{ fontFamily: "'Merienda', cursive" }}
                      >
                        {member.name}
                      </h3>
                    </CardItem>

                    {/* Role */}
                    <CardItem 
                      translateZ="60"
                      className="text-center mb-4"
                    >
                      <p className={`text-sm font-semibold bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
                        {member.role}
                      </p>
                    </CardItem>

                    {/* Credentials */}
                    <CardItem 
                      translateZ="50"
                      className="flex items-center justify-center gap-2 mb-4"
                    >
                      <GraduationCap className="w-4 h-4 text-gray-500" />
                      <p className="text-xs text-gray-500">
                        {member.credentials}
                      </p>
                    </CardItem>

                    {/* Achievements */}
                    <CardItem 
                      translateZ="40"
                      className="flex flex-wrap gap-2 justify-center mb-6"
                    >
                      {member.achievements.map((achievement, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.6 + idx * 0.1 }}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-300"
                        >
                          {achievement}
                        </motion.span>
                      ))}
                    </CardItem>
                    
                    {/* Bio */}
                    <CardItem 
                      translateZ="30" 
                      as="p" 
                      className="text-gray-400 leading-relaxed text-sm mb-6 text-center"
                    >
                      {member.bio}
                    </CardItem>

                    {/* Social Links */}
                    <CardItem 
                      translateZ="50" 
                      className="flex justify-center gap-3 pt-4 border-t border-white/10"
                    >
                      {[
                        { icon: Linkedin, href: '#', label: 'LinkedIn' },
                        { icon: Twitter, href: '#', label: 'Twitter' },
                        { icon: Mail, href: '#', label: 'Email' },
                      ].map((social, idx) => (
                        <motion.a
                          key={idx}
                          href={social.href}
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/50 rounded-full flex items-center justify-center transition-all duration-300 group/social"
                          aria-label={social.label}
                        >
                          <social.icon className="w-4 h-4 text-gray-400 group-hover/social:text-emerald-400 transition-colors" />
                        </motion.a>
                      ))}
                    </CardItem>

                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
                      <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br ${member.color} blur-2xl opacity-30`} />
                    </div>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-xl rounded-3xl p-12 border border-emerald-500/20">
              <h2 
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: "'Merienda', cursive" }}
              >
                Want to <span className="text-emerald-400">Join Us?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals who are passionate about growth and innovation.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-emerald-500 text-white rounded-full text-lg font-semibold hover:bg-emerald-600 transition-all duration-300 shadow-lg shadow-emerald-500/50"
              >
                View Open Positions
              </motion.button>
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
            className="absolute top-20 right-10 w-32 h-32 bg-[#FF7A00]/10 rounded-full blur-3xl pointer-events-none"
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
            className="absolute bottom-20 left-10 w-40 h-40 bg-[#FFD13F]/10 rounded-full blur-3xl pointer-events-none"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TeamPage;
