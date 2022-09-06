import React, { useState } from 'react'
import Button from '../../../components/shared/Button';
import InputField from '../../../components/shared/InputField'

function StepFive({ handleChange, mockData }) {
    const { firstName, lastName, email, phoneNumber, address, city, state, zip, apt, date } = mockData;
    return (
        <form className='flex flex-col items-start w-full h-full'>
            <div className='w-full'>
                <h1 className='text-2xl text-gray-800 font-poppins font-semibold mb-3 text-left'>Contact Info</h1>
                <div className='grid grid-cols-2 mb-4 w-full gap-4'>
                    <InputField
                        placeholder="First Name"
                        onChange={handleChange}
                        value={firstName}
                        name="firstName"
                        required
                    />
                    <InputField
                        placeholder="Last Name"
                        onChange={handleChange}
                        value={lastName}
                        name="lastName"
                        required
                    />
                    <div className='col-span-2'>
                        <InputField
                            placeholder="Phone Number"
                            onChange={handleChange}
                            value={phoneNumber}
                            name="phoneNumber"
                            required
                        />
                    </div>
                    <div className='col-span-2'>
                        <InputField
                            type="email"
                            placeholder="Email"
                            onChange={handleChange}
                            value={email}
                            name="email"
                            required
                        />
                    </div>
                </div>
            </div>
            <div className='w-full my-3'>
                <h1 className='text-2xl text-gray-800 font-poppins font-semibold mb-3 text-left'>Property Info</h1>
                <div className='grid grid-cols-2 mb-4 w-full gap-4'>
                    <InputField
                        placeholder="Address"
                        onChange={handleChange}
                        value={address}
                        name="address"
                        required
                    />
                    <InputField
                        placeholder="#Apt"
                        onChange={handleChange}
                        value={apt}
                        name="apt"
                        required
                    />
                </div>
                <div className='gap-4 grid lg:grid-cols-3'>
                    <InputField
                        placeholder="State"
                        onChange={handleChange}
                        value={state}
                        name='state'
                        required
                    />
                    <InputField
                        placeholder="City"
                        onChange={handleChange}
                        value={city}
                        name='city'
                        required
                    />
                    <InputField
                        placeholder="Zip"
                        onChange={handleChange}
                        name="zip"
                        value={zip}
                        required
                    />
                </div>
            </div>
            <div className='w-full my-3 pb-24 lg:pb-4'>
                <h1 className='text-2xl text-gray-800 font-poppins font-semibold mb-3 text-left'>Select Service Date</h1>
                <div className='grid grid-cols-1 '>
                    <InputField
                        placeholder="Select Date"
                        type="date"
                        name="date"
                        onChange={handleChange}
                        value={date}
                        required
                    />
                </div>
            </div>
            {/* <div className="w-[30%] mt-6"> <Button text="Checkout" /></div> */}
        </form>
    )
}

export default StepFive