"use client";
import { useGSAP } from "@gsap/react";
import { Content } from "@prismicio/client";
import { PrismicImage, SliceComponentProps } from "@prismicio/react";
import { gsap, ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export type SectionGalleryProps =
  SliceComponentProps<Content.SectionGallerySlice>;

const SectionGallery = ({ slice }: SectionGalleryProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(max-width: 1120px)", () => {
      gsap.to(`[data-gsap="gallery"]`, {
        x: () =>
          -(containerRef.current?.scrollWidth || 0) +
          (containerRef.current?.clientWidth ?? 0) -
          16,
        ease: "none",
        scrollTrigger: {
          markers: false,
          id: "gallery",
          trigger: containerRef.current,
          start: "bottom bottom",
          end: "bottom top",
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });
  });

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto overflow-visible">
        <div className="gallery-container" ref={containerRef}>
          <h2 className="text-heading-4-xl text-lake-lime-500 text-center mb-10 px-4 tablet-l:text-left">
            {slice.primary.title}
          </h2>
          <ul
            style={
              {
                "--items-length": slice.items.length ?? 6,
              } as React.CSSProperties
            }
            data-gsap="gallery"
            className={`
              translate-x-0 will-change-transform
              grid grid-cols-[repeat(var(--items-length),1fr)] desktop-s:grid-cols-[repeat(var(--items-length),minmax(200px,1fr))] grid-rows-[300px_400px] tablet-s:grid-rows-[200px_300px]
              gap-6 grid-flow-dense px-4
            `}
          >
            {slice.items.map((item, index) => (
              <li
                key={index}
                className={`
            relative overflow-hidden rounded-lg row-span-1 w-full h-full
            ${item.width === "large" ? "col-span-3" : ""}
            ${item.width === "medium" ? "col-span-2" : ""}
            ${item.width === "small" ? "col-span-1" : ""}
            `}
              >
                <PrismicImage
                  field={item.image}
                  className="h-full w-full object-cover object-center"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SectionGallery;
