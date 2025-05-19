"use client";
import { ScrollSmoother } from "gsap/all";
import {
  createContext,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from "react";

export const SmoothScrollStore =
  createContext<ISmoothScrollStoreContextValue | null>(null);

export interface ISmoothScrollStoreContextValue {
  smoother: ScrollSmoother | null;
  setSmoother: React.Dispatch<SetStateAction<ScrollSmoother | null>>;
}

const SmoothScrollStoreProvider = ({ children }: PropsWithChildren) => {
  const [smoother, setSmoother] = useState<ScrollSmoother | null>(null);

  // use GSAP smooth scroll to scroll to the correct id on page load if its part of the query string
  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      smoother?.scrollTo(hash, true, "top-=48px top");
    } else {
      smoother?.scrollTo(0, false);
    }
  }, [smoother]);

  return (
    <SmoothScrollStore.Provider
      value={{
        smoother,
        setSmoother,
      }}
    >
      {children}
    </SmoothScrollStore.Provider>
  );
};

export default SmoothScrollStoreProvider;
