import React from 'react'

function Review({review, img, name, title}) {
  return (
    <div className="text-left">
        <p>{review}</p>
        <div className='flex'>
        <div className='mr-3 flex items-start w-[50px] h-[50px] rounded-[50%] justify-start'>
            <img src={img} className={`object-fit w-full h-full rounded-[50%]`}></img>
        </div>
        <div className=''>
            <h2 className="block text-text_primary leading-[2rem] mb-2 font-semibold font-outfit capitalizev text-[1.2em]">{name}</h2>
            <p className="text-text_secondary font-[500] text-lg max-w-[500px] " >{title}</p>
        </div>
    </div>
    </div>
  )
}

export default Review