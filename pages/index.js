import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import GoToTop from "../components/GoToTop";
import Education from "../components/Education";
import {
	fetchAboutMe,
	fetchEducation,
	fetchProjects,
	fetchSkills,
	fetchContact,
} from "../fetchSanity/fetchAboutMe";
import { useEffect } from "react";
import ProjectsNew from "../components/ProjectsNew";

export const getStaticProps = async () => {
	const aboutMe = await fetchAboutMe();
	const skills = await fetchSkills();
	const education = await fetchEducation();
	const projects = await fetchProjects();
	const contact = await fetchContact();

	return {
		props: {
			aboutMe,
			skills,
			education,
			projects,
			contact,
		},
	};
};

export default function Home({
	aboutMe,
	skills,
	education,
	projects,
	contact,
}) {
	return (
		<div
			className="h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scroll-smooth z-0 scrollbar scrollbar-track-neutral-400/20
		scrollbar-thumb-neutral-400/80"
		>
			<Head>
				<title>Kurt Weber Portfolio</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main>
				<section id="hero" className="snap-start">
					<Hero image={aboutMe[0]?.imageref.image} />
				</section>

				<section id="about" className="snap-start">
					<About
						text={aboutMe[0]?.body[0].children[0].text}
						image={aboutMe[0]}
					/>
				</section>

				<section id="education" className="snap-center">
					<Education education={education} />
				</section>

				{/* <section id="experience" className="snap-center">
					<Experience />
				</section> */}

				<section id="skills" className="snap-start">
					<Skills skills={skills} />
				</section>

				{/* <section id="projects" className="snap-start">
					<Projects />
				</section> */}
				<section id="projects" className="snap-start">
					<ProjectsNew projects={projects} />
				</section>

				<section id="contact" className="snap-start">
					<ContactMe contact={contact[0]} />
				</section>
			</main>
			<GoToTop />
		</div>
	);
}
