
import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Books from './components/Books';
import Modal from './components/Modal';


function App() {
  const [modal, setModal] = useState(false)
  const closeModal = ()=>{
        setModal(false)
    }
  return (
    <div >


      {/* <Header/> */}

      
        <Books/>
   

        <div className='h-screen'>

         <p className='text-4xl text-center my-4 font-bold'>Badiiy kitoblar. O'qing va orom oling</p>

                            <p className='text-center text-gray-400'>Bir guruh professor-o‘qituvchilar hamda rahbar xodimlarga Al-Farobiy nomidagi Qozog‘iston Milliy universitetining maxsus ko‘krak nishonlari tantanali ravishda topshirildi. </p>
                        
                        <button onClick={()=>setModal(true)} className='bg-green-600 text-white rounded-md px-4 py-2'> ochil simsim</button>



        {
          modal &&
          <Modal onClose={closeModal}>

            <p>1-24 ATT darsda uxlaydi etibor bermaydi bechora O'qtuvchi dars</p>
          </Modal>
        }
        </div>


    </div>
  );
}

export default App;
