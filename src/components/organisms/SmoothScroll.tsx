"use client";
import useSmoothScrollStore from "@/utils/hooks/useSmoothScrollStore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/all";

import type { PropsWithChildren } from "react";

interface ISmoothScrollProps extends PropsWithChildren {
  vars?: ScrollSmoother.Vars;
}

const SmoothScroll = ({ children, vars }: ISmoothScrollProps) => {
  const { setSmoother } = useSmoothScrollStore();

  useGSAP(() => {
    gsap.registerPlugin(ScrollSmoother);

    const local = ScrollSmoother.create({
      // how long (in seconds) it takes to "catch up" to the native scroll position
      smooth: 0.8,
      speed: 0.9,
      // looks for data-speed and data-lag attributes on elements
      effects: true,
      // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
      smoothTouch: 0.1,
      normalizeScroll: true,
      ...vars,
    });

    setSmoother(local);
  });

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
};

export default SmoothScroll;
