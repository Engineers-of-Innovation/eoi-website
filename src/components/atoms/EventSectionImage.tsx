"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

interface EventSectionImageProps {
  image: ImageField<never>;
}

export function EventSectionImage({ image }: EventSectionImageProps) {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(parallaxRef.current, { yPercent: 10 });
    gsap.to(parallaxRef.current, {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: parallaxRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
  });

  return (
    <div
      className="relative w-full h-[660px] justify-center flex items-center"
      ref={parallaxRef}
    >
      <PrismicNextImage
        className="absolute inset-0 w-full h-full object-cover scale-[120%]"
        field={image}
        fallbackAlt=""
      />
    </div>
  );
}
