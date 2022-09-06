import {useRouter} from 'next/router';
import React, { useState } from 'react'
import Button from '../../components/shared/Button'

function AdminLogin() {
    const router = useRouter();
    const [mail, setMail] = useState('');
    const handleSubmit = (e) => { 
        e.preventDefault();
        if(mail === "ifennamonanu70@gmail.com"){
            router.push("/admin/orders");
        }else {
            alert('You are not authorized')
        };
    }
    return (
        <div className="w-full">
            <div className="max-w-[700px] flex felx-col items-center  bg-white relative mb-12 z-[50] -mt-[200px] mx-auto border min-h-[400px] h-full w-full border-gray-200 rounded-[10px]">
                <div className=" flex flex-col justify-center w-full max-w-[400px] mx-auto  items-center ">
                    <h1 className="font-semibold text-[28px] leading-[24px] text-gray-700 mb-8 font-poppins py-4 ">Admin Login</h1>
                    <form className="w-full" onSubmit={handleSubmit}>
                        <div className="relative w-full flex  items-center">
                            <div className="absolute bg-gray-200 h-full rounded-l-[8px] flex items-center justify-center p-3"><i className="ri-mail-line  text-xl  text-gray-500"></i></div>
                            <input type="email" className='w-full rounded-[8px] text-gray-500 pl-12 focus:outline-none border border-gray-300 bg-transparent' onChange={(e)=> setMail(e.target.value)} />
                        </div>
                        <div className="w-full mt-4">  <Button text="Login" background="bg-primary" /></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin