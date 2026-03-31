import React from 'react'

export default function Card(props) {
    console.log(props);
    
    
  return (
    <div  className='border-2 p-4 '>
        <div className=' bg-blue-100' >
            <img className='w-full h-48' src={props.image} />
            
        </div>
        <div className='mt-2'>
            <p><i class="fa-solid fa-book"></i> {props.name}</p>
            <p><i class="fa-regular fa-user"></i> {props.author}</p>
        </div>
        <div className='text-start my-2'>
            <p className='text-gray-400'>
                {props.description}
            </p>
        </div>

    </div>
  )
}
