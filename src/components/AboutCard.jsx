import React from 'react';

function AboutCard({ img, header, content }) {
  return (
    <div className="flex">
      <div className="mr-3 flex items-start justify-start">
        <i className={`${img} text-primary text-3xl`}></i>
      </div>
      <div className="">
        <h2 className="block text-text_primary leading-[1.2rem] mb-2 font-semibold font-outfit capitalize text-[1em]">
          {header}
        </h2>
        <p className="text-text_secondary  text-[15px] leading-[22px] max-w-[500px] ">
          {content}
        </p>
      </div>
    </div>
  );
}

export default AboutCard;
