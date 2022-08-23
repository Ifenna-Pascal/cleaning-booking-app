import React from 'react'

function Card({ title, desc, icon }) {
    return (
        <div className='bg-white border rounded-[10px] max-w-[400px] px-4 py-8 flex flex-col space-y-4 justify-center items-center text-center border-gray-300'>
            <div className='flex justify-center p-2 items-center w-[60px] h-[60px]  rounded-[50%] bg-[#E1E4EF]'>
                <i className={` ${icon} text-2xl text-primary font-semibold`}></i>
            </div>
            <span className="text-text_primary text-center font-outfit text-[1.2em] font-semibold "> {title}</span>
            <span className='text-center mb-3 text-gray-500 font-outfit font-[500] px-4 md:px-0 text-base'>{desc}</span>
        </div>
    )
}

export default Card