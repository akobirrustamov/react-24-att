import React, { useState } from 'react'
import Card from './Card'
import Modal from './Modal'

export default function Books() {
    const [showModal, setShowModal] = useState(false)

    const [data, setData] = useState([
        {
            id:1,
            name:"Kitob nomi",
            author: "Dam o'tir diyor",
            description: "Universitetimizda milliy kutubxona filialining zamonaviy resurs markazi",
            image: "./images/img1.jpg"
        },
       {
            id:2,
            name:"Sariq devni minib",
            author: "Dam o'tir diyor",
            description: "Universitetimizda milliy kutubxona filialining zamonaviy resurs markazi",
            image: "./images/img2.jpg"
        },
        {
            id:3,
            name:"Kecha va kunduz ",
            author: "Dam o'tir diyor",
            description: "Universitetimizda milliy kutubxona filialining zamonaviy resurs markazi",
            image: "./images/img3.jpg"
        },
        {
            id:4,
            name:"Yulduzli tunlar",
            author: "Dam o'tir diyor",
            description: "Universitetimizda milliy kutubxona filialining zamonaviy resurs markazi",
            image: "./images/img4.jpg"
        },
        {
            id:5,
            name:"Ikki eshik orasida",
            author: "Dam o'tir diyor",
            description: "Universitetimizda milliy kutubxona filialining zamonaviy resurs markazi",
            image: "./images/img2.jpg"
        },
        {
            id:6,
            name:"O'tgan kunlar",
            author: "Dam o'tir diyor",
            description: "Universitetimizda milliy kutubxona filialining zamonaviy resurs markazi",
            image: "./images/img4.jpg"
        },
    ])


    const closeModal = ()=>{
        setShowModal(false)
    }
  return (
    <div>
        <div className='flex justify-between mx-8 my-2 '>
            <p>Badiiy kitoblar. O'qing va orom oling</p>
            <button onClick={()=>setShowModal(true)} className='bg-blue-500 text-white px-4 py-2 rounded-md'>Qo'shish+</button>


        </div>

        <div className='px-8 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>


                {
                    data.map((item)=>{
                        return <Card key={item.id} name={item.name} author={item.author} description={item.description} image={item.image} />
                    })
                }

        </div>



               {

                showModal &&
                 <Modal onClose={closeModal}>
                        <div >
                            <p className='text-4xl text-center my-4 font-bold'>Badiiy kitoblar. O'qing va orom oling</p>

                            <p className='text-center text-gray-400'>Bir guruh professor-o‘qituvchilar hamda rahbar xodimlarga Al-Farobiy nomidagi Qozog‘iston Milliy universitetining maxsus ko‘krak nishonlari tantanali ravishda topshirildi. </p>
                        

                        </div>
                </Modal>
               }

    </div>
  )
}
