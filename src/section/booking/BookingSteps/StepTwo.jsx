import RadioButton from '../../../components/shared/Button/RadioButton'
import { bedRooms } from '../../../util/services'

function StepTwo({ mockData, handleChange}) {
    const updateState = (e) => {
        handleChange(e);
    }
    return (
        <div className='flex flex-col items-start  h-full'>
            <h1 className='text-2xl text-gray-800 font-poppins font-semibold mb-6 text-center'>How Many Bedrooms?</h1>
            {
                bedRooms.map(roomInfo => {
                    console.log(mockData?.noOfBedRooms === roomInfo.value)
                    return (
                        <div key={roomInfo.value} className="w-full">
                            <RadioButton
                                checked={mockData?.noOfBedRooms === roomInfo.value}
                                value={roomInfo.value}
                                onChange={updateState}
                                name='noOfBedRooms'
                                names={roomInfo.name}
                            />
                        </div>
                    )
                })
            }

        </div>
    )
}

export default StepTwo