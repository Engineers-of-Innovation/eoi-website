import { NotFoundError } from "@prismicio/client";

import { createClient } from "@/prismicio";
import type {
  JobOpeningSlice,
  JobOpeningsDocument,
} from "../../../prismicio-types";

/**
 * Fetches the "Job openings" singleton. Returns `null` when the document has
 * not been created in Prismic yet, so callers can degrade gracefully.
 */
export const getJobOpeningsPage =
  async (): Promise<JobOpeningsDocument | null> => {
    try {
      return await createClient().getSingle("job_openings");
    } catch (error) {
      if (error instanceof NotFoundError) {
        return null;
      }
      throw error;
    }
  };

/** Returns only the job opening slices that are marked as visible. */
export const getVisibleJobOpenings = (
  page: JobOpeningsDocument | null,
): JobOpeningSlice[] =>
  (page?.data.slices ?? []).flatMap((slice) =>
    slice.slice_type === "job_opening" && slice.primary.visible ? [slice] : [],
  );

/**
 * Turns a slice id (which contains characters like `$`) into a safe DOM
 * anchor id, used to deep link to a single opening on the job openings page.
 */
export const getJobAnchorId = (sliceId: string): string =>
  `job-${sliceId.replace(/[^a-zA-Z0-9_-]/g, "-")}`;
