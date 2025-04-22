import {
  createClient as baseCreateClient,
  type ClientConfig,
  type Route,
} from "@prismicio/client";
import { enableAutoPreviews } from "@prismicio/next";
import sm from "../slicemachine.config.json";

export const repositoryName = sm.repositoryName;

// TODO: Update with your route resolvers.
const routes: Route[] = [
  { type: "home", path: "/" },
  // { type: "page", path: "/:uid" },
  // { type: "blog_post", path: "/blog/:uid" },
];

export function createClient(config: ClientConfig = {}) {
  const client = baseCreateClient(repositoryName, {
    routes,
    fetchOptions:
      process.env.NODE_ENV === "production"
        ? { next: { tags: ["prismic"] }, cache: "force-cache" }
        : { next: { revalidate: 5 } },
    ...config,
  });

  enableAutoPreviews({ client });

  return client;
}
