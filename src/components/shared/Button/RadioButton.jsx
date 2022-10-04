import { formatter } from '../../../util/capitalize';

function RadioButton({ names, price, name, ...rest }) {
  return (
    <label
      id="radio_input"
      className="flex py-4 justify-between w-full border bg-white font-[400] cursor-pointer px-4 border-gray-200 mb-3 rounded-[4px] items-center"
    >
      <div className="flex items-center">
        <input
          id="radio_input"
          type="radio"
          name={name}
          className="mr-3 rounded-[4px] text-secondary capitalize dark:text-white dark:bg-white cursor-pointer bg-secondary accent-secondary focus:accent-secondary w-5 h-5"
          {...rest}
        />
        <span className="text-gray-600 font-poppins capitalize text-base">
          {names}
        </span>
      </div>
      {price && <p>{formatter.format(price)}</p>}
    </label>
  );
}

export default RadioButton;
