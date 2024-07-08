import React from 'react'
import "../components/section1.css";

function Section2() {
  return (
    <>
        <div className='custom2'>
            <div className='image'></div>
            <div className='w-1/2 flex justify-center gap-10 items-center flex-col bg-gray-200 container'>
                <p className='text-3xl font-[700]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
                <button className='p-5 bg-blue-500 w-1/2'>Get in Touch</button>
            </div>
        </div>
    </>
  )
}

export default Section2