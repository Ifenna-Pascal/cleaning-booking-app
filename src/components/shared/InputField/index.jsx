import React from 'react'

function InputField({ ...rest }) {
    return (
        <div className="w-full">
            <input
                type="text"
                className="w-full border border-gray-200 rounded-[4px] text-base font-poppins bg-transparent text-gray-800 placeholder:text-gray-400 outline-none p-3"
                {...rest}
            />
        </div>
    )
}

export default InputField