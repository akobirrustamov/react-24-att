
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import Title from './components/Title';
import UserCard from './components/UserCard';

function App() {
 const [data, setData] = useState(
         [
         {id:1, name: "Asil", age:2, weight:50},
         {id:2, name: "Lobar", age:8 , weight:60},
         {id:3, name: "Mexribon", age:7, weight:40},
         {id:4, name: "Gulrux", age:6, weight:30},
         {id:5, name: "Gulrux", age:11, weight:20},
         {id:6, name: "Gulrux", age:10, weight:40},])


  return (
    <div className="App">
    <Header/>
      <Title group="1-25 ATT" theme="Tailwind css bilan ishlash" />
      {/* <Table/> */}
      {/* <Title group="1-24 ATT" theme="Componentlar bilan ishlash" /> */}



    <div className='grid grid-cols-3 w-7xl m-auto gap-4 py-4'>
      {data.map((item)=>
        <UserCard name={item.name} id={item.id} age={item.age} vazn={item.weight}/>
      
       )}

    </div>



    </div>
  );
}

export default App;
