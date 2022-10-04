/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Link from 'next/link';
import { useState } from 'react';
import Contact from '../../components/Contact';
import Links from '../../components/Links';
import Images from '../../util/images';
import ServiceDropDown from './ServicesModal';

function Navbar({ show, setShow }) {
  return (
    <nav className="bg-[#fff] py-4 px-8  flex  top-[2rem] md:top-[4rem] justify-between relative max-w-[95%] mx-auto lg:max-w-[1250px] w-full shadow-lg  items-center h-[60px] md:h-[80px]  rounded-lg">
      <ul className="hidden md:flex justify-self-start ">
        <Links href="/" text="Home" />
        <Links href="/about" text="About" />
        <ServiceDropDown />
        <Links href="/contact" text="Contact Us" />
        <Links href="/bookings" text="Booking" />
      </ul>
      <div className="block md:hidden" onClick={() => setShow(!show)}>
        <i className="ri-menu-line text-primary font-semibold text-3xl"></i>
      </div>
      <div className="h-[80px] lg:h-[120px] absolute left-[70%] md:left-[48%] flex  items-center rounded-lg shadow-xl duration-300 bg-white justify-center p-2 w-[80px] lg:w-[120px]">
        <img
          src={Images.logoTwo}
          className="w-[85%] hover:scale-110 duration-300 cursor-pointer"
        />
      </div>
      <div className="justify-self-end hidden md:flex self-end lg:flex space-x-10">
        <div className="hidden md:block">
          <Contact
            icon="ri-phone-line"
            header="Hotline"
            content="+11234567890"
          />
        </div>
        <Link href="/bookings">
          <button className="bg-secondary justify-self-end self-end border-none flex items-center py-3 px-10 font-outfit cursor-pointer hover:cursor-pointer hover:opacity-95 hover:-translate-x-[6px] hover:text-gray-100 duration-300 text-white font-semibold rounded-md justify-center">
            Book Now
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
