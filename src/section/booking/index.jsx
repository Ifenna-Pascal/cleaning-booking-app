import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Button from '../../components/shared/Button';
import ConditionHandler from './ConditionHandler';
import Review from './Review';


function BookingSection() {
    const router = useRouter();
    const [step, setStep] = useState(0);
    const initialState = {
        serviceType: '',
        noOfBedRooms: '',
        petsPresent: '',
        entranceMode: '',
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        apt: '',
        state: '',
        city: '',
        zip: '',
        date: ''

    };

    // Handle Submit Handler
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const [mockData, setMockData] = useState(initialState);

    const handleChange = (e) => {
        setMockData({ ...mockData, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        if (router.query && router.query.index) {
            setStep(1);
        } else {
            setStep(0);
        }
    }, []);
    // moving to next step
    const nextStep = () => {
        setStep(step + 1)
    }

    // move to previous step
    const previousStep = () => {
        setStep(step - 1)
    }

    return (
        <div className="my-8 lg:max-w-[1250px]  mx-auto">
            <div className='grid gap-8 grid-cols-1 px-4 lg:grid-cols-3'>
                <div className='lg:col-span-2 col-span-1 min-h-[600px] lg:min-h-[500px] p-6 lg:p-12 relative gap-8 w-full border border-gray-300 rounded-[10px]'>
                    <form onSubmit={handleSubmit}>
                        {
                            ConditionHandler(step, handleChange, mockData)
                        }

                        <div className='lg:max-w-[500px] w-[60%] gap-y-4 pt-8 lg:gap-y-0 lg:gap-x-6 pr-4 absolute bottom-4 lg:bottom-4 lg:w-full grid lg:grid-cols-2'>
                            {step > 0 && <Button text="Previous" onClick={previousStep} />}
                            {step < 4 && <Button text="Next" onClick={nextStep} />}
                        </div>
                    </form>
                </div>
                <div className="cols-span-1 hidden lg:block ">
                    <Review data={mockData} step={step} />
                </div>
            </div>
        </div>
    )
}

export default BookingSection;