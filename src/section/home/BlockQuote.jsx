import React from 'react'

function BlockQuote() {
  return (
    <div className="w-full bg-primary min-h-[180px] flex items-center">
        <div className="max-w-[1000px] w-full mx-auto flex  justify-between">
            <h1 className="font-semibold text-[1.5em] font-poppins leading-[2.5rem] text-white ">We are commited to providing an expert cleaning <br/> service. Free estimates are waiting for you</h1>
            <button className="bg-secondary justify-self-end self-end border-none flex items-center py-3 text-xl px-10 font-outfit cursor-pointer text-white font-semibold w-[220px] rounded-md justify-center uppercase">Book Now</button>
        </div>
    </div>
  )
}

export default BlockQuote