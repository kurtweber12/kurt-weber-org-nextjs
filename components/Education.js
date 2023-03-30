import React from "react";
import { motion } from "framer-motion";
import EducationCard from "./EducationCard";
import { useEffect } from "react";

const Education = ({ education }) => {
	useEffect(() => {
		console.log(education);
	});
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="h-screen flex flex-col relative overflow-hidden text-left md:text-left md:flex-row max-w-full justify-evenly mx-auto items-center"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] ml-[20px] text-neutral-500 text-2xl">
				Education
			</h3>

			<div className="w-full h-[500px] flex flex-col md:flex-row md:space-x-5 md:p-10 justify-center space-y-5 md:space-y-0  px-4">
				{/* <EducationCard />
				<EducationCard /> */}
				{education?.map((item, i) => {
					return <EducationCard data={item} key={i} />;
				})}
			</div>
		</motion.div>
	);
};

export default Education;
