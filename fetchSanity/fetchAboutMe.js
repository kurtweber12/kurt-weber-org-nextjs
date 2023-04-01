import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

export const fetchAboutMe = async () => {
	const query = groq`
		*[_type == "aboutme"]{
			..., imageref->
		}
	`;

	const about = await sanityClient.fetch(query).json({ about });

	//const data = await about.json();

	return about;
};

export const fetchSkills = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);

	const data = await res.json();

	return data;
};

export const fetchEducation = async () => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/getEducation`
	);

	const data = await res.json();

	return data;
};

export const fetchProjects = async () => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`
	);

	const data = await res.json();
	return data;
};

export const fetchContact = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getContact`);

	const data = await res.json();
	return data;
};
