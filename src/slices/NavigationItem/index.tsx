import { isFilled, type Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import type { SliceComponentProps } from "@prismicio/react";

export type NavigationProps = SliceComponentProps<Content.NavigationSlice>;

const NavigationItem = ({ slice }: NavigationProps) => {
  const LinkElement = isFilled.link(slice.primary.link) ? PrismicNextLink : "p";

  return (
    <li className={"font-heading"}>
      <LinkElement
        className="text-heading-6-xl text-lake-lime-900 hover:text-lake-lime-700"
        field={slice.primary.link}
      >
        {slice.primary.link.text}

        {slice.items && (
          <ul>
            {slice.items.map((item, idx) => (
              <li key={idx}>
                <PrismicNextLink
                  className="text-heading-6-xl text-lake-lime-900 hover:text-lake-lime-700"
                  field={item.child_link}
                >
                  {item.child_link.text}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        )}
      </LinkElement>
    </li>
  );
};

export default NavigationItem;
