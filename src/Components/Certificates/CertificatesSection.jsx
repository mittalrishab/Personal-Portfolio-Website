import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CertificateCard from './CertificateCard';
import udemyLogo from '../../assets/udemyLogo.png';
import certImg from '../../assets/UdemyCertificate.jpg';

const certificates = [
  {
    logo: udemyLogo,
    certificateImg: certImg,
    title: 'The Complete Full-Stack Web Development Bootcamp',
    organization: 'Udemy',
    issueDate: 'June 2025',
    credentialId: 'UC-ac14249e-5f35-41db-afd8-158f9961d304',
    credentialUrl: 'https://ude.my/UC-ac14249e-5f35-41db-afd8-158f9961d304/',
    description: "I've completed The Complete Full-Stack Web Development Bootcamp by Dr. Angela Yu. Gained hands-on experience with HTML, CSS, JavaScript, Node.js, Express, MongoDB, and React.",
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Node.js',
      'Express',
      'MongoDB',
      'React'
    ],
  },
  // Add more certificates here as needed
  // Example second certificate:
  /*
  {
    logo: udemyLogo,
    certificateImg: certImg,
    title: 'Advanced React Patterns',
    organization: 'Udemy',
    issueDate: 'July 2025',
    credentialId: 'UC-xyz12345-1234-5678-abcd-1234567890',
    credentialUrl: 'https://ude.my/UC-xyz12345-1234-5678-abcd-1234567890/',
    description: "Mastered advanced React patterns including compound components, render props, and hooks.",
    skills: [
      'React',
      'Hooks',
      'Context API',
      'Performance Optimization',
      'State Management'
    ],
  },
  */
];

const CertificatesSection = () => {
  const [visibleCertificates, setVisibleCertificates] = useState(3);
  
  const loadMore = () => {
    setVisibleCertificates(prev => prev + 3);
  };

  const showingCertificates = certificates.slice(0, visibleCertificates);
  const showingCount = showingCertificates.length;

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  const slideIn = {
    hidden: { width: 0, opacity: 0 },
    show: { 
      width: "2.5rem",
      opacity: 1,
      transition: { 
        duration: 0.5,
        delay: 0.3
      }
    }
  };

  return (
    <motion.section
      id="certificates"
      className="bg-gray-900 py-16 px-4 md:px-8 rounded-xl max-w-6xl mx-auto my-12"
      aria-label="Certificates"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
    >
      <div className="text-center mb-12">
        <motion.div 
          className="inline-flex items-center justify-center gap-3 mb-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div 
            className="h-0.5 bg-teal-500"
            variants={slideIn}
          />
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white"
            variants={item}
          >
            Licenses & Certifications
          </motion.h2>
          <motion.div 
            className="h-0.5 bg-teal-500"
            variants={slideIn}
          />
        </motion.div>
        <motion.p 
          className="text-gray-400 max-w-2xl mx-auto"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Validated credentials demonstrating my expertise in various technologies and methodologies
        </motion.p>
      </div>
      
      {showingCount === 0 ? (
        <motion.div 
          className="text-center py-12"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="bg-gray-800/50 p-8 rounded-xl max-w-md mx-auto">
            <h3 className="text-xl text-teal-400 font-medium mb-2">No Certificates Yet</h3>
            <p className="text-gray-400">
              Certificates will appear here once added
            </p>
          </div>
        </motion.div>
      ) : (
        <>
          <motion.div 
            className={`grid gap-6 ${showingCount === 1 ? 
              'grid-cols-1 justify-center max-w-4xl mx-auto' : 
              'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {showingCertificates.map((cert, idx) => (
              <motion.div 
                key={`${cert.credentialId}-${idx}`}
                variants={item}
              >
                <CertificateCard 
                  {...cert} 
                  isSingleCard={showingCount === 1}
                />
              </motion.div>
            ))}
          </motion.div>
          
          {visibleCertificates < certificates.length && (
            <motion.div 
              className="text-center mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <button
                onClick={loadMore}
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors border border-gray-700 flex items-center gap-2 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Show More Certificates
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </motion.div>
          )}
        </>
      )}
    </motion.section>
  );
};

export default CertificatesSection;