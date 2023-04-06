import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import SkillCard from "./SkillCard";
import { useEffect } from "react";

const Skills = ({ skills }) => {
	// useEffect(() => {
	// 	console.log("Skills");
	// 	console.log(skills);
	// });
	skills.sort(function (a, b) {
		if (a.title < b.title) {
			return -1;
		}
		if (a.title > b.title) {
			return 1;
		}
		return 0;
	});
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="flex relative flex-col xl:px-10 min-h-screen items-center mx-auto pt-48 pb-96"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] ml-[20px] text-neutral-500 text-2xl">
				Skills
			</h3>
			<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5">
				{skills?.map((skill, i) => {
					return <SkillCard skill={skill} key={i} />;
				})}
			</div>
		</motion.div>
	);
};

export default Skills;
