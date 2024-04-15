import React from 'react'

function Linkbutton() {
  return (
    <div> <a> <button onClick={ ()=>{document.getElementById('home'
  ).scrollIntoView();}}
   className='bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg'><i class="fa-regular fa-circle-left"></i></button></a> </div>
  )
}

export default Linkbutton