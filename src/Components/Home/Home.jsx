import React from 'react'
import avatarImg from '../../assets/avatarImage.png'
import TextChange from '../TextChange'

const Home = () => {
  return (
    <div className='text-white flex flex-col w-full justify-around items-center p-10 md:p-20 lg:flex-row lg:justify-around md:mb-[100px]'>
        <div className='lg:w-65/100 md:pt-10 min-w-[270px] text-center lg:text-left'>
            <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'><span>Hi, I'm&nbsp;</span><span><TextChange/></span></h1>
            <p className='text-sm md:text-2xl tracking-tight'>I am a passionate Web Developer</p>
            <div className='mt-5 md:mt-10 flex justify-center lg:justify-start'>
                <button className='text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>
                    Contact Me
                </button>
            </div>
        </div>
        <div className='mt-15 md:mt-10 lg:mt-0'>
            <img className="max-w-full w-[300px] md:w-[330px] border-blue-[#171D32] border-[5px] rounded-full lg:rounded-none" src={avatarImg} alt="Avatar" />
        </div>
    </div>
  )
}

export default Home