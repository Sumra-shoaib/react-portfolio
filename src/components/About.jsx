import { useState } from 'react'
import aboutImage from '../assets/about-image.jpg';


function About() {
  const [ data,setData]=useState({
    image:aboutImage,
    title:"Front-end-developer",
    des1:`Currently a student of Front-end development course. Highly motivated to start a new
    career in IT as a developer to serve in a company with the opportunity to improve my
    present skills.
    `,
    des2:`Goal-oriented and easily adapt easily to new demands. Keen to learn and update my skills. In
    my free time I like cycling and being generally active which helps me to take care of my
    health.`,
    actionButton:{title:"Read More..",
    link:"/readmore",

    }

  })
  return (
    <div id="About" className='main-container py-16 bg-gray-100'>
      

      <h1 className='text-5xl text-center underline font-bold pb-16'>About Me</h1>
      <div className='inner-container flex item-center'>
      <a> <button onClick={ ()=>{document.getElementById('home'
      ).scrollIntoView();}}
       className='bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg'><i class="fa-regular fa-circle-left"></i></button></a> 

      {/*image container*/}
      <div className='box-1 w-full flex justify-center '>
      <img className='rounded-full w-1/2' src={data.image} alt="image"/>
       
      </div>
      {/*text container*/}
      <div className='text-container w-full  flex justify-center'>
       <div className='text-inner space-y-5 w-2/3'>
      <h1 className='text-5xl font-semibold'>{data.title}</h1>
      <p>{data.des1}.</p>
      <p>{data.des2}</p>
     <a href='{data.actionButton.link}'> <button className='bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg'>{data.actionButton.title}</button></a> 
    
      </div>
      </div>
      </div>
      

    </div>
  )
}

export default About