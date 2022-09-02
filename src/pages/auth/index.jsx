import React from 'react'
import Button from '../../components/shared/Button'
import Hero from '../../layout/hero/Hero'
import AdminLogin from '../../section/admin/AdminLogin'

function AdminAuth() {
    // bg-[#e2e7f6]
    return (
        <div>
            <Hero bg="bg-bookingHero">
                {/* <div className='flex items-center lg:h-[35vh] h-[50vh]  justify-center flex-col'>
                   
                </div> */}
            </Hero>
            <AdminLogin />
        </div>
    )
}

export default AdminAuth