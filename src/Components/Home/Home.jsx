import React from 'react';
import avatarImg from '../../assets/avatarImage.png';
import TextChange from '../TextChange';
import AvailableForHire from '../AvailableForHire';
import AnimatedBackground from '../AnimatedBackground'; // Import the animated background

const Home = () => {
  return (
    <section
      className="relative w-full pt-20 min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-10 px-6 py-16 md:px-20 bg-gradient-to-br from-[#1a2238] to-[#465697] overflow-hidden"
      id="home"
    >
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Left: Text Content */}
      <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left z-10">
        {/* Animated "Available for hire" badge */}
        <div className="mb-4">
          <AvailableForHire />
        </div>
        <h2 className="text-xl md:text-2xl font-medium text-[#a3aed6] mb-2 tracking-wide">
          Welcome to my portfolio!😎
        </h2>
        <h1 className="text-3xl md:text-6xl font-bold flex flex-wrap items-center leading-tight tracking-tighter mb-4">
          <span>Hi, I&apos;m&nbsp;</span>
          <span className="text-[#ffd700]">
            <TextChange />
          </span>
        </h1>
        <p className="text-base md:text-2xl text-[#e0e6f7] mb-6 max-w-xl">
          I&apos;m a passionate Web Developer crafting modern, responsive, and accessible web experiences. I love turning ideas into reality using code and design.
        </p>
        <div className="flex gap-4 mb-6"></div>
        <div className="flex gap-4">
          <a href="#Footer">
            <button
              className="bg-[#465697] hover:bg-[#ffd700] hover:text-[#1a2238] transition-all duration-300 text-white py-3 px-8 text-lg font-semibold rounded-full shadow-lg hover:scale-105 focus:outline-none"
              aria-label="Contact Me"
            >
              Contact Me 
            </button>
          </a>
          <a
            href="https://drive.google.com/file/d/1u00RHituCyjRSES2hsHv1ttlLMTc75QG/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="bg-[#ffd700] hover:bg-[#465697] hover:text-white transition-all duration-300 text-[#1a2238] py-3 px-8 text-lg font-semibold rounded-full shadow-lg hover:scale-105 focus:outline-none"
              aria-label="Download CV"
            >
              Download CV 
            </button>
          </a>
        </div>
      </div>

      {/* Right: Avatar */}
      <div className="flex-1 flex justify-center items-center z-10">
        <img
          src={avatarImg}
          alt="Portrait of Rishabh Mittal, Web Developer"
          className="w-60 h-60 md:w-80 md:h-80 rounded-full shadow-2xl border-4 border-[#465697] object-cover bg-white hover:scale-105 transition"
        />
      </div>
    </section>
  );
};

export default Home;
