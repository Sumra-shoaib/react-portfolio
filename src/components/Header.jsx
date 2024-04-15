import React, { useState } from 'react'

function Header() {
  const [ brandName ,setBrandName]=useState("Sumra shoaib");
  const [ menuLinks ,setMenuLinks]=useState([{
    title:'Home',
    link:'/home',
    id:1,
  },
  {
    title:'About',
    link:'/about',
    id:2,
  },
  {
    title:'Projects',
    link:'/skills',
    id:3,
  },{
    title:'Experties',
    link:'/Experties',
    id:4,
  },
  {
    title:'Contact',
    link:'/contact',
    id:5,
  },

  
])
const[actionButton,setActionButton]=useState({
  title:"Download-CV",
  link:"/hire-me"
})


  return (
    <div id="home" className=' h-20 main flex flex-wrap  justify-between item-center  max-w-[1280px] px-16 bg-zinc-200' >
      <h1>{brandName}</h1>
      <div className='brand logo text-3xl font-bold'></div>


      <div className='menu links space-x-6'>
      {menuLinks.map((link)=>(
      <a key={link.id} onClick={ ()=>{document.getElementById(link.title).scrollIntoView();}} className='hover:text-orange-600'>{link.title}</a>
      ))}
          
      </div>


      <div><a href={actionButton.link} className='button px-2 py-1  bg-orange-500 rounded-full text-2xl shadow'>{actionButton.title}</a></div>

    </div>
  )
}

export default Header