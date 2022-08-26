import React from 'react'
import capitalize from '../../util/capitalize'

function Review({ data: { firstName, lastName, email, phoneNumber, address, city, state, zip, apt, date, serviceType, noOfBedRooms, petsPresent, entranceMode }, step }) {
    return (
        <div className="border border-gray-300 p-6 rounded-[10px] min-h-[400px]">
            <h2 className='text-lg text-gray-800 font-poppins font-semibold  text-left'>{serviceType ? `${capitalize(serviceType)} Cleaning Service` : ""}</h2>
            <div className="py-3 flex flex-col space-y-4">
                <span className="text-base font-poppins text-gray-500 ">{noOfBedRooms ? `${noOfBedRooms} Bed Rooms` : ""}</span>
                <span className="text-base font-poppins text-gray-500 ">{petsPresent ? `Pets Present` : ""} </span>
                <span className="text-base font-poppins text-gray-500 ">{entranceMode ? `${entranceMode} Entrance ` : ""} </span>
                {
                    step === 4 && (
                        <div className="py-3 flex flex-col space-y-4">
                            <h2 className='text-lg text-gray-800 font-poppins font-semibold  text-left'>Personal Info</h2>
                            <span className="text-base font-poppins text-gray-500 py-2">{firstName ? `Full Name: ${capitalize(firstName)} ${lastName && capitalize(lastName)} ` : ""} </span>
                            <span className="text-base font-poppins text-gray-500 py-2">{phoneNumber ? `Phone Number: ${phoneNumber}` : ""} </span>
                            <span className="text-base font-poppins text-gray-500 py-2">{phoneNumber ? `Phone Number: ${phoneNumber}` : ""} </span>
                            <span className="text-base font-poppins text-gray-500 py-2">{phoneNumber ? `Phone Number: ${phoneNumber}` : ""} </span>
                            <span className="text-base font-poppins text-gray-500 py-2">{phoneNumber ? `Phone Number: ${phoneNumber}` : ""} </span>
                            <span className="text-base font-poppins text-gray-500 py-2">{phoneNumber ? `Phone Number: ${phoneNumber}` : ""} </span>
                            <span className="text-base font-poppins text-gray-500 py-2">{phoneNumber ? `Phone Number: ${phoneNumber}` : ""} </span>
                            <span className="text-base font-poppins text-gray-500 py-2">{phoneNumber ? `Phone Number: ${phoneNumber}` : ""} </span>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Review