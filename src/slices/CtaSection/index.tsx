"use client";

import { Button } from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon/Icon";
import { IconRotate } from "@/components/atoms/Icon/Icon.types";
import { useGSAP } from "@gsap/react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

/**
 * Props for `CtaSection`.
 */
export type CtaSectionProps = SliceComponentProps<Content.CtaSectionSlice>;

/**
 * Component for "CtaSection" Slices.
 */
const CtaSection = ({ slice }: CtaSectionProps) => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(`[data-gsap="cta-section"]`, {
      scale: 1,
      transformOrigin: "bottom center",
      ease: "power4.in",
      scrollTrigger: {
        trigger: `[data-gsap="cta-section"]`,
        scrub: true,
        start: "top bottom",
        end: "bottom-=120px bottom",
        invalidateOnRefresh: true,
      },
    });
  });

  return (
    <section
      className="w-full py-20 px-10 tablet-s:px-4 tablet-s:py-10 overflow-visible [transform-origin:bottom_center] scale-90"
      data-gsap="cta-section"
    >
      <div
        className={`
        max-w-4xl mx-auto relative
        `}
      >
        <svg
          data-speed="0.8"
          className="absolute bottom-[-119px] left-[-84px] z-[-1]"
          width="269"
          height="239"
          viewBox="0 0 269 239"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M242.569 0.116866C262.523 0.116879 274.994 21.7171 265.017 38.9973L157.164 225.804C147.187 243.084 122.246 243.084 112.269 225.804L4.41597 38.9973C-5.56075 21.7171 6.91013 0.116831 26.8636 0.116833L242.569 0.116866Z"
            fill="#B9FF25"
          />
        </svg>

        <svg
          data-speed="1.1"
          className="absolute top-[-48px] right-[-48px] z-[-1]"
          width="264"
          height="175"
          viewBox="0 0 264 175"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M106.754 1.04427C77.5112 1.16366 50.5342 16.8124 35.9126 42.1377L8.5439 89.5417C-13.1993 127.202 14.095 174.255 57.5811 174.078L155.9 173.676C185.143 173.557 212.12 157.908 226.741 132.583L256.133 81.6754C276.979 45.5685 250.811 0.456183 209.118 0.626383L106.754 1.04427Z"
            fill="#FF7B1F"
          />
        </svg>

        <article className="z-20 p-12 tablet-s:p-8 relative bg-lake-lime-500 border-b-[16px] border-b-lake-lime-900 rounded-[40px]">
          <h2 className="text-heading-3-xl mobile-l:text-heading-2-xl mb-12 text-bleek-lime-500 max-w-[640px] leading-relaxed">
            {slice.primary.title}
          </h2>

          <div className="flex gap-4 tablet-m:flex-col">
            {isFilled.repeatable(slice.primary.buttons) &&
              slice.primary.buttons.map(
                (button, index) =>
                  isFilled.link(button) && (
                    <Button
                      key={index}
                      variant={button.variant}
                      size="l"
                      field={button}
                    >
                      {button.text}
                      <Icon name="arrow" direction={IconRotate.South} />
                    </Button>
                  ),
              )}
          </div>
        </article>
      </div>
    </section>
  );
};

export default CtaSection;
