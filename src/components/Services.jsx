import React, { useState } from 'react'
import netonnetImage from '../assets/netonnet pic.png';
import weatherImage from '../assets/weather-app.png';



function Services() {
  const[netonnetPic,setNetonnetPic]=useState({
    image:netonnetImage,
    image_2: weatherImage ,
    
  })
  return( <>
    <div id="Projects" className='main-container py 16  flex flex-wrap' >
      <h1 className='text-5xl font-bold text-center underline'>Projects</h1>
      <a> <button onClick={ ()=>{document.getElementById('home'
      ).scrollIntoView();}}
       className='bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg'><i class="fa-regular fa-circle-left"></i></button></a> 

      <div className='skills-container flex flex-row-wrap space-x-5 mt-12 px-10'>
        
        <div className=' cursor-pointer hover:bg-gray-100 bg-slate-200 p-5 space-y-4 shadow-lg '>
        <img className='rounded-lg w-full' src={netonnetPic.image} alt="image"/>
          
        </div>
        <div className=' cursor-pointer hover:bg-gray-100 bg-slate-200 p-5 space-y-4 shadow-lg '>
        <img className='rounded-lg w-full' src={netonnetPic.image_2} alt="image"/>
          
        </div>
       
      </div>
    </div>
    </>
  )
  
}

export default Services