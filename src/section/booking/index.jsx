import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Button from '../../components/shared/Button';
import ConditionHandler from './ConditionHandler';
import Review from './Review';


function BookingSection() {
    const router = useRouter();
    const [error, setError] = useState(''); 
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

    const [mockData, setMockData] = useState(initialState);

    const handleChange = (e) => {
        console.log(e.target.value)
        setMockData({ ...mockData, [e.target.name]: e.target.value })
    };
    useEffect(() => {
        if (router.query && router.query.index) {
            setStep(1);
        } else {
            setStep(0);
        }
    }, []);

    // moving to next step
    const nextStep = () => {
        let isValid = false;
        switch (step) {
            case 0: 
                isValid = mockData.serviceType?.length > 0;
                break;
            case 1 :
                isValid = mockData.noOfBedRooms?.length > 0;
                break;
            case 2 :  
                isValid = mockData.petsPresent?.length > 0; 
                break;
            case 3:  
                isValid = mockData.entranceMode?.length > 0; 
                break;
            default : 
                return null;
        }
        if (!isValid) {
            setError('This field is required');
        }else{ 
            setError('')
            setStep(step+1)
        }
    }

    // move to previous step
    const previousStep = () => {
        setStep(step - 1)
    }

    return (
        <div className="my-8 lg:max-w-[1250px]  mx-auto">
            <div className='grid gap-8 grid-cols-1 px-4 lg:grid-cols-3'>
                <div className='lg:col-span-2 col-span-1 min-h-[600px] h-full  lg:min-h-[500px] p-6 lg:p-12 relative gap-8 w-full border border-gray-300 rounded-[10px]'>
                    <div className="flex flex-col">
                        <div className='justify-self-start h-full min-h-[550px]'>
                            {
                                ConditionHandler(step, handleChange, mockData)
                            }
                            <p className='text-sm text-red-400 font-poppins'>{error && error}</p>
                        </div>
                        <div className='lg:max-w-[300px] mt-4  flex  justify-self-end'>
                            <div className="hidden mr-3 md:block">{step !== 0 && <Button text="Previous" onClick={previousStep} />}</div>
                            <div className="hidden mr-3 md:block"> {step < 4 && <Button text="Next" onClick={nextStep} />}</div>
                            <div className="lg:hidden mr-3 block">{(step != 0 && step != 5) && <Button text="Previous" onClick={previousStep} />}</div>
                            <div className="lg:hidden mr-3 block"> {step < 5 && <Button text={step === 4 ? "Review" : "Next"} onClick={nextStep} />}</div>
                        </div>
                    </div>
                </div>
                <div className="cols-span-1 hidden lg:block ">
                    <Review data={mockData} step={step} />
                </div>
            </div>
        </div>
    )
}

export default BookingSection;