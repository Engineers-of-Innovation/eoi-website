import { useContext } from "react";

import {
  ISmoothScrollStoreContextValue,
  SmoothScrollStore,
} from "../stores/SmoothScrollStore";

function useSmoothScrollStore(): ISmoothScrollStoreContextValue {
  const context = useContext(SmoothScrollStore);

  if (!context) {
    throw new Error(
      `useSmoothScroll must be used within a SmoothScrollProvider`,
    );
  }

  return context;
}

export default useSmoothScrollStore;
