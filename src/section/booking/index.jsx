import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Button from '../../components/shared/Button';
import { bedRooms } from '../../util/services';
import ConditionHandler from './ConditionHandler';
import Review from './Review';


function BookingSection() {
    const router = useRouter();
    const [step, setStep] = useState(0);
    const initialState = {
        serviceType: '',
        bedRooms: {
            price: 30,
            noOfBedRooms: '',
            total: 0
        },
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
    };

    const changeRooms = (e) => {
        console.log("changing", e.target.name, e.target.value)
        setMockData({ bedRooms: { [e.target.name]: e.target.value, ...bedRooms }, ...mockData })
        console.log(mockData, 'datttaaa')
    };

    const updatePrice = (e) => {
        setMockData({ bedRooms: { total: 30 * parseInt(e.target.value), ...bedRooms }, ...mockData })
    }
    useEffect(() => {
        if (router.query && router.query.index) {
            setStep(1);
        } else {
            setStep(0);
        }
    }, []);

    console.log(mockData);
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
                <div className='lg:col-span-2 col-span-1 min-h-[600px] h-full  lg:min-h-[500px] p-6 lg:p-12 relative gap-8 w-full border border-gray-300 rounded-[10px]'>
                    <form onSubmit={handleSubmit} className="flex flex-col">
                        <div className='justify-self-start h-full min-h-[550px]'>
                            {
                                ConditionHandler(step, handleChange, mockData, updatePrice, changeRooms)
                            }
                        </div>


                        <div className='lg:max-w-[300px]  gap-x-4 mt-4  flex  justify-self-end'>
                            <div className="hidden md:block">{step > 0 && <Button text="Previous" onClick={previousStep} />}</div>
                            <div className="hidden md:block"> {step < 4 && <Button text="Next" onClick={nextStep} />}</div>
                            <div className="lg:hidden block">{(step != 0 && step != 5) && <Button text="Previous" onClick={previousStep} />}</div>
                            <div className="lg:hidden block"> {step < 5 && <Button text={step === 4 ? "Review" : "Next"} onClick={nextStep} />}</div>
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