
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';

function App() {
 


  return (
    <div className="App">
    <Header/>
     <h1 className='text-3xl my-4 font-bold '>1-24 ATT guruh talabalari reactjs darsida </h1>
      <Table/>
    </div>
  );
}

export default App;
