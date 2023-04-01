import React from "react";
import { delay, motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "next/image";

import gradpic from "../public/DSC04692.jpg";
import Link from "next/link";
import BackgroundCircles from "./BackgroundCircles";
import { urlFor } from "../sanity";

const Hero = ({ image }) => {
	const [text, count] = useTypewriter({
		words: ["", "UF grad", "Loves to learn", "Hockey fan"],
		loop: true,
		delaySpeed: 2000,
	});
	return (
		<div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
			<BackgroundCircles />
			<motion.div
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: 1,
				}}
				transition={{
					duration: 1,
					delay: 0.5,
				}}
			>
				<Image
					src={urlFor(image).url()}
					alt="Kurt Weber picture"
					className="rounded-full h-48 w-48"
					height={500}
					width={500}
				/>
			</motion.div>

			<div className="z-20">
				<h2 className="text-sm uppercase text-neutral-500 pd-2 tracking-[15px] ml-[15px]">
					Kurt Weber's Portfolio
				</h2>
				<h1 className="text-5xl lg:text-6xl font-semibold px-10">
					<span className="mr-2">{text}</span>
					<Cursor cursorColor="#b45309" />
				</h1>
			</div>
		</div>
	);
};

export default Hero;
