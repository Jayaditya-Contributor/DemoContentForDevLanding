import React from 'react'
import {IoMdArrowDropright} from 'react-icons/io'
const Hero = () => {
  return (
    <div className='bg-neutral-900 h-screen text-white grid place-content-center'>

    <div className='Hero__INFO text-center  space-y-7 lg:space-y-12'>
    <div className='Main-heading xl:px-10'>
       <p className='text-3xl font-bold md:text-5xl lg:text-8xl'>Our <span className='choosen2 text-blue-300'>Content</span> Is To Help.Educate.Inspire</p>
    </div>

    <div className='Main-Theme choosen2 font-[200] text-sm px-6 md:text-lg lg:text-xl leading-relaxed lg:leading-loose lg:px-36 xl:px-96'>
       <p>This is an open-source project aimed at providing <span className='text-blue-300 font-bold'>learning tools</span> for developers that cover a wide range of learning styles.   providing <span className='text-blue-300 font-semibold'>FREE, UP-TO-DATE, and DIVERSE</span> methods to learn the skills needed to make it in this industry!</p>
    </div>

    <div className='Hero-Buttons space-y-8 md:flex md:justify-center md:space-x-5 '>

    <div className='button-col1 flex justify-evenly md:space-x-4'>
      <button className="choosen2 bg-blue-400 p-3  text-sm rounded-full flex items-center text-slate-900 font-semibold">Dashboard <IoMdArrowDropright className='text-xl'/></button>
      <button className='choosen2 bg-blue-400 text-sm p-3 rounded-full flex items-center text-slate-900 font-semibold'>Team <IoMdArrowDropright className='text-xl'/></button>
    </div>

    <div className='button-col2  flex justify-evenly md:space-x-4'>
      <button className='choosen2 p-3 md:p-9 bg-blue-400 text-sm rounded-full flex items-center text-slate-900 font-semibold'>Projects <IoMdArrowDropright className='text-xl'/></button>
      <button className='choosen2 p-3 md:p-2 bg-blue-400 text-sm  rounded-full flex items-center text-slate-900 font-semibold'>Calendar <IoMdArrowDropright className='text-xl'/></button>
   </div>

    </div>
    </div>

    </div>
  )
}

export default Hero