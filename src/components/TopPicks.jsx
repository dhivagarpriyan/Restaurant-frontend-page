import React from 'react'
import { topPicks } from '../data/data'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
const TopPicks = () => {
  return (
    <>
    <h1 className='hidden font-bold text-xl md:text-2xl  text-orange-500 text-center py-8 lg:flex justify-center'>TOP PICKS</h1>
    <div className= ' hidden lg:flex max-w-[1520px] py-4 px-2 mx-auto '>
     <Splide options={{perPage:4}}>
     {
        
        topPicks.map((item)=>
    (
        <SplideSlide key={item.id}>
        <div className=' rounded-2xl relative mx-4 hover:scale-95 duration-500'>
             <div className=' absolute w-full h-full rounded-2xl bg-black/60'>
                <p className=' text-white font-bold px-2 py-2 '>{item.title}</p>
                 <p className='text-white font-semibold px-2 '>{item.price}</p>
                 <p className=' absolute bottom-5  border-dotted p-1 text-white text-xl font-bold border-2 mx-[25%] rounded-xl'>ADD TO CART</p>
             </div>
             <img className=' object-cover rounded-2xl h-[300px] w-[500px]'
                src={item.img}
             />
             
        </div>
        </SplideSlide>
    )




)

} 

     </Splide>
     
    
        
    </div>
    </>
  )
}

export default TopPicks