import { isFilled, type Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

import { Button } from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon/Icon";
import CustomPrismicRichText from "@/components/molecules/CustomPrismicRichText";
import { NewBadge } from "../atoms/NewBadge";

interface JobOpeningCardProps {
  /** Primary fields of a `job_opening` slice. */
  job: Content.JobOpeningSliceDefaultPrimary;
  /** Optional anchor id so a single opening can be linked to directly. */
  id?: string;
}

/**
 * Full job opening card: company, short description and the action links
 * (LinkedIn, company website and apply).
 */
const JobOpeningCard = ({ job, id }: JobOpeningCardProps) => {
  const hasLinks =
    isFilled.link(job.linkedin) ||
    isFilled.link(job.company_website) ||
    isFilled.link(job.apply_link);

  return (
    <article
      id={id}
      className="bg-off-white-100 border border-off-white-600 border-b-[8px] border-b-off-white-800 rounded-[32px] p-10 flex flex-col gap-8 scroll-mt-32 tablet-m:p-6 tablet-m:rounded-3xl"
    >
      <header className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {isFilled.image(job.company_logo) && (
              <div className="p-2 rounded-lg size-24 shrink-0">
                <PrismicNextImage
                  field={job.company_logo}
                  fallbackAlt=""
                  className="h-full w-full object-contain"
                />
              </div>
            )}
            {isFilled.keyText(job.company_name) && (
              <p className="text-heading-xl font-heading text-lake-lime-900">
                {job.company_name}
              </p>
            )}
          </div>

          {job.is_new && <NewBadge size="big" />}
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <h2 className="text-heading-3-xl font-heading text-lake-lime-500 leading-tight">
              {job.title}
            </h2>
          </div>

          {(isFilled.keyText(job.location) ||
            isFilled.keyText(job.employment_type)) && (
            <ul className="flex flex-wrap gap-2">
              {isFilled.keyText(job.employment_type) && (
                <li className="bg-tidal-turquoise-500 text-lake-lime-500 text-body-s font-heading rounded-full rounded-bl-none px-3 py-1 leading-none">
                  {job.employment_type}
                </li>
              )}
              {isFilled.keyText(job.location) && (
                <li className="bg-off-white-600 text-lake-lime-500 text-body-s font-heading rounded-full rounded-bl-none px-3 py-1 leading-none">
                  {job.location}
                </li>
              )}
            </ul>
          )}
        </div>
      </header>

      {isFilled.richText(job.description) && (
        <div className="text-lake-lime-400 max-w-[70ch]">
          <CustomPrismicRichText field={job.description} />
        </div>
      )}

      {hasLinks && (
        <ul className="flex flex-wrap gap-3">
          {isFilled.link(job.linkedin) && (
            <li>
              <Button
                variant="tertiary"
                size="m"
                field={job.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
                <Icon name="arrow" />
              </Button>
            </li>
          )}
          {isFilled.link(job.company_website) && (
            <li>
              <Button
                variant="tertiary"
                size="m"
                field={job.company_website}
                target="_blank"
                rel="noopener noreferrer"
              >
                Company website
                <Icon name="arrow" />
              </Button>
            </li>
          )}
          {isFilled.link(job.apply_link) && (
            <li>
              <Button
                variant="primary"
                size="m"
                field={job.apply_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply now
                <Icon name="arrow" />
              </Button>
            </li>
          )}
        </ul>
      )}
    </article>
  );
};

export default JobOpeningCard;
