import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

type Props = {}

function About({}: Props) {
  return (
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 2}} className='flex flex-col text-center md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center md:text-left relative h-screen mb-20 overflow-x-scroll' >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3> 
        <motion.img initial={{x: -200, opacity: 0}} className="md:-mb-35 lg:-mb-35 flex-shrink-0 w-56 mt-52 md:mt-0 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[400px]" whileInView={{x:0, opacity: 1}} viewport={{once: true}} transition={{duration: 1.2}} src="../IMG_20220819_163626.jpg" alt="Mahir Patel"/>
    

        <div className='space-y-10 py-6 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                Here is a {" "}<span className='underline decoration-[#F7AB0A]/50'>little</span>{" "}background 
            </h4>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi porro, facilis sapiente assumenda eius officia dolore tenetur dolorem neque aliquid, odit libero! Consequatur error blanditiis perferendis illo magni, id, ex cupiditate nostrum quibusdam nemo voluptatum placeat deserunt voluptatibus sit quos qui sed, fugiat possimus! Amet quos nobis commodi voluptas tempore facilis illo similique, corrupti eligendi id saepe esse perferendis libero debitis officia et fuga est. Doloribus odit quisquam eum, velit eligendi assumenda repellat cumque quasi esse. Deserunt iure provident maxime hic! A, ratione perferendis distinctio porro quidem, expedita dolorem ducimus, repellendus impedit cumque explicabo. Laborum deleniti vel sapiente autem beatae consectetur praesentium eius error totam atque! Tenetur, sapiente. Alias magnam harum autem expedita sint nostrum? Optio ducimus harum impedit sint eaque saepe officia soluta itaque a reprehenderit! Voluptatum dolores accusamus facilis totam voluptates, nulla mollitia rerum fugit.</p>
        </div>
    </motion.div>
  )
}

export default About