import React from 'react'

const Delivery = () => {
  return (
    <div className='  w-full bg-white py-4 px-2'>
         <p className='  font-bold text-xl md:text-2xl text-center text-orange-500 mt-4'>QUICK DELIVERY</p>
         <div className=' w-full grid md:grid-cols-2 mx-auto'>
            <img src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
               className='w-[550px] rounded-xl mx-auto my-8'
            />
            <div className=' flex flex-col justify-center ml-4 mr-4'>
                  <p className=' text-xl text-sky-500 font-medium'>GET THE APP</p>
                  <h1 className=' font-bold text-xl'>LIMITLESS CONVIENCE ON DEMAND</h1>
                  <p className=' py-2 text-md  font-medium '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque harum in provident eius sapiente ad maxime unde libero porro consectetur sint culpa praesentium reprehenderit facilis deleniti suscipit, vitae dignissimos mollitia voluptas iure veniam amet non! Totam, consectetur! Voluptatum, commodi ducimus itaque similique dolores in ipsam reprehenderit optio libero inventore sunt!</p>
                  <button className=' bg-black text-sky-500 border w-[200px] p-1 mt-2 rounded-md mx-auto md:mx-0'>
                     GET STARTED
                  </button>
            </div>
         </div>
    </div>
  )
}

export default Delivery