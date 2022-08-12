import React from 'react'
import Contact from '../../components/Contact'
import Images from '../../util/images'

function Navbar() {
  return (
    <nav className='bg-[#fff] py-4 px-8  flex absolute top-[2rem] md:top-[4rem] justify-between relative max-w-[95%] mx-auto lg:max-w-[1250px] w-full shadow-lg  items-center h-[60px] md:h-[80px]  rounded-lg'>
      <ul className='hidden md:flex justify-self-start '>
        <li className='navItem'>Home</li>
        <li className='navItem'>About</li>
        <li className='navItem'>Services</li>
        <li className='navItem'>Contact us</li>
        <li className='navItem'>Booking</li>
      </ul>
      <div className='block md:hidden'>
        <i className="ri-menu-line text-3xl"></i>
      </div>
      <div className='h-[80px] lg:h-[120px] absolute left-[70%] md:left-[48%] flex  items-center rounded-lg shadow-xl duration-300 bg-white justify-center p-2 w-[80px] lg:w-[120px]'>
        <img src={Images.logoTwo} className="w-[85%] hover:scale-110 duration-300 cursor-pointer" />
      </div>
      <div className="justify-self-end hidden md:block self-end flex space-x-10">
        <div className='hidden md:block'><Contact icon="ri-phone-line" header="Hotline" content="+11234567890" /></div>
        <button className="bg-secondary justify-self-end self-end border-none flex items-center py-3 px-10 font-outfit cursor-pointer text-white font-semibold rounded-md justify-center">Book Now</button>
      </div>
    </nav>
  )
}

export default Navbar