import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";

function Links({ href, text, sublinks }) {
    const router = useRouter()
    const [toggleLink, setToggleLink] = useState(false);
    return (
        <div className="navItem flex-col lg:flex-row  items-center">
            {
                sublinks && sublinks.length > 0 ?
                    (
                        <>
                            <div className='flex items-center' onClick={() => setToggleLink(!toggleLink)}>
                                <span className='text-gray-300'>{text}</span>
                                <i className={`ri-arrow-drop-${toggleLink ? "down" : "right"}-line duration-300 text-xl text-gray-300 `}></i>
                            </div>
                            <div className={`block px-3 duration-300 ${toggleLink ? 'pt-4' : ''}`}>
                                {
                                    toggleLink && sublinks.map((x, id) => (

                                        <Link key={id} href={x.link} srcoll><a className={` ${router.pathname === href ? "text-secondary" : "lg:text-text_secondary text-sm text-gray-400  block"} ${toggleLink ? 'py-2' : ''} `} >{x.name}</a></Link>

                                    ))
                                }
                            </div>
                        </>
                    ) : <Link href={href} srcoll><a className={` ${(router.pathname === href) ? "text-secondary" : "lg:text-text_secondary text-gray-300"} `} >{text}</a></Link>
            }
        </div>
    )
}

export default Links