import "./checkbox.css";

function Checkbox({ label, value, ...rest }) {
  return (
    <div className=" relative flex mt-1 mb-1 items-center">
      <input
        className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-5 before:w-5 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
        type="checkbox"
        id={value}
        name={label}
        value={value}
        {...rest}
      />

      <span className="absolute checkbox-position text-white transition-opacity opacity-0 pointer-events-none peer-checked:opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3.5 w-3.5"
          viewBox="0 0 20 20"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      </span>

      <label className="text-base ml-2" htmlFor={label}>
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
