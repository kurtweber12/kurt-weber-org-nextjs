import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../sanity";
import { useState } from "react";

const ProjectCard = ({ project }) => {
	const link = project.link;
	const github = project.github;

	return (
		<article
			className="flex flex-col xl:flex-row rounded-lg items-center space-y-7 flex-shrink-0 w-[100%] md:w-[600px] xl:w-[900px] snap-center bg-neutral-700/40 p-10 opacity-100  
            md:opacity-40 hover:opacity-100 hover:cursor-pointer transition-opacity duration-200 overflow-y-hidden max-h-[500px]"
		>
			<motion.div
				initial={{
					y: -100,
					opacity: 0,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				viewport={{ once: true }}
				transition={{ duration: 1.2 }}
				className="xl:w-64"
			>
				<Image
					src={urlFor(project?.image).url()}
					alt={project.title}
					className="h-16 w-16 md:h-32 md:w-32 rounded-full object-cover object-center"
					height={100}
					width={100}
				/>
			</motion.div>

			<div className="px-0 md:px-10 xl:py-10 mx-1 overflow-y-auto">
				<h4 className="text-2xl md:text-4xl font-light pb-2">
					{project.title}
				</h4>
				<p className="tracking-wider font-thin text-sm">
					{project.body[0].children[0].text}
				</p>

				<div className="flex flex-row space-x-4 mt-8 ">
					{link && (
						<a href={project.link}>
							<div className="p-2 text-center rounded-full text-black bg-[#f7ab0a] font-bold md:shadow-md md:hover:shadow-neutral-100/50 md:hover:text-neutral-500">
								View Project
							</div>
						</a>
					)}

					{github && (
						<a href={project.github}>
							<div className="p-2 rounded-full text-black bg-[#f7ab0a] font-bold md:shadow-md md:hover:shadow-neutral-100/50 md:hover:text-neutral-500">
								Github
							</div>
						</a>
					)}
				</div>
			</div>
		</article>
	);
};

export default ProjectCard;
