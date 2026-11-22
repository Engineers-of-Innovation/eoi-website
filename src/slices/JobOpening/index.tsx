import { type Content } from "@prismicio/client";
import { type SliceComponentProps } from "@prismicio/react";

import JobOpeningCard from "@/components/molecules/JobOpeningCard";
import { getJobAnchorId } from "@/utils/helpers/getJobOpenings";

/**
 * Props for `JobOpening`.
 */
export type JobOpeningProps = SliceComponentProps<Content.JobOpeningSlice>;

/**
 * Component for "JobOpening" Slices.
 */
const JobOpening = ({ slice }: JobOpeningProps): JSX.Element | null => {
  if (!slice.primary.visible) {
    return null;
  }

  return (
    <section
      className="px-4 py-3 max-w-4xl mx-auto"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <JobOpeningCard job={slice.primary} id={getJobAnchorId(slice.id)} />
    </section>
  );
};

export default JobOpening;
