import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { urlFor } from "../sanity";
import { useEffect } from "react";

const SkillCard = ({ skill }) => {
	// useEffect(() => {
	// 	console.log({ skill });
	// });
	return (
		<motion.div
			//className="flex flex-col items-center bg-neutral-900 p-4 rounded-lg shadow-md md:hover:shadow-neutral-100/20 hover:md:bg-neutral-800 overflow-hidden"
			className="flex flex-col items-center bg-neutral-900 p-4 rounded-lg  overflow-hidden"
			initial={{ y: -100 }}
			whileInView={{ y: 0 }}
			transition={{ duration: 1.5 }}
		>
			<div className="h-12 w-12">
				<Image
					//src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
					src={urlFor(skill?.imageref.image)?.url()}
					alt="Skill"
					width={100}
					height={100}
					className="h-12 w-12 object-cover rounded-md"
				/>
			</div>
			<div>
				<h3 className="font-light text-lg md:text-2xl">{skill.title}</h3>
			</div>
		</motion.div>
	);
};

export default SkillCard;
