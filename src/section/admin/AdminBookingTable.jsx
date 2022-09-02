import React, { useEffect, useState } from 'react'
import { HeaderTabs } from '../../layout/adminHero/Header'
import { orders } from '../../util/orderTable'


function BookingTable() {
    const [status, setStatus] = useState('all');
    const [sortedOrders, setSortedOrders] = useState([]);
    const filterOrders = (allOrders, type) => {
        if (type !== "all") {
            return setSortedOrders([...allOrders.filter(order => order.status === type)]);
        }
        return setSortedOrders([...allOrders]);
    }
    useEffect(() => {
        filterOrders(orders, status);
    }, [status])
    return (
        <div className="lg:max-w-[1300px] mx-auto ">
            <div className="flex py-6 items-center">
                <HeaderTabs text="All Orders" status={status} type="all" onClick={() => setStatus('all')} />
                <HeaderTabs text="Confirmed " status={status} type="confirmed" onClick={() => setStatus('confirmed')} />
                <HeaderTabs text="Processing" status={status} type="processing" onClick={() => setStatus('processing')} />
                <HeaderTabs text="Completed" status={status} type="completed" onClick={() => setStatus('completed')} />
            </div>
            <div className='w-full   border-gray-300  overflow-x-auto'>
                <table className='w-full border-collapse border border-slate-500  whitespace-nowrap tableOffer'>
                    <thead className='w-full font-[600] text-gray-500 '>
                        <tr className='w-full'>
                            <td className='py-3'>Service Type</td>
                            <td className='py-3'>Name</td>
                            <td className='py-3'>Email</td>
                            <td className='py-3'>Address</td>
                            <td className='py-3'>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedOrders &&
                            sortedOrders.map((order) => (
                                <tr key={order.id}>
                                    <td>
                                        <span className='text-gray-500 font-poppins   text-[14px] leading-[16px]  tracking-[0.4px]'>{order.serviceType}</span>
                                    </td>
                                    <td>
                                        <span className='text-gray-500 font-poppins   text-[14px] leading-[16px]  tracking-[0.4px]'>{order.name}</span>
                                    </td>
                                    <td>
                                        <span className='text-gray-500 font-poppins   text-[14px] leading-[16px]  tracking-[0.4px]'>{order.email}</span>
                                    </td>
                                    <td>
                                        <span className='text-gray-500 font-poppins   text-[14px] leading-[16px]  tracking-[0.4px]'>{order.address}</span>
                                    </td>
                                    <td>
                                        <span className='text-gray-500 font-poppins   text-[14px] leading-[16px]   tracking-[0.4px]'>{order.status}</span>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BookingTable