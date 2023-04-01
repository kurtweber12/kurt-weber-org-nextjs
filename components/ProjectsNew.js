import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const ProjectsNew = ({ projects }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="h-screen flex flex-col relative overflow-hidden text-left md:text-left md:flex-row max-w-full md:px-10 justify-evenly mx-auto items-center"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] ml-[20px] text-neutral-500 text-2xl">
				Projects
			</h3>

			<div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-neutral-400/20 scrollbar-thumb-neutral-400/80">
				{projects?.map((project, i) => {
					return <ProjectCard key={i} project={project} />;
				})}
			</div>
		</motion.div>
	);
};

export default ProjectsNew;
