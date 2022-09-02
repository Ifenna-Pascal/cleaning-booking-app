import React from 'react'

function Loader() {
    return (
        <div className="fixed w-screen h-screen  flex items-center justify-center inset-0  bg-gray-300">
            <div className='flex items-center justify-center w-[80px] h-[80px] blur-xl rounded-[50%] bg-primary animate-ping'></div>
        </div>
    )
}

export default Loader