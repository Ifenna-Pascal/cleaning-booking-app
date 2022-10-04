import React from 'react';

function Process({ icon, header, content }) {
  return (
    <div className="w-full md:min-h-[200px] mx-4 py-8 flex flex-col   md:flex-row lg:flex-col justify-center items-center bg-process border border-process_logo">
      <div className="w-[70px] h-[70px] mb-4 p-1 rounded-[50%] border-2 flex items-center justify-center border-process_logo">
        <i className={`${icon} text-4xl text-process_logo text-center`}></i>
      </div>
      <h2 className="text-white font-semibold mb-4 text-center text-xl ">
        {header}
      </h2>
      <p className="text-gray-200 px-4 text-center text-sm font-[500] tracking-wide font-poppins ">
        {content}
      </p>
    </div>
  );
}

export default Process;
