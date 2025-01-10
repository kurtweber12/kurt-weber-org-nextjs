import React from "react";
import { motion } from "framer-motion";
import { AboutMe } from "../fetchSanity/fetchAboutMe";

import gradpic from "../public/DSC04692.jpg";
import Image from "next/image";
import { useEffect } from "react";
import { PortableText } from "@portabletext/react";

const About = ({ text, image, data }) => {
	useEffect(() => {
		console.log(data);
	}, []);
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="min-h-screen flex flex-col relative md:px-10 items-center "
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] ml-[20px] text-neutral-500 text-2xl">
				About
			</h3>

			<div className="mt-32 md:mt-48 flex flex-col text-center md:text-left lg:flex-row w-[90%] md:max-w-7xl md:px-10 justify-evenly items-center lg:items-start pt-4 mb-96">
				<motion.div
					initial={{
						x: -200,
						opacity: 0,
					}}
					whileInView={{
						x: 0,
						opacity: 1,
					}}
					viewport={{ once: true }}
					transition={{
						duration: 1.2,
					}}
					className="flex-shrink-0 lg:mt-20"
				>
					<Image
						src={gradpic}
						alt="Kurt Weber"
						className="mt-2 h-56 w-56 object-cover rounded-full lg:rounded-lg md:w-64 md:h-64"
					/>
				</motion.div>
				<div className="space-y-10 px-6 md:px-10 max-w-2xl mt-8 lg:mt-0">
					<h4 className="text-4xl font-semibold ">
						Here is a{" "}
						<span className="underline decoration-[#0284c7]/70">little</span>{" "}
						background
					</h4>
					{/* <p className="font-light tracking-wide text-left bg-blue-700">
						This is a lot of random text lol This is a lot of random text lol
						This is a lot of random text lol This is a lot of random text lol
						This is a lot of random text lol This is a lot of random text lol
						This is a lot of random text lol This is a lot of random text lol of
						random text lol This is a lot of random text lol of random text lol
						This is a lot of random text lol of random text lol This is a lot of
						random text lol of random text lol This is a lot of random text lol
						of random text lol This is a lot of random text lol of random text
						lol This is a lot of random text lol of random text lol This is a
						lot of random text lol of random text lol This is a lot of random
						text lol of random text lol This is a lot of random text lol of
						random text lol This is a lot of random text lol of random text lol
						This is a lot of random text lol This is a lot of random text lol
						This is a lot of random text lol This is a lot of random text lol
						This is a lot of random text lol This is a lot of random text lol
						This is a lot of random text lol This is a lot of random text lol
						This is a lot of random text lol This is a lot of random text lol
						This is a lot of random text lol This is a lot of random text lol
						This is a lot of random text lol This is a lot of random text lol
						This is a lot of random text lol This is a lot of random text lol
						This is a lot of random text lol This is a lot of random text lol
						This is a lot of random text lol This is a lot of random text lol
						
					</p> */}
					{/* <PortableText
						value={text.body}
						className="font-light tracking-wide text-left"
					/> */}
					<div className="space-y-4">
						{data?.body?.map((block, i) => {
							return (
								<p className="font-light tracking-wide text-left" key={i}>
									{block.children?.map((child) => child.text).join(" ")}
								</p>
							);
						})}
					</div>

					{/* <p className="font-light tracking-wide text-left">{text}</p> */}
				</div>
			</div>
		</motion.div>
	);
};

export default About;
