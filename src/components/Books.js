import React, { useState } from 'react'
import Card from './Card'

export default function Books() {

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
  return (
    <div>
        <div>
            Badiiy kitoblar. O'qing va orom oling
        </div>

        <div className='px-8 py-4 grid grid-cols-4 gap-4'>


                {
                    data.map((item)=>{
                        return <Card key={item.id} name={item.name} author={item.author} description={item.description} image={item.image} />
                    })
                }

        </div>





    </div>
  )
}
