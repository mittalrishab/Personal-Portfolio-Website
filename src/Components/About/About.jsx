import React from 'react';
import AboutImg from '../../assets/AboutImg.png';
import { IoArrowForward } from 'react-icons/io5';

const About = () => {
  return (
    <div
      id="about"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-around bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center justify-around">
          <img className="md:h-80" src={AboutImg} alt="About" />
          <ul>
            {[
              { title: 'FrontEnd Developer', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis aliquid hic, numquam ratione consequatur porro!' },
              { title: 'BackEnd Developer', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis aliquid hic, numquam ratione consequatur porro!' },
              { title: 'DataStructures & Algorithms', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis aliquid hic, numquam ratione consequatur porro!' },
            ].map((item, index) => (
              <div key={index} className="flex gap-3 py-4">
                <IoArrowForward size={30} className="mt-1" />
                <span className="w-96">
                  <h1 className="text-xl md:text-2xl font-semibold leading-normal">{item.title}</h1>
                  <p className="text-sm md:text-md leading-tight">{item.desc}</p>
                </span>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
