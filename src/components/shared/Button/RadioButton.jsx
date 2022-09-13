
function RadioButton({ names, name, ...rest }) {
    return (
        <label id="radio_input" className="flex py-4 w-full border bg-white font-[400] cursor-pointer px-4 border-gray-200 mb-3 rounded-[4px] items-center">
            <input
                id="radio_input"
                type="radio"
                name={name}
                className="mr-3 rounded-[4px] text-secondary dark:text-white dark:bg-white cursor-pointer bg-secondary accent-secondary focus:accent-secondary w-5 h-5"
                {...rest}
            />
            <span className='text-gray-600 font-poppins text-base'>{names}</span>
        </label>
    )
}

export default RadioButton