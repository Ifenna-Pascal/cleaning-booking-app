export default function Button({ text, ...rest }) {
    return (
        <button {...rest} className="bg-secondary hover:bg-green-700 duaration-500  w-full border-none  py-3 px-10 font-poppins cursor-pointer text-white font-semibold rounded-md ">{text}</button>
    )
}