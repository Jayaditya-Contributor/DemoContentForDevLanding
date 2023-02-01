import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import art from '../Assests/art.svg'
import { Slide } from "react-awesome-reveal";
const About = () => {
  return (
    <div className='About bg-gradient-to-l from-blue-700 via-blue-800 to-gray-900 pt-20  px-4 lg:flex lg:space-x-7 lg:items-center lg:pt-5'>
      <Slide direction='right'>
      <img src={art} alt="art" className='lg:h-[900px]'  />
      </Slide>
      <Slide>
      <div className='lg:absolute lg:-left-[10000px]'>
      <p className='choosen2 text-white font-semibold mt-14 text-2xl md:text-4xl md:mt-20 '>About us</p> 
      <div className='border-4 rounded-full w-32 mt-4 border-blue-300'></div>
      </div>
     </Slide>
      <div className='About__Main__Points space-y-7 text-xl text-slate-300 py-10 font-semibold '>

      <div className='absolute -left-[10000px] lg:static'>
      <p className='choosen2 text-white font-semibold mt-14 text-2xl md:text-4xl md:mt-20 lg:text-6xl'>About us</p> 
      <div className='border-4 rounded-full w-32 mt-4 border-blue-300'></div>
      </div>
        <Slide>
         <div className='flex space-x-1'>

          <AiFillStar className='text-blue-300 text-8xl -mt-10 md:text-5xl md:-mt-4 '/>
          <p className='md:text-2xl'>This is an open-source project aimed at providing learning tools for developers that cover a wide range of learning styles.</p>
          </div>
          

          <div className='flex space-x-1 '>
          <AiFillStar className='text-blue-300 text-[150px] md:text-[60px] -mt-[70px] md:-mt-5'/>
          <p className='md:text-2xl'>Our devoted team behind this project have all been through and continue to perservere through learning  technology, updates, languages, frameworks, problems, and so much more.</p>
         </div>

         <div className='flex space-x-1'>
         <AiFillStar className='text-blue-300 text-[150px] md:text-[50px] -mt-16 md:-mt-4 '/>
          <p className='md:text-2xl'>We are all giving back to the community by providing FREE, UP-TO-DATE, and DIVERSE methods to learn the skills needed to make it in this industry!</p>
          </div>

          <div className='flex space-x-1'>
          <AiFillStar className='text-blue-300 text-[80px] -mt-8 md:text-[33px] md:-mt-2 '/>
          <p className='md:text-2xl'>We aim to please users with not just another solution bank to LeetCode problems, but more.</p>
          </div>
          </Slide>
      </div>
      
    </div>
  )
}

export default About