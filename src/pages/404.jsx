import Link from 'next/link'
import React from 'react'
import Hero from '../layout/hero/Hero'

function NotFound() {
  return (
    <div>
           <Hero bg="bg-bookingHero">
            <div className='flex items-center lg:h-[35vh] h-[50vh]  justify-center flex-col'>
            <h1 className='text-white leading-[1.5em] lg:leading-[1.5em] font-poppins tracking-wide text-center lg:text-left font-bold text-[2.3em] lg:text-[3em]'>Page Not Found</h1>
            <Link href="/"><button className="bg-secondary mt-6 border-none flex items-center py-3 px-10 font-outfit cursor-pointer hover:cursor-pointer hover:opacity-95 hover:-translate-x-[6px] hover:text-gray-100 duration-300 text-white font-semibold  justify-center">Return To Home</button></Link> </div>
        </Hero> 
    </div>
  )
}

export default NotFound