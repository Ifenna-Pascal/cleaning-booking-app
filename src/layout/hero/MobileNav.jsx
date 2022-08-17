import React from 'react'
import Links from '../../components/Links'

function MobileNav({ show }) {
    return (
        <div className={` absolute ${show ? "mt-14" : "-mt-[100%]"} px-4  w-full md:none  duration-300 h-[250px]`}>
            <div className='flex px-4 py-4 rounded-[6px] text-left bg-dark_secondary flex-col '>
                <Links href="/" text="Home" />
                <Links href="/about" text="About" />
                <Links href="/services" text="Services" />
                <Links href="/contact_us" text="Contact Us" />
                <Links href="/bookings" text="Booking" />
                <button className="bg-secondary my-3 border-none flex items-center py-3 px-10 font-outfit cursor-pointer text-white font-semibold rounded-md justify-center">Book Now</button>
            </div>
        </div>
    )
}

export default MobileNav