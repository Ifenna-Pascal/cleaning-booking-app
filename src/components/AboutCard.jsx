import React from 'react'

function    AboutCard({img, header, content}) {
  return (
    <div className='flex'>
        <div className='mr-3 flex items-start justify-start'>
            <i className={`${img} text-primary text-3xl`}></i>
        </div>
        <div className=''>
            <h2 className="block text-text_primary leading-[2rem] mb-2 font-semibold font-outfit capitalizev text-[1.2em]">{header}</h2>
            <p className="text-text_secondary font-[500] text-lg max-w-[500px] " >{content}</p>
        </div>
    </div>
  )
}

export default AboutCard