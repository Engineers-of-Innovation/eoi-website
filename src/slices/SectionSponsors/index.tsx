import { type Content, isFilled } from "@prismicio/client";
import { PrismicRichText, type SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { mergeClassNames } from "@/utils/helpers/mergeClassNames";

export type CustomerLogosProps =
  SliceComponentProps<Content.CustomerLogosSlice>;

const CustomerLogos = ({ slice }: CustomerLogosProps) => {
  const groupedPerTierArray = slice.items.reduce(
    (acc, item) => {
      const tier = item.tier ?? "default";
      if (!acc[tier]) {
        acc[tier] = [];
      }
      acc[tier].push(item);
      return acc;
    },
    {} as Record<string, Content.CustomerLogosSlice["items"]>,
  );

  return (
    <section className="py-20 bg-off-white-500" id="sponsors">
      <div className="w-full max-w-7xl mx-auto px-4 text-center flex flex-col gap-20">
        <header className="flex flex-col gap-2">
          <h2 className="text-heading-4-xl font-heading text-lake-lime-900">
            {slice.primary.title}
          </h2>
          <div className="text-body-l text-lake-lime-300 font-body max-w-[920px] tablet-l:max-w-[680px] text-pretty leading-relaxed mx-auto">
            <PrismicRichText field={slice.primary.description} />
          </div>
        </header>

        <div className="flex flex-col gap-10 relative">
          {Object.entries(groupedPerTierArray).map(([tier, sponsors]) => (
            <ul
              className="flex gap-8 flex-wrap justify-center"
              key={`tier-${tier}`}
            >
              {sponsors.map(
                (item, idx) =>
                  isFilled.image(item.image) && (
                    <li key={idx}>
                      <PrismicNextLink field={item.link}>
                        <PrismicNextImage
                          className={mergeClassNames(
                            "mix-blend-multiply w-auto",
                            item.tier === "1" && "h-[144px] tablet-m:h-[120px]",
                            item.tier === "2" && "h-[120px] tablet-m:h-[100px]",
                            item.tier === "3" && "h-20 tablet-m:h-16",
                          )}
                          field={item.image}
                          height={26}
                          fallbackAlt=""
                          width={160}
                        />
                      </PrismicNextLink>
                    </li>
                  ),
              )}
            </ul>
          ))}
        </div>
        {isFilled.link(slice.primary.button) && (
          <PrismicNextLink
            className="es-customer-logos__button"
            field={slice.primary.button}
          >
            {slice.primary.button.link_type ?? "Learn more..."}
          </PrismicNextLink>
        )}
      </div>
    </section>
  );
};

export default CustomerLogos;
