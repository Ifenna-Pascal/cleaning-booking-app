import React from 'react'
import ServiceCard from '../../components/ServiceCard'
import Images from '../../util/images'

function OurServices() {
    return (
        <div className="bg-[#e2e7f6]">
            <div className='max-w-[1200px] min-h-[600px] flex flex-col w-full h-full items-start py-24  relative mx-auto'>
                <div className='w-full flex justify-between items-center'>
                    <div>
                        <h1 className='block font-poppins text-text_primary text-[3em]  font-[600] '>Our Services</h1>
                        <p className='block font-poppins text-text_secondary leading-[2rem] text-xl tracking-wide'>You can rely on us make anywhere neat, clean and tidy</p>
                    </div>
                    <button className="bg-primary  border-none flex items-center py-3 px-12 font-poppins uppercase cursor-pointer text-white font-semibold rounded-md justify-center">View All Services</button>
                </div>
                <div className='my-4 grid lg:grid-cols-4 py-8 gap-4 md:grid-cols-2 grid-cols-1'>
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