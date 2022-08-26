import { useState } from 'react'
import RadioButton from '../../../components/shared/Button/RadioButton'
import { bedRooms } from '../../../util/services'

function StepTwo() {
    const [selected, setSelected] = useState(null);
    const handleChange = (e) => setSelected(e.target.value);
    return (
        <div className='flex flex-col items-start  h-full'>
            <h1 className='text-2xl text-gray-800 font-poppins font-semibold mb-6 text-center'>How Many Bedrooms?</h1>
            {
                bedRooms.map(roomInfo => (
                    <div key={roomInfo.value} className="w-full">
                        <RadioButton
                            checked={selected === roomInfo.value}
                            value={roomInfo.value}
                            onChange={handleChange}
                            name={roomInfo.name}
                        />
                    </div>
                ))
            }

        </div>
    )
}

export default StepTwo