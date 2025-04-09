"use client";
import { ScrollSmoother } from "gsap/all";
import {
  createContext,
  PropsWithChildren,
  SetStateAction,
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
