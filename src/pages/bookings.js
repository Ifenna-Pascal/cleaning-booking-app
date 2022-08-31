import React from 'react'
import Hero from '../layout/hero/Hero'
import BookingSection from '../section/booking'
import BookQuote from '../section/booking/BookQuote'
import Remark from '../section/home/Remark'

function Booking() {
  return (
    <div>
         <Hero bg="bg-bookingHero">
            <div className='flex items-center lg:h-[35vh] h-[50vh]  justify-center flex-col'>
            <h1 className='text-white leading-[1.5em] lg:leading-[1.5em] font-poppins tracking-wide text-center lg:text-left font-bold text-[2.3em] lg:text-[3em]'>Book Now</h1>
          <p className=" px-3 max-w-[700px] tracking-wider md:px-0 text-lg text-center  text-[#ebe7e7] leading-8 mt-4 font-poppins">Duis mollis est non commodo luctus nisi erat porttitor ligula eget lacinia odio sem necid nibh ultricies vehicula.</p>
            </div>
        </Hero> 
        <BookQuote />
        <BookingSection />
        <Remark />
    </div>
  )
}

export default Booking