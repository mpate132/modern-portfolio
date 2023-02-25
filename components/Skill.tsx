import { urlFor } from '@/sanity';
import { Skill } from '@/typings';
import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    directionLeft?: boolean;
    skill: Skill;
}

function Skill({directionLeft, skill}: Props) {
  return (
    <div className='group relative flex cursor-pointer '>
        <motion.img className='object-cover h-16 w-16 rounded-full border border-gray-500 xl:h-20 xl:w-20 filter group-hover:grayscale transition duration-300 ease-in-out'  initial={{x: directionLeft ? -200 : 200, opacity: 0}} animate={{opacity: 1, x:0}} transition={{duration: 1}} src={urlFor(skill.image).url()} alt="" />

        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 xl:h-20 xl:w-20  rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-xl font-bold text-black opacity-100'>100%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill