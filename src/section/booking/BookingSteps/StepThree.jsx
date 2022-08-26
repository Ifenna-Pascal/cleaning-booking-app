import { useState } from 'react'
import RadioButton from '../../../components/shared/Button/RadioButton'

function StepThree() {
    const [selected, setSelected] = useState(null);
    const handleChange = (e) => setSelected(e.target.value);
    return (
        <div className='flex flex-col items-start  h-full'>
            <h1 className='text-2xl text-gray-800 font-poppins font-semibold mb-6 text-center'>Do you have pets?</h1>
            <div className="w-full">
                <RadioButton
                    checked={selected === "Yes"}
                    value={"Yes"}
                    onChange={handleChange}
                    name={"Yes"}
                />
            </div>

            <div className="w-full">
                <RadioButton
                    checked={selected === "No"}
                    value={"No"}
                    onChange={handleChange}
                    name={"No"}
                />
            </div>


        </div>
    )
}

export default StepThree