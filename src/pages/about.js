import React from 'react';
import Hero from '../layout/hero/Hero';
import Team from '../section/about/Team';
import Vision from '../section/about/Vision';
import BlockQuote from '../section/home/BlockQuote'
import Remark from '../section/home/Remark'


function AboutPage() {
  return (
    <div>
        <Hero bg="bg-aboutHero">
            <div className='flex items-center lg:h-[35vh] h-[50vh]  justify-center flex-col'>
            <h1 className='text-white leading-[1.8em] lg:leading-[1.5em] font-poppins tracking-wide text-center lg:text-left font-bold text-[2.3em] lg:text-[3em]'>About Us</h1>
          <p className="px-3 max-w-[700px]  md:px-0 text-lg text-center  text-[#ebe7e7] leading-6 mt-2 font-poppins">Our existence is for the people. Our client satisfaction and retention is our top notch focus</p>
            </div>
        </Hero>
        <Vision />
        <Remark />
        <BlockQuote />
        <Team />
    </div>
  )
}

export default AboutPage