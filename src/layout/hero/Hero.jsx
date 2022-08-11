import React from 'react'
import Navbar from './Navbar'

function Hero() {
  return (
    <div className={`min-h-[90vh] h-full w-full bg-homeHero bg-no-repeat bg-cover bg-center bg-fixed relative`}>
      <div className='max-w-[1250px] w-full h-full relative mx-auto'>
        <Navbar />
        <div className='flex items-start h-[700px] mt-[3em] max-w-[700px] justify-center h-full flex-col'>
          <h1 className='text-white leading-[1.5em] font-poppins tracking-wide font-bold text-[3.3em]'> Residential & Commercial <br /> Cleaning Service that <br /> you can trust.</h1>
          <p className="font-semibold text-xl text-[#ebe7e7] leading-8 mt-8 font-poppins">We are committed to the best quality in industrial cleaning, <br /> residential cleaning, and garden cleaning.</p>
          <div className="mt-8">
          <button className="bg-primary justify-self-end self-end border-none flex items-center py-3 px-12 font-outfit cursor-pointer text-white font-semibold rounded-md justify-center">Our Services</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Hero