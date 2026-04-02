import React from 'react'

export default function Modal({children, onClose}) {
    
    console.log(onClose);
    
  return (
    <div style={{backgroundColor:"rgba(0,0,0,0.9)", width:"100%", position:"absolute",height:"100%", top:"-10px", margin:0, display:"flex", justifyContent:"center", alignItems:"center"}}>

       
        
        <div style={{width:"480px", height:"500px", border:"2px solid black",backgroundColor:"white", }}>
            <div className='flex justify-end px-4 '>
                <button onClick={onClose} className='text-3xl'>x</button>
            </div>
           
           {children}
        </div>
        
    </div>
  )
}
