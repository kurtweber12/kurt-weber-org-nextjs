import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../sanity";

const EducationCard = ({ data }) => {
	return (
		<motion.div
			className="flex flex-row md:flex-col bg-neutral-900 p-4 md:w-[300px] rounded-lg md:items-center"
			initial={{ y: -100 }}
			whileInView={{ y: 0 }}
			transition={{ duration: 1.5 }}
		>
			<div className="flex flex-row justify-center my-auto md:my-4 md:mx-0 mx-4">
				<Image
					src={urlFor(data?.imageref.image).url()}
					height={100}
					width={100}
					className="rounded-full"
					alt="School"
				/>
			</div>
			<div className="flex flex-col justify-center md:mt-4 w-[80%]">
				<p className="font-light md:text-2xl text-lg pb-4 md:pb-0 md:mb-8 md:text-center">
					{data?.school}
				</p>
				<div className="md:border border-neutral-300 w-full md:mb-4" />
				<p className="italic text-sm md:text-base">{data?.degree}</p>
				<p className="pt-2 md:pt-0 text-xs md:text-base font-light tracking-wide">
					Graduation: {data?.graduation}
				</p>
			</div>
		</motion.div>
	);
};

export default EducationCard;
