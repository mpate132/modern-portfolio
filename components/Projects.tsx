import { urlFor } from '@/sanity';
import { Project } from '@/typings'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    projects: Project[];
}

function Projects({projects}: Props) {

  return (
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1.5}}
    className='h-screen relative flex overflow-y-hidden overflow-y-scroll flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>
            Projects
        </h3>

        <div className='relative w-full flex overflow-x-scroll snap-x snap-mandatory z-20 top-10 overflow-y-hidden scrollbar scrollbar-track-gray-400/20% scrollbar-thumb-[#F7AB0A]/80'>
            {projects?.map((project, i)=>(
                <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen ' >
                    <motion.img initial={{y:-300, opacity: 0}} transition={{duration: 1.2}} whileInView={{opacity: 1, y:0}} viewport={{once: true}}
                    src={urlFor(project?.image).url()}alt="" className='lg:h-64 lg:w-auto object-cover'/>

                    <div key={i} className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-2xl lg:text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]/50'>Case Study {i+1} of {projects.length}:</span>  {project.title} 
                        </h4>
                        <div className='flex items-center space-x-2 justify-center'>

                            {project?.technologies.map((technology)=>(
                                <img className='h-10 w-10 object-cover rounded-full' key={technology._id} src={urlFor(technology.image).url()} alt="" />
                            ))}
                        </div>

                        <p className='text-sm md:text-lg'>
                           {project.summary}
                        </p>
                    </div>
                </div>
            ))}
        </div>

        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12' />
    </motion.div>
  )
}

export default Projects