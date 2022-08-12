import React from 'react'

function RemarkList({content, icon}) {
  return (
    <div className='flex my-3 items-center'>
        <div className='mr-4 bg-primary flex items-center justify-center rounded-[4px] w-[20px] h-[20px]'>
        <i className={`${icon} text-white  text-base`}></i>
        </div>
        <span className="text-text_secondary font-semibold text-xl ">{content}</span>
    </div>
  )
}

export default RemarkList