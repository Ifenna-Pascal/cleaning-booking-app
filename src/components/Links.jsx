import React from 'react'
import Link from 'next/link'
import {useRouter } from "next/router";

function Links({ href, text }) {
    const router = useRouter()
    return (
        <Link href={href} srcoll><a className={` ${router.pathname === href ? "text-secondary" : "text-text_secondary" } navItem`} >{text}</a></Link>
    )
}

export default Links