
import { useState } from 'react';
import './App.css';

function App() {
 
  const [data, setData] = useState(
    [
    {id:1, name: "Asil", age:20},
    {id:2, name: "Lobar", age:18},
    {id:3, name: "Mexribon", age:17},
    {id:4, name: "Gulrux", age:16},
    {id:5, name: "Gulrux", age:16},
    {id:6, name: "Gulrux", age:16},
    {id:7, name: "Gulrux", age:16},
    {id:8, name: "Gulrux", age:16},
  ]
)


  function handleDelete(id){
      


      setData(
        data.filter((item)=>{
          return item.id != id
        }))
      
    
  }
  return (
    <div className="App">
     <h1 className='text-3xl my-4 font-bold '>1-24 ATT guruh talabalari reactjs darsida </h1>

    <div className='w-md mx-auto border-2'>

      {
        data.map((item)=>
          <div key={item.id} className='flex justify-between border-b-2 px-4 py-2'>
             <p>{item.name}</p>
             <p>{item.age}</p>
             <p onClick={()=>handleDelete(item.id)}><i className="fa-solid fa-trash"></i></p>
          </div>
        )
          
      }

    </div>


    </div>
  );
}

export default App;
