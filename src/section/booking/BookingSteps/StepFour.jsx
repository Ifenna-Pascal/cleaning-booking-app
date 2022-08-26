import { useState } from 'react'
import RadioButton from '../../../components/shared/Button/RadioButton'

function StepFour() {
    const [selected, setSelected] = useState(null);
    const handleChange = (e) => setSelected(e.target.value);
    return (
        <div className='flex flex-col items-start  h-full'>
            <h1 className='text-2xl text-gray-800 font-poppins font-semibold mb-6 text-center'>How Do We Come In?</h1>
            <div className="w-full">
                <RadioButton
                    checked={selected === "mainDoor"}
                    value={"mainDoor"}
                    onChange={handleChange}
                    name={"Main Door"}
                />
            </div>

            <div className="w-full">
                <RadioButton
                    checked={selected === "lock"}
                    value={"lock"}
                    onChange={handleChange}
                    name={"Remote Lock"}
                />
            </div>

            <div className="w-full">
                <RadioButton
                    checked={selected === "present"}
                    value={"present"}
                    onChange={handleChange}
                    name={"I will be home"}
                />
            </div>

            <div className="w-full">
                <RadioButton
                    checked={selected === "entryCode"}
                    value={"entryCode"}
                    onChange={handleChange}
                    name={"Entry Code"}
                />
            </div>

        </div>
    )
}

export default StepFour