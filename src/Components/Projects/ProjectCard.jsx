import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import PropTypes from 'prop-types';

const cardVariants = {
  hidden: { opacity: 0, y: 30, transition: { duration: 0.5, ease: "easeOut" } },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } }
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "backOut" }
  },
  hover: {
    scale: 1.1,
    backgroundColor: "rgba(70, 86, 151, 0.5)",
    color: "#ffffff",
    transition: { duration: 0.2 }
  }
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    y: -2,
    backgroundColor: "#374785",
    boxShadow: "0 4px 10px rgba(70, 86, 151, 0.4)",
    transition: { type: "spring", stiffness: 300, damping: 10 }
  },
  tap: { scale: 0.95 }
};

const ProjectCard = memo(({ title, description, tags, image, demoLink, codeLink }) => {
  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/400x225?text=Project+Image";
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover={{ y: -5, boxShadow: "0 16px 32px rgba(70, 86, 151, 0.2)" }}
      viewport={{ once: true, margin: "-50px", amount: 0.2 }}
      className="group relative bg-[#0F172A] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-transparent hover:border-[#465697]/30"
    >
      {/* Card Header Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#465697] to-teal-500" />

      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden flex-shrink-0">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          <img
            loading="lazy"
            width={400}
            height={225}
            src={image}
            alt={title}
            className="w-full h-full object-scale-down md:object-cover"
            onError={handleImageError}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />

        <motion.div
          variants={overlayVariants}
          className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 bg-[#1E293B]/90 backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row gap-4">
            {demoLink && (
              <motion.a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo of ${title}`}
                className="flex items-center gap-2 px-5 py-2.5 bg-[#465697] text-white rounded-lg hover:bg-[#374785] text-sm md:text-base"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <FiExternalLink className="text-lg" aria-hidden="true" />
                Live Demo
              </motion.a>
            )}
            {codeLink && (
              <motion.a
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View source code for ${title}`}
                className="flex items-center gap-2 px-5 py-2.5 border border-[#465697] text-[#465697] rounded-lg hover:bg-[#465697] hover:text-white text-sm md:text-base"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <FiGithub className="text-lg" aria-hidden="true" />
                Source Code
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <motion.h3
            className="text-xl font-semibold text-white mb-3"
            whileHover={{ color: '#465697' }}
            transition={{ duration: 0.2 }}
          >
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#465697] inline-block relative"
            >
              {title}
              <motion.span
                className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#465697]"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </a>
          </motion.h3>

          <motion.p
            className="text-gray-300 text-sm md:text-base leading-relaxed mb-5 line-clamp-3"
            whileHover={{ color: '#e2e8f0' }}
            transition={{ duration: 0.2 }}
          >
            {description}
          </motion.p>

          <div className="flex flex-wrap gap-2.5 mb-2">
            {tags.map((tag, index) => (
              <motion.span
                key={index}
                className="px-3 py-1.5 text-xs md:text-sm bg-[#465697]/30 rounded-full text-[#A3BFFA] cursor-default"
                variants={tagVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ delay: index * 0.05 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="flex gap-3 md:hidden mt-4">
          {demoLink && (
            <motion.a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs bg-[#465697] text-white rounded-lg flex-shrink-0"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FiExternalLink className="text-sm" aria-hidden="true" />
              Demo
            </motion.a>
          )}
          {codeLink && (
            <motion.a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs border border-[#465697] text-[#465697] rounded-lg flex-shrink-0"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FiGithub className="text-sm" aria-hidden="true" />
              Code
            </motion.a>
          )}
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#465697]/10 to-teal-500/10 rounded-xl blur-sm" />
      </div>
    </motion.div>
  );
});

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  demoLink: PropTypes.string,
  codeLink: PropTypes.string
};

ProjectCard.defaultProps = {
  demoLink: null,
  codeLink: null
};

export default ProjectCard;
