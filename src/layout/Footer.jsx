import React from 'react';
import Images from '../util/images';

function RemarkList({content, icon}) {
  return (
    <div className='flex my-2 items-center'>
        {/* <div className='mr-4 bg-primary flex items-center justify-center rounded-[4p'> */}
        <i className={`${icon} text-primary mr-3 text-semibold text-xl`}></i>
        {/* </div> */}
        <span className="text-gray-400 font-semibold text-xl ">{content}</span>
    </div>
  )
}


function Footer() {
  return (
    <div className="bg-dark_secondary w-full flex min-h-[400px] items-center">
      <div className='max-w-[1250px] py-20 w-full mx-auto grid items-center justify-center grid-cols-1 lg:grid-cols-3 gap-4'>
        {/* first grid */}
        <div className='flex flex-col px-6 items-start justify-start '>
          <div className='flex mb-4 md:mb-6 flex-col items-start justify-center w-[80px] h-[70px] '>
            <img src={Images.logoOne} className='w-full h-full object-cover object-center' />
          </div>
          <h1 className='text-white hover:text-secondary text-left text-2xl font-bold font-poppins mb-4'> Best Cleaning Services</h1>
          <p className="text-gray-400 text-lg font-[500] font-semibold">
            We are committed to the best quality in industrial cleaning, residential cleaning, and garden cleaning.
          </p>
        </div>
        {/* second grid */}
        <div className='flex px-4 flex-col '>
          <div className='flex mb-2 flex-col'>
            <h2 className='flex text-white font-semibold text-[1.4rem] mb-2'>Contact Info:</h2>
            <div className='flex flex-col'>
              <RemarkList content="324 King Avenue, Florida, USA" icon="ri-map-pin-2-line" />
              <RemarkList content="+234 6709053565" icon="ri-phone-line" />
              <RemarkList content="admin@email.com" icon="ri-mail-add-line" />
            </div>
          </div>

          <div className='flex flex-col'>
            <h2 className='flex text-white font-semibold text-[1.4rem] mb-2'>Open Hours:</h2>
            <div className='flex flex-col'>
              <RemarkList content="Mon - Sat: 8am - 4pm" icon="ri-timer-2-line" />
              <RemarkList content="Sunday: closed" icon="ri-timer-2-line" />
            </div>
          </div>
        </div>
        <div className='flex mx-4 flex-col'>
          <h1 className='text-white hover:text-secondary text-left text-xl font-semibold font-poppins mb-4'> Best Cleaning Services</h1>
          <p className="text-gray-400 text-lg font-[600] font-semibold">
            Subscribe to our newsletter to get our latest updates & news.
          </p>
          <div className='flex items-center my-4 w-full h-[3rem] relative'>
            <input text="email" placeholder="email address" className='w-full border px-4 text-[16px]  leading-[15px] font-inter text-[#A5A5A5]  outline-none h-full border-[#A5A5A5] rounded-[10px] bg-white' />
            <div className="flex items-center justify-center absolute w-[4rem] right-0 inset-y-0  bg-primary">
              <i className='ri-mail-add-line  text-white text-lg'></i>
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>

  )
}

export default Footer