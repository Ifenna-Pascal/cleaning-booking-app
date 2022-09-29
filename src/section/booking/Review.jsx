import React, {useEffect, useState} from 'react'
import Button from '../../components/shared/Button'
import { addDocument } from '../../db/dbMethods'
import {capitalize, formatter} from '../../util/capitalize'
import { send } from 'emailjs-com';
import { toast } from 'react-toastify';
import Pricing from '../../util/pricing';

function Review({ data: { firstName, lastName, email, phoneNumber, info, address, city, state, zip,  date, serviceType}, step }) {
    // const [serviceInfo, setServiceInfo] = useState()
    // useEffect(()=> {
    //    const result =  Pricing.find(x => x.name === serviceType);
    //    setServiceInfo(result)
    // }, [serviceType])
    console.log(info, "ifooo")
    const [loading, setLoading] = useState(false);
    const insertDcoument = () => {
       try {
        setLoading(true);
        const data = { name: firstName + lastName, email, address, serviceType }
        addDocument(data).then(res => {
            console.log(res, "datax");
            // console.log(process.env.NEXT_PULIC_USER_ID, "userId");
            send(
                'service_78i03qh',
                'template_mcbw1ye',
                data,
                'user_lkbG2582yvwX2KUsaPw0U'
            ).then(res => {
                console.log(res);
                setLoading(false)
                toast.success('Booked successfully')
            }).catch(err => {
                console.log(err)
            })
        })
       } catch (error) {
            console.log(err.message)
            setLoading(false)
       }    
    }
    return (
        <div className="md:p-6 rounded-[10px] ">
            <h2 className="text-left mb-2 font-poppins text-gray-800 font-semibold text-base">Booking Summary </h2>
            <h2 className='text-base text-gray-500 font-poppins  text-left'><span className="font-semibold">Service Type: </span>{capitalize(serviceType)}</h2>
            <h2 className='text-base text-gray-500 font-poppins py-2 text-left'><span className="font-semibold">Specification: </span>{capitalize(info.split('-')[0])}</h2>
            <h2 className='text-base text-gray-500 font-poppins  text-left'><span className="font-semibold">Price: </span>{info && formatter.format(Number(info.split('-')[1]))}</h2>
            <div className="py-3 flex flex-col space-y-2">
                <div className="py-3 flex flex-col space-y-2">
                    <h2 className='text-base text-gray-800 font-poppins font-semibold text-left'>Personal Info</h2>
                    <span className="text-base font-poppins text-gray-500 "><span className="font-semibold">Fullname: </span>{capitalize(firstName)} {capitalize(lastName)} </span>
                    <span className="text-base font-poppins text-gray-500 "> <span className="font-semibold">Phone Number: </span>{phoneNumber} </span>
                    <span className="text-base font-poppins text-gray-500 "><span className="font-semibold">Email: </span>{email} </span>
                    <span className="text-base font-poppins text-gray-500 "><span className="font-semibold">Address: </span>{address} </span>
                    <span className="text-base font-poppins text-gray-500 "><span className="font-semibold">State: </span>{state} </span>
                    <span className="text-base font-poppins text-gray-500 "><span className="font-semibold">Zip:</span>{zip} </span>
                    <span className="text-base font-poppins text-gray-500 "><span className="font-semibold">Date:</span>{date}</span>
                    <h2 className='text-base text-gray-800 font-poppins mt-2 font-semibold text-left'>Total: <span className='text-gray-500'>{info && formatter.format(Number(info.split('-')[1]))}</span></h2>
                </div>
            </div>
          {firstName && lastName && email && phoneNumber && address && city && state && serviceType &&  date && <Button text={loading ? 'Paying...' : 'Pay Now'} onClick={insertDcoument} />}
        </div>
    )
}

export default Review