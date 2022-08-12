import React from 'react'
import RemarkList from '../../components/RemarkList'
import Images from '../../util/images'

function Remark() {
    return (
        <div className='max-w-[1250px] w-full py-16 min-h-[500px]  flex flex-col items-center justify-center relative mx-auto'>
            <div className='grid lg:grid-cols-2  grid-cols-1 gap-4 w-full'>
                <div className='flex flex-col mx-4 lg:mx-0 items-center lg:items-start justify-center '>
                    <h1 className=' text-[1.8em] text-center md:text-left lg:text-[2.5em] max-w-[80%] leading-[1.2em] text-text_primary font-semibold'>Our company&#39;s top priority is customer safety</h1>
                    <p className='text-center md:text-left text-text_secondary py-4 leading-[2rem] text-lg font-poppins '>Curabitur blandit tempus porttitor. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis est non commodo luctus nisi erat porttitor.</p>
                    <ul className='flex flex-col'>
                        <RemarkList content="Sanitize and disinfect" icon="ri-check-fill" />
                        <RemarkList content="Make sure you wear a mask" icon="ri-check-fill" />
                        <RemarkList content="Wears gloves at all times" icon="ri-check-fill" />
                        <RemarkList content="Rinsing our hands" icon="ri-check-fill" />
                    </ul>
                </div>
                <div className='flex items-center justify-center p-2'>
                    <img src={Images.imageSix} className="w-full object-cover object-center h-full shadow-lg w-dull h-full rounded-[20px]"  />
                </div>
            </div>
        </div>
    )
}

export default Remark