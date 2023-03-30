import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const query = groq`
    *[_type == 'skills']{
        title, imageref->
    }
`;

export default async function handler(req, res) {
	const skills = await sanityClient.fetch(query);
	res.status(200).json({ skills });
}
