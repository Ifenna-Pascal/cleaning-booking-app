import React from 'react'

function RemarkList({ content, icon }) {
  return (
    <div className='flex my-3 items-center'>
      <div className='mr-2 bg-primary flex items-center justify-center rounded-[4px] w-[18px] h-[18px]'>
        <i className={`${icon} text-white `}></i>
      </div>
      <span className="text-text_secondary text-lg">{content}</span>
    </div>
  )
}

export default RemarkList