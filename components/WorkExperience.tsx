import { Experience } from '@/typings'
import { motion } from 'framer-motion'
import React from 'react'
import ExperienceCard from './ExperienceCard'

type Props = {
  experiences: Experience[]
}

function WorkExperience({experiences}: Props) {
  return (
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 2}}
     className='h-screen flex overflow-hidden relative overflow-y-scroll scrollbar-none flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3>

        <div className='w-full flex items-center space-x-5 overflow-x-scroll overflow-y-hidden snap-x snap-mandatory pt-52 xl:pt-80 scrollbar scrollbar-track-gray-400/20% scrollbar-thumb-[#F7AB0A]/80'>
            {experiences?.map((experience)=>(
              <ExperienceCard key={experience._id} experience={experience} />
            ))}
            {/* Experience cards */}
            {/* Experience cards */}
        </div>
    </motion.div>
  )
}

export default WorkExperience