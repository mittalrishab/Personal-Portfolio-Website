import React from 'react'
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa"
import { SiRedis, SiMongodb } from "react-icons/si"
import { FaGoogle, FaAmazon } from "react-icons/fa"
import { RiNetflixFill } from '@remixicon/react'

const Experience = () => {
    return (
        <div id="Experience" className='p-5 mt-10'>
            <h1 className='text-3xl md:text-4xl text-white font-bold mb-12 md:mb-16'>Experience</h1>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
                {/* Skills Grid */}
                <div className='grid grid-cols-3 md:grid-cols-4 gap-6 justify-center items-center'>
                    {[
                        [FaHtml5, '#E34F26'],
                        [FaCss3, '#1572b6'],
                        [FaReact, '#61DAFB'],
                        [FaJs, '#F7DF1E'],
                        [FaFigma, '#F24E1E'],
                        [SiMongodb, '#47A248'],
                        [SiRedis, '#FF4438'],
                    ].map(([Icon, color], index) => (
                        <div 
                            key={index}
                            className='p-4 bg-zinc-950 rounded-xl flex items-center justify-center'
                        >
                            <Icon size={50} color={color} className='hover:scale-110 transition-transform' />
                        </div>
                    ))}
                </div>

                {/* Experience Cards */}
                <div className='space-y-6'>
                    {[
                        [FaGoogle, '#4285F4', 'Google'],
                        [RiNetflixFill, '#E50914', 'Netflix'],
                        [FaAmazon, '#FF9900', 'Amazon'],
                    ].map(([Icon, color, company]) => (
                        <div 
                            key={company}
                            className='bg-slate-950 bg-opacity-45 rounded-lg p-6 flex gap-6 items-start'
                        >
                            <Icon size={50} color={color} className='flex-shrink-0' />
                            <div className='text-white'>
                                <h2 className='text-xl font-semibold mb-2'>Software Engineer, {company}</h2>
                                <p className='text-sm text-gray-400 mb-3'>Sept 2023 - Present</p>
                                <ul className='text-sm space-y-2'>
                                    <li className='flex items-center'>
                                        <span className='mr-2'>•</span>
                                        Worked as Software Developer
                                    </li>
                                    <li className='flex items-center'>
                                        <span className='mr-2'>•</span>
                                        Senior SDE Developer
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience