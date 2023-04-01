// import { groq } from "next-sanity";
// import { sanityClient } from "../../sanity";

// const query = groq`
//     *[_type == 'education']{
//         school, priority, degree, graduation, imageref->
//     }
// `;

// export default async function handler(req, res) {
// 	const education = await sanityClient.fetch(query);
// 	res.status(200).json({ education });
// }
