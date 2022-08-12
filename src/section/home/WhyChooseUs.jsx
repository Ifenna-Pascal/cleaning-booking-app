import Link from 'next/link'
import React from 'react'
import AboutCard from '../../components/AboutCard'
import Contact from '../../components/Contact'

function WhyChooseUs() {
  return (
    <div className="bg-[#e2e7f6]">
      <div className='max-w-[1250px] min-h-[600px] flex justify-center w-full h-full flex-col md:flex-row flex-col-reverse relative mx-auto'>
        <div className='basis[60%] px-4 md:pl-8 md:pr-0 py-12 w-full'>
            <h1 className='font-semibold font-outfit leading-[1.5em] text-center md:text-left text-[1.8em] lg:text-[2.5em] text-text_primary'>Why Choose Us?</h1>
            <p className='text-text_secondary font-poppins leading-[1.7rem] md:leading-[2rem]  text-center md:text-left  max-w-[680px] text-[1.1rem] md:text-[1.2rem]  mb-4 py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, pariatur culpa non molestiae ducimus deserunt explicabo, repudiandae ratione nostrum, numquam optio aliquam quia quidem atque?</p>
            <Link href="/about" className='py-12'><span className="underline uppercase font-semibold font-outfit flex items-center justify-center md:justify-start text-primary hover:text-secondary ">Learn more about us &gt;&gt;</span></Link>
            <div className='grid lg:grid-cols-2 py-8 gap-6 max-w-[700px]'>
              <AboutCard img="ri-user-settings-fill" header="Experienced Staff" content="Morbi leo risus, porta ac consectetur acit vestibulum at eros. Integer posuere erat a ante venenatis dapibus." />
              <AboutCard img="ri-tools-fill" header="Best Equipment" content="Morbi leo risus, porta ac consectetur acit vestibulum at eros. Integer posuere erat a ante venenatis dapibus." />           
              <AboutCard img="ri-price-tag-2-fill" header="Reasonable Price" content="Morbi leo risus, porta ac consectetur acit vestibulum at eros. Integer posuere erat a ante venenatis dapibus." />
              <AboutCard img="ri-vip-crown-fill" header="Certified Company" content="Morbi leo risus, porta ac consectetur acit vestibulum at eros. Integer posuere erat a ante venenatis dapibus." />           
             </div>
        </div>
        <div className='h-[850px] lg:h-[800px] -mt-[60px] lg:-mt-[250px] rounded-xl mx-[1rem] lg:min-w-[420px] flex flex-col py-8 md:py-12 px-4 items-start shadow-lg border-lg bg-white'>
            <h2 className="text-text_primary font-outfit font-semibold text-center flex items-center justify-center w-full text-[1.4em]">Request a Free Quote </h2>
            <form action="" className='py-6  w-full px-2'>
              <div className='flex mb-6  flex-col w-full'>
                <label className="mb-2">Name</label>
                <input type="text" className='w-full py-3 px-2 bg-input outline-none' />
              </div>
              <div className='flex mb-6 flex-col w-full'>
                <label className="mb-2">Phone Number</label>
                <input type="text" className='w-full py-3 px-2 bg-input outline-none' />
              </div>
              <div className='flex mb-6 flex-col w-full'>
                <label className="mb-2">Select Date</label>
                <input type="date" className='w-full py-3 px-2 bg-input outline-none' />
              </div>
              <div className='flex mb-6 flex-col w-full'>
                <label className="mb-2">Choose a Service</label>
                <input type="text" className='w-full py-3 px-2 bg-input outline-none' />
              </div>
              <div className='flex flex-col mb-6 w-full'>
                <label className="mb-2">Zip Code</label>
                <input type="text" className='w-full py-3 px-2 bg-input outline-none' />
              </div>
              <button className="bg-secondary  border-none flex items-center py-2 md:py-3 px-10 font-outfit w-full cursor-pointer text-white font-semibold rounded-md justify-center">Book Now</button>
              <div className="flex flex-col md:flex-row md:items-center space-y-4 justify-between mt-5">
                  <Contact icon="ri-phone-line" header="Hotline" content="+11234567890" />
                  <Contact icon="ri-mail-unread-line" header="Email" content="info@example.com" />
              </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs