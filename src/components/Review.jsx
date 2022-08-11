import React from 'react'

function Review({review, img, name, title}) {
  return (
    <div className="text-left block w-full">
        <p className="text-white text-lg italic font-poppins ">{review}</p>
        <div className='flex my-4 items-center'>
        <div className='mr-4 border-[3px] border-gray-300 flex items-start w-[60px] h-[60px] rounded-[50%] justify-start'>
            <img src={img} className={`object-fit w-full h-full rounded-[50%]`}></img>
        </div>
        <div className=''>
            <h2 className="block text-white leading-[1.3rem]  font-semibold font-outfit capitalizev text-[1.2em]">{name}</h2>
            <p className="text-gray-300 font-[500] text-lg max-w-[500px] " >{title}</p>
        </div>
    </div>
    </div>
  )
}

export default Review