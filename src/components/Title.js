import React from 'react'

export default function Title(props) {
    console.log(props);
    
  return (
    <div className='py-8 bg-gray-200 w-7xl m-auto'>
         <h1 className='text-4xl my-4 font-bold text-red-800'>{props.group} guruh talabalari reactjs darsi </h1>
         <p className='text-2xl'><strong>Bugungi mavzu:</strong> {props.theme}</p>
    </div>
  )
}
