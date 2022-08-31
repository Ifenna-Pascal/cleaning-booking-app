function RadioButton({ names, ...rest }) {
    return (
        <label id="radio_input" className="flex py-4 w-full border font-[400] px-4 border-gray-200 mb-3 rounded-[4px] items-center">
            <input
                id="radio_input"
                type="radio"
                className="mr-3 rounded-[4px] text-secondary  cursor-pointer bg-secondary accent-secondary focus:accent-secondary w-5 h-5"
                {...rest}

            />
            <span className='text-gray-600 font-poppins text-base'>{names}</span>
        </label>
    )
}

export default RadioButton