import { PrismicLinkProps } from "@prismicio/react";
import { TIconName } from "./Icon/Icon";
import { IconRotate, IconSize } from "./Icon/Icon.types";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import { FilledLinkToWebField, isFilled } from "@prismicio/client";

interface IBaseButtonProps extends PropsWithChildren {
  variant?:
    | "primary"
    | "primary-bleek-lime"
    | "secondary"
    | "secondary-bleek-lime"
    | "tertiary";
  size?: "s" | "m" | "l";
  disabled?: boolean;
  isFullWidth?: boolean;
  leadingIcon?: TIconName;
  leadingIconDirection?: IconRotate;
  leadingIconSize?: IconSize;
  trailingIcon?: TIconName;
  trailingIconDirection?: IconRotate;
  trailingIconSize?: IconSize;
  className?: string;
  groupHover?: boolean;
  hasPadding?: boolean;
  onClick?: () => void;
}

export type ButtonProps = IBaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { field?: never };

type LinkButtonProps = IBaseButtonProps & { field: PrismicLinkProps["field"] };

export const Button = ({
  children,
  field,
  variant = "primary",
  size = "m",
  disabled,
  isFullWidth = false,
  className = "",
  ...props
}: ButtonProps | LinkButtonProps) => {
  const styles = {
    button: `
        ${className}
        inline-flex items-center justify-center rounded-lg font-bold gap-2 group
        active:border-b
        disabled:bg-secondary-200 disabled:text-secondary-400 disabled:cursor-not-allowed
        transition-all duration-150 ease-in-out py-2
        ${variant === "primary" ? "bg-ehbo-orange-500 border-r border-b-[3px] border-ehbo-orange-700 text-lake-lime-900" : ""}
        ${variant === "primary-bleek-lime" ? "bg-bleek-lime-500 border-r border-b-[3px] border-b-bleek-lime-800 text-lake-lime-900" : ""}
        ${variant === "secondary" ? "bg-transparent border border-ehbo-orange-500 border-b-[3px] text-ehbo-orange-500" : ""}
        ${variant === "secondary-bleek-lime" ? "bg-transparent border border-bleek-lime-500 border-b-[3px] text-bleek-lime-500" : ""}
        ${variant === "tertiary" ? "bg transparent border border-lake-lime-500 border-b-[3px]" : ""}
        ${size === "m" ? "px-4 py-1.5 text-body-s " : ""}
        ${size === "l" ? "px-6 h-12 text-body-m !rounded-xl" : ""}
        ${isFullWidth ? "w-full" : ""}
      `,
  };

  if (field) {
    return (
      <PrismicNextLink
        {...(props as LinkButtonProps)}
        className={styles.button}
        field={field}
      >
        <ChildWrapper>{children ?? field.text}</ChildWrapper>
      </PrismicNextLink>
    );
  }

  return (
    <button {...(props as ButtonProps)} className={styles.button}>
      <ChildWrapper>{children}</ChildWrapper>
    </button>
  );
};

const ChildWrapper = ({ children }: { children: React.ReactNode }) => {
  return children;
};
