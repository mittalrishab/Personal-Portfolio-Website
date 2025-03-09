import React, { useState } from 'react'
import { RiMenu2Line, RiCloseLine } from "@remixicon/react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='flex flex-wrap justify-between md:items-center text-white px-6 pt-6 md:px-20 relative'>
      <span className='text-4xl font-bold tracking-wide'>Portfolio</span>
      
      {/* Mobile Menu Button */}
      <button
        className='md:hidden absolute right-6 top-6 z-50 transition-all'
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <RiCloseLine size={30} className='transition-opacity duration-300' />
        ) : (
          <RiMenu2Line size={30} className='transition-opacity duration-300' />
        )}
      </button>

      {/* Navigation Links */}
      <ul className={`
        md:flex md:items-center gap-6
        absolute md:static top-16 left-0 right-0
        transition-all duration-300 ease-in-out
        ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible md:opacity-100 md:visible'}
        mx-4 p-4 md:p-0 font-semibold 
        bg-black bg-opacity-70 backdrop-blur-sm
        rounded-xl md:bg-transparent
        text-center
      `}>
        <a href="#About" className='block py-2 hover:text-gray-300 text-xl transition-colors'><li>About</li></a>
        <a href="#Experience" className='block py-2 hover:text-gray-300 text-xl transition-colors'><li>Experience</li></a>
        <a href="#Projects" className='block py-2 hover:text-gray-300 text-xl transition-colors'><li>Projects</li></a>
        <a href="#Footer" className='block py-2 hover:text-gray-300 text-xl transition-colors'><li>Contact</li></a>
      </ul>
    </nav>
  )
}

export default Navbar