import { mergeClassNames } from "@/utils/helpers/mergeClassNames";
import Icon from "../Icon/Icon";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  className?: string;
  isFullWidth?: boolean;
  children: React.ReactNode;
}

const Select = ({
  label,
  name,
  className,
  isFullWidth,
  children,
  ...props
}: SelectProps) => {
  return (
    <label
      htmlFor={name}
      className={mergeClassNames(
        "w-full relative",
        "text-heading-base font-heading font-title font-semibold flex flex-col gap-2",
      )}
    >
      <span className="pl-6">{label}</span>

      <select
        name={name}
        className={mergeClassNames(
          className,
          "w-full appearance-none",
          "bg-off-white-500 placeholder:text-lake-lime-300 text-body-s font-heading font-medium rounded-full rounded-br-none px-6 py-3",
          "focus:outline-none focus:bg-off-white-600/60",
          "transition-colors duration-150 ease-in-out",
        )}
        {...props}
      >
        {children}
      </select>
      <Icon
        name="chevron"
        className="absolute right-6 top-12 text-lake-lime-200"
      />
    </label>
  );
};

export default Select;
