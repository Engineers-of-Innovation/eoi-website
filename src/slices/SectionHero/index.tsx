"use client";
import Icon from "@/components/atoms/Icon/Icon";
import { IconRotate } from "@/components/atoms/Icon/Icon.types";
import { mergeClassNames } from "@/utils/helpers/mergeClassNames";
import useSmoothScrollStore from "@/utils/hooks/useSmoothScrollStore";
import { useGSAP } from "@gsap/react";
import { isFilled, type Content } from "@prismicio/client";
import { PrismicRichText, type SliceComponentProps } from "@prismicio/react";
import gsap, { ScrollTrigger, SplitText } from "gsap/all";
import { useLayoutEffect, useRef } from "react";

export type SectionHeroProps = SliceComponentProps<Content.SectionHeroSlice>;

const SectionHero = ({ slice }: SectionHeroProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { smoother } = useSmoothScrollStore();

  useLayoutEffect(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);
  }, []);

  const { contextSafe } = useGSAP(
    () => {
      const tl = gsap.timeline();

      ScrollTrigger.addEventListener("refresh", positionClipping);
      const stickyElement =
        document.querySelector<HTMLDivElement>("[data-gsap-sticky]");
      const topOffset = stickyElement?.offsetTop ?? 500;
      const topHeight = stickyElement?.offsetHeight ?? 1000;

      const childSplit = new SplitText(".hero-title", { type: "words" });
      new SplitText(".hero-title", {
        type: "lines",
        linesClass: "overflow-hidden",
      });

      tl.from(childSplit.words, {
        duration: 1,
        yPercent: 100,
        ease: "power3.out",
        stagger: 0.1,
      });

      tl.from(
        '[data-gsap="description"]',
        {
          yPercent: 100,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6",
      );

      tl.fromTo(
        '[data-gsap="cta-button"]',
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          ease: "power3.in",
        },
        "-=0.6",
      );

      tl.fromTo(
        "[data-gsap='promo-video']",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 2,
        },
        ">-=0.6",
      );

      gsap.to(`#hero-mask`, {
        scale: 30,
        transformOrigin: "50% 0%",
        transformBox: "fill-box",
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: true,
          id: "mask-timeline",
          start: () => `top+=${topOffset}px top`,
          pin: true,
          snap: {
            duration: 0.5,
            snapTo: 1,
          },
          end: () => `top+=${topHeight}px top`,
          markers: false,
          invalidateOnRefresh: true,
          pinnedContainer: '[data-gsap-sticky="hero"]',
        },
        ease: "power3.in",
      });
    },
    {
      scope: sectionRef,
    },
  );

  const handleClick = contextSafe(() => {
    smoother?.scrollTo('[data-gsap="promo-video"]', true, "top -40px");
  });

  const positionClipping = contextSafe(() => {
    const clipPathWidth = 1600;
    const clipShape = document.querySelector("#clipping");
    const video: HTMLDivElement | null = document.querySelector(
      `[data-gsap="promo-video"]`,
    );

    if (!video || !clipShape) {
      return;
    }

    gsap.set(clipShape, {
      x: () => video.offsetWidth / 2 - clipPathWidth / 2,
    });
  });

  return (
    <section
      className="w-full relative flex flex-col pt-20 overflow-hidden tablet-s:py-4 min-h-[120dvh]"
      ref={sectionRef}
    >
      <div className="max-w-7xl w-full mx-auto px-4">
        <header className="flex justify-between w-full items-center gap-10 pt-20 tablet-s:flex-col tablet-s:items-start">
          <div className="flex flex-col gap-3">
            <h1 className="hero-title text-heading-6-xl text-lake-lime-500 max-w-[800px] tablet-l:max-w-[620px] y-[100%] leading-snug">
              {slice.primary.title}
            </h1>
            <div className="text-off-white-900 font-medium font-heading leading-normal text-heading-xl max-w-[504px] overflow-hidden">
              <div data-gsap="description" className="y-[100%] relative">
                <PrismicRichText field={slice.primary.description} />
              </div>
            </div>
          </div>

          <button
            className="group bg-bleek-lime-500 p-2 pl-6 rounded-bl-none rounded-full flex gap-2 items-center text-heading-xl text-lake-lime-500 font-medium border-b-2 border-b-bleek-lime-600 active:border-b-0"
            data-gsap="cta-button"
            onClick={() => handleClick()}
          >
            <span>{slice.primary.cta}</span>
            <span className="rounded-full size-12 bg-lake-lime-500 flex items-center justify-center text-bleek-lime-500">
              <Icon
                name="arrow"
                direction={IconRotate.NorthWest}
                className="group-hover:scale-125 transition-transform duration-1000"
              />
            </span>
          </button>
        </header>
      </div>

      <div
        className="flex items-center justify-center relative mx-auto [transform-origin:50%_50%]"
        data-gsap-sticky="hero"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={mergeClassNames(
            "mx-auto absolute w-dvw h-dvh [transform-origin:50%_50%]",
          )}
          viewBox="0 0 1600 900"
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            <clipPath
              id="clipping"
              className="hero-image [transform-origin:50%_50%]"
            >
              <path
                fill="#B9FF25"
                id="hero-mask"
                d="M232.689 713.935c61.251-14.476 107.987-56.854 137.748-87.484 23.84-24.493 43.908-59.213 67.224-99.389a5016.362 5016.362 0 0 1 17.343-29.738c35-59.108 81.632-132.378 162.478-227.729l-2.095-1.468c-62.875-44.424-123.182-70.753-179.351-78.2-47.156-6.294-92.006.682-133.294 20.717-56.221 27.273-105.525 77.623-150.69 153.83-21.063 35.507-39.454 69.598-57.216 102.536-5.763 10.646-11.37 21.136-17.028 31.468-22.112 40.49-46.79 84.127-77.808 128.97l1.362 1.311c78.28 74.319 156.139 102.955 231.379 85.228l-.052-.052ZM719.494 272.956C657.3 341.873 534.223 531.787 477.845 622.627l-.104.157c77.702 75.84 158.549 106.05 240.181 89.896 74.926-14.843 132.875-64.721 168.295-103.952 33.638-37.238 62.351-85.805 92.793-137.256l11.369-19.144c36.261-60.892 76.441-125.613 133.501-188.813l.16-.209c-105.63-69.546-190.719-97.554-260.196-85.648-63.818 10.962-107.987 54.913-144.402 95.246l.052.052ZM1045.81 532.519c-23.31 40.123-40.24 69.336-63.188 94.931l1.101 1.101c54.757 53.55 110.767 85.176 166.457 93.934 45.74 7.186 91.59-1.048 136.34-24.44 56.9-29.738 113.17-84.914 162.69-159.547 47.05-70.857 118.78-198.83 150.79-268.796l-1.62-1.469c-17.19-15.472-79.86-66.923-164.58-79.668-80.11-12.063-149.17 15.472-205.23 81.819-81.84 96.819-129.37 171.61-161.59 225.998-7.81 13.165-14.78 25.175-21.22 36.242l.05-.105Z"
              />
            </clipPath>
          </defs>
        </svg>

        <div
          className={mergeClassNames(
            "[clip-path:url(#clipping)] w-full flex items-center justify-center h-auto aspect-video relative opacity-0",
          )}
          data-gsap="promo-video"
        >
          {/* <PrismicNextImage
            field={slice.primary.poster}
            priority
            className="absolute left-0 top-0 h-full w-full object-cover"
          /> */}

          <video
            className="object-cover promo-video h-dvh w-dvw overflow-visible"
            autoPlay
            muted
            poster={
              isFilled.image(slice.primary.poster)
                ? slice.primary.poster.url
                : undefined
            }
            disablePictureInPicture
            loop
          >
            {isFilled.linkToMedia(slice.primary.video) && (
              <source src={slice.primary.video.url} type="video/mp4" />
            )}
            {/* <source src="promo.mp4" type="video/mp4" /> */}
          </video>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
