import React, { useState } from 'react'

function Contact() {
 
  return (
    <>
    <div>
    <a> <button onClick={ ()=>{document.getElementById('home'
      ).scrollIntoView();}}
       className='bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg absolute'><i className="fa-regular fa-circle-left"></i></button></a>
    </div>
    <div id="Contact" className="max-w-md mx-auto p-6 bg-gray-300 shadow-md rounded-md ">
        
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
     
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
          <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
          <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
          <textarea id="message" name="message" rows="5" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Submit</button>
      </form>





    </div>
    </>
  )
}

export default Contact