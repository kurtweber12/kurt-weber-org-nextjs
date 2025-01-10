import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { urlFor } from "../sanity";

const CourseCard = ({ course }) => {
	// useEffect(() => {
	// 	console.log(course);
	// }, []);

	return (
		<motion.div
			className="flex flex-row items-center bg-neutral-900 p-4 rounded-lg  overflow-hidden space-x-4"
			initial={{ y: -100 }}
			whileInView={{ y: 0 }}
			transition={{ duration: 1.5 }}
		>
			<div className="w-[20%]">
				<Image
					src={urlFor(course?.imageref.image)?.url()}
					alt={`Description for ${course.name}`}
					width={100}
					height={100}
					className="h-12 w-12 object-cover rounded-md"
				/>
			</div>
			<div className="flex flex-col w-[80%]">
				<h3 className="font-light text-lg md:text-xl">{course?.name}</h3>
				<h4 className="font-light text-sm text-gray-400 ">{course?.code}</h4>
			</div>
		</motion.div>
	);
};

export default CourseCard;
