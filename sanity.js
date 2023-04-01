import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const config = {
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
	useCdn: true,
};

export const sanityClient = createClient(config);

export const urlFor = (source) => {
	return imageUrlBuilder(config).image(source);
};
