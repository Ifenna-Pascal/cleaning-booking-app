import React from 'react'
import Hero from '../layout/hero/Hero'
import BookQuote from '../section/booking/BookQuote'
import ContactSection from '../section/contact/ContactSection'
import BlockQuote from '../section/home/BlockQuote'
import Remark from '../section/home/Remark'

function contact() {
  return (
    <>
          <Hero bg="bg-contactHero">
            <div className='flex items-center lg:h-[35vh] h-[50vh]  justify-center flex-col'>
            <h1 className='text-white leading-[1.5em] lg:leading-[1.5em] font-poppins tracking-wide text-center lg:text-left font-bold text-[2.3em] lg:text-[3em]'>Contact Us</h1>
          <p className=" px-3 max-w-[700px] tracking-wider md:px-0 text-lg text-center  text-[#ebe7e7] leading-8 mt-4 font-poppins">For your services you can endeavour to reach us through mail and call. Customer care service is available</p>
            </div>
        </Hero> 
        <ContactSection />
        <BookQuote />
        <div className='bg-[#e2e7f6]'><Remark /></div>
        <BlockQuote />
    </>
  )
}

export default contact