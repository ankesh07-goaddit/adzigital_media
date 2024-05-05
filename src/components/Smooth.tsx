"use client"
import React, { ReactNode, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface SmoothScrollProps {
  children: ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    controls.start({ opacity: 1 - scrollY / window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      style={{
        position: 'relative',
        overflow: 'hidden',
        height: '100vh',
      }}
      initial={{ opacity: 1 }}
      animate={controls}
      transition={{ ease: 'linear', duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default SmoothScroll;
