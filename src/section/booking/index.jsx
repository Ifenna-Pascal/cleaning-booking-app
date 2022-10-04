import { useRouter } from 'next/router';
import React, { useEffect, useContext, useState } from 'react'
import Button from '../../components/shared/Button';
import { BookingContext } from '../../context/BookingProvider';
import ConditionHandler from './ConditionHandler';
import Review from './Review';


function BookingSection() {
    const router = useRouter();
    const [error, setError] = useState(''); 
    const [step, setStep] = useState(0);
    const  { mockData, handleChange} = useContext(BookingContext);
    console.log(mockData)
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
        let message;
        switch (step) {
            case 0: 
                isValid = mockData.serviceType?.length > 0;
                isValid ? " " : message = `service type field is required`;
                break;
            case 1 :
                isValid = mockData.info.length > 0;
                isValid ? " " : message = `service specification field is required`;
                break;
            default : 
                return null;
        }
        if (!isValid) {
            setError(message && message);
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
        <div className="my-8 lg:max-w-[1250px] mx-auto">
            <div className='grid gap-8 grid-cols-1 px-4 lg:grid-cols-3'>
                <div className='lg:col-span-2 col-span-1 max-h-fit p-6  relative gap-8 w-full border border-gray-300 rounded-[10px]'>
                    <div className="flex flex-col">
                        <div className='justify-self-start'>
                            { 
                                ConditionHandler(step, handleChange, mockData)
                            }
                            <p className='text-sm text-red-400 font-poppins'>{error && error}</p>
                        </div>
                        <div className='lg:max-w-[300px] mt-4  flex  justify-self-end'>
                            <div className="hidden mr-3 md:block">{step !== 0 && <Button text="Previous" onClick={previousStep} />}</div>
                            <div className="hidden mr-3 md:block"> {step < 2 && <Button text="Next" onClick={nextStep} />}</div>
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