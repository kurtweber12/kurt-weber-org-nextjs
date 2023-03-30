export const fetchAboutMe = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getAbout`);

	const data = await res.json();

	return data;
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
