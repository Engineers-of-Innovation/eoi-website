"use client";
import gsap, { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import type { Content } from "@prismicio/client";
import type { SliceComponentProps } from "@prismicio/react";
import { SliceZone } from "@prismicio/react";
import { useRef } from "react";

export type SectionScrollTextProps =
  SliceComponentProps<Content.SectionScrollTextSlice>;

gsap.registerPlugin(SplitText);

const SectionScrollText = ({ slice }: SectionScrollTextProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#scrolltext-title",
          start: "top+=200px bottom",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      const childSplit = new SplitText("#scrolltext-title", { type: "words" });
      new SplitText("#scrolltext-title", {
        type: "lines",
      });

      tl.fromTo(
        '[data-gsap="highlighted"]',
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 4,
          ease: "power3.in",
        },
      );

      tl.from(
        childSplit.words,
        {
          duration: 1,
          opacity: 0,
          ease: "power3.out",
          stagger: 0.2,
        },
        "<",
      );
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section
      ref={sectionRef}
      className="py-40 text-lake-lime-500 flex items-center justify-center w-full px-20 tablet-l:px-8 tablet-s:py-20"
    >
      <div className="flex items-center justify-center max-w-5xl mx-auto">
        <div className="text-heading-3-xl tablet-s:text-heading-xl leading-relaxed">
          <h2
            id="scrolltext-title"
            className="relative"
            data-gsap="highlighted"
          >
            <span className="relative inline z-10 px-2 bg-bleek-lime-500 rounded-2xl p-4 tablet-s:p-2 tablet-s:rounded-lg -ml-2 whitespace-pre-wrap box-decoration-clone">
              <span
                className={`
                  relative inline -ml-4 p-4 tablet-s:p-2
                  before:inline before:content-[attr(data-text)]
                  before:w-full before:h-full before:absolute before:top-0 before:left-0
                   before:rounded-2xl before:z-[-1] before:bg-bleek-lime-500
                `}
              >
                {slice.primary.highlighted_title}
              </span>
            </span>
            <span className="z-10 block mt-2"> {slice.primary.title}</span>
          </h2>
        </div>
      </div>
      <SliceZone slices={slice.items} />
    </section>
  );
};

export default SectionScrollText;
