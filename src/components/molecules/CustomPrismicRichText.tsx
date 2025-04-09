import { PrismicRichText, PrismicRichTextProps } from "@prismicio/react";

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
      <p className="text-body-m font-body leading-normal mb-4">{children}</p>
    ),
    strong: ({ children }) => <span className="font-semibold">{children}</span>,
    ...overrideComponents,
  };

  return <PrismicRichText {...props} components={customComponents} />;
};

export default CustomPrismicRichText;
