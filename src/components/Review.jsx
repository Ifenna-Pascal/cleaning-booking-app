import React from 'react';

function Review({ review, img, name, title }) {
  return (
    <div className="md:text-left text-center  block ">
      <p className="text-white text-lg italic font-poppins ">{review}</p>
      <div className="flex px-4 md:px-0  my-4 py-2 md:py-0 items-center">
        <div className="mr-2 border-[3px] border-gray-300 flex items-start w-[50px] h-[50px] rounded-[50%] justify-start">
          <img
            src={img}
            className={`object-fit w-full h-full rounded-[50%]`}
          ></img>
        </div>
        <div className="flex items-start flex-col">
          <h2 className="block text-white leading-[1rem]  font-semibold font-outfit capitalizev text-[1em]">
            {name}
          </h2>
          <p className="text-gray-300 text-left md:text-center font-[400] text-base max-w-[500px] ">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Review;
