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
      icon: <MdCode size={28} />, // LeetCode alternative
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

  return (
    <footer className="bg-gradient-to-r from-[#465697] to-[#374785] py-12" id="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div className="text-center md:text-left space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#A3BFFA]">
              Let's Collaborate
            </h1>
            <p className="text-xl text-white/90">
              Got a challenge? Let's solve it together!
            </p>
          </div>

          <div className="w-full md:w-auto">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
                  >
                    <span className="text-white group-hover:text-[#A3BFFA] transition-colors">
                      {link.icon}
                    </span>
                    <span className="text-white/90 group-hover:text-white font-medium">
                      {link.text}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="mt-12 border-t border-white/20 pt-8 text-center">
          <p className="text-white/80">
            © {new Date().getFullYear()} Rishabh Mittal. Code with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
