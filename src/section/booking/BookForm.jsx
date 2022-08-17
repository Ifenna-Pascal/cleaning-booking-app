import React from 'react'

function BookForm() {
    return (
        <div className='grid grid-cols-3'>
            <div className='col-span-2 flex flex-col items-center p-8 min-h-fit w-full bg-white'>
                <h1 className="font-bold text-[2em] text-black font-poppins text-center">Book Our Cleaning Services</h1>
                {/* <div>
                <span></span>
                <span></span>
            </div> */}
                <div className='py-6 grid grid-cols-2 space-x-4'>
                    <div className="flex flex-col items-start">
                        <span className="text-gray-800 mb-3 font-semibold font-poppins capitalizev" >Services For</span>
                        <select className="w-full ">
                            <option value="residential cleaning" selected>Residential Cleaning</option>
                            <option value="commercial cleaning">Commercial Cleaning</option>
                        </select>
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="text-gray-800 mb-3 font-semibold font-poppins capitalizev" >Services For</span>
                        <select className="w-full ">
                            <option value="residential cleaning" selected>Residential Cleaning</option>
                            <option value="commercial cleaning">Commercial Cleaning</option>
                        </select>
                    </div>
                </div>
                {/* check box */}
                {/* selct materials to be cleaned */}
                <div className='py-6 grid grid-cols-3 space-x-4'>
                    <div className="flex flex-col items-start">
                        <span className="text-gray-800 mb-3 font-semibold font-poppins capitalizev" >No. of Bedrooms</span>
                        <select className="w-full ">
                            <option value="residential cleaning" selected>1</option>
                            <option value="commercial cleaning">2</option>
                        </select>
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="text-gray-800 mb-3 font-semibold font-poppins capitalizev" >No. of Windows</span>
                        <select className="w-full ">
                            <option value="residential cleaning" selected>1</option>
                            <option value="commercial cleaning">2</option>
                        </select>
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="text-gray-800 mb-3 font-semibold font-poppins capitalizev" >No. of Bathrooms</span>
                        <select className="w-full ">
                            <option value="residential cleaning" selected>1</option>
                            <option value="commercial cleaning">2</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookForm