import { createClient } from "@sanity/client";
import { defaultPrograms } from "@/lib/site-data";

export type Program = {
  id: string;
  title: string;
  audience: string;
  price: number;
  description: string;
};

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET ?? "production";
const apiVersion = process.env.SANITY_API_VERSION ?? "2026-06-29";

const sanityClient =
  projectId && dataset
    ? createClient({
        projectId,
        dataset,
        apiVersion,
        useCdn: true,
      })
    : null;

export async function getPrograms(): Promise<Program[]> {
  if (!sanityClient) {
    return defaultPrograms;
  }

  try {
    const programs = await sanityClient.fetch<Program[]>(
      `*[_type == "program" && defined(slug.current)] | order(title asc) {
        "id": slug.current,
        title,
        audience,
        price,
        description
      }`,
      {},
      { next: { revalidate: 120 } },
    );

    return programs.length > 0 ? programs : defaultPrograms;
  } catch {
    return defaultPrograms;
  }
}
