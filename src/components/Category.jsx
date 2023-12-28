import React from 'react'
import { categories } from '../data/data'
const Category = () => {
  return (
    <div className=' max-w-[1520px] py-4 px-2'>
          <p className='  font-bold text-xl md:text-2xl text-center text-orange-500 my-4'>TRENDING CATEGORIES</p>
          <div className=' w-full grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mx-auto  mt-8'>
            {categories.map((item)=>(
                <div key={item.id} className=' mx-2 my-4 hover:scale-105 duration-300'>
                     <img 
                        src={item.image}
                        alt={item.name}
                        className=' object-cover p-4'
                     />
                </div>
            ))}
          </div>
    </div>
  )
}

export default Category