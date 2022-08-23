import React from 'react'
import Card from '../../components/Card'

function BookForm() {
    return (
        <div className='grid max-w-[1250px] my-12 w-full h-full relative mx-auto  grid-cols-1 lg:grid-cols-5'>
            <div className='lg:col-span-3 col-psan-1 flex flex-col items-start rounded-[20px] shadow-md p-12 min-h-fit w-full bg-white'>
                <h1 className="font-bold text-[2em] w-full text-black font-poppins text-center">Book Our Cleaning Services</h1>
                {/* <div>
                <span></span>
                <span></span>
            </div> */}
                <div className='py-6 grid grid-cols-2 w-full space-x-6'>
                    <div className="flex flex-col items-start w-full">
                        <span className="text-gray-800 mb-3 font-semibold font-poppins capitalize" >Services For</span>
                        <select className="w-full ">
                            <option value="residential cleaning" selected>Residential Cleaning</option>
                            <option value="commercial cleaning">Commercial Cleaning</option>
                        </select>
                    </div>
                    <div className="flex flex-col w-full items-start">
                        <span className="text-gray-800 mb-3 font-semibold font-poppins capitalize" >Services For</span>
                        <select className="w-full ">
                            <option value="residential cleaning" selected>Residential Cleaning</option>
                            <option value="commercial cleaning">Commercial Cleaning</option>
                        </select>
                    </div>
                </div>
                {/* check box */}
                {/* selct materials to be cleaned */}
                <div className='py-6 grid grid-cols-3 w-full space-x-6 '>
                    <div className="flex flex-col items-start">
                        <span className="text-gray-800 mb-3 font-semibold font-poppins capitalize" >No. of Bedrooms</span>
                        <select className="w-full ">
                            <option value="residential cleaning" selected>1</option>
                            <option value="commercial cleaning">2</option>
                        </select>
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="text-gray-800 mb-3 font-semibold font-poppins capitalize" >No. of Windows</span>
                        <select className="w-full ">
                            <option value="residential cleaning" selected>1</option>
                            <option value="commercial cleaning">2</option>
                        </select>
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="text-gray-800 mb-3 font-semibold font-poppins capitalize" >No. of Bathrooms</span>
                        <select className="w-full ">
                            <option value="residential cleaning" selected>1</option>
                            <option value="commercial cleaning">2</option>
                        </select>
                    </div>
                </div>
                {/* input */}
                <div className='py-6 grid grid-cols-2 w-full space-x-6'>
                    <div className="flex flex-col items-start w-full">
                        <span className="text-gray-800 mb-3 font-semibold font-poppins capitalize" >Select Date</span>
                        <input type="date" className="w-full" />
                    </div>
                    <div className="flex flex-col items-start w-full">
                        <span className="text-gray-800 mb-3 font-semibold font-poppins capitalize" >Zip Code</span>
                        <input type="text" className="w-full" />
                    </div>
                </div>

                {/* three layer input */}
                <div className='py-6 grid grid-cols-3 w-full space-x-6'>
                    <div className="flex flex-col items-start w-full">
                        <span className="text-gray-800 mb-3 font-semibold font-poppins capitalize" >Name </span>
                        <input type="text" className="w-full" />
                    </div>
                    <div className="flex flex-col items-start w-full">
                        <span className="text-gray-800 mb-3 font-semibold font-poppins capitalize" >Phone Number</span>
                        <input type="text" className="w-full" />
                    </div>
                    <div className="flex flex-col items-start w-full">
                        <span className="text-gray-800 mb-3 font-semibold font-poppins capitalize" >Email Address</span>
                        <input type="email" className="w-full" />
                    </div>
                </div>
                {/* textarea */}
                <div className='py-6 grid grid-cols-1 w-full '>
                    <div className="flex flex-col items-start w-full">
                        <span className="text-gray-800 mb-3 font-semibold font-poppins capitalize" >Any Details</span>
                        <textarea className="w-full min-h-[6em]" />
                    </div>

                </div>

                {/* Book */}
                <div className="w-full py-6 flex items-center">
                    <button className="w-full bg-secondary text-xl  font-semibold text-white py-4 rounded-[8px] uppercase">Book Service</button>
                </div>
            </div>
            <div className='flex flex-col items-end justify-end w-full   col-span-2 gap-y-6'>
                <Card title="Experienced Staff" desc="Morbi leo risus, porta ac consectetur acit vestibulum at eros. Integer posuere erat a ante venenatis dapibus." icon="ri-group-fill" />
                <Card title="Best Equipment" desc="Morbi leo risus, porta ac consectetur acit vestibulum at eros. Integer posuere erat a ante venenatis dapibus." icon="ri-tools-fill" />
                <Card title="Resonable Price" desc="Morbi leo risus, porta ac consectetur acit vestibulum at eros. Integer posuere erat a ante venenatis dapibus." icon="ri-tools-fill" />
                <Card title="Certified Coompany" desc="Morbi leo risus, porta ac consectetur acit vestibulum at eros. Integer posuere erat a ante venenatis dapibus." icon="ri-vip-crown-2-line" />
            </div>
        </div>
    )
}

export default BookForm