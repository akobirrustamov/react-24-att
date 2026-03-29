import React from 'react'

export default function UserCard(props) {
    console.log(props);
    
  return (
    <div key={props.id}  className='border-2 p-2 bg-blue-300'>
            <div className=' bg-gray-500 py-22'>

              </div>
            <div>
              <p> {props.name}</p>
              <p> {props.age}</p>
              <p> {props.vazn}</p>
              </div>

          </div>
  )
}
