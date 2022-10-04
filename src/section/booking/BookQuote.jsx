import React from 'react';

function BookQuote() {
  return (
    <div className="w-full bg-primary min-h-[100px] lg:min-h-[180px] py-6 lg:py-12 md:py-0 flex items-center">
      <div className="md:max-w-[1000px] max-w-[500px] w-full mx-auto flex  flex-col md:flex-row  justify-between">
        <h1 className=" text-[1em] md:text-[1.5em] font-poppins leading-[1.8rem] md:leading-[2rem] px-4 lg:px-0 lg:block hidden md:text-left text-white ">
          There is no need to fill out an endless
          <br /> estimate form!
        </h1>
        <div className="flex p-4 items-center justify-center lg:justify-start flex-col lg:flex-row ">
          <div className="w-12 h-12 flex items-start justify-start p-2 mr-4 bg-white border-2 rounded-[50%]">
            <i className={`ri-phone-fill text-2xl text-primary`}></i>
          </div>
          <div className="flex lg:items-start py-2 items-center flex-col">
            <span className="text-lg font-bold text-white font-outfit">
              +1 123 456 7890
            </span>
            <span className="text-base  text-white font-outfit">
              Call us for an over-the-phone cost estimate
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookQuote;
