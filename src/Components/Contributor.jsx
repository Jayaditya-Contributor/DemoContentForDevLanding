import React from 'react'
import Slider from "react-slick";
import img1 from '../Assests/Contributors/con1.png'
import img2 from '../Assests/Contributors/con2.jpg'
import img3 from '../Assests/Contributors/con3.jpg'
import img4 from '../Assests/Contributors/con4.jpg'
import img5 from '../Assests/Contributors/con5.jpg'
import img6 from '../Assests/Contributors/con6.png'
import img7 from '../Assests/Contributors/con7.jpg'
import img8 from '../Assests/Contributors/con8.png'
import img9 from '../Assests/Contributors/con9.jpg'
import img10 from '../Assests/Contributors/con10.jpg'
import img11 from '../Assests/Contributors/con11.jpg'
import img12 from '../Assests/Contributors/con12.jpg'
import img13 from '../Assests/Contributors/con13.png'
import img14 from '../Assests/Contributors/con14.jpg'

const Contributor = () => {
  
  let width = window.innerWidth
   let slides = 3
  if(width>=809){
    slides=5
  }

  const settings = {
  slidesToShow: slides,
  autoplay: true,
  autoplaySpeed: 1700,
  };
 
  return (
   <div className='Contributors bg-gradient-to-l from-blue-700 via-blue-800 to-gray-900  py-9 px-4 md:py-24 lg:px-7'>
   <p className='choosen2 text-white font-semibold  text-2xl md:text-4xl'>Contributors</p> 
   <div className='border-4 rounded-full w-32 mt-4 border-blue-300'></div>
   <div className='flex justify-center p-10'>
        <Slider {...settings} className="w-72 md:w-96 lg:w-[900px]">

        
        <div>
            <img src={img13} className="rounded-full" alt="icon" />
          </div>
          <div>
            <img src={img1} className="rounded-full" alt="" />
          </div>
          <div>
            <img src={img2} className="rounded-full" alt="" />
          </div>
          <div>
            <img src={img3} className="rounded-full" alt="" />
          </div>
          <div>
            <img src={img4} className="rounded-full" alt="" />
          </div>
          <div>
            <img src={img5} className="rounded-full" alt="" />
          </div>
          <div>
            <img src={img6} className="rounded-full" alt="" />
          </div>
          <div>
            <img src={img7} className="rounded-full" alt="" />
          </div>
          <div>
            <img src={img8} className="rounded-full" alt="" />
          </div>
          <div>
            <img src={img9} className="rounded-full" alt="" />

          </div>
          <div>
            <img src={img10} className="rounded-full" alt="" />
          </div>
          <div>
            <img src={img11} className="rounded-full" alt="" />
          </div>
          <div>
            <img src={img12} className="rounded-full" alt="" />
          </div>
          <div>
            <img src={img14} className="rounded-full" alt="" />
          </div>
         
        </Slider>
        </div>


        <div>
        <div className='Want mt-14'>
        <p className='choosen2 text-slate-200 font-semibold  text-sm md:text-lg lg:text'>Want To Contribute?</p> 
        <div className='border-2 rounded-full w-32 mt-2 border-blue-300'></div>
        <div className='flex space-x-1 mt-6'>
          
          <p className='text-xl md:text-3xl text-slate-300 font-semibold'>Anyone can contribute by visiting the <a href='https://github.com/mathcodes/contentfordevelopers' className='font-extrabold underline text-blue-300' target={'_blank'} rel="noreferrer">GitHub Repo!</a> We would love to have you on board and welcome all levels of experience. Jon makes sure to keep a handful of 'good first issue' options available, so give it a shot, and if you're new, we offer assistance to walk you through the process. Become a contributor TODAY and start becoming part of the community!</p>
          </div>
          
        </div>
        </div>
    </div>
  )
}

export default Contributor