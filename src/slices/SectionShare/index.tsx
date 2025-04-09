"use client";

import { Button } from "@/components/atoms/Button";
import { mergeClassNames } from "@/utils/helpers/mergeClassNames";
import { useGSAP } from "@gsap/react";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";

export type SectionShareProps = SliceComponentProps<Content.SectionShareSlice>;

const SectionShare = ({ slice }: SectionShareProps): JSX.Element => {
  const [index, setIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.set(`.image:not([data-gsap="image-0"])`, {
        scale: 1.2,
        opacity: 0,
      });
    },
    {
      scope: sectionRef,
    },
  );

  const changeSlide = contextSafe((newIndex: number) => {
    if (newIndex === index) return;

    gsap.killTweensOf(`.image`);
    gsap.killTweensOf(`[data-gsap="image-${index}"]`);

    const tl = gsap.timeline();

    tl.fromTo(
      `[data-gsap="image-${newIndex}"]`,
      {
        scale: 1.06,
        opacity: 0,
        zIndex: 1,
      },
      {
        zIndex: 1,
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "power3.inOut",
      },
    );

    tl.to(
      `[data-gsap="image-${index}"]`,
      {
        scale: 1.06,
        opacity: 0,
        zIndex: 0,
        duration: 2,
        ease: "power3.out",
        onComplete: () => {
          gsap.set(`[data-gsap="image-${index}"]`, {
            zIndex: 0,
          });
        },
      },
      "<",
    );

    setIndex(newIndex);
  });

  return (
    <section
      className={mergeClassNames(
        "py-20 px-12 min-h-[90dvh] max-w-[1280px] relative mx-auto",
        "tablet-l:px-4 tablet-l:text-center",
      )}
      ref={sectionRef}
    >
      <div className="h-full w-full flex items-stretch justify-between center gap-16 tablet-l:flex-col tablet-l:gap-0 tablet-l:justify-center">
        <div className="relative rounded-[40px] h-[70vh] w-full tablet-l:h-auto tablet-l:w-full tablet-l:aspect-video tablet-l:rounded-2xl">
          {slice.items.map((item, index) => (
            <div
              className="absolute top-0 left-0 right-0 w-full h-full overflow-hidden rounded-[40px]"
              key={`img-share-${index}`}
            >
              <PrismicNextImage
                field={item.category_image}
                fallbackAlt=""
                key={`img-${index}`}
                data-gsap={`image-${index}`}
                className="object-cover w-full h-full image"
              />
            </div>
          ))}

          <svg
            width="235"
            height="212"
            viewBox="0 0 235 212"
            fill="none"
            data-gsap="graphic-0"
            className="absolute -top-10 -left-20 z-[-1]"
            xmlns="http://www.w3.org/2000/svg"
            data-speed="0.9"
          >
            <path
              d="M202.566 0.322446C227.089 0.341679 242.413 26.8819 230.167 48.1295L145.162 195.63C132.901 216.906 102.2 216.918 89.9219 195.651L4.68548 48.0177C-7.59294 26.7508 7.76759 0.169669 32.3244 0.188929L202.566 0.322446Z"
              fill="#B9FF25"
            />
          </svg>

          <svg
            width="264"
            height="343"
            data-gsap="graphic-1"
            className="absolute -bottom-10 -right-16 z-[-1]"
            viewBox="0 0 264 343"
            data-speed="1.1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="-4.00012"
              y="296.116"
              width="311.01"
              height="198.517"
              rx="20"
              transform="rotate(-75 -4.00012 296.116)"
              fill="#FF7B1F"
            />
          </svg>
        </div>

        <div className="flex flex-col justify-between gap-8 max-w-[604px] py-6 tablet-l:gap-14 tablet-l:max-w-full">
          <div className="flex flex-col gap-14">
            <h2 className="font-heading text-heading-l text-lake-lime-900 max-w-[60%] tablet-l:max-w-none">
              {slice.primary.title}
            </h2>

            <ul className="flex gap-8 flex-col">
              {slice.items.map((item, idx) => (
                <li key={`b-${idx}`} onMouseEnter={() => changeSlide(idx)}>
                  <button
                    className={mergeClassNames(
                      "font-heading text-heading-3-xl text-left text-lake-lime-200",
                      "transition-all duration-300 ease-in-out",
                      idx === index && "!text-lake-lime-900 underline",
                    )}
                    onClick={() => changeSlide(idx)}
                  >
                    {item.category_title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <article className="flex flex-col gap-2 max-w-[80%] text-left tablet-l:max-w-[604px] tablet-l:mx-auto">
            <h3 className="text-heading-xl text-lake-lime-900 font-title">
              {slice.items[index].cta_title}
            </h3>

            <div className="text-lake-lime-300 text-body-m font-body pb-5">
              <PrismicRichText field={slice.items[index].cta_description} />
            </div>

            <Button
              variant="tertiary"
              className="w-fit tablet-l:w-full"
              field={slice.items[index].cta_button_link}
            >
              {slice.items[index].cta_button_title}
            </Button>
          </article>
        </div>
      </div>
    </section>
  );
};

export default SectionShare;
