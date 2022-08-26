import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Button from '../../components/shared/Button';
import ConditionHandler from './ConditionHandler';


function BookingSection() {
    const router = useRouter();
    const [step, setStep] = useState(0);
    const initialState = {
        serviceType: 'residential',
        noOfBedRooms: '',
        petsPresent: '',
        entranceMode: '',
        contactInfo: {}
    };
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
            <div className='grid grid-cols-3'>
                <div className='col-span-2 min-h-[500px] p-12 relative  w-full border border-gray-300 rounded-[20px]'>
                    {
                        ConditionHandler(step, handleChange, mockData)
                    }
                    <div className='max-w-[500px] gap-x-6 absolute bottom-4 w-full grid grid-cols-2'>
                        {step > 0 && <Button text="Previous" onClick={previousStep} />}
                        {step < 4 && <Button text="Next" onClick={nextStep} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingSection;