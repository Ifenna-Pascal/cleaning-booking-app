import React from 'react';

function Contact({ icon, header, content }) {
  return (
    <div className="flex items-center ">
      <div className="w-8 h-8 flex items-center justify-center p-2 mr-3 border-contact border-2 rounded-[50%]">
        <i className={`${icon} text-lg text-contact`}></i>
      </div>
      <div className="flex flex-col">
        <span className="text-base font-thin  text-gray-400 font-outfit">
          {header}
        </span>
        <span className="text-base font-semibold text-gray-600 font-outfit">
          {content}
        </span>
      </div>
    </div>
  );
}

export default Contact;
