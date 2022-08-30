import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";

function Links({ href, text, sublinks }) {
    const router = useRouter()
    const [toggleLink, setToggleLink] = useState(false);
    console.log(router.pathname === href);
    console.log(router.pathname, href)
    return (
        <div className="navItem flex-col lg:flex-row  items-center">
            <div className='flex items-center'>
                <Link href={href} srcoll><a className={` ${(router.pathname === href) && (router.pathname.includes("/services")) ? "text-secondary" : "lg:text-text_secondary text-gray-300"} `} >{text}</a></Link>
                {
                    sublinks && sublinks.length > 0 ? <i className={`ri-arrow-drop-${toggleLink ? "down" : "right"}-line duration-300 text-xl text-gray-300 `} onClick={() => setToggleLink(!toggleLink)}></i> : null
                }
            </div>
            <div className={`block px-3 duration-300 ${toggleLink ? 'pt-4' : ''}`}>
                {
                    toggleLink && sublinks.map((x, id) => (

                        <Link key={id} href={x.link} srcoll><a className={` ${router.pathname === href ? "text-secondary" : "lg:text-text_secondary text-sm text-gray-400  block"} ${toggleLink ? 'py-2' : ''} `} >{x.name}</a></Link>

                    ))
                }
            </div>
        </div>
    )
}

export default Links