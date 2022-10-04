/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import RemarkList from '../../components/RemarkList'
import Images from '../../util/images'

function Remark() {
    return (
        <div className='max-w-[1250px] w-full py-16 min-h-[500px]  flex flex-col  relative mx-auto'>
            <div className='grid lg:grid-cols-2  grid-cols-1 gap-4 w-full'>
                <div className='flex flex-col mx-4 lg:mx-0 items-start  '>
                    <h1 className=' font-semibold font-poppins leading-[1.2em] md:text-left text-[1.8em] lg:w-[80%] lg:text-[1.8em] text-text_primary'>Our company&#39;s top priority is customer safety</h1>
                    <p className=' md:text-left text-text_secondary py-2 leading-[2rem] text-base font-poppins '>In agreement to health guidelines,we ensure all our staffs are well suited and obey regulatory guidelines at all times.</p>
                    <ul className='flex flex-col'>
                        <RemarkList content="Sanitize and disinfect" icon="ri-check-fill" />
                        <RemarkList content="Make sure you wear a mask" icon="ri-check-fill" />
                        <RemarkList content="Wears gloves at all times" icon="ri-check-fill" />
                        <RemarkList content="Rinsing our hands" icon="ri-check-fill" />
                    </ul>
                </div>
                <div className='flex items-center justify-center p-2'>
                    <img src={Images.imageSix} className="w-full object-cover object-center shadow-lg w-dull h-full rounded-[20px]" />
                </div>
            </div>
        </div>
    )
}

export default Remark