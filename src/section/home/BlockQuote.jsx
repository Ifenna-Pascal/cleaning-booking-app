import Link from 'next/link'
import React from 'react'

function BlockQuote() {
  return (
    <div className="w-full bg-primary min-h-[180px] py-12 md:py-0 flex items-center">
      <div className="md:max-w-[1000px] max-w-[300px] w-full mx-auto flex  flex-col md:flex-row  justify-between">
        <h1 className="font-semibold text-[1.3em] md:text-[1.5em] font-poppins leading-[1.8rem] md:leading-[2.5rem] text-center md:text-left text-white ">We are commited to providing an expert cleaning <br /> service. Free estimates are waiting for you</h1>
        <Link href="/bookings">
          <button className="bg-secondary my-8 md:my-0 justify-self-end  hover:cursor-pointer hover:opacity-95 hover:-translate-x-[6px] hover:text-gray-100 duration-300 self-end border-none flex items-center py-3 text-base md:text-xl px-10 font-outfit cursor-pointer text-white font-semibold w-full md:w-[220px] rounded-md justify-center uppercase">Book Now</button>
        </Link>
      </div>
    </div>
  )
}

export default BlockQuote