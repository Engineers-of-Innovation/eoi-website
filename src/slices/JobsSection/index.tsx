import { isFilled, type Content } from "@prismicio/client";
import { PrismicText, type SliceComponentProps } from "@prismicio/react";

import JobOpeningPreview from "@/components/molecules/JobOpeningPreview";
import {
  getJobAnchorId,
  getJobOpeningsPage,
  getVisibleJobOpenings,
} from "@/utils/helpers/getJobOpenings";

const DEFAULT_MAX_ITEMS = 3;
const JOBS_PAGE_URL = "/jobs";

/**
 * Props for `JobsSection`.
 */
export type JobsSectionProps = SliceComponentProps<Content.JobsSectionSlice>;

/**
 * Component for "JobsSection" Slices. Shows a small teaser of the job
 * openings at our sponsors and links to the dedicated job openings page.
 */
const JobsSection = async ({ slice }: JobsSectionProps) => {
  const page = await getJobOpeningsPage();
  const jobs = getVisibleJobOpenings(page);

  if (jobs.length === 0) {
    return null;
  }

  const maxItems =
    typeof slice.primary.max_items === "number" && slice.primary.max_items > 0
      ? slice.primary.max_items
      : DEFAULT_MAX_ITEMS;

  const jobsPageUrl = page?.url ?? JOBS_PAGE_URL;

  return (
    <section
      className="px-8 pb-32 max-w-7xl mx-auto tablet-m:px-4"
      id="jobs"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <article className="bg-lake-lime-500 text-off-white-500 rounded-[60px] border-b-[20px] border-b-lake-lime-900 flex flex-col gap-6 py-10 px-10 desktop-s:rounded-[50px] tablet-l:rounded-[40px] tablet-l:border-b-[12px] tablet-m:px-6 tablet-m:py-8 tablet-s:px-4">
        <header className="flex flex-col gap-2 mb-2">
          <h2 className="text-heading-2-xl">{slice.primary.title}</h2>
          {isFilled.richText(slice.primary.description) && (
            <p className="text-body-m text-lake-lime-100 leading-normal text-pretty max-w-[60ch]">
              <PrismicText field={slice.primary.description} />
            </p>
          )}
        </header>

        <ul className="flex flex-col gap-4">
          {jobs.slice(0, maxItems).map((job) => (
            <JobOpeningPreview
              key={job.id}
              job={job.primary}
              detailLink={{
                link_type: "Web",
                url: `${jobsPageUrl}#${getJobAnchorId(job.id)}`,
              }}
            />
          ))}
        </ul>
      </article>
    </section>
  );
};

export default JobsSection;
