import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut",
      staggerChildren: 0.1
    } 
  },
};

const modalBackdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalContent = {
  hidden: { opacity: 0, scale: 0.96, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 25 
    } 
  },
};

const skillTag = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05 },
  }),
  hover: {
    scale: 1.08,
    backgroundColor: "rgba(13, 148, 136, 0.5)",
    transition: { duration: 0.2 }
  }
};

const CertificateCard = ({
  logo,
  certificateImg,
  title,
  organization,
  issueDate,
  credentialId,
  credentialUrl,
  description,
  skills = [],
  isSingleCard,
}) => {
  const [showFullImage, setShowFullImage] = useState(false);
  const [copied, setCopied] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showAllSkills, setShowAllSkills] = useState(false);

  const copyToClipboard = useCallback(async () => {
    if (!credentialId) return;
    try {
      await navigator.clipboard.writeText(credentialId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = credentialId;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [credentialId]);

  const handleDownload = (e) => {
    e.stopPropagation();
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) setShowFullImage(false);
  };

  // Determine how many skills to show
  const maxSkills = isSingleCard ? 8 : 5;
  const displaySkills = showAllSkills ? skills : skills.slice(0, maxSkills);
  const extraSkillsCount = Math.max(skills.length - maxSkills, 0);

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={`bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-teal-500/20 hover:-translate-y-1 h-full flex flex-col group border border-slate-700/50 ${
        isSingleCard ? "max-w-3xl" : ""
      }`}
      aria-label={`Certificate: ${title} from ${organization}`}
    >
      {/* Glowing effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500/10 via-blue-500/10 to-indigo-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

      {/* Certificate Preview */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className={`relative overflow-hidden cursor-pointer ${
          isSingleCard ? "h-72" : "h-56"
        }`}
        onClick={() => setShowFullImage(true)}
        aria-label={`View ${title} certificate`}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setShowFullImage(true)}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 to-slate-900/80 z-10"></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
        >
          <motion.div
            whileHover={{ scale: 1.08 }}
            className="bg-teal-600/90 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            View Certificate
          </motion.div>
        </motion.div>
        <motion.img
          src={certificateImg}
          alt={`${title} certificate`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>

      {/* Certificate Details */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            whileHover={{ scale: 1.08 }}
            className="bg-white/90 p-1.5 rounded-lg shadow-sm flex-shrink-0 transition-transform duration-300 border border-slate-300/20"
          >
            <img
              src={logo}
              alt={`${organization} logo`}
              className="h-10 w-10 object-contain"
              onError={(e) => (e.target.src = "/placeholder-logo.svg")}
            />
          </motion.div>
          <div className="min-w-0">
            <motion.span 
              whileHover={{ color: "#5eead4" }}
              className="text-teal-400 font-medium block truncate transition-colors"
            >
              {organization}
            </motion.span>
            <div className="text-slate-400 text-sm flex items-center gap-1">
              <span>Issued {issueDate}</span>
              {credentialId && (
                <>
                  <span className="mx-1">•</span>
                  <div className="relative group">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={copyToClipboard}
                      className="flex items-center text-left"
                      aria-label="Copy credential ID"
                    >
                      <span className="truncate max-w-[100px]">
                        ID: {credentialId.substring(0, 8)}...
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1 opacity-70 transition-opacity group-hover:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                        />
                      </svg>
                    </motion.button>
                    <AnimatePresence>
                      {copied && (
                        <motion.span
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.3 }}
                          className="absolute -top-8 left-0 bg-slate-700 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap shadow-lg"
                          aria-live="assertive"
                        >
                          Copied to clipboard!
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <motion.h3
          whileHover={{ color: "#5eead4" }}
          className={`font-bold text-white mb-3 line-clamp-2 transition-colors duration-300 ${
            isSingleCard ? "text-2xl" : "text-xl"
          }`}
          title={title}
        >
          {title}
        </motion.h3>
        <motion.p 
          whileHover={{ color: "#e2e8f0" }}
          className="text-slate-300 mb-5 line-clamp-3 transition-colors"
        >
          {description}
        </motion.p>
        
        {/* Skills Tags */}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {displaySkills.map((skill, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={skillTag}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="px-3 py-1.5 bg-slate-700/60 text-slate-200 text-xs rounded-full truncate transition-all duration-300 cursor-pointer"
                title={skill}
              >
                {skill}
              </motion.span>
            ))}
            {extraSkillsCount > 0 && !showAllSkills && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAllSkills(true)}
                className="px-3 py-1.5 bg-slate-700/60 text-slate-400 text-xs rounded-full transition-colors hover:text-slate-300"
              >
                +{extraSkillsCount} more
              </motion.button>
            )}
            {showAllSkills && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAllSkills(false)}
                className="px-3 py-1.5 bg-slate-700/60 text-slate-400 text-xs rounded-full transition-colors hover:text-slate-300"
              >
                Show less
              </motion.button>
            )}
          </div>
          <div className="flex gap-3">
            <motion.button
              whileHover={{ 
                scale: 1.04, 
                backgroundColor: "rgb(30 41 59)",
                boxShadow: "0 4px 10px rgba(8, 145, 178, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowFullImage(true)}
              className={`py-2.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 flex-1`}
              aria-label="Preview certificate"
            >
              Preview
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </motion.button>
            <motion.a
              whileHover={{ 
                scale: 1.04, 
                backgroundColor: "rgb(13 148 136)",
                boxShadow: "0 4px 15px rgba(13, 148, 136, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              href={credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`py-2.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 flex-1`}
              aria-label="Verify credential"
            >
              Verify
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>

      {/* Full Image Modal */}
      <AnimatePresence>
        {showFullImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            variants={modalBackdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.25 }}
            onClick={handleModalClick}
            role="dialog"
            aria-modal="true"
            aria-label={`${title} certificate preview`}
          >
            <motion.div
              variants={modalContent}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="relative max-w-4xl w-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="absolute top-4 right-4 flex gap-2 z-20">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={certificateImg}
                  download={`${title.replace(/\s+/g, "_")}_certificate.jpg`}
                  className="text-white bg-slate-700/80 hover:bg-slate-600 rounded-lg p-2 transition-all duration-300 flex items-center gap-1 backdrop-blur-sm border border-slate-600"
                  aria-label="Download certificate"
                  onClick={handleDownload}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white bg-slate-700/80 hover:bg-slate-600 rounded-lg p-2 transition-all duration-300 backdrop-blur-sm border border-slate-600"
                  onClick={() => setShowFullImage(false)}
                  aria-label="Close preview"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              </div>
              
              {/* Loading spinner */}
              {!imageLoaded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center h-96"
                >
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
                </motion.div>
              )}
              
              {/* Certificate image */}
              <div className="p-4 sm:p-6">
                <motion.img
                  src={certificateImg}
                  alt={`Full size ${title} certificate`}
                  className={`w-full max-h-[80vh] object-contain rounded-lg border border-slate-700 transition-opacity duration-500 ${
                    imageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: imageLoaded ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              
              {/* Certificate info footer */}
              <motion.div
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 24, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="px-6 py-4 bg-slate-800/80 backdrop-blur-sm border-t border-slate-700"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-white/90 p-1 rounded-lg flex-shrink-0">
                    <img
                      src={logo}
                      alt={`${organization} logo`}
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white truncate">
                      {title}
                    </h3>
                    <div className="text-sm text-slate-400 mt-1">
                      {organization} • Issued {issueDate}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CertificateCard;