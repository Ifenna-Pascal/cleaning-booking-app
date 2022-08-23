import React from 'react'
import { services } from '../../util/services'
import { useRouter } from "next/router";

function ServiceRightLayout() {
    const { query: { id } } = useRouter()
    // console.log(router.query.id)
    return (
        <div className='flex flex-col w-full   items-end  gap-y-6'>
            <div className="bg-[#F6F7FD] rounded-[6px] border gap-y-2  border-gray-400 py-8 px-4 flex flex-col">
                <h2 className="w-full text-center text-2xl text-gray-800 font-[600] mb-3 ">Our Services</h2>
                {services && services.map((item) => (
                    <a
                        key={item.id}
                        href={item.link}
                        className={`flex items-center py-3 px-6  transition ${item.link.split("/")[2] === id && "service"}  hover:text-white duration-150 ease-in-out rounded-lg  text-gray-700 font-[600]  text-lg hover:bg-primary`}
                    >
                        {item.name}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default ServiceRightLayout