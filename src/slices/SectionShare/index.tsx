"use client";

import { Button } from "@/components/atoms/Button";
import { mergeClassNames } from "@/utils/helpers/mergeClassNames";
import { useGSAP } from "@gsap/react";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useState } from "react";

export type SectionShareProps = SliceComponentProps<Content.SectionShareSlice>;

const SectionShare = ({ slice }: SectionShareProps) => {
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

    repositionGraphics();

    const newItem = document.querySelector<HTMLDivElement>(
      `[data-gsap="image-${newIndex}"]`,
    );
    const oldItems = document.querySelectorAll<HTMLDivElement>(
      `.image:not([data-gsap="image-${newIndex}"])`,
    );

    gsap.killTweensOf(newItem);
    gsap.killTweensOf(oldItems);

    // make sure the new item has the highest z-index
    gsap.set(newItem, { zIndex: 1, scale: 1.06, opacity: 0 });
    gsap.set(oldItems, { zIndex: -1 });

    // now animate the new item in
    const tl = gsap.timeline();

    tl.to(newItem, {
      scale: 1,
      opacity: 1,
      zIndex: 1,
      duration: 0.4,
      ease: "power3.inOut",
    });

    tl.to(
      oldItems,
      {
        zIndex: 0,
        scale: 1.06,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
      },
      ">",
    );

    setIndex(newIndex);
  });

  const repositionGraphics = contextSafe(() => {
    const graphics = document.querySelectorAll<HTMLDivElement>(
      '[data-gsap="graphic-0"], [data-gsap="graphic-1"]',
    );
    if (!graphics) return;

    // Get a random number for y; max is 50, min is -50
    const randomYMovement = gsap.utils.random(-50, 50);
    const randomXMovement = gsap.utils.random(-50, 50);
    // Get a random rotation between -20 and 20 degrees
    const randomRotation = gsap.utils.random(-20, 20);

    const tl = gsap.timeline({
      defaults: {
        stagger: 0.2,
      },
    });

    tl.to(graphics, {
      scale: 0.4,
      transformOrigin: "50% 50%",
      opacity: 0,
      rotate: randomRotation / 2,
      duration: 0.2,
      ease: "power3.in",
    });

    tl.set(graphics, {
      y: randomYMovement,
      x: randomXMovement,
      rotate: randomRotation,
    });

    tl.to(graphics, {
      scale: 1,
      opacity: 1,
      transformOrigin: "50% 50%",
      duration: 0.45,
      ease: "power3.in",
    });
  });

  return (
    <section
      className={mergeClassNames(
        "py-20 px-12 min-h-[90dvh] max-w-[1280px] relative mx-auto z-10",
        "desktop-s:px-4 desktop-s:text-center",
      )}
      ref={sectionRef}
    >
      <div className="h-full w-full flex items-stretch justify-between center gap-16 desktop-s:flex-col desktop-s:gap-0 desktop-s:justify-center">
        <div className="relative rounded-[40px] h-[70vh] w-full desktop-s:h-auto desktop-s:w-full desktop-s:aspect-video desktop-s:rounded-2xl">
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
                className="image object-cover w-full h-full"
              />
            </div>
          ))}

          <div data-speed="0.9" className="absolute -top-10 -left-20 z-[-1]">
            <svg
              width="235"
              height="212"
              data-gsap="graphic-0"
              viewBox="0 0 235 212"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M202.566 0.322446C227.089 0.341679 242.413 26.8819 230.167 48.1295L145.162 195.63C132.901 216.906 102.2 216.918 89.9219 195.651L4.68548 48.0177C-7.59294 26.7508 7.76759 0.169669 32.3244 0.188929L202.566 0.322446Z"
                fill="#B9FF25"
              />
            </svg>
          </div>

          <div
            data-speed="1.1"
            className="absolute -bottom-10 -right-16 z-[-1]"
          >
            <svg
              data-gsap="graphic-1"
              width="264"
              height="343"
              viewBox="0 0 264 343"
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
        </div>

        <div className="flex flex-col justify-between gap-8 max-w-[604px] py-6 desktop-s:gap-14 desktop-s:max-w-full">
          <div className="flex flex-col gap-14">
            <h2 className="font-heading text-heading-l text-lake-lime-900 max-w-[60%] desktop-s:max-w-none">
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

          <article className="flex flex-col gap-2 max-w-[80%] text-left desktop-s:max-w-[604px] desktop-s:mx-auto">
            <h3 className="text-heading-xl text-lake-lime-900 font-title">
              {slice.items[index].cta_title}
            </h3>

            <div className="text-lake-lime-300 text-body-m font-body pb-5">
              <PrismicRichText field={slice.items[index].cta_description} />
            </div>

            <Button
              variant="tertiary"
              className="w-fit desktop-s:w-full"
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
