import React from 'react'
import Link from 'next/link';

function ServiceCard({image, icon, header, content}) {
  return (
    <div className='w-full min-h-[400px]  cursor-pointer duration-500 scale_up bg-white rounded-lg shadow-lg'>
        <div className='w-full duration-500 overflow-hidden h-[200px] object-cover'>
            <img src={image} alt="service image" className='w-full rounded-t-lg relative duration-500 h-full object-center object-fit' />
        </div>
        <div className='flex flex-col py-6 items-center justify-center'>
            <div className='flex justify-center p-2 items-center w-[60px] h-[60px] mb-4 rounded-[50%] bg-gray-300'>
                <i className={`${icon} text-2xl text-primary font-semibold`}></i>
            </div>
            <span className="text-text_primary text-center font-outfit text-[1.2em] font-semibold mb-2 md:mb-4">{header}</span>
            <span className='text-center mb-3 text-gray-600 font-outfit px-4 md:px-0 text-base'>{content}</span>
            <Link href="/about"><span className="underline mt-4 uppercase font-semibold text-center font-outfit text-sm text-primary hover:text-secondary ">Learn more about us &gt;&gt;</span></Link>
        </div>
    </div>
  )
}

export default ServiceCard