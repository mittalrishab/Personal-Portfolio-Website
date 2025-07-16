import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CertificateCard from './CertificateCard';

// Import logos
import udemyLogo from '../../assets/udemyLogo.png';
import ibmLogo from '../../assets/ibmLogo.png';
import certImg from '../../assets/UdemyCertificate.jpg';
import devopsfundamentalsCertificate from '../../assets/devopsfundamentalsCertificate.png';
import devopsdesignCertificate from '../../assets/devopsdesignCertificate.png';

const certificates = [
  {
    logo: udemyLogo,
    certificateImg: certImg,
    title: 'The Complete Full-Stack Web Development Bootcamp',
    organization: 'Udemy',
    issueDate: 'June 2025',
    credentialId: 'UC-ac14249e-5f35-41db-afd8-158f9961d301',
    credentialUrl: 'https://ude.my/UC-ac14249e-5f35-41db-afd8-158f9961d301/',
    description: "Comprehensive training in modern web development technologies and methodologies.",
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'React'],
  },
  {
    logo: ibmLogo,
    certificateImg: devopsfundamentalsCertificate,
    title: 'Devops Fundamentals',
    organization: 'IBM',
    issueDate: 'July 2025',
    credentialId: '2baa01c99ce44dc8aab2fb521f8d9733',
    credentialUrl: 'https://courses.vit.skillsnetwork.site/certificates/2baa01c99ce44dc8aab2fb521f8d9733',
    description: 'Foundational training in cloud application development including cloud native fundamentals, DevOps practices, and IBM Cloud technologies.',
    skills: ['Cloud Computing', 'DevOps', 'IBM Cloud', 'Node.js', 'Containers', 'Microservices'],
  },
  {
    logo: ibmLogo,
    certificateImg: devopsdesignCertificate,
    title: 'Devops Agile & Design Thinking',
    organization: 'IBM',
    issueDate: 'July 2025',
    credentialId: '9dad803f12264e7aba389ced4d1ac128',
    credentialUrl: 'https://courses.vit.skillsnetwork.site/certificates/9dad803f12264e7aba389ced4d1ac128',
    description: 'Training focused on modern software development methodologies, including DevOps practices, Agile workflows, and Design Thinking principles.',
    skills: ['DevOps', 'Agile', 'Design Thinking', 'Software Development Methodologies', 'Team Collaboration'],
  },

]

const CertificatesSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        damping: 15, 
        stiffness: 200 
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      }
    }
  };

  const slideIn = {
    hidden: { width: 0, opacity: 0 },
    show: {
      width: "3rem",
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Filter certificates by organization
  const filteredCertificates = activeFilter === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.organization.toLowerCase() === activeFilter);

  // Get unique organizations for filter
  const organizations = [...new Set(certificates.map(cert => cert.organization))];

  return (
    <motion.section
      id="certificates"
      className="bg-gradient-to-br from-gray-900 to-gray-800 py-16 px-4 md:px-8 rounded-2xl max-w-6xl mx-auto my-12 shadow-2xl shadow-gray-950/50"
      aria-label="Licenses & Certifications"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.7, 
        type: "spring", 
        damping: 20 
      }}
    >
      <div className="text-center mb-12">
        <motion.div
          className="inline-flex items-center justify-center gap-4 mb-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div 
            className="h-1 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full" 
            variants={slideIn} 
          />
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-200"
            variants={item}
          >
            Licenses & Certifications
          </motion.h2>
          <motion.div 
            className="h-1 bg-gradient-to-l from-teal-500 to-emerald-400 rounded-full" 
            variants={slideIn} 
          />
        </motion.div>
        
        <motion.p
          className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Validated credentials demonstrating expertise in various technologies
        </motion.p>
      </div>

      {/* Filter Controls */}
      <motion.div 
        className="flex flex-wrap justify-center gap-3 mb-10"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-4 py-2 rounded-full transition-all ${
            activeFilter === 'all'
              ? 'bg-gradient-to-r from-teal-600 to-emerald-500 text-white shadow-lg shadow-teal-500/20'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          All Certificates
        </button>
        
        {organizations.map(org => (
          <button
            key={org}
            onClick={() => setActiveFilter(org.toLowerCase())}
            className={`px-4 py-2 rounded-full transition-all flex items-center gap-2 ${
              activeFilter === org.toLowerCase()
                ? 'bg-gradient-to-r from-teal-600 to-emerald-500 text-white shadow-lg shadow-teal-500/20'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            <img 
              src={org === 'Udemy' ? udemyLogo : ibmLogo} 
              alt={`${org} logo`} 
              className="w-5 h-5 object-contain" 
            />
            {org}
          </button>
        ))}
      </motion.div>

      {filteredCertificates.length === 0 ? (
        <motion.div
          className="text-center py-12"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="bg-gray-800/50 p-10 rounded-xl max-w-md mx-auto border border-gray-700">
            <h3 className="text-2xl text-teal-400 font-medium mb-3">No Certificates Found</h3>
            <p className="text-gray-300 text-lg">
              Try selecting a different filter
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          <AnimatePresence>
            {filteredCertificates.map((cert) => (
              <motion.div
                key={cert.credentialId}
                variants={item}
                layout
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true, margin: "-10px" }}
              >
                <CertificateCard
                  {...cert}
                  isSingleCard={filteredCertificates.length === 1}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </motion.section>
  );
};

export default CertificatesSection;