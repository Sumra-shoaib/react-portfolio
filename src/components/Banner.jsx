import myImage from '../assets/image1.png';
import bannerBackground from "../assets/background image.jpg";
import Typed from "typed.js";
import { useRef } from 'react';
import { useEffect } from 'react';
function Banner() {
  const el=useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Front-end developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop:true
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
   <div id="Home" className='main-container flex items-center'>
     <div> <a> <button onClick={ ()=>{document.getElementById('home'
  ).scrollIntoView();}}
   className='bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg'><i class="fa-regular fa-circle-left"></i></button></a> </div>
 {/*text*/}
 <div style={{backgroundImage:`url(${bannerBackground})`,
 }}
     className='  w-full flex justify-center items-center'>
      <div className='w-2/3 space-y-2 ms-10'>
      <h3 className='  text-3xl font-semibold'>Hi Myself</h3>
      <h1 className=' text-5xl font-bold'>Sumra</h1>
      <h2 className=' text-3xl'>And I am <span className='font-bold underline text-orange-500' ref={el}></span></h2>
      <p className=' '> Currently, I am a student specializing in
Front-end Web Development and now seek a new challenge. My
passion lies in continuously expanding my knowledge and skills, and
coding is a significant aspect of that journey. I am enthusiastic about
learning new things, especially in the dynamic and ever-evolving field of
web development.</p>
      <div className='icon-container flex space-x-5'>
     <a className='w-14 h-14 border hover:bg-orange-600 rounded-full flex justify-center px-3 py-4 bg-grey -800 px cursor-pointer'> <i className="fa-brands text-4xl fa-facebook"></i></a>
     <a className='w-14 h-14 border hover:bg-orange-600 rounded-full flex justify-center px-3 py-4 bg-grey -800 px cursor-pointer'> <i className="fa-brands text-4xl fa-instagram"></i></a> 
     <a className='w-14 h-14 border hover:bg-orange-600 rounded-full flex justify-center px-3 py-4 bg-grey -800 px cursor-pointer'> <i className="fa-brands text-4xl  fa-square-youtube"></i></a> 
     <a className='w-14 h-14 border hover:bg-orange-600 rounded-full flex justify-center px-3 py-4 bg-grey -800 px cursor-pointer'><i className="fa-brands text-4xl  fa-linkedin"></i></a> 
      </div>
      <br/>
      <a className= 'text-2xl px-3 py-2 mt-3 rounded-full shadow-lg bg-orange-500 'href="/contact">Contact me</a>
      </div>

    </div>
  
    <div className='bannerImage w-full flex justify-center'>
      <img className=' rounded-full my-2 shadow-lg w-fit' src={myImage}/>
    </div>
   </div>
  )
}

export default Banner