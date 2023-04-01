import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

export const fetchAboutMe = async () => {
	const query = groq`
		*[_type == "aboutme"]{
			..., imageref->
		}
	`;

	const about = await sanityClient.fetch(query);

	//const data = await about.json({ about });

	return about;
};

export const fetchSkills = async () => {
	const query = groq`
		*[_type == 'skills']{
			title, imageref->
		}
	`;
	const data = await sanityClient.fetch(query);

	return data;
};

export const fetchEducation = async () => {
	const query = groq`
		*[_type == 'education']{
			school, priority, degree, graduation, imageref->
		}
	`;

	const data = await sanityClient.fetch(query);

	return data;
};

export const fetchProjects = async () => {
	const query = groq`
		*[_type == 'projects']{
			...
		}
	`;

	const data = await sanityClient.fetch(query);

	return data;
};

export const fetchContact = async () => {
	const query = groq`
		*[_type == 'contact']{
			...
		}
	`;
	const data = await sanityClient.fetch(query);
	return data;
};
