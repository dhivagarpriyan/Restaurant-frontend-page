import React from 'react'

const NewsLetter = () => {
  return (
    <div className=' w-full  bg-gradient-to-b from-black to-gray-700 py-4 '>
        <div className=' max-w-[1520px] mx-auto '>
            <div className=' w-full grid lg:grid-cols-2'>
                <div className=' flex flex-col mx-auto mt-16 items-center'>
                    <p className=' text-white p-1 font-bold'>NEED ADVICE ON HOW TO IMPROVE OUR FLAWS</p>
                    <p className=' text-white font-semibold'>Sign up to our NewsLetter and stay up-to-date</p>

                </div>
    
                <div className=' flex flex-col mx-auto mt-16 mb-16'>
                    <input
                     placeholder='EMAIL....'
                     className='p-1 rounded-lg w-[400px] focus:outline-none'
                    />
                     <button className=' bg-gradient-to-l from-blue-700 to-cyan-600 font-bold text-white w-[150px] rounded-md mx-auto my-6'>
                        NOTIFY ME
                     </button>
                     <p className=' text-white font-semibold'>We are concerned about your data
                        <span className=' mx-2 text-green-600'>PRIVACY POLICY</span>
                     </p>
                </div>
            </div>
            <hr
               className="border-gray-500 border-2"
            />
        </div>
    </div>
  )
}

export default NewsLetter