import React from 'react';
import { AcademicCapIcon, BuildingLibraryIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

const TimelineEntry = ({
  side = 'right',
  icon,
  title,
  subtitle,
  details,
  accent = 'text-yellow-400'
}) => (
  <div className={`flex flex-col md:flex-row items-center w-full mb-14 ${side === 'left' ? 'md:flex-row-reverse' : ''}`}>
    <div className="w-full md:w-5/12"></div>
    <motion.div 
      className="z-20 flex items-center justify-center bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 shadow-xl w-14 h-14 rounded-full border-4 border-blue-200 ring-4 ring-blue-400/30"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 0.2
      }}
    >
      {icon}
    </motion.div>
    <motion.div 
      className={`backdrop-blur-md bg-white/10 border border-blue-100/10 rounded-2xl shadow-2xl w-full md:w-5/12 px-8 py-6 mt-6 md:mt-0 ${side === 'left' ? 'md:text-right' : 'md:text-left'}`}
      initial={{ 
        opacity: 0,
        y: 40,
        x: side === 'left' ? -40 : 40
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        x: 0
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.7,
        ease: "easeOut"
      }}
    >
      <h3 className={`mb-2 font-extrabold text-2xl text-white`}>
        {title.split(' ').map((word, i) =>
          i === title.split(' ').length - 1 ? (
            <span key={i} className={accent}>{word}</span>
          ) : (
            word + ' '
          )
        )}
      </h3>
      <p className="text-blue-200 italic text-sm mb-3">{subtitle}</p>
      <div className="space-y-2 text-blue-100">{details}</div>
    </motion.div>
  </div>
);

const EducationTimeline = () => (
  <motion.section 
    className="relative max-w-4xl mx-auto px-4 py-20 bg-gradient-to-br from-[#232946] via-[#2d3250] to-[#232946] rounded-3xl shadow-2xl mt-16 mb-20 overflow-hidden"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    {/* Glowing vertical line */}
    <div className="absolute left-1/2 top-35 bottom-10 transform -translate-x-1/2 w-1 bg-gradient-to-b from-yellow-400/60 via-blue-500/60 to-purple-600/60 blur-[2px] z-0 rounded-full" aria-hidden="true"></div>
    
    {/* Section Heading */}
    <motion.h2 
      className="relative z-10 text-center text-4xl font-extrabold text-white mb-16 tracking-tight"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5,
        delay: 0.2
      }}
    >
      <span className="text-blue-200">My</span> <span className="text-yellow-400">Education 🎓</span>
    </motion.h2>
    
    {/* Timeline Entries */}
    <div className="relative z-10">
      <TimelineEntry
        side="right"
        icon={<BuildingLibraryIcon className="w-8 h-8 text-yellow-400" />}
        title="GD Goenka Public School"
        subtitle="Indirapuram, Ghaziabad, Delhi NCR | 2010 – 2022"
        details={
          <>
            <p><span className="font-semibold text-yellow-400">Stream:</span> PCM</p>
            <p><span className="font-semibold text-yellow-400">Class 10 Score:</span> 94.6%</p>
            <p><span className="font-semibold text-yellow-400">Class 12 Score:</span> 88.6%</p>
          </>
        }
      />
      <TimelineEntry
        side="left"
        icon={<AcademicCapIcon className="w-8 h-8 text-yellow-400" />}
        title="Vellore Institute of Technology"
        subtitle="B.Tech, Computer Science & Engineering (Core) | 2023 – 2027"
        details={
          <p><span className="font-semibold text-yellow-400">CGPA:</span> 9.004</p>
        }
      />
    </div>
  </motion.section>
);

export default EducationTimeline;