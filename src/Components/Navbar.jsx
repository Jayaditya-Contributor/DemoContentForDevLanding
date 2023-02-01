import React from 'react'
import Logo from '../Assests/CforD2.png'
import {RxHamburgerMenu, RxCross1} from 'react-icons/rx'
import { useState } from 'react'
import MobileBar from './MobileBar'
const Navbar = () => {
    const [bar, Bringbar] = useState(false)
  return (
    <>
    <nav className='Navbar fixed z-50 w-full px-3 py-3 md:px-7 bg-neutral-900 text-white flex items-center justify-between lg:px-16'>
        <div className='Navbar__Left flex items-center'>
           <img className='Navbar__logo h-7' src={Logo} alt="logo"/>
           <p className='Navbar__title choosen text-2xl lg:text-3xl'>Content For Developers</p>
        </div>

        <div className='Navbar__Right text-3xl lg:absolute lg:-mt-[1000px]'>
           {bar===false?<RxHamburgerMenu onClick={()=>{Bringbar(true)}}/>:<RxCross1 onClick={()=>{Bringbar(false)}}/>}
        </div>


        <div className="Navbar__Left absolute -mt-[1000px] lg:static lg:mt-0 flex space-x-5 choosen font-bold text-slate-300 text-xl items-center cursor-pointer">
          <p className='hover:text-blue-300 transition-colors duration-300'>Leetcode</p>
          <p className='hover:text-blue-300 transition-colors duration-300'>CodeWars</p>
          <p className='hover:text-blue-300 transition-colors duration-300'>HackerRank</p>
          <p className='hover:text-blue-300 transition-colors duration-300'>Notes & Resources</p>
          <a  href='https://github.com/mathcodes/contentfordevelopers' target={'_blank'} className='font-light bg-blue-400 text-neutral-900 px-5 py-3 rounded-full'>Contribute</a>
        </div>

    </nav>
    <MobileBar bringBar={bar}/>
    </>
  )
}

export default Navbar