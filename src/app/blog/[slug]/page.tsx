import type { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Navigation } from "@/components/Navigation";
import SmoothScroll from "@/components/organisms/SmoothScroll";
import { Footer } from "@/components/Footer";

interface IPageProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: IPageProps) {
  const client = createClient();
  const page = await client.getByUID("blogpost", params.slug);
  const navigation = await client.getSingle("navigation");
  const footer = await client.getSingle("footer");

  return (
    <>
      <Navigation navigation={navigation} />
      <SmoothScroll>
        <h1>{page.uid}</h1>
        <SliceZone components={components} slices={page.data.slices} />
        <Footer socials={footer.data.socials} title={footer.data.title ?? ""} />
      </SmoothScroll>
    </>
  );
}

export async function generateMetadata({
  params,
}: IPageProps): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID("blogpost", params.slug);

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
