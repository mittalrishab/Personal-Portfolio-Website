import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { MdOutlineEmail, MdCode } from 'react-icons/md';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa6';
import { SiGeeksforgeeks } from 'react-icons/si';
import MonkeytypeIcon from '../MonkeytypeIcon.jsx'; // Make sure this exists

const socialLinks = [
  {
    icon: <MdOutlineEmail size={28} aria-label="Email" />,
    text: 'mittal.rishabh0305@gmail.com',
    href: 'mailto:mittal.rishabh0305@gmail.com',
  },
  {
    icon: <CiLinkedin size={28} aria-label="LinkedIn" />,
    text: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rishabh-mittal-88b345312',
  },
  {
    icon: <FaGithub size={28} aria-label="GitHub" />,
    text: 'GitHub',
    href: 'https://github.com/mittalrishab',
  },
  {
    icon: <MdCode size={28} aria-label="LeetCode" />,
    text: 'LeetCode',
    href: 'https://leetcode.com/u/rishabh_coding/',
  },
  {
    icon: <SiGeeksforgeeks size={28} aria-label="GeeksforGeeks" />,
    text: 'GeeksforGeeks',
    href: 'https://www.geeksforgeeks.org/user/_rishabh_mittal/',
  },
  {
    icon: <MonkeytypeIcon size={28} aria-label="Monkeytype" />,
    text: 'Monkeytype',
    href: 'https://monkeytype.com/profile/rishabh_coding',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 200, damping: 20 },
  },
};

const GlowingStars = React.memo(({ count = 30 }) => {
  const stars = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const size = Math.random() * 2 + 1;
        const duration = Math.random() * 2 + 1.5;
        return (
          <div
            key={i}
            className="starry-glow"
            style={{
              position: 'absolute',
              top: `${top}%`,
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: '50%',
              background: 'radial-gradient(white, transparent 70%)',
              opacity: 0.9,
              animation: `star-glow ${duration}s infinite alternate`,
              pointerEvents: 'none',
              zIndex: 1,
            }}
            aria-hidden="true"
          />
        );
      }),
    [count]
  );
  return <>{stars}</>;
});

const SocialLinkItem = ({ icon, text, href }) => (
  <motion.li
    variants={item}
    whileHover={{
      scale: 1.05,
      backgroundColor: 'rgba(255,255,255,0.08)',
      transition: { duration: 0.2 },
    }}
    whileTap={{ scale: 0.95 }}
  >
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-[#A3BFFA]"
      tabIndex={0}
      aria-label={text}
    >
      <motion.span
        className="text-white group-hover:text-[#A3BFFA] transition-colors"
        whileHover={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 0.4 }}
      >
        {icon}
      </motion.span>
      <span className="text-white/90 group-hover:text-white font-medium">
        {text}
      </span>
    </a>
  </motion.li>
);

const Footer = () => (
  <motion.footer
    className="relative py-12 starry-background overflow-hidden"
    id="Footer"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.7 }}
    aria-label="Footer"
    style={{
      background:
        'linear-gradient(to bottom, rgba(16,23,38,0.7) 0%, #101726 60%, #0b1120 100%)',
      // Match this to your main background for smoothness
    }}
  >
    {/* Blurred Top Overlay for Smooth Transition */}
    <div
      aria-hidden="true"
      className="absolute -top-8 left-0 w-full h-16 pointer-events-none z-20"
      style={{
        background:
          'linear-gradient(to bottom, rgba(16,23,38,0.7) 0%, rgba(16,23,38,0.2) 60%, transparent 100%)',
        filter: 'blur(16px)',
      }}
    />

    {/* Glowing stars */}
    <GlowingStars count={40} />

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-col md:flex-row justify-between items-center gap-8"
      >
        <motion.div
          className="text-center md:text-left space-y-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#A3BFFA] drop-shadow">
            Let's Collaborate
          </h1>
          <p className="text-xl text-white/90">
            Got a challenge? Let's solve it together!
          </p>
        </motion.div>

        <nav aria-label="Social links" className="w-full md:w-auto">
          <motion.ul
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
          >
            {socialLinks.map((link, index) => (
              <SocialLinkItem key={index} {...link} />
            ))}
          </motion.ul>
        </nav>
      </motion.div>

      <motion.div
        className="mt-12 border-t border-white/20 pt-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <p className="text-white/80">
          © {new Date().getFullYear()} Rishabh Mittal. Code with <span aria-label="love" role="img">❤️</span>
        </p>
      </motion.div>
    </div>
  </motion.footer>
);

export default Footer;
