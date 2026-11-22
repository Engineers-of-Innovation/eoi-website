import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import {
  getJobOpeningsPage,
  getVisibleJobOpenings,
} from "@/utils/helpers/getJobOpenings";

// Slices
import { components } from "@/slices";

// Components
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import SmoothScroll from "@/components/organisms/SmoothScroll";

export default async function JobsPage() {
  const page = await getJobOpeningsPage();

  if (!page) {
    notFound();
  }

  const client = createClient();
  const navigation = await client.getSingle("navigation");
  const footer = await client.getSingle("footer");
  const hasOpenings = getVisibleJobOpenings(page).length > 0;
  const headerSlices = page.data.slices.filter(
    (slice) => slice.slice_type !== "job_opening",
  );
  const openingSlices = page.data.slices.filter(
    (slice) => slice.slice_type === "job_opening",
  );

  return (
    <>
      <Navigation navigation={navigation} startInverted />
      <SmoothScroll>
        <main>
          <SliceZone components={components} slices={headerSlices} />
          <div className="py-12">
            <SliceZone components={components} slices={openingSlices} />
            {!hasOpenings && (
              <p className="px-4 py-8 text-center text-body-l text-lake-lime-300 max-w-[60ch] mx-auto text-pretty">
                There are no open positions at the moment. Check back soon!
              </p>
            )}
          </div>
          <Footer
            socials={footer.data.socials}
            title={footer.data.title ?? ""}
          />
        </main>
      </SmoothScroll>
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await getJobOpeningsPage();

  return {
    title: page?.data.meta_title ?? "Job openings",
    description: page?.data.meta_description,
  };
}
