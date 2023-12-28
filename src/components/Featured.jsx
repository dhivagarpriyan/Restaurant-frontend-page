import React, { useState } from 'react'
import { BsChevronCompactLeft,BsChevronBarRight, BsChevronCompactRight } from 'react-icons/bs';
const Featured = () => {
    const sliders=[
        {
            id:1,
          URL:'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672323859/NetflixApp/burger_emxbtv.jpg',
        },

        {   id:2,
            URL:'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672323859/NetflixApp/pizza_osjb4f.jpg',
          },

          {  id:3,
            URL:'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672323859/NetflixApp/ric_a4ewxo.jpg',
          },
    ]

    const [currentindex,setCurrentIndex]=useState(2);

    const prevslide=()=>{
        const isfristslide = currentindex === 0;
        const newIndex= isfristslide ? sliders.length-1:currentindex-1;
        setCurrentIndex(newIndex)
    }

    const nextslide=()=>{
        const islastslide = currentindex === sliders.length-1;
        const newIndex=islastslide ? 0:currentindex+1;
        setCurrentIndex(newIndex)
    }

  return (
    <div className=' max-w-[1520px] h-[500px] py-4 px-4 w-full relative group'>
        <div className='w-full h-full rounded-2xl bg-cover bg-center duration-500 '
           style={{backgroundImage:`URL(${sliders[currentindex].URL}`}}
        ></div>
        <div className='hidden group-hover:block absolute top-[50%] left-5 bg-orange-700 text-white p-1 text-2xl rounded-full'>
             <BsChevronCompactLeft onClick={prevslide} />
        </div>
        <div className='hidden group-hover:block absolute top-[50%] right-5 bg-orange-700 text-white p-1 text-2xl rounded-full'>
             <BsChevronCompactRight onClick={nextslide}/>
        </div>
    </div>
  )
}

export default Featured