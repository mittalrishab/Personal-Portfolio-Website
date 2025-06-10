import React from 'react';
import AboutImg from '../../assets/AboutImg.jpeg';
import { IoArrowForward } from 'react-icons/io5';

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
  // {
  //   title: 'Other',
  //   iconColor: 'text-purple-400',
  //   skills: [
  //     'Problem Solving', 'Teamwork', 'Agile', 'APIs', 'Testing', 'CI/CD'
  //   ]
  // }
];

const About = () => {
  return (
    <section
      id="skills"
      className="bg-gradient-to-br mt-20 from-black via-gray-900 to-gray-800 py-16 px-4 md:px-8 rounded-lg shadow-2xl max-w-7xl mx-auto my-8"
      aria-label="Skills"
    >
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
          <img
            src={AboutImg}
            alt="Web Developer Illustration"
            className="rounded-xl shadow-xl max-h-80 object-cover w-full md:w-auto"
          />
        </div>

        {/* Skills */}
        <div className="w-full md:w-2/3">
          <h2 className="text-4xl font-bold text-white mb-6 text-center md:text-left">
            My <span className="text-purple-400">Skills</span>
          </h2>
          <p className="text-gray-300 mb-8 text-center md:text-left max-w-2xl mx-auto md:mx-0">
            As a passionate web developer, I specialize in building robust, scalable, and visually stunning web applications. Here’s a snapshot of my technical toolkit:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skillsData.map((group, idx) => (
              <div
                key={group.title}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-5 shadow-lg hover:shadow-purple-400/10 transition-shadow"
              >
                <div className="flex items-center mb-3">
                  <IoArrowForward size={22} className={`${group.iconColor} mr-2`} />
                  <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map(skill => (
                    <span
                      key={skill}
                      className="bg-purple-400/10 text-purple-200 border border-purple-400/30 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
