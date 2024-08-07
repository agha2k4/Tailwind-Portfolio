import React from 'react'
import {HERO_CONTENT} from '../constants'
import profilePic from '../assets/kevinRushProfile.png'
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <div className='flex flex-wrap'>
        <div className='W-full lg:w-1/2'>
        <div className='flex flex-col items-center lg:items-start'>
            <motion.h1 animate={{ x: 100 }}
             className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Kunain Regal</motion.h1>
            <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent '>
                Full Stack Developers
            </span>
            <p className='my-2 max-w-xl py-6 font-Light tracking-tighter'>{HERO_CONTENT}</p>
        </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
        <div className='flex justify-center'>
            <img src={profilePic} alt="Kunain Regal" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
