import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const query = groq`
    *[_type == 'contact']{
        ...
    }
`;

export default async function handler(req, res) {
	const contact = await sanityClient.fetch(query);
	res.status(200).json({ contact });
}
