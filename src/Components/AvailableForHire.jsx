// src/components/AvailableForHire.jsx
import { motion } from 'framer-motion';

const badgeVariants = {
  initial: { opacity: 0, y: -20, scale: 0.9 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 20 }
  },
  hover: {
    scale: 1.05,
    boxShadow: '0 4px 24px 0 rgba(138,126,204,0.3)',
    transition: { duration: 0.2 }
  }
};

export default function AvailableForHire() {
  return (
    <motion.div
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#8A7ECC] to-[#C4BBE9] text-[#1a2238] font-semibold shadow-lg text-base md:text-lg"
      variants={badgeVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      style={{ width: 'fit-content' }}
      aria-label="Available for hire"
    >
      <span role="img" aria-label="sparkles">✨</span>
      Available for hire
    </motion.div>
  );
}
