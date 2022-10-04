export default function Button({ text, background = 'bg-secondary', ...rest }) {
  return (
    <button
      {...rest}
      className={`${background} hover:translate-y-[4px] duration-300  w-full border-none hover:opacity-90  py-3 px-10 font-poppins cursor-pointer text-white font-semibold rounded-md `}
    >
      {text}
    </button>
  );
}
