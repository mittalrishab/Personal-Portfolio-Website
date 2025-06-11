import React from 'react';
import { motion } from 'framer-motion';
import { MdOutlineEmail, MdCode } from 'react-icons/md';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa6';
import { SiGeeksforgeeks } from 'react-icons/si';
import MonkeytypeIcon from '../MonkeytypeIcon.jsx';

const Footer = () => {
  const socialLinks = [
    {
      icon: <MdOutlineEmail size={28} />,
      text: 'mittal.rishabh0305@gmail.com',
      href: 'mailto:mittal.rishabh0305@gmail.com'
    },
    {
      icon: <CiLinkedin size={28} />,
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rishabh-mittal-88b345312'
    },
    {
      icon: <FaGithub size={28} />,
      text: 'GitHub',
      href: 'https://github.com/mittalrishab'
    },
    {
      icon: <MdCode size={28} />,
      text: 'LeetCode',
      href: 'https://leetcode.com/u/rishabh_coding/'
    },
    {
      icon: <SiGeeksforgeeks size={28} />,
      text: 'GeeksforGeeks',
      href: 'https://www.geeksforgeeks.org/user/_rishabh_mittal/'
    },
    {
      icon: <MonkeytypeIcon size={28} />,
      text: 'Monkeytype',
      href: 'https://monkeytype.com/profile/rishabh_coding'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  return (
    <motion.footer 
      className="bg-gradient-to-r from-[#465697] to-[#374785] py-12" 
      id="Footer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#A3BFFA]">
              Let's Collaborate
            </h1>
            <p className="text-xl text-white/90">
              Got a challenge? Let's solve it together!
            </p>
          </motion.div>

          <div className="w-full md:w-auto">
            <motion.ul 
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
            >
              {socialLinks.map((link, index) => (
                <motion.li
                  key={index}
                  variants={item}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm transition-all duration-300 group"
                  >
                    <motion.span 
                      className="text-white group-hover:text-[#A3BFFA] transition-colors"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.4 }}
                    >
                      {link.icon}
                    </motion.span>
                    <span className="text-white/90 group-hover:text-white font-medium">
                      {link.text}
                    </span>
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>

        <motion.div 
          className="mt-12 border-t border-white/20 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <p className="text-white/80">
            © {new Date().getFullYear()} Rishabh Mittal. Code with ❤️
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;