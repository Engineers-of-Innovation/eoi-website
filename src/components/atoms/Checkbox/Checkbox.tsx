import { InputProps } from "../Input/Input";

const Checkbox = ({ label, name, className, ...props }: InputProps) => {
  return (
    <label
      htmlFor={name}
      className="text-heading-base relative cursor-pointer font-heading font-title font-semibold flex items-center"
    >
      <input
        defaultChecked
        type="checkbox"
        name={name}
        className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-md text-ehbo-orange-500 bg-off-white-500"
        id={name}
        {...props}
      />
      <span className="absolute text-ehbo-orange-500 opacity-0 peer-checked:opacity-100 top-1/2 left-2.5 transform -translate-x-1/2 -translate-y-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3.5 w-3.5"
          viewBox="0 0 20 20"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="1"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </span>

      <span className="pl-4">{label}</span>
    </label>
  );
};

export default Checkbox;
