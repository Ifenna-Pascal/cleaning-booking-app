import React from 'react'
import Button from '../../components/shared/Button'
import { addDocument } from '../../db/dbMethods'
import capitalize from '../../util/capitalize'

function Review({ data: { firstName, lastName, email, phoneNumber, address, city, state, zip, apt, date, name, serviceType, noOfBedRooms, petsPresent, entranceMode, total }, step }) {
    const insertDcoument = () => {
        const data = { name: firstName + lastName, email, address, serviceType }
        addDocument(data).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err.message);
        });
    }
    return (
        <div className="md:p-6 rounded-[10px] ">
            <h2 className="text-left mb-2 font-poppins text-gray-800 font-semibold text-base">Booking Summary </h2>
            <h2 className='text-base text-gray-500 font-poppins  text-left'><span className="font-semibold">Service Type: </span>{serviceType ? `${capitalize(serviceType)} Cleaning` : ""}</h2>
            <div className="py-3 flex flex-col space-y-2">
                <span className="text-base font-poppins text-gray-500 "><span className="font-semibold">Number Of Rooms:</span>{noOfBedRooms ? `${noOfBedRooms} Bed Rooms` : ""}</span>
                <span className="text-base font-poppins text-gray-500 "><span className="font-semibold">Pets Present: </span>{petsPresent ? petsPresent : ""} </span>
                <span className="text-base font-poppins text-gray-500 "><span className="font-semibold">Entrance Mode: </span> {entranceMode ? `${entranceMode}  ` : ""} </span>

                <div className="py-3 flex flex-col space-y-2">
                    <h2 className='text-base text-gray-800 font-poppins font-semibold text-left'>Personal Info</h2>
                    <span className="text-base font-poppins text-gray-500 py-1"><span className="font-semibold">Fullname: </span>{firstName ? `${capitalize(firstName)} ${lastName && capitalize(lastName)} ` : ""} </span>
                    <span className="text-base font-poppins text-gray-500 py-1"> <span className="font-semibold">Phone Number: </span>{phoneNumber ? `${phoneNumber}` : ""} </span>
                    <span className="text-base font-poppins text-gray-500 py-1"><span className="font-semibold">Email: </span>{email ? `${email}` : ""} </span>
                    <span className="text-base font-poppins text-gray-500 py-1"><span className="font-semibold">Address: </span>{address ? `${address}` : ""} </span>
                    <span className="text-base font-poppins text-gray-500 py-1"><span className="font-semibold">State: </span>{state ? `${state}` : ""} </span>
                    <span className="text-base font-poppins text-gray-500 py-1"><span className="font-semibold">Zip:</span>{zip ? `${zip}` : ""} </span>
                    <span className="text-base font-poppins text-gray-500 py-1"><span className="font-semibold">Date:</span>{date ? `${date}` : ""} </span>
                    <span className="text-base font-poppins text-gray-500 py-1 border-t-1 "><span className="font-semibold">Total:</span>{total ? `${total}` : ""} </span>
                </div>
            </div>
          {firstName && lastName && email && phoneNumber && address && city && state && serviceType && noOfBedRooms  && petsPresent &&  date && <Button text="Pay Now" onClick={insertDcoument} />}
        </div>
    )
}

export default Review