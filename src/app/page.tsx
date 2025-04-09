import type { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";

// Slices
import { components } from "@/slices";

// Components
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import SmoothScroll from "@/components/organisms/SmoothScroll";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("home");
  const navigation = await client.getSingle("navigation");
  const footer = await client.getSingle("footer");

  return (
    <>
      <Navigation navigation={navigation} />
      <SmoothScroll>
        <SliceZone components={components} slices={page.data.slices} />
        <Footer socials={footer.data.socials} title={footer.data.title ?? ""} />
      </SmoothScroll>
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("home");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
