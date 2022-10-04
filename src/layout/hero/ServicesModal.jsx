import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { services } from '../../util/services';

const DropdownModal = ({showDropdown}) => {
    const router = useRouter();
    return (
        <div className={`${showDropdown ? "block" : "hidden"} rounded-lg  w-[300px]   flex absolute top-0 pt-12 flex-col`}>
            <div className={`bg-white  shadow-lg p-4 w-full flex flex-col duration-300`}>
            {services.map((item) => (
                <Link
                    key={item.id}
                    href={item.link}
                >
                    <span  className={`flex items-center py-2 font-[500] transition duration-150 ease-in-out   ${router.pathname === item.link ? "text-secondary" : "text-text_secondary"}   text-base hover:text-secondary cursor-pointer `}>{item.name}</span>
                </Link>
            ))}
            </div>
        </div>
    )
}

function ServiceDropDown() {
    const [showDropdown, setShowDropdown] = useState(false);
    return (
        <div className='relative cursor-pointer' onMouseEnter={()=> setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
          <div className='flex navItem cursor-pointer justify-start'>
          <span className='lg:text-text_secondary hover:text-secondary cursor-pointer text-gray-300'>Services</span>
          <i className={`ri-arrow-${showDropdown ? "down" : "right"}-s-line duration-300 lg:text-text_secondary ml-[0.2rem] text-gray-300`}></i>
          </div>

        <DropdownModal showDropdown={showDropdown} />
        </div>
    )
}

export default ServiceDropDown