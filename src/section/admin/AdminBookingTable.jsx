/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Loader from '../../components/shared/Loader';
import Modal from '../../components/shared/modal';
import StatusUpdate from '../../components/shared/modal/StatusUpdate';
import { getCollectionData } from '../../db/dbMethods';
import { HeaderTabs } from '../../layout/adminHero/Header'
// import { orders } from '../../util/orderTable'


function BookingTable() {
    const [status, setStatus] = useState('all');
    const [sortedOrders, setSortedOrders] = useState([]);
    const [loading, setloading] = useState(false);
    const [updateStatus, setUpdateStatus] = useState(false); 

    useEffect(() => {
        setloading(true)
        getCollectionData(status).then(data => {
            setSortedOrders(data)
            setloading(false)
        }).catch(err => {
            console.log(err.message)
        })
    }, [status])
    return (
        <div className="lg:max-w-[1300px] mx-auto ">
            <div className="flex py-6 items-center">
                <HeaderTabs text="All Orders" status={status} type="all" onClick={() => setStatus('all')} />
                <HeaderTabs text="Confirmed " status={status} type="confirmed" onClick={() => setStatus('pending')} />
                <HeaderTabs text="Processing" status={status} type="processing" onClick={() => setStatus('processing')} />
                <HeaderTabs text="Completed" status={status} type="completed" onClick={() => setStatus('completed')} />
            </div>
            <div className='w-full   border-gray-300  overflow-x-auto'>
                <table className='w-full border-collapse  border border-slate-500  whitespace-wrap tableOffer'>
                    <thead className='w-full font-[600] text-gray-500 '>
                        <tr className='w-full'>
                            <td className='py-3'>Service Type</td>
                            <td className='py-3'>Name</td>
                            <td className='py-3'>Email</td>
                            <td className='py-3'>Address</td>
                            <td className='py-3'>Status</td>
                            <td className='py-3'>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {loading && <Loader />}
                        {
                            sortedOrders &&
                            sortedOrders.map((order) => {
                                console.log(order);
                                return (
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
                                        <td>
                                            <button className='border-none bg-secondary px-3 py-2 rounded-md text-white font-poppins' onClick={() => setUpdateStatus(true)}>Update Status</button>
                                        </td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
                <Modal isOpen={updateStatus} closeModal={() => setUpdateStatus(false)}>
                    <StatusUpdate />
                </Modal>
            </div>
        </div>
    )
}

export default BookingTable