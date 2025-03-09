import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#465697] py-12" id="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h1>
            <p className="text-xl">Have a project in mind? Let's discuss!</p>
          </div>
          <ul className="space-y-4 text-center md:text-left">
            <li>
              <a
                href="mailto:myemail@gmail.com"
                className="flex items-center gap-2 hover:text-[#171d32]"
              >
                <MdOutlineEmail size={24} />
                myemail@gmail.com
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 hover:text-[#171d32]">
                <CiLinkedin size={24} />
                linkedin.com/in/username
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 hover:text-[#171d32]">
                <FaGithub size={24} />
                github.com/username
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
