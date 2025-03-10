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
          {/* Wrapper to center the links on medium screens */}
          <div className="w-full md:w-auto text-center">
            <ul className="space-y-4 flex flex-col items-center">
              <li>
                <a
                  href="mailto:mittal.rishabh0305@gmail.com"
                  className="flex items-center gap-2 hover:text-[#171d32]"
                >
                  <MdOutlineEmail size={30} />
                  mittal.rishabh0305@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/rishabh-mittal-88b345312"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#171d32]"
                >
                  <CiLinkedin size={30} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mittalrishab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#171d32]"
                >
                  <FaGithub size={30} />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
