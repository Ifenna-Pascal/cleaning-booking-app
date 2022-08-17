import React from 'react'

function BookQuote() {
    return (
        <div className="w-full bg-primary min-h-[180px] py-12 md:py-0 flex items-center">
            <div className="md:max-w-[1000px] max-w-[300px] w-full mx-auto flex  flex-col md:flex-row  justify-between">
                <h1 className="font-[500] text-[1.3em] md:text-[1.5em] font-poppins leading-[1.8rem] md:leading-[2rem] text-center md:text-left text-white ">There is no need to fill out an endless<br /> estimate form!</h1>
                <div className='flex items-center '>
                    <div className='w-12 h-12 flex items-start justify-start p-2 mr-4 bg-white border-2 rounded-[50%]'>
                        <i className={`ri-phone-fill text-2xl text-primary`}></i>
                    </div>
                    <div className='flex  flex-col'>
                        <span className="text-2xl font-bold  font-outfit text-white font-outfit">+1 123 456 7890</span>
                        <span className="text-lg  text-white font-outfit">Call us for an over-the-phone cost estimate</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BookQuote