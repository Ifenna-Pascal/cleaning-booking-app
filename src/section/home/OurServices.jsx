import React from 'react'
import ServiceCard from '../../components/ServiceCard'
import Images from '../../util/images'

function OurServices() {
    return (
        <div className="bg-[#e2e7f6]">
            <div className='max-w-[1200px] min-h-[600px] flex flex-col w-full h-full items-start py-12  relative mx-auto'>
                <div className='w-full flex flex-col md:flex-row justify-between items-center'>
                    <div>
                        <h1 className='block font-poppins text-center md:text-left text-text_primary text-[1.8em] lg:text-[3em]  font-[600] '>Our Services</h1>
                        <p className='block font-poppins text-text_secondary text-center md:text-left px-4 md:px-0  leading-[2rem] text-xl tracking-wide'>You can rely on us make anywhere neat, clean and tidy</p>
                    </div>
                    <button className="bg-primary  border-none flex items-center mt-12 md:mt-0 py-3 px-20 md:px-12 font-poppins uppercase cursor-pointer text-white font-semibold rounded-md justify-center">View All Services</button>
                </div>
                <div className='my-4 grid mx-6 md:mx-0 lg:grid-cols-4 py-4 md:py-8 gap-8 md:gap-4 md:grid-cols-2 grid-cols-1'>
                    <ServiceCard image={Images.imageSeven} icon="ri-home-4-fill" header="Residential Cleaning" content="Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor." />
                    <ServiceCard image={Images.imageEleven} icon="ri-building-4-fill" header="Commercial Cleaning" content="Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor." />
                    <ServiceCard image={Images.imageTen} icon="ri-home-4-fill" header="Construction Cleaning" content="Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor." />
                    <ServiceCard image={Images.imageSeven} icon="ri-home-4-fill" header="Landscape Cleaning" content="Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor." />
                </div>
            </div>
        </div>
    )
}

export default OurServices