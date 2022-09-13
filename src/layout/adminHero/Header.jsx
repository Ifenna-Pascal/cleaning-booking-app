/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { logout } from '../../db/dbMethods'
import Images from '../../util/images'
import {toast} from 'react-toastify';
 

function Header({user}) {
    const router = useRouter();
    const handleLogout = async() => {
      await logout().then( auth => {
        router.push('/');
      }).catch(err => {
        toast.error(err.message)
      })
    }
    return (
        <div className='py-4 px-16 w-full mx-auto hidden lg:flex items-center justify-between min-h-[60px] rounded-[6px] shadow-sm'>
            <Link href="/">
                <div className="w-[80px]">
                    <img src={Images.logoTwo} className="w-full  hover:scale-110 duration-300 cursor-pointer" />
                </div>
            </Link>
            <div className="flex flex-col ">
                <h1 className="leading-[16px] text-gray-600 font-semibold text-[16px]">Welcome Admin!🎉</h1>
                <p className="block pt-1 text-gray-500">{user}</p>
                {user && <p className="text-green-500 cursor-pointer underline" onClick={handleLogout}>logout</p>}
            </div>
        </div>
    )
}

export default Header


// related functions

export const HeaderTabs = ({ text, type, status, ...rest }) => {
    return (
        <button
            className={`${status === type ? 'bg-secondary text-white' : 'text-gray-700'} border mr-4 hover:translate-x-1  border-gray-200 px-6 py-2 cursor-pointer font-poppins  hover:border-secondary duration-200  rounded-[8px]  flex items-center justify-center`}
            {...rest}
        >
            {text}
        </button>
    )
}