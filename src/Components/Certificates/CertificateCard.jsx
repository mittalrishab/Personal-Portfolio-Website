// CertificateCard.js
import React, { useState, useRef } from 'react';

const CertificateCard = ({
  logo,
  certificateImg,
  title,
  organization,
  issueDate,
  credentialId,
  credentialUrl,
  description,
  skills,
  isSingleCard // New prop to indicate if it's a single card
}) => {
  const [showFullImage, setShowFullImage] = useState(false);
  const [copied, setCopied] = useState(false);
  const credentialIdRef = useRef(null);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(credentialId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-teal-500/20 hover:-translate-y-1 h-full flex flex-col group ${isSingleCard ? 'max-w-2xl' : ''}`}>
      {/* Certificate Preview */}
      <div 
        className={`relative overflow-hidden cursor-pointer ${isSingleCard ? 'h-64' : 'h-52'}`}
        onClick={() => setShowFullImage(true)}
        aria-label={`View ${title} certificate`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 to-gray-900/80 z-10"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
          <div className="bg-teal-600/90 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
            Click to view
          </div>
        </div>
        <img
          src={certificateImg}
          alt={`${title} certificate`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      {/* Certificate Details */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-white p-1.5 rounded-lg shadow-sm flex-shrink-0">
            <img
              src={logo}
              alt={`${organization} logo`}
              className="h-10 w-10 object-contain"
            />
          </div>
          <div className="min-w-0">
            <span className="text-teal-400 font-medium block truncate">{organization}</span>
            <div className="text-gray-400 text-sm flex items-center gap-1">
              <span>Issued {issueDate}</span>
              <span className="mx-1">•</span>
              <div className="relative group">
                <button 
                  onClick={copyToClipboard}
                  className="flex items-center text-left"
                  aria-label="Copy credential ID"
                >
                  <span ref={credentialIdRef} className="truncate max-w-[100px]">
                    ID: {credentialId.substring(0, 8)}...
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                </button>
                <span className={`absolute -top-8 left-0 bg-gray-700 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap transition-opacity ${copied ? 'opacity-100' : 'opacity-0'}`}>
                  Copied to clipboard!
                </span>
              </div>
            </div>
          </div>
        </div>

        <h3 className={`font-bold text-white mb-3 line-clamp-2 group-hover:text-teal-300 transition-colors ${isSingleCard ? 'text-2xl' : 'text-xl'}`} title={title}>
          {title}
        </h3>
        
        <p className="text-gray-300 mb-5 line-clamp-3">{description}</p>
        
        {/* Skills Tags */}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {skills.slice(0, isSingleCard ? 6 : 4).map((skill, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-gray-700/60 text-gray-200 text-xs rounded-full truncate transition-colors hover:bg-teal-600/50"
                title={skill}
              >
                {skill}
              </span>
            ))}
            {skills.length > (isSingleCard ? 6 : 4) && (
              <span className="px-3 py-1 bg-gray-700/60 text-gray-400 text-xs rounded-full">
                +{skills.length - (isSingleCard ? 6 : 4)} more
              </span>
            )}
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={() => setShowFullImage(true)}
              className={`py-2.5 rounded-lg bg-gray-700 hover:bg-gray-600 text-white font-medium transition-colors flex items-center justify-center gap-2 ${isSingleCard ? 'flex-1' : 'flex-1'}`}
              aria-label="Preview certificate"
            >
              Preview
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
            
            <a
              href={credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`py-2.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-medium transition-colors flex items-center justify-center gap-2 group/credential ${isSingleCard ? 'flex-1' : 'flex-1'}`}
              aria-label="View credential"
            >
              Verify
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 group-hover/credential:translate-x-0.5 transition-transform"
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Full Image Modal */}
      {showFullImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowFullImage(false)}
        >
          <div className="relative max-w-4xl w-full bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute top-4 right-4 flex gap-2">
              <a
                href={certificateImg}
                download={`${title.replace(/\s+/g, '_')}_certificate.jpg`}
                className="text-white bg-gray-700 hover:bg-gray-600 rounded-lg p-2 z-10 transition-colors flex items-center gap-1"
                aria-label="Download certificate"
                onClick={(e) => e.stopPropagation()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
              <button
                className="text-white bg-gray-700 hover:bg-gray-600 rounded-lg p-2 z-10 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowFullImage(false);
                }}
                aria-label="Close preview"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <img
                src={certificateImg}
                alt={`Full size ${title} certificate`}
                className="w-full max-h-[80vh] object-contain rounded-lg border border-gray-700"
              />
            </div>
            <div className="px-6 py-4 bg-gray-900/80 border-t border-gray-700">
              <h3 className="text-lg font-bold text-white truncate">{title}</h3>
              <div className="text-sm text-gray-400 mt-1">{organization} • Issued {issueDate}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificateCard;