import React from 'react'
import {SiLeetcode, SiHackerrank,SiCodewars} from 'react-icons/si'
import {FcTreeStructure, FcAddressBook} from 'react-icons/fc'
import { Bounce } from 'react-awesome-reveal'
const LearningTools = () => {
    const learningArrObj=[{name: "Leetcode", icon:<SiLeetcode/>}, {name: "HackerRank", icon:<SiHackerrank/>}, {name:"CodeWars", icon:<SiCodewars/>},{name:"DS & Algo", icon:<FcTreeStructure/>},{name:"Notes & Resources", icon:<FcAddressBook/>}]
  return (
<div className=' bg-neutral-900 text-white py-10 px-5 '>

    <p className='choosen2 text-white font-semibold  text-2xl md:text-4xl lg:text-6xl lg:ml-5'>Learning Tools</p> 
    <div className='border-4 rounded-full w-32 mt-4 border-blue-300 lg:ml-5'></div>

    <div className='learning space-y-10 pt-20 md:grid md:grid-cols-2 md:items-baseline  md:ml-10 lg:flex lg:justify-center lg:space-x-8'>
    {learningArrObj.map((value, index)=>{
      return (
        <Bounce>
    <div key={index} className='learning__container  text-center rounded-lg  py-4 space-y-6 bg-gradient-to-r from-gray-900 to-gray-600 md:py-8 md:w-80 lg:w-64'>
        <i className='text-blue-300 grid justify-center text-6xl'>{value.icon}</i>
        <p className='choosen2 font-semibold text-slate-300'>{value.name}</p>
      </div>
      </Bounce>
      )
    })}
    </div>
    </div>
  )
}

export default LearningTools