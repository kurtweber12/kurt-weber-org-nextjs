import React from "react";
import { motion } from "framer-motion";
import CourseCard from "./CourseCard";

const Courses = ({ courses }) => {
	courses.sort(function (a, b) {
		if (a.number < b.number) {
			return -1;
		}
		if (a.number > b.number) {
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
				Courses
			</h3>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 px-4">
				{courses?.map((course, i) => {
					return <CourseCard course={course} key={i} />;
				})}
			</div>
		</motion.div>
	);
};

export default Courses;
