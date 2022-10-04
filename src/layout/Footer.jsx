import React from 'react';
import Images from '../util/images';

function RemarkList({ content, icon }) {
  return (
    <div className="flex my-2 items-center">
      <i className={`${icon} text-primary mr-2 text-lg`}></i>
      <span className="text-gray-400  text-sm ">{content}</span>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-dark_secondary w-full flex min-h-[400px] items-start">
      <div className="max-w-[1250px] py-20 w-full mx-auto grid  justify-center grid-cols-1 lg:grid-cols-3 gap-4">
        {/* first grid */}
        <div className="flex flex-col px-4 items-start justify-start ">
          <div className="flex mb-4 md:mb-6 flex-col items-start justify-center w-[80px] h-[70px] ">
            <img
              src={Images.logoOne}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <h1 className="text-white hover:text-secondary text-left text-xl font-poppins mb-2">
            {' '}
            Best Cleaning Services
          </h1>
          <p className="text-gray-400 text-base">
            We are committed to the best quality in industrial cleaning,
            residential cleaning, and garden cleaning.
          </p>
        </div>
        {/* second grid */}
        <div className="flex  flex-col pl-4 lg:pl-24 w-full  ">
          <div className="flex w-full  mb-4 flex-col">
            <h2 className="flex text-white font-semibold  text-[1rem] ">
              Contact Info:
            </h2>
            <div className="flex  flex-col">
              <RemarkList
                content="324 King Avenue, Florida, USA"
                icon="ri-map-pin-2-line"
              />
              <RemarkList content="+234 6709053565" icon="ri-phone-line" />
              <RemarkList content="admin@email.com" icon="ri-mail-add-line" />
            </div>
          </div>

          <div className="flex  w-full  flex-col">
            <h2 className="flex text-white font-semibold  text-[1rem] ">
              Open Hours:
            </h2>
            <div className="flex  flex-col">
              <RemarkList
                content="Mon - Sat: 8am - 4pm"
                icon="ri-timer-2-line"
              />
              <RemarkList content="Sunday: closed" icon="ri-timer-2-line" />
            </div>
          </div>
        </div>
        <div className="flex mx-4 flex-col">
          <h1 className="text-white hover:text-secondary text-left text-[1rem] font-semibold font-poppins mb-2">
            {' '}
            Best Cleaning Services
          </h1>
          <p className="text-gray-400 text-base md:w-[80%]">
            Subscribe to our newsletter to get our latest updates & news.
          </p>
          <div className="flex items-center my-4 w-full h-[3rem] relative">
            <input
              type="email"
              placeholder="email address"
              className="w-full border px-4 text-[16px]  leading-[15px] font-inter text-[#A5A5A5]  outline-none h-full border-[#A5A5A5] rounded-[10px] bg-white"
            />
            <div className="flex items-center justify-center absolute w-[4rem] right-0 inset-y-0  bg-primary">
              <i className="ri-mail-add-line  text-white text-lg"></i>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Footer;
