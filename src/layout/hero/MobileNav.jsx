import React from 'react';
import Links from '../../components/Links';
import { services } from '../../util/services'

const RouterPaths = [
    {
        href: "/",
        text: "Home"
    },
    {
        href: "/about",
        text: "About"
    },
    {
        href: "/contact",
        text: "Contact Us"
    },
    {
        href: "#",
        text: "Services",
        submenu: true,
        sublinks: [...services.map(x => {
            return ({ name: x.name, link: x.link })
        })]
    },
    {
        href: "/bookings",
        text: "Bookings"
    }
]


function MobileNav({ show }) {
    return (
        <div className={` absolute z-10 ${show ? "mt-14" : "-mt-[180%]"} px-4  w-full md:none  duration-300 h-[250px]`}>
            <div className='flex px-4 py-4 rounded-[6px] text-left bg-dark_secondary flex-col '>
                {
                    RouterPaths.map(x => (
                        <Links key={x.href} href={x.href} text={x.text} sublinks={x.submenu ? x.sublinks : null} />
                    ))
                }
                <button className="bg-secondary my-3 border-none flex items-center py-3 px-10 font-outfit cursor-pointer text-white font-semibold rounded-md justify-center">Book Now</button>
            </div>
        </div>
    )
}

export default MobileNav