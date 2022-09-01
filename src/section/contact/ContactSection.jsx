import React from 'react'
import Contact from '../../components/Contact'

function ContactSection() {
    return (
        <div className="my-8 lg:max-w-[1250px]  mx-auto">
            <div className='grid gap-8 grid-cols-1 px-4 lg:grid-cols-3'>
                <div className='lg:col-span-2 col-span-1 min-h-[600px] h-full  lg:min-h-[500px] p-6 lg:p-12 relative gap-8 w-full border border-gray-300 rounded-[10px]'>
                </div>

                <div className="cols-span-1 py-12  lg:block ">
                    <div className="cols-span-1 hidden  lg:block ">
                        <div className='w-full p-4 px-8 border-2 my-4 border-gray-300 rounded-[7px]'>
                            <Contact icon="ri-phone-line" header="Hotline" content="+11234567890" />
                        </div>
                        <div className='w-full p-4 px-8 border-2 my-4 border-gray-300 rounded-[7px]'>
                            <Contact icon="ri-map-pin-line" header="Address" content="324 King Avenue, Florida, USA" />
                        </div>
                        <div className='w-full p-4 px-8 border-2 my-4 border-gray-300 rounded-[7px]'>
                            <Contact icon="ri-mail-line" header="Email" content="contact@gmail.com" />
                        </div>
                        <div className='w-full p-4 px-8 border-2 border-gray-300 rounded-[7px]'>
                            <Contact icon="ri-mail-line" header="Email" content="contact@gmail.com" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactSection