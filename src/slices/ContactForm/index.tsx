"use client";

import { Button } from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon/Icon";
import { IconRotate } from "@/components/atoms/Icon/Icon.types";
import Input from "@/components/atoms/Input/Input";
import TextArea from "@/components/atoms/Textarea/Textarea";
import CustomPrismicRichText from "@/components/molecules/CustomPrismicRichText";
import { mergeClassNames } from "@/utils/helpers/mergeClassNames";
import Botpoison from "@botpoison/browser";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { useEffect, useState } from "react";

export type ContactFormProps = SliceComponentProps<Content.ContactFormSlice>;

const ContactForm = ({ slice }: ContactFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const botpoison = new Botpoison({
    publicKey: "pk_0842adcf-4510-42f2-9282-0006505747ff",
  });

  useEffect(() => {
    Botpoison.init();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    // 3. Process a challenge
    const { solution } = await botpoison.challenge();

    try {
      await fetch("https://submit-form.com/RO6EAz3lb", {
        method: "POST",
        headers: {
          _botpoison: solution,
        },
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      className={mergeClassNames(
        "bg-off-white-500 flex gap-16 max-w-7xl mx-auto py-12 px-16 items-center justify-center",
        "desktop-l:gap-2",
        "desktop-s:gap-10 desktop-s:flex-col",
        "tablet-s:flex-col tablet-s:px-4",
      )}
    >
      <div
        className={mergeClassNames(
          "bg-off-white-100 rounded-[40px] border-b-[10px] border-b-lake-lime-50 px-20 tablet-s:px-6 py-16 max-w-[774px] w-full",
        )}
      >
        <CustomPrismicRichText field={slice.primary.description} />

        <form
          onSubmit={handleSubmit}
          acceptCharset="UTF-8"
          data-botpoison-public-key="pk_0842adcf-4510-42f2-9282-0006505747ff"
          method="POST"
          className="py-10 flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <Input
              id="name"
              name="name"
              required
              placeholder="Enter your name"
              label="Name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Input
              id="email"
              name="email"
              required
              placeholder="Enter your email address"
              label="Email address"
              type="email"
            />
          </div>

          <div className="flex flex-col gap-2">
            <TextArea
              id="message"
              required
              name="message"
              placeholder="Enter your message"
              label="Your message"
            />
          </div>

          <Button
            variant="primary"
            type="submit"
            trailingIcon="arrow"
            className="w-min"
            disabled={isLoading}
            trailingIconDirection={IconRotate.South}
          >
            Submit
            <Icon name="arrow" />
          </Button>
        </form>
      </div>

      <aside
        className={mergeClassNames(
          "flex flex-col gap-6 p-6",
          "desktop-s:grid desktop-s:grid-cols-3 desktop-s:p-2",
          "tablet-m:grid-cols-2",
        )}
      >
        {slice.primary.sidebar.map((item, idx) => (
          <article key={idx} className="flex flex-col gap-2">
            <h3 className="text-heading-l font-title font-semibold">
              {item.title}
            </h3>

            <div className="opacity-60 text-body-s text-wrap break-all">
              <CustomPrismicRichText
                field={item.description}
                overrideComponents={{
                  paragraph: ({ children }) => (
                    <p className="text-body-s font-body leading-normal mb-4">
                      {children}
                    </p>
                  ),
                }}
              />
            </div>
          </article>
        ))}
      </aside>
    </section>
  );
};

export default ContactForm;
