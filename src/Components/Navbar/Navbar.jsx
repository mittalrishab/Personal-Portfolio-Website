import React, { useState, useEffect } from 'react'
import { RiMenu2Line, RiCloseLine, RiExternalLinkLine } from "@remixicon/react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Scroll detection for dynamic navbar styling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      
      // Active section detection
      const sections = ['About', 'Experience', 'Projects', 'Footer'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(currentSection || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('nav')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const navigationItems = [
    { href: "#About", label: "About", icon: "👋" },
    { href: "#Experience", label: "Experience", icon: "💼" },
    { href: "#Projects", label: "Projects", icon: "🚀" },
    { href: "#Footer", label: "Contact", icon: "📬" },
    { href: "#certificates", label: "Certificates", icon: "📜" }
  ];

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out
      ${scrolled 
        ? 'backdrop-blur-xl bg-black/20 border-b border-white/10 shadow-2xl shadow-black/25' 
        : 'backdrop-blur-sm bg-transparent'
      }
      flex flex-wrap justify-between md:items-center text-white px-6 py-4 md:px-20
    `}>
      
      {/* Enhanced Logo with Gradient Effect */}
      <div className="flex items-center group">
        <span className={`
          text-4xl font-bold tracking-wide transition-all duration-300
          bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent
          group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-pink-400
          ${scrolled ? 'scale-90' : 'scale-100'}
        `}>
          Portfolio
        </span>
        <div className="ml-2 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
      </div>

      {/* Enhanced Mobile Menu Button */}
      <button
        className={`
          md:hidden relative right-0 top-0 z-50 p-2 rounded-xl transition-all duration-300
          hover:bg-white/10 hover:backdrop-blur-sm hover:scale-110 active:scale-95
          ${isOpen ? 'bg-white/10 backdrop-blur-sm' : ''}
        `}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        <div className="relative w-6 h-6">
          <RiMenu2Line 
            size={24} 
            className={`absolute inset-0 transition-all duration-300 ${
              isOpen ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
            }`} 
          />
          <RiCloseLine 
            size={24} 
            className={`absolute inset-0 transition-all duration-300 ${
              isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'
            }`} 
          />
        </div>
      </button>

      {/* Enhanced Navigation Links */}
      <div className={`
        md:flex md:items-center
        absolute md:static top-full left-0 right-0 mt-2 md:mt-0
        transition-all duration-500 ease-out transform-gpu
        ${isOpen 
          ? 'opacity-100 visible translate-y-0 scale-100' 
          : 'opacity-0 invisible -translate-y-4 scale-95 md:opacity-100 md:visible md:translate-y-0 md:scale-100'
        }
      `}>
        <ul className={`
          flex flex-col md:flex-row md:items-center gap-2 md:gap-8
          mx-4 md:mx-0 p-6 md:p-0
          bg-black/40 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none
          border border-white/10 md:border-none rounded-2xl md:rounded-none
          shadow-2xl md:shadow-none
        `}>
          {navigationItems.map((item, index) => (
            <li key={item.label} className="group">
              <a 
                href={item.href} 
                className={`
                  relative flex items-center gap-3 md:gap-2 px-4 py-3 md:py-2 text-lg md:text-base
                  font-medium transition-all duration-300 rounded-xl md:rounded-none
                  hover:bg-white/5 md:hover:bg-transparent hover:scale-105 md:hover:scale-100
                  ${activeSection === item.href.slice(1) 
                    ? 'text-blue-400 bg-white/10 md:bg-transparent' 
                    : 'text-white hover:text-blue-300'
                  }
                  
                  /* Enhanced Underline Animation */
                  after:absolute after:left-4 md:after:left-0 after:bottom-1 md:after:bottom-0 
                  after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-purple-500
                  after:transition-all after:duration-500 after:ease-out
                  ${activeSection === item.href.slice(1)
                    ? 'after:w-[calc(100%-2rem)] md:after:w-full after:opacity-100'
                    : 'after:w-0 hover:after:w-[calc(100%-2rem)] md:hover:after:w-full after:opacity-0 hover:after:opacity-100'
                  }
                  
                  /* Glow Effect on Hover */
                  hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]
                `}
                onClick={() => setIsOpen(false)}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <span className="text-xl md:hidden group-hover:scale-125 transition-transform duration-300">
                  {item.icon}
                </span>
                <span className="relative">
                  {item.label}
                  {item.label === 'Projects' && (
                    <RiExternalLinkLine 
                      size={14} 
                      className="inline ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                    />
                  )}
                </span>
              </a>
            </li>
          ))}
          
          {/* CTA Button in Mobile Menu */}
          <li className="md:hidden mt-4 pt-4 border-t border-white/20">
            <a 
              href="#Footer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              onClick={() => setIsOpen(false)}
            >
              <span>Let's Connect</span>
              <span className="animate-bounce">🤝</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Decorative Elements */}
      <div className="hidden md:block absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </nav>
  )
}

export default Navbar
