"use client";

import gsap from "gsap";
import { TransitionRouter } from "next-transition-router";

export function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TransitionRouter
      auto
      leave={(next) => {
        const tl = gsap.timeline();

        tl.set(
          '[data-gsap="transition-panel"]',
          {
            height: 0,
            top: 0,
          },
          "<",
        );

        tl.to("main", {
          y: 64,
          duration: 0.4,
          ease: "expo.in",
        });

        tl.to(
          '[data-gsap="transition-panel"]',
          {
            height: "100%",
            duration: 0.8,
            ease: "expo.out",
            onComplete: next,
          },
          "-=0.2",
        );
        return () => tl.kill();
      }}
      enter={(next) => {
        const tl = gsap.timeline();

        tl.set('[data-gsap="transition-panel"]', {
          top: 0,
        });

        tl.from("main", {
          y: -64,
          duration: 1,
          ease: "power3.out",
        });

        tl.to(
          '[data-gsap="transition-panel"]',
          {
            top: "100%",
            duration: 0.5,
            ease: "expo.in",
            onComplete: next,
          },
          "<",
        );
        return () => tl.kill();
      }}
    >
      <div
        data-gsap="transition-panel"
        className="h-0 w-full fixed pointer-events-none top-0 left-0 bg-lake-lime-500 z-[999] overflow-hidden"
      />
      {children}
    </TransitionRouter>
  );
}
