import { Button, ButtonProps } from "@/components/atoms/Button";
import CustomPrismicRichText from "@/components/molecules/CustomPrismicRichText";
import { Content, isFilled, LinkField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicLinkProps, SliceComponentProps } from "@prismicio/react";

export type SectionAboutProps = SliceComponentProps<Content.SectionAboutSlice>;

const SectionAbout = ({ slice }: SectionAboutProps) => {
  return (
    <section
      id="about"
      className="bg-lake-lime-500 py-32 px-20 rounded-[60px] border-b-[20px] flex flex-col gap-24"
    >
      <header className="flex items-center justify-between max-w-8xl gap-20 mx-auto">
        {isFilled.richText(slice.primary.title) && (
          <div className="text-off-white-400 max-w-[472px] font-title font-semibold">
            <CustomPrismicRichText
              field={slice.primary.title}
              overrideComponents={{
                paragraph: ({ children }) => (
                  <h3 className="text-heading-3-xl leading-snug">{children}</h3>
                ),
                strong: ({ children }) => (
                  <>
                    <br />
                    <span className="underline text-bleek-lime-500">
                      {children}
                    </span>
                  </>
                ),
              }}
            />
          </div>
        )}

        {isFilled.richText(slice.primary.description) && (
          <div className="max-w-[565px] text-lake-lime-100 text-balance font-body">
            <CustomPrismicRichText field={slice.primary.description} />
          </div>
        )}
      </header>

      <article className="bg-off-white-500 rounded-[60px] flex gap-16 max-w-7xl mx-auto">
        <header className="h-full w-full flex">
          <PrismicNextImage
            fallbackAlt=""
            field={slice.primary.image}
            className="h-full object-cover w-full"
          />
        </header>

        <div className="flex flex-col gap-4 p-20">
          <h2 className="text-heading-5-xl max-w-[565px] text-lake-lime-500 font-title font-semibold mb-2 leading-tight">
            {slice.primary.card_title}
          </h2>

          <div className="text-lake-lime-400">
            <CustomPrismicRichText field={slice.primary.card_description} />
          </div>

          <footer className="flex gap-2">
            {isFilled.repeatable(slice.primary.buttons) &&
              slice.primary.buttons.map(
                (button, index) =>
                  isFilled.link(button) && (
                    <Button
                      key={index}
                      variant={button.variant}
                      size="l"
                      field={button}
                    />
                  ),
              )}
          </footer>
        </div>
      </article>
    </section>
  );
};

export default SectionAbout;
