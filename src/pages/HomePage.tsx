import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import WhyChooseSection from '../components/home/WhyChooseSection';
import CtaSection from '../components/home/CtaSection';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <CtaSection />
      <Footer />
    </>
  );
};

export default HomePage;
