/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Images from '../../util/images'


function Header() {
    return (
        <div className='py-4 px-16 w-full mx-auto hidden lg:flex items-center justify-between min-h-[60px] rounded-[6px] shadow-sm'>
            <div className="w-[80px]">
                <img src={Images.logoTwo} className="w-full  hover:scale-110 duration-300 cursor-pointer" />
            </div>
            <div className="flex items-center">
                <h1 className="leading-[16px] text-gray-600 font-semibold text-[20px]">Welcome Admin!🎉</h1>
            </div>
        </div>
    )
}

export default Header


// related functions

export const HeaderTabs = ({ text, type, status, ...rest }) => {
    return (
        <button
            className={`${status === type ? 'bg-secondary text-white' : 'text-gray-700'} border mr-4 hover:translate-x-1  border-gray-200 px-6 py-2 cursor-pointer font-poppins  hover:border-secondary duration-500 lg:hover:text-gray-500 rounded-[8px]  flex items-center justify-center`}
            {...rest}
        >
            {text}
        </button>
    )
}