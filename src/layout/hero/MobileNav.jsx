import React from 'react'

function MobileNav({ show }) {
    return (
        <div className={` absolute ${show ? "mt-14" : "-mt-[100%]"} px-4  w-full md:none  duration-300 h-[250px]`}>
            <div className='flex px-4 py-4 rounded-[6px] text-left bg-dark_secondary flex-col '>
                <span className='py-2 px-3 rounded-md text-lg font-semibold text-gray-300 hover:text-secondary'>Home</span>
                <span className='py-2  px-3 rounded-md text-lg font-semibold text-gray-300 hover:text-secondary'>Services</span>
                <span className='py-2  px-3 rounded-md text-gray-300 text-lg font-semibold  hover:text-secondary'>About</span>
                <span className='py-2  px-3 rounded-md text-gray-300 text-lg font-semibold  hover:text-secondary'>Contact Us</span>
                <button className="bg-secondary my-3 border-none flex items-center py-3 px-10 font-outfit cursor-pointer text-white font-semibold rounded-md justify-center">Book Now</button>
            </div>
        </div>
    )
}

export default MobileNav