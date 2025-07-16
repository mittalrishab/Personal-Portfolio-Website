import React from 'react';
import { motion } from 'framer-motion';
import CertificateCard from './CertificateCard';
import udemyLogo from '../../assets/udemyLogo.png';
import ibmLogo from '../../assets/ibmLogo.png';
import certImg from '../../assets/UdemyCertificate.jpg';
import devopsfundamentalsCertificate from '../../assets/devopsfundamentalsCertificate.png'
import devopsdesignCertificate from '../../assets/devopsdesignCertificate.png'
// Updated with unique certificates
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

];

const CertificatesSection = () => {
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

  // Function to determine grid column classes based on certificate count
  const getGridClasses = () => {
    const count = certificates.length;

    if (count === 1) return 'grid-cols-1 max-w-4xl mx-auto';
    if (count === 2) return 'grid-cols-1 md:grid-cols-2';
    if (count === 3 || count === 6) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    if (count === 4) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
    if (count === 5) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5';

    return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
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
          <motion.div className="h-0.5 bg-teal-500" variants={slideIn} />
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white"
            variants={item}
          >
            Licenses & Certifications
          </motion.h2>
          <motion.div className="h-0.5 bg-teal-500" variants={slideIn} />
        </motion.div>
        <motion.p
          className="text-gray-400 max-w-2xl mx-auto"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Validated credentials demonstrating expertise in various technologies
        </motion.p>
      </div>

      {certificates.length === 0 ? (
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
        <motion.div
          className={`grid gap-6 ${getGridClasses()}`}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.credentialId}
              variants={item}
              viewport={{ once: true, margin: "-10px" }}
            >
              <CertificateCard
                {...cert}
                isSingleCard={certificates.length === 1}
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.section>
  );
};

export default CertificatesSection;