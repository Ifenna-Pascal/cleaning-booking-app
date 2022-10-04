import React, {useState} from 'react'
import { addDocument } from '../../db/dbMethods'
import {capitalize, formatter} from '../../util/capitalize'
import { send } from 'emailjs-com';
import { toast } from 'react-toastify';
import { PaystackButton } from 'react-paystack';
import { useRouter } from 'next/router';

function Review({ data: { firstName, lastName, email, phoneNumber, info, address, city, state, zip,  date, serviceType}}) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const insertDocument = () => {
       try {
        setLoading(true);
        const data = { name: firstName + lastName, email, address, serviceType }
        addDocument(data).then(res => {
            send(
                'service_78i03qh',
                'template_mcbw1ye',
                data,
                'user_lkbG2582yvwX2KUsaPw0U'
            ).then(res => {
                console.log(res);
                toast.success('Booked successfully')
                setLoading(false);
                router.push('/');
            }).catch(err => {
                console.log(err);
                toast.error(err.message);
            })
        })
       } catch (error) {
            setLoading(false)
       }    
    }
        
    const publicKey = "pk_test_47f02b76890e4364197b819a98e00f38fa0b95d5";
    const amount = Number(info.split("-")[1]) * 100;
    const fullName = firstName + lastName
    const componentProps = {
        email,
        amount,
        metadata: {
          fullName,
          phoneNumber,
        },
        publicKey,
        text: "Pay Now",
        onSuccess: () => {
            insertDocument()
        },
        onClose: () =>  toast.error('Transaction cancelled')
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
          {firstName && lastName && email && phoneNumber && address && city && state && serviceType && date && !loading &&  <PaystackButton className='paystack-button' {...componentProps} />}
          {loading && <div className='flex w-full items-center justify-center'><div className='flex  animate-spin items-center justify-center bg-primary h-6 w-6'></div></div>}
        </div>
    )
}

export default Review