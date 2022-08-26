function RadioButton({ names, ...rest }) {
    return (
        <div className="flex py-4 w-full border px-4 border-gray-200 mb-3 rounded-[4px] items-center">
            <input
                type="radio"
                className="mr-3 rounded-[4px] text-secondary  cursor-pointer bg-secondary accent-secondary focus:accent-secondary w-5 h-5"
                {...rest}
            />
            <span className='text-gray-600 font-poppins text-lg'>{names}</span>
        </div>
    )
}

export default RadioButton