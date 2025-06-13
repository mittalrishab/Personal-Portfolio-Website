import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => (
  <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
    {/* Yellow Floating Circle */}
    <motion.div
      className="absolute top-10 left-10 w-40 h-40 bg-[#ffd700] opacity-20 rounded-full"
      animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    {/* Blue Floating Circle */}
    <motion.div
      className="absolute bottom-20 right-20 w-72 h-72 bg-[#465697] opacity-30 rounded-full"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
    {/* Purple Blurred Circle */}
    <motion.div
      className="absolute top-1/2 left-1/2 w-60 h-60 bg-[#a3aed6] opacity-20 rounded-full blur-2xl"
      animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

export default AnimatedBackground;
