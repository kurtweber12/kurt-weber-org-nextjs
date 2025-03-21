import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
	const projects = [1, 2, 3, 4, 5];
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="relative h-screen flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] ml-[20px] text-neutral-500 text-2xl">
				Projects
			</h3>

			<div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-neutral-400/20 scrollbar-thumb-neutral-400/80">
				{projects.map((project, i) => (
					<div
						className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center h-screen"
						key={i}
					>
						<motion.img
							initial={{ y: -300, opacity: 0 }}
							transition={{ duration: 1.2 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							src="https://res.cloudinary.com/practicaldev/image/fetch/s--i_xQkWHO--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/207/23eb8886-4b62-4a01-ac2b-7aafb500ad26.png"
							alt="project"
						/>
						<div className="space-y-10 px-0 md:px-10 max-w-6xl">
							<h4 className="text-4xl font-semibold text-center">
								<span className="underline decoration-[#f7ab0a]/50">
									Case Study {i + 1} of {projects.length}:
								</span>{" "}
							</h4>

							<p className="text-lg ">This is the project summary</p>
						</div>
					</div>
				))}
			</div>

			<div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12" />
		</motion.div>
	);
};

export default Projects;
