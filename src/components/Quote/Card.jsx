import React from 'react'

function Card({Author,Quote}) {
  return (
    <>
        <div className='flex flex-col w-5/6 p-5 shadow-lg shadow-black-200/40 mb-8 '>
            <p className='text-center'>{Quote}</p>
            <h5 className='text-center'>{Author}</h5>
        </div>
    </>
  )
}

export default Card