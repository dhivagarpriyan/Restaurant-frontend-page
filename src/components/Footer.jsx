import React from 'react'
import { FaFacebook,FaInstagram,FaTwitter,FaLinkedin } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className=' w-full  bg-gradient-to-b to-black from-gray-700 py-2'>
     <div className=' max-w-[1520px] mx-auto '>
        <p className=' font-bold text-orange-500 text-center text-2xl'>YUM EATS</p>
        <div className=' w-full grid  sm:grid-cols-2 lg:grid-cols-4 my-4'>
            <div className=' flex flex-col mx-auto'>
                <p className=' font-bold text-white my-2  border-b-pink-800 border-b-2 p-1'>Company</p>
                <p className=' text-white'>About Us</p>
                <p className=' text-white'>Our Services</p>
                <p className=' text-white'>Privacy Policy</p>
                <p className=' text-white'>Affilate Program</p>
               
            </div>
            <div className=' flex flex-col mx-auto'>
                <p className=' font-bold text-white my-2  border-b-pink-800 border-b-2 p-1'>Get Help</p>
                <p className=' text-white'>Faq</p>
                <p className=' text-white'>Track Order</p>
                <p className=' text-white'>Payment</p>
                <p className=' text-white'>Returns</p>
               
            </div>
            <div className='  hidden md:flex flex-col mx-auto '>
                <p className=' font-bold text-white my-2  border-b-pink-800 border-b-2 p-1 '>Category</p>
                <p className=' text-white'>Salad</p>
                <p className=' text-white'>Pizza</p>
                <p className=' text-white'>Chicken</p>
                
               
            </div>
            <div className='mx-auto'>
                <p className=' font-bold text-white my-2 border-b-pink-800 border-b-2 p-1 '>Follow Us</p>
                <div className=' flex justify-between gap-1'>
                    <a><FaFacebook
                       className=' text-white'
                       size={20}
                    /></a>
                    <a><FaInstagram
                         className=' text-white'
                         size={20}
                    /></a>
                    <a><FaTwitter
                        className=' text-white'
                        size={20}
                    /></a>
                    <a><FaLinkedin 
                         className=' text-white'
                         size={20}
                    /></a>
                </div>
               
                
               
            </div>

        </div>
     </div>
    </div>
  )
}

export default Footer