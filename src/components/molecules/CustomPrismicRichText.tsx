import { PrismicRichText, PrismicRichTextProps } from "@prismicio/react";
import Icon from "../atoms/Icon/Icon";
import { PrismicNextLink } from "@prismicio/next";
import { IconRotate } from "../atoms/Icon/Icon.types";

interface CustomPrismicRichTextProps extends PrismicRichTextProps {
  overrideComponents?: PrismicRichTextProps["components"];
}

const CustomPrismicRichText = ({
  overrideComponents,
  ...props
}: CustomPrismicRichTextProps) => {
  const customComponents: PrismicRichTextProps["components"] = {
    heading1: ({ children }) => (
      <h1 className="text-heading-2-xl font-title font-semibold">{children}</h1>
    ),
    heading2: ({ children }) => (
      <h2 className="text-heading-xl font-title font-semibold">{children}</h2>
    ),
    heading3: ({ children }) => (
      <h3 className="text-heading-l font-title font-semibold">{children}</h3>
    ),
    heading4: ({ children }) => (
      <h4 className="text-heading-base font-title font-semibold">{children}</h4>
    ),
    paragraph: ({ children }) => (
      <p className="text-body-m font-body mb-4 leading-relaxed">{children}</p>
    ),
    strong: ({ children }) => <span className="font-semibold">{children}</span>,
    hyperlink: ({ children, node }) => (
      <PrismicNextLink
        field={node.data}
        className="text-lake-lime-500 font-body font-medium underline underline-offset-2 decoration-1 decoration-lake-lime-500 inline-flex items-baseline gap-1 hover:text-lake-lime-400"
      >
        {children}
        <Icon name="arrow" direction={IconRotate.South} />
      </PrismicNextLink>
    ),
    ...overrideComponents,
  };

  return <PrismicRichText {...props} components={customComponents} />;
};

export default CustomPrismicRichText;
