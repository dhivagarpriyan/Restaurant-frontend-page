import React from 'react'
import {AiOutlineMenu,AiOutlineSearch,AiOutlineClose} from "react-icons/ai"
import {BsFillCartFill,BsPerson} from "react-icons/bs"
import{MdHelp,} from "react-icons/md"
import{FaGoogleWallet} from "react-icons/fa"
import{TbTruckReturn} from "react-icons/tb"
import { useState } from 'react'

const TopNav = () => {
const[sidenav,setSideNav]=useState(false);

  return (
    <div className=' max-w-[1520px] mx-auto flex justify-between items-center px-2 py-3 md:px-4 md:py-4'>
        <div className=' flex items-center gap-x-2'>
            <div onClick={()=>setSideNav(!sidenav)}>
                <AiOutlineMenu size={25}/>
                 
            </div>
             <h1 className=' text-xl sm:text-2xl '>
                YUM<span className=' font-semibold text-orange-600'>EATS</span>
             </h1>
             <div className=' hidden md:flex items-center gap-x-1 bg-gray-200 rounded-full px-2 py-1 '>
                <p className=' bg-orange-700 p-2 rounded-full text-white font-bold'>FREE</p>
                <p className=' font-bold '>DELIVERY</p>
             </div>
        </div>
          <div className=' mr-4 bg-gray-200 w-[200px] sm:w-[300px] md:w-[400px] lg:[500px] rounded-full p-1 flex items-center'>
            <AiOutlineSearch size={20}/>
            <input 
               type='text'
               placeholder='SEARCH ITEMS...'
               className=" focus:outline-none bg-transparent px-1 w-full "
            />
          </div>
          <button  className=' bg-orange-700 text-white font-bold rounded-full p-2 md:flex items-center hidden'>
          
              <BsFillCartFill className=' mr-2' />
                CART
          </button>
          {
            sidenav ?(<div className=' bg-black/60 w-full h-screen top-0 left-0 fixed '
            onClick={()=>setSideNav(!sidenav)}
            ></div>):("")
          }
          <div className={sidenav?
          " bg-white w-[300px] top-0 left-0 z-10 fixed h-screen duration-300"
          : " bg-white w-[300px] top-0 left-[-100%] z-10 fixed h-screen duration-300"
          }>
           <AiOutlineClose onClick={()=>setSideNav(!sidenav)} size={25}
             className=' absolute top-4 right-4 cursor-pointer'
           />
           <h1 className=' text-xl px-4 py-1 mt-2 font-medium'>YUM<span className='  p-1  font-bold text-orange-700'>EATS</span></h1>
           <nav>
             <ul className=' flex flex-col p-4 text-gray-700 '>
                <li className=' flex py-4 items-center text-xl '>
                   <BsPerson  size={25}
                    className='  bg-black rounded-full text-white mr-4 p-1'
                   />
                   MY ACCOUNT
                </li>
                <li className=' flex py-4 items-center text-xl '>
                   <TbTruckReturn size={25}
                    className='  bg-black rounded-full text-white mr-4 p-1'
                   />
                   DELIVERY
                </li>
                <li className=' flex py-4 items-center text-xl '>
                   <FaGoogleWallet  size={25}
                    className='  bg-black rounded-full text-white mr-4 p-1'
                   />
                    MY WALLET
                </li>
                <li className=' flex py-4 items-center text-xl '>
                   <MdHelp  size={25}
                    className='  bg-black rounded-full text-white mr-4 p-1'
                   />
                   HELP
                </li>
             </ul>
          </nav>
          </div>
       
    </div>
  )
}

export default TopNav