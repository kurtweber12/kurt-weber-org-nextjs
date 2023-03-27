import React from 'react'
import { motion } from 'framer-motion'

import gradpic from '../public/DSC04692.jpg'
import Image from 'next/image'

const About = () => {
    return (
        <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{ duration: 1.5}}
        
            className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-neutral-500 text-2xl ml-3'>About</h3>

            <motion.div
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                viewport={{once: true}}
                transition={{
                    duration: 1.2
                }}
                
            >
                <Image 
                    src={gradpic}
                    alt="Kurt Weber"
                    className="-mb-20 md:mb-0 flex-shrink-0 h-56 w-56 object-cover rounded-full md:rounded-lg md:w-64 md:h-64"
                />
            </motion.div>
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#0284c7]/70'>little</span> background</h4>
                <p className='font-light tracking-wide'>This is a lot of random text lol</p>
            </div>
        </motion.div>
    )
}

export default About