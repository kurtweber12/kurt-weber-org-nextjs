import React from "react";
import { delay, motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "next/image";

import gradpic from "../public/DSC04692.jpg";
import Link from "next/link";
import BackgroundCircles from "./BackgroundCircles";

const Hero = () => {
	const [text, count] = useTypewriter({
		words: [
			"",
			"Griffin sucks",
			"Stone leaves the game",
			"Lurt hates them both",
		],
		loop: true,
		delaySpeed: 2000,
	});
	return (
		<div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
			<BackgroundCircles />
			<div>
				<Image
					src={gradpic}
					alt="Kurt Weber picture"
					className="rounded-full h-48 w-48"
				/>
			</div>
			{/* <motion.div
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                transition={{
                    duration: 2,
                    delay: 2
                }}
            > */}
			<div className="z-20">
				<h2 className="text-sm uppercase text-neutral-500 pd-2 tracking-[15px] ml-[15px]">
					Software Engineer
				</h2>
				<h1 className="text-5xl lg:text-6xl font-semibold px-10">
					<span className="mr-2">{text}</span>
					<Cursor cursorColor="#b45309" />
				</h1>
				{/* <div className='pt-5'>
                    <Link href="#about">
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href="#experience">
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className='heroButton'>Projects</button> 
                    </Link>
                </div> */}
				{/* </motion.div> */}
			</div>
		</div>
	);
};

export default Hero;
