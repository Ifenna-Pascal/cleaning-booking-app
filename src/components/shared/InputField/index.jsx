import React from 'react'

function InputField({ error, ...rest }) {
    return (
        <div className="w-full">
            <input
                type='text'
                className="w-full border border-gray-200 rounded-[4px] text-base font-poppins bg-transparent text-gray-800 placeholder:text-gray-400 outline-none p-3"
                {...rest}
            />
            <p className='text-red-400 text-sm font=poppins'>{error && error}</p>
        </div>
    )
}

export default InputField