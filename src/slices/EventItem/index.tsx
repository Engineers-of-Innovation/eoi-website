import { isFilled, type Content, type DateField } from "@prismicio/client";
import { PrismicRichText, type SliceComponentProps } from "@prismicio/react";

import { Button } from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon/Icon";
import { IconSize } from "@/components/atoms/Icon/Icon.types";
/**
 * Props for `EventItem`.
 */
export type EventItemProps = SliceComponentProps<Content.EventItemSlice>;

/**
 * Component for "EventItem" Slices.
 */
const EventItem = ({ slice }: EventItemProps): JSX.Element => {
  // Format the two dates into a single string in the following format:
  // May 25 — May 28, 2023
  // or if it's a single day event:
  // May 25, 2023
  const formatDate = (startDate: DateField, endDate: DateField) => {
    if (!startDate || !endDate) return "";
    const start = new Date(startDate);
    const end = new Date(endDate);

    const startMonth = start.toLocaleString("default", { month: "short" });
    const startDay = start.getDate();
    const startYear = start.getFullYear();

    const endMonth = end.toLocaleString("default", { month: "short" });
    const endDay = end.getDate();
    const endYear = end.getFullYear();

    if (start.toDateString() === end.toDateString()) {
      return `${startMonth} ${startDay}, ${startYear}`;
    } else {
      return `${startMonth} ${startDay} — ${endMonth} ${endDay}, ${endYear}`;
    }
  };
  return (
    <article className="p-8 border border-1 border-lake-lime-300 rounded-lg px-4 gap-4 py-3 flex items-center tablet-s:items-start justify-between bg-lake-lime-500 tablet-s:flex-col tablet-s:gap-2 overflow-hidden">
      <div className="flex flex-col gap-1 w-max tablet-s:w-full">
        <h4 className="text-heading-l text-off-white-500 w-full">
          {slice.primary.title}
        </h4>
        <div className="text-bleek-lime-500 flex gap-2 items-center w-full">
          <svg
            width="11"
            height="18"
            viewBox="0 0 11 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.98019 17.3608L0.598694 6.42285L8.98019 7.57422V17.3608Z"
              fill="currentColor"
            />
            <ellipse
              cx="5.3881"
              cy="5.42681"
              rx="5.3881"
              ry="5.38043"
              fill="currentColor"
            />
          </svg>
          <PrismicRichText field={slice.primary.location} />
        </div>
      </div>

      <div className="flex gap-4 items-center justify-end min-w-64 tablet-s:min-w-0 w-min tablet-s:w-full tablet-s:flex-col">
        <span className="text-off-white-500 text-heading-m text-right tablet-s:text-left tablet-s:w-full">
          {isFilled.keyText(slice.primary.custom_date)
            ? slice.primary.custom_date
            : formatDate(slice.primary.start_date, slice.primary.end_date)}
        </span>
        {/* <Button variant="primary" size="l" className="tablet-s:w-full">
          <span className="tablet-s:inline hidden">Read more</span>
          <Icon name="arrow" size={IconSize.Small} />
        </Button> */}
      </div>
    </article>
  );
};

export default EventItem;
