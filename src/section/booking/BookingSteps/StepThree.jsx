import RadioButton from '../../../components/shared/Button/RadioButton'

function StepThree({ handleChange, mockData }) {
    return (
        <div className='flex flex-col items-start  h-full'>
            <h1 className='text-2xl text-gray-800 font-poppins font-semibold mb-6 text-center'>Do you have pets?</h1>
            <div className="w-full">
                <RadioButton
                    checked={mockData?.petsPresent?.value === "Yes"}
                    value={"Yes"}
                    onChange={handleChange}
                    name="petsPresent"
                    names={"Yes"}
                />
            </div>

            <div className="w-full">
                <RadioButton
                    checked={mockData?.petsPresent?.value === "No"}
                    value={"No"}
                    onChange={handleChange}
                    names={"No"}
                    name="petsPresent"
                />
            </div>


        </div>
    )
}

export default StepThree