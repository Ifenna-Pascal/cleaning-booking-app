import React from 'react'
import Images from '../../util/images'

function Navbar() {
  return (
    <nav className='bg-[#fff] py-4 px-8 flex absolute top-[4rem] justify-between relative max-w-[1250px] w-full shadow-lg  items-center h-[80px]  rounded-lg'>
      <ul className='flex justify-self-start '>
        <li className='navItem'>Home</li>
        <li className='navItem'>Services</li>
        <li className='navItem'>About</li>
        <li className='navItem'>Booking</li>
      </ul>

      <div className='h-[120px] absolute left-[48%] flex items-center rounded-lg shadow-xl duration-300 bg-white justify-center p-2 w-[120px]'>
        <img src={Images.logoTwo} className="w-[85%] hover:scale-110 duration-300 cursor-pointer"/>
      </div>

      <button className="bg-secondary justify-self-end self-end border-none flex items-center py-3 px-10 font-outfit cursor-pointer text-white font-semibold rounded-md justify-center">Book Now</button>
    </nav>
  )
}

export default Navbar