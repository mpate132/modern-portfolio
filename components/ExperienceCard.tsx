import { urlFor } from '@/sanity';
import { Experience } from '@/typings'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    experience: Experience;
}

function ExperienceCard({experience}: Props) {
  return (
    <article className='flex flex-col rounded-lg justify-center items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#292929] opacity-40 hover:opacity-100 hover:transition-opacity duration-200 cursor-pointer overflow-y-hidden scrollbar scrollbar-track-gray-400/20% scrollbar-thumb-[#F7AB0A]/80'>
        <motion.img initial={{y: -100, opacity: 0}} viewport={{once: true}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1.2}} className='w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' src={urlFor(experience.companyImage).url()} alt="" />
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>
                {experience.jobTitle}
            </h4>
            <p className='font-bold text-2xl mt-1'>{experience.company}</p>
            <div className='flex space-x-2 my-2'>
                {experience.technologies.map((technology)=>(
                    <img key={technology._id} className='h-10 w-10 object-cover rounded-full' src={urlFor(technology.image).url()} alt="" />
                ))}
                {/* Tech used */}
                {/* Tech used */}
                {/* Tech used */}
            </div>
            <p className='uppercase py-5 text-gray-300'>
                {new Date(experience.dateStarted).toDateString()} - {experience?.iscurrentlyWorkinghere ? "Present":new Date(experience.dateEnded).toDateString()}
            </p>

                <ul className='list-disc space-y-4 ml-5 text-lg overflow-y-scroll'>
                    {experience.points.map((point,i)=>(

                    <li key={i}>{point}</li>
                    ))}
                </ul>
        </div>
    </article>
  )
}

export default ExperienceCard