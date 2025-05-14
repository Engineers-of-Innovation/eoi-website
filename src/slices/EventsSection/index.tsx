import { createClient } from "@/prismicio";
import {
  PrismicText,
  SliceZone,
  type SliceComponentProps,
} from "@prismicio/react";

import EventItem from "../EventItem";
import { EventSectionImage } from "@/components/atoms/EventSectionImage";

import { type Content } from "@prismicio/client";

export type EventsSectionProps =
  SliceComponentProps<Content.EventsSectionSlice>;

const EventsSection = async ({
  slice,
  context,
}: EventsSectionProps): Promise<JSX.Element> => {
  const client = createClient();
  const { data } = await client.getByUID("events", "races");

  return (
    <section className="px-8 pb-20 max-w-7xl mx-auto tablet-m:px-4" id="events">
      <article
        className="
        bg-lake-lime-500 text-off-white-500 rounded-[60px]
        overflow-hidden
        border-b-[20px] border-b-ehbo-orange-500 flex gap-10 items-stretch
        py-20 px-20
        desktop-s:px-12 desktop-s:py-16 desktop-s:rounded-[50px] desktop-s:flex-col-reverse
        tablet-l:px-8 tablet-l:py-12 tablet-l:rounded-[40px] tablet-l:border-b-[12px]
        tablet-m:p-0
        "
      >
        <div className="flex flex-col gap-2 justify-between tablet-m:px-6 tablet-m:pb-14">
          <div className="flex flex-col gap-2">
            <h2 className="text-heading-4-xl">{slice.primary.title}</h2>
            <p className="text-body-m tablet-s:text-body-m text-lake-lime-100 mb-6 leading-normal text-pretty max-w-[60ch]">
              <PrismicText field={slice.primary.description} />
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-heading-xl font-heading">
              {slice.primary.subtitle}
            </p>
            <SliceZone
              slices={data.slices}
              components={{
                event_item: EventItem,
              }}
            />
          </div>
        </div>

        <aside className="max-w-[588px] w-full h-auto relative rounded-lg overflow-hidden desktop-s:w-full desktop-s:max-w-none">
          <EventSectionImage image={slice.primary.image} />
        </aside>
      </article>
    </section>
  );
};

export default EventsSection;
