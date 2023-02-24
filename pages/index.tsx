import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 text-white h-screen scrollbar scrollbar-track-gray-400/20% scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Mahir&apos;s Portfolio</title>
      </Head>

      <Header />
      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero />
      </section>
      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>
      {/* Experience */}
      <section id='experience' className='snap-center'>
        <WorkExperience />
      </section>
      {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills />
      </section>
      {/* Projects */}
      <section id='projects' className='snap-start'>
        <Projects />
      </section>
      {/* Contact me */}
      <section id='contact' className='snap-start'>
        {/* @ts-ignore */}
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-2 w-full cursor-pointer '>
          <div className='flex items-center justify-center'>
            <img  className='w-10 h-10 object-cover rounded-full filter grayscale hover:grayscale-0 cursor-pointer' src="/IMG_20220819_153359.jpg" alt="" />
          </div>
        </footer>
      </Link>
    </div>
  )
}
