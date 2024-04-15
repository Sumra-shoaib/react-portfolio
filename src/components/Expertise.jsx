import React from 'react'
import bannerBackground from "../assets/background image.jpg";
{/*import js from '../assets/js.png'*/}

function Expertise() {
  return (
    <>
    <div id="Experties" className=' expertise mt-2'>
     
      <h1 className='text-5xl font-bold underline text-center mb-16'>Expertise</h1>
      <a> <button onClick={ ()=>{document.getElementById('home'
      ).scrollIntoView();}}
       className='bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg'><i class="fa-regular fa-circle-left"></i></button></a> 
      {/*box-section*/}
      <div className='box-container items-center flex py-16'>
        
         {/*text-section*/}
        <div 
        style={{backgroundImage:`url(${bannerBackground})`,
      
      }}
        className='flex justify-center '>
        <div className='main-box w-2/3 text-center space-y-4'>
          <h1 className='text-4xl font-bold'>I love these tecknologies</h1>
          <p>I'm deeply passionate about frontend development. Crafting visually appealing user interfaces with HTML, CSS, and JavaScript isn't just a job for me  it's a creative outlet and a constant source of inspiration. </p>
          <button className='px-4 text-2xl py-2 bg-orange-500 rounded-full'>Hire me</button>
          </div>
          </div>
         
           
        
         {/*skills-section*/}
        <div className='flex justify-center'>
          {/*to add image*/}
         {/* <img src={js}/>*/}
          <div className='flex justify-center space-x-3 h-fit flex-wrap w-2/3'>
          <p className='w-fit bg-gray-300 px-3 py-2 mt-2 me rounded-full cursor-pointer hover:bg-orange-500'>HTML</p>
          <p className='w-fit bg-gray-300 px-3 py-2 mt-2 rounded-full cursor-pointer hover:bg-orange-500'>CSS</p>
          <p className='w-fit bg-gray-300 px-3 py-2 mt-2 rounded-full cursor-pointer hover:bg-orange-500'>JavaScript</p>
          <p className='w-fit bg-gray-300 px-3 py-2 mt-2 rounded-full cursor-pointer hover:bg-orange-500'>UI/UX</p>
          <p className='w-fit bg-gray-300 px-3 py-2 mt-2 rounded-full cursor-pointer hover:bg-orange-500'>React</p>
          <p className='w-fit bg-gray-300 px-3 py-2 mt-2 rounded-full cursor-pointer hover:bg-orange-500'>Tailwind css</p>
          <p className='w-fit bg-gray-300 px-3 py-2 mt-2 rounded-full cursor-pointer hover:bg-orange-500'>visual code</p>
          <p className='w-fit bg-gray-300 px-3 py-2 mt-2 rounded-full cursor-pointer hover:bg-orange-500'>Figma</p>
          <p className='w-fit bg-gray-300 px-3 py-2 mt-2 rounded-full cursor-pointer hover:bg-orange-500'> Agile Scrum Methadology</p>
          
        
        
          </div>
        </div>
      </div>
    
      </div>
    </>
  )
}

export default Expertise