
import { useState } from 'react';
import './App.css';

function App() {
 
  const [data, setData] = useState(
    [
    {id:1, name: "Asil", age:2, weight:50},
    {id:2, name: "Lobar", age:8 , weight:60},
    {id:3, name: "Mexribon", age:7, weight:40},
    {id:4, name: "Gulrux", age:6, weight:30},
    {id:5, name: "Gulrux", age:11, weight:20},
    {id:6, name: "Gulrux", age:10, weight:40},

    {id:7, name: "Asil", age:13, weight:50},
    {id:8, name: "Lobar", age:14 , weight:80},
    {id:9, name: "Mexribon", age:17, weight:60},
    {id:10, name: "Gulrux", age:16, weight:57},
    {id:11, name: "Gulrux", age:15, weight:59},
    {id:12, name: "Gulrux", age:17, weight:53},

     {id:13, name: "Asil", age:19, weight:70},
    {id:14, name: "Lobar", age:20 , weight:80},
    {id:15, name: "Mexribon", age:19, weight:60},
    {id:16, name: "Gulrux", age:23, weight:67},
    {id:17, name: "Gulrux", age:28, weight:79},
    {id:18, name: "Gulrux", age:27, weight:53},

    {id:19, name: "Asil", age:34, weight:80},
    {id:20, name: "Lobar", age:34 , weight:89},
    {id:21, name: "Mexribon", age:45, weight:70},
    {id:22, name: "Gulrux", age:78, weight:67},
    {id:23, name: "Gulrux", age:54, weight:79},
    {id:24, name: "Gulrux", age:100, weight:83},
  ]
)

const [oldData, setOldData] = useState([])

  function handleDelete(id){
      setData(
        data.filter((item)=>{
          return item.id != id
        }))
  }

  function mediumWeight(){
    let medium = 0
    data.forEach((item)=>{
      medium+=item.weight
    })
    console.log(medium);
    return Math.floor(medium/data.length)
  }

  function mediumAge(){
    let age = 0
    data.forEach((item)=>{
      age+=item.age
    })
    console.log(age);
    return Math.floor(age/data.length)
  }
  

  function handle12(){
   let arr = oldData
    if(oldData.length==0){
        setOldData(data)
        arr=data
    }
    setData(
      arr.filter((item)=>{
        return item.age<=12
      })
    )
  }

  
  function handle1218(){
    let arr = oldData
    if(oldData.length==0){
        setOldData(data)
        arr=data
    }
    setData(
      arr.filter((item)=>{
        return item.age>12 && item.age<=18
      })
    )
  }
  function handle1830(){
    let arr = oldData
    if(oldData.length==0){
        setOldData(data)
        arr=data
    }
    setData(
      arr.filter((item)=>{
        return item.age>18 && item.age<=30
      })
    )
  }


  function handle30(){
    let arr = oldData
    if(oldData.length==0){
        setOldData(data)
        arr=data
    }
    // let arr = data
    // if(oldData.length!==0){
    //     arr=oldData
    // }
    setData(
      arr.filter((item)=>{
        return item.age>30
      })
    )
  }

function hadleReset(){
  setData(oldData)
}




  return (
    <div className="App">
     <h1 className='text-3xl my-4 font-bold '>1-24 ATT guruh talabalari reactjs darsida </h1>

     <div className='w-xl grid grid-cols-3 m-auto'>
        <div className='border-2 text-xl bg-blue-600 p-4 rounded-xl text-white '>
            Jami (soni): {data.length} ta
        </div>
         <div className='border-2 bg-blue-600 p-4 rounded-xl text-white '>
            O'rtacha og'irligi: {mediumWeight()}
        </div>
         <div className='border-2 bg-blue-600 p-4 rounded-xl text-white '>
            O'rtacha yoshi: {mediumAge()}
        </div>
     </div>

     <div className='flex gap-4 justify-center my-4'>
       <button onClick={()=>handle12()} className='px-2 py-4  rounded-xl bg-green-500 text-white'>12 yoshgacha</button>
       <button onClick={()=>handle1218()} className='px-2 py-4  rounded-xl bg-green-500 text-white'>12-18</button>
       <button onClick={()=>handle1830()} className='px-2 py-4  rounded-xl bg-green-500 text-white'>18-30</button>
       <button onClick={()=>handle30()} className='px-2 py-4  rounded-xl bg-green-500 text-white'>30+</button>
     <button onClick={()=>setData(oldData)} className='px-2 py-4  rounded-xl bg-blue-500 text-white'>Reset</button>
     
     </div>

    <div className='w-md mx-auto border-2'>

      {
        data.map((item, index)=>
          <div key={item.id} className='flex justify-between border-b-2 px-4 py-2'>
             <p>{index+1}</p>
              <p>{item.name}</p>
             <p>{item.age}</p>
               <p>{item.weight}</p>
             <p onClick={()=>handleDelete(item.id)}><i className="fa-solid fa-trash"></i></p>
          </div>
        )
          
      }

    </div>


    </div>
  );
}

export default App;
