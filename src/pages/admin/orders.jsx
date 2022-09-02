import React from 'react'
import Header from '../../layout/adminHero/Header'
import BookingTable from '../../section/admin/AdminBookingTable'

function AdminPage() {
    return (
        <div className='min-h-[70vh] h-full'>
            <Header />
            <div className="w-full  py-12 h-full flex-col ">
                <BookingTable />
            </div>
        </div>
    )
}

export default AdminPage