import { mergeClassNames } from "@/utils/helpers/mergeClassNames";

interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
  className?: string;
}

const TextArea = ({ label, name, className, ...props }: TextAreaProps) => {
  return (
    <label
      htmlFor={name}
      className="text-heading-base font-heading font-title font-semibold flex flex-col gap-2"
    >
      <span className="pl-6">{label}</span>

      <textarea
        name={name}
        className={mergeClassNames(
          className,
          "bg-off-white-500 placeholder:text-lake-lime-300 text-body-s font-heading font-medium rounded-3xl full rounded-br-none px-6 py-3 w-[340px] min-h-40",
          "focus:outline-none focus:bg-off-white-600/60",
          "transition-colors duration-150 ease-in-out",
        )}
        {...props}
      />
    </label>
  );
};

export default TextArea;
