import { mergeClassNames } from "@/utils/helpers/mergeClassNames";

interface NewBadgeProps {
  className?: string;
  size?: "default" | "big";
}

/**
 * Small green "New!" badge used to highlight fresh content, e.g. a job
 * opening that was recently added.
 */
export const NewBadge = ({ className, size = "default" }: NewBadgeProps) => (
  <span
    className={mergeClassNames(
      "inline-flex w-max shrink-0 items-center bg-bleek-lime-500 text-lake-lime-900 font-heading rounded-full rounded-bl-none px-3 py-1 leading-none",
      size === "default" && "text-body-s px-3 py-1",
      size === "big" && "text-body-m py-2 px-4",
      className,
    )}
  >
    New!
  </span>
);
