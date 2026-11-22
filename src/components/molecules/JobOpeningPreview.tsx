import { isFilled, type Content, type LinkField } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

import { NewBadge } from "@/components/atoms/NewBadge";
import Icon from "../atoms/Icon/Icon";

interface JobOpeningPreviewProps {
  /** Primary fields of a `job_opening` slice. */
  job: Content.JobOpeningSliceDefaultPrimary;
  /** Link to this opening on the job openings page. */
  detailLink: LinkField;
}

/**
 * Compact job opening row used in the home page teaser. The whole card links
 * to the vacancy on the job openings page (stretched link on the title).
 */
const JobOpeningPreview = ({ job, detailLink }: JobOpeningPreviewProps) => {
  const meta = [job.employment_type, job.location].filter(
    (value): value is string => isFilled.keyText(value),
  );

  return (
    <li className="group relative border border-lake-lime-300 rounded-md bg-lake-lime-500 px-4 py-3 flex items-center justify-between gap-4 transition-colors hover:border-bleek-lime-500 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-bleek-lime-500 tablet-m:flex-col tablet-m:items-start">
      {job.is_new && (
        <NewBadge className="absolute -top-[18px] -left-3 -rotate-3 z-10" />
      )}
      <div className="flex items-center gap-4 w-full justify-between tablet-m:flex-col tablet-m:items-start">
        <div className="flex items-center gap-4">
          {isFilled.image(job.company_logo) && (
            <PrismicNextImage
              field={job.company_logo}
              fallbackAlt=""
              className="size-16 shrink-0 object-contain rounded-md bg-off-white-500 p-1"
            />
          )}
          <div className="flex flex-col gap-1 min-w-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <h3 className="text-heading-l text-off-white-500">
                {/* Stretched link: its ::before covers the whole card */}
                <PrismicNextLink
                  field={detailLink}
                  className="text-off-white-500 no-underline focus:outline-none before:absolute before:inset-0 before:content-['']"
                >
                  {job.title}
                  {isFilled.keyText(job.company_name) && (
                    <span className="text-body-m text-off-white-500/70">
                      {" "}
                      at {job.company_name}
                    </span>
                  )}
                </PrismicNextLink>
              </h3>
            </div>
            {meta.length > 0 && (
              <p className="text-body-s text-bleek-lime-500">
                {meta.join(" · ")}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0 group-hover:text-bleek-lime-500 px-4 py-2 rounded-md">
          <p>View vacancy</p>
          <Icon name="arrow" className=" transition-transform" />
        </div>
      </div>
    </li>
  );
};

export default JobOpeningPreview;
