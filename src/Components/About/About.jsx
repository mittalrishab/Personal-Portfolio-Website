import React from 'react';
import AboutImg from '../../assets/AboutImg.jpeg';
import { IoArrowForward } from 'react-icons/io5';
import { motion } from 'framer-motion';

const skillsData = [
  {
    title: 'Frontend',
    iconColor: 'text-blue-400',
    skills: [
      'HTML5', 'CSS3', 'JavaScript (ES6+)', 'React',  'Tailwind CSS', 'BootStrap'
    ]
  },
  {
    title: 'Backend',
    iconColor: 'text-green-400',
    skills: [
      'Node.js', 'Express', 'REST APIs', 'MongoDB', 'JWT', 'Bcrypt' 
    ]
  },
  {
    title: 'Data Structures & Algorithms',
    iconColor: 'text-yellow-400',
    skills: [
      'Arrays', 'Hashing', 'Trees', 'Graphs', 'Linked Lists', 'Stacks', 'Queues', 'Heaps', 'Trie', 'Dynamic Programming', 'Sorting Algorithms'
    ]
  },
  {
    title: 'Dev Tools',
    iconColor: 'text-pink-400',
    skills: [
      'Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'Linux', 'NPM',
    ]
  },
];

const About = () => {
  return (
    <section
      id="skills"
      className="bg-gradient-to-br mt-20 from-black via-gray-900 to-gray-800 py-16 px-4 md:px-8 rounded-xl shadow-2xl max-w-7xl mx-auto my-8"
      aria-label="Skills"
    >
      <div className="flex flex-col lg:flex-row items-center gap-8 xl:gap-12">
        {/* Image - Enhanced Responsiveness */}
        <motion.div 
          className="flex-shrink-0 w-full lg:w-2/5 xl:w-1/3 flex justify-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative group">
            <div className="absolute -inset-2 bg-purple-500/20 blur-lg rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <img
              src={AboutImg}
              alt="Web Developer Illustration"
              className="rounded-xl shadow-xl w-full max-w-md object-cover transition-transform duration-500 group-hover:-translate-y-1"
            />
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div 
          className="w-full lg:w-3/5 xl:w-2/3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-white mb-6 text-center lg:text-left">
            My <span className="text-purple-400">Technical Expertise</span>
          </h2>
          <p className="text-gray-300 mb-8 text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
            As a passionate full-stack developer, I create robust, scalable web applications with intuitive user experiences. Here's my technical toolkit:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {skillsData.map((group, idx) => (
              <motion.div
                key={group.title}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-5 shadow-lg hover:shadow-purple-400/20 transition-all duration-300 group border border-white/10 hover:border-purple-400/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="flex items-center mb-3">
                  <IoArrowForward size={22} className={`${group.iconColor} mr-2 transition-transform group-hover:translate-x-1`} />
                  <h3 className="text-lg md:text-xl font-semibold text-white">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skill}
                      className="bg-purple-400/10 text-purple-200 border border-purple-400/30 px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 hover:bg-purple-400/20 hover:scale-105"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Progress Indicator */}
          <div className="mt-10 flex flex-wrap gap-4 items-center justify-center lg:justify-start">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-purple-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm text-gray-300">Currently learning: Data Science, AI/ML</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm text-gray-300">Next goal: IBM Devops Certification</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;