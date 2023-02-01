import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {SiLeetcode, SiCodewars, SiHackerrank, } from 'react-icons/si'
import {SlNotebook} from 'react-icons/sl'
const MobileBar = (props) => {
  return (
   <div className={props.bringBar===true?'fixed z-50 overflow-x-scroll top-10 right-0 left-0 bottom-0 grid justify-center bg-gradient-to-t from-blue-700 via-blue-800 to-gray-900 transition-all  duration-300':'absolute -top-[500px]'}>


    <div className='MobileBar mt-10 py-10 px-5 bg-neutral-900 text-white rounded-lg h-fit text-3xl space-y-7 border-2 border-sky-300'>
       <span  className='flex items-center '><SiLeetcode/> Leetcode</span>
       <span  className='flex items-center '><SiCodewars/> Codewars</span>
       <span  className='flex items-center '><SiHackerrank/> HackerRank</span>
       <span className='flex items-center '><SlNotebook/> Notes & Resources</span>
       <span className='flex items-center '><AiFillGithub/> Contribute</span>
    </div>
  </div> 
  )
}

export default MobileBar