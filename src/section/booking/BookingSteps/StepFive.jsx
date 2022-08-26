import React, { useState } from 'react'
import InputField from '../../../components/shared/InputField'

function StepFive() {
    const initalState = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        apt: "",
        date: "",
    }
    const [formData, setFormData] = useState(initalState);
    const handleChange = (e) => {
        setFormData(
            {
                ...formData,
                [e.target.name]: e.target.value
            }
        )
    }
    return (
        <div className='flex flex-col items-start w-full h-full'>
            <div className='w-full'>
                <h1 className='text-2xl text-gray-800 font-poppins font-semibold mb-3 text-left'>Contact Info</h1>
                <div className='grid grid-cols-2 mb-4 w-full gap-4'>
                    <InputField
                        placeholder="First Name"
                        onChange={handleChange}
                        name="firstName"
                        value={formData.firstname}
                    />
                    <InputField
                        placeholder="Last Name"
                        onChange={handleChange}
                        name="lastName"
                        value={formData.lastname}
                    />
                    <div className='col-span-2'>
                        <InputField
                            placeholder="Phone Number"
                            onChange={handleChange}
                            name="phoneNumber"
                            value={formData.phoneNumber}
                        />
                    </div>
                    <div className='col-span-2'>
                        <InputField
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            value={formData.email}
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
                        name="address"
                        value={formData.address}
                    />
                    <InputField
                        placeholder="#Apt"
                        name="apt"
                        onChange={handleChange}
                        value={formData.apt}
                    />
                </div>
                <div className='gap-4 grid grid-cols-3'>
                    <InputField
                        placeholder="State"
                        name="state"
                        onChange={handleChange}
                        value={formData.state}
                    />
                    <InputField
                        type="text"
                        placeholder="city"
                        name="city"
                        onChange={handleChange}
                        value={formData.city}
                    />
                    <InputField
                        type="email"
                        placeholder="Zip"
                        name="zip"
                        onChange={handleChange}
                        value={formData.zip}
                    />
                </div>
            </div>
            <div className='w-full my-3'>
                <h1 className='text-2xl text-gray-800 font-poppins font-semibold mb-3 text-left'>Select Service Date</h1>
                <div className='grid grid-cols-1 '>
                    <InputField
                        placeholder="Select Date"
                        type="date"
                        name="date"
                        onChange={handleChange}
                        value={formData.date}
                    />
                </div>
            </div>
        </div>
    )
}

export default StepFive