import React from 'react'
import Images from '../../util/images'

function Vision() {
    return (
        <div className="bg-[#e2e7f6]">
            <div className='lg:max-w-[1200px] min-h-[600px] flex flex-col w-full h-full items-center lg:items-start py-16 lg:py-24  relative mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-3 '>
                    <div className='lg:col-span-2 flex  flex-col py-12 px-4 lg:px-0  lg:max-w-[90%]'>
                        <h1 className='lg:text-left text-center text-xl lg:text-2xl font-poppins leading-[1em] lg:leading-[1.2em] text-black font-semibold'>We have been providing cleaning <br />services for more than a decade.</h1>
                        <p className='py-3 text-base text-center lg:text-left text-gray-500 px-4 lg:px-0'>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
                        <div className='grid pt-6 grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-x-4'>
                            <div className='bg-white border rounded-[10px] px-4 py-8 flex flex-col space-y-4 justify-center items-center text-center border-gray-300'>
                                <div className='flex justify-center p-2 items-center w-[60px] h-[60px]  rounded-[50%] bg-[#E1E4EF]'>
                                    <i className={`ri-home-4-fill text-2xl text-primary font-semibold`}></i>
                                </div>
                                <span className="text-text_primary text-center font-outfit text-[1.2em] font-semibold ">Company Vision</span>
                                <span className='text-center mb-3 text-gray-400 font-outfit  px-4 md:px-0 text-base'>Morbi leo risus, porta ac consectetur acit vestibulum at eros. Integer posuere erat a ante venenatis dapibus</span>
                            </div>
                            <div className='bg-white border rounded-[10px] px-4 py-8 flex flex-col space-y-4 justify-center items-center text-center border-gray-300'>
                                <div className='flex justify-center p-2 items-center w-[60px] h-[60px]  rounded-[50%] bg-[#E1E4EF]'>
                                    <i className={`ri-home-4-fill text-2xl text-primary font-semibold`}></i>
                                </div>
                                <span className="text-text_primary text-center font-outfit text-[1.2em] font-semibold ">Our Goal</span>
                                <span className='text-center mb-3 text-gray-400 font-outfit px-4 md:px-0  text-base'>Morbi leo risus, porta ac consectetur acit vestibulum at eros. Integer posuere erat a ante venenatis dapibus</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 w-full lg:h-full h-[450px] px-4 '>
                        <img src={Images.imageEight} alt="our vission" className="w-full h-full rounded-[20px] object-cover object-cover" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Vision