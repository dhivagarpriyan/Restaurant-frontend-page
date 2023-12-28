import React, { useState } from 'react'
import { mealData } from '../data/data'
import { FaArrowRight } from "react-icons/fa";
const Meals= () => {
  const[foods,setFoods]=useState(mealData)
  const filtercat=(category)=>{
      return setFoods(
        mealData.filter((item)=>{
        return  item.category === category
        }
       ) )
  }

  return (
    <div className=' mx-w-[1520px] py-2 px-2'>
        <p className='  font-bold text-xl md:text-2xl text-center text-orange-500 my-4'>OUR MEALS</p>
        <div className=' flex justify-center '>
             <button onClick={()=>setFoods(mealData)}   className='mx-2 font-bold bg-orange-600 border  text-white p-2 rounded-2xl hover:bg-white    hover:text-orange-600 hover:border-orange-600 duration-300'>ALL</button>
             <button onClick={()=>filtercat("pizza")} className='mx-2 font-bold bg-orange-600 border  text-white p-2 rounded-2xl hover:bg-white hover:text-orange-600 hover:border-orange-600 duration-300'>PIZZA</button>
             <button onClick={()=>filtercat("chicken")} className='mx-2 font-bold bg-orange-600 border  text-white p-2 rounded-2xl hover:bg-white hover:text-orange-600 hover:border-orange-600 duration-300'>CHICKEN</button>
             <button onClick={()=>filtercat("salad")} className='mx-2 font-bold bg-orange-600 border  text-white p-2 rounded-2xl hover:bg-white hover:text-orange-600 hover:border-orange-600 duration-300'>SALAD</button>
             
        </div>
        <div className=' w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-2 gap-4 my-8 '>
            {foods.map((item)=>(
                <div key={item.id} className=' shadow-md shadow-white bg-white p-2 border-2 rounded-2xl mx-4 hover:scale-105  duration-300'>
                    <img
                      src={item.image}
                      alt={item.category}
                      className=' w-full h-[200px] rounded-2xl object-cover '
                    />
                    <div className=' flex justify-between mx-4 py-2'>
                        <p className=' font-bold text-xl text-orange-500'>{item.name}</p>
                        <p className=' bg-orange-500 text-white p-1 border-8 border-white rounded-full relative bottom-10 '>{item.price}</p>
                     </div>
                        <div className='flex mx-4 items-center -mt-4 mb-4'>
                            <p className=' font-semibold'>VIEW MORE</p>
                            <FaArrowRight 
                             className=' ml-2'
                            />
                            
                        </div> 
                            
                     </div>
                
                ))}
        </div>
    </div>
  )
}

export default Meals 