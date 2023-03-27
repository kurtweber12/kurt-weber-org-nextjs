import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ directionLeft }) => {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0}}
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--i_xQkWHO--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/207/23eb8886-4b62-4a01-ac2b-7aafb500ad26.png"
                className='rounded-full border-neutral-500 object-cover w-24 h-24 xl:h-32 xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out'
            />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:h-32 xl:w-32 rounded-full z-0'>
                <div className='flex items-center justify-center h-4'>
                    <p className='text-3xl font-bold text-black opacity-100'>100%</p>
                </div>
            </div>
        </div>
    )
}

export default Skill