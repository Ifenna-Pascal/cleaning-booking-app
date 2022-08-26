export default function Button({ text, ...rest }) {
    return (
        <button {...rest} className="bg-secondary   w-full border-none  py-3 px-10 font-poppins cursor-pointer text-white font-semibold rounded-md ">{text}</button>
    )
}