import React from 'react'
import Button from '../../components/shared/Button'
import Hero from '../../layout/hero/Hero'
import AdminLogin from '../../section/admin/AdminLogin'

function AdminAuth() {
    // bg-[#e2e7f6]
    return (
        <div>
            <Hero bg="bg-bookingHero">
            </Hero>
            <AdminLogin />
        </div>
    )
}

export default AdminAuth