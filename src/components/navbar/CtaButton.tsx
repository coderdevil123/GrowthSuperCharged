import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CtaButton: React.FC = () => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        className="bg-emerald-500 text-white hover:bg-emerald-600 rounded-full px-6 h-10 font-medium text-sm transition-all duration-250 ease-in-out shadow-lg hover:shadow-emerald-500/50 focus-visible:ring-2 focus-visible:ring-emerald-400"
        asChild
      >
        <a href="#contact">Get in touch</a>
      </Button>
    </motion.div>
  );
};

export default CtaButton;
