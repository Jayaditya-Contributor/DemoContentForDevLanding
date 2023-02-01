import React from 'react'

const Footer = () => {
    const footerDataArryObj = [
        {
        list:["LeetCode", "CodeWars", "HackerRank", "Notes & Resources"]
        },
        {
        
        list:["About", "Blog", "Contributors"]
        },
        {
        
        list:["Github", "Guidelines","Issues","Pull Requests"]
        },
        {
        
        list:["License","Casebook","Code of Conduct"]
        }]
  return (
    <>
    <div className='bg-neutral-900 text-white  grid grid-rows-2 p-8 gap-10 lg:flex lg:justify-evenly lg:py-32'>
      <div className='footer_row_1 flex justify-between md:justify-around lg:space-x-40 '>
        <ul className='Content__col__1 space-y-4'>
            
            <p className='font-semibold border-blue-300 border-b-2 inline pb-1'>Content</p>
            
             {
                footerDataArryObj[0].list.map((value, index)=>{
                    return(
                      <li className='font-light cursor-pointer' key={index}>{value}</li>
                    )
                })
             }
        </ul>

        <ul className='Company__col__2 space-y-4 md:mr-6'>
          <p className='font-semibold border-blue-300 border-b-2 inline pb-1'>Company</p>
          
          {
            footerDataArryObj[1].list.map((value, index)=>{
                return(
                    <li className='font-light cursor-pointer' key={index}>{value}</li>
                )
            })
          }
        </ul>
      </div>




      <div className='footer_row_2 flex  justify-between md:justify-around lg:space-x-40'>
         <ul className="Contribute__col__1 space-y-4">
            <p className='font-semibold border-blue-300 border-b-2 inline pb-1'>Contribute</p>
           


            {
                footerDataArryObj[2].list.map((value, index)=>{
                    return(
                        <li className='font-light cursor-pointer' key={index}>{value}</li>
                    )
                })
            }
         </ul>



         <ul className="OpenSource__col__2 space-y-4">
            <p className='font-semibold border-blue-300 border-b-2 inline pb-1'>Contribute</p>
           


            {
                footerDataArryObj[3].list.map((value, index)=>{
                    return(
                        <li className='font-light cursor-pointer' key={index}>{value}</li>
                    )
                })
            }
         </ul>
      </div>

      
    </div>
    <div className='bg-neutral-900 text-slate-300'>
      <p className='font-extralight text-sm'>© {new Date().getFullYear()} ContentForDevelopers.com</p>
      </div>
    </>
  )
}

export default Footer