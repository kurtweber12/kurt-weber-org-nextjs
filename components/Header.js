import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

// add a social icon for github
// add a section with a todo list for projects
//ex: fix currency formatting with rate-rite, fix redux implementation

// inside sanity for projects
// picture for project (for the apps, its the pic used on the app store/play store)
// project name
// project description
// technologies used
// if mobile app: qr code to scan, if website: link
// pictures/screenshots
// link to github page (even if the repo is private)

const Header = () => {
	return (
		<header className="sticky top-0 max-w-6xl mx-auto z-20 p-4">
			<div className="flex items-start justify-between">
				<motion.div
					className="hidden md:flex flex-row items-center"
					initial={{
						opacity: 0,
						x: -100,
					}}
					animate={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						duration: 1.5,
					}}
				>
					<Link href="#hero">
						<button className="heroButton">Home</button>
					</Link>
					<Link href="#about">
						<button className="heroButton">About</button>
					</Link>
					<Link href="#education">
						<button className="heroButton">Education</button>
					</Link>
					<Link href="#courses">
						<button className="heroButton">Courses</button>
					</Link>
					<Link href="#skills">
						<button className="heroButton">Skills</button>
					</Link>
					<Link href="#projects">
						<button className="heroButton">Projects</button>
					</Link>
				</motion.div>

				<motion.div
					className="flex flex-row items-center cursor-pointer"
					initial={{
						opacity: 0,
						x: 100,
					}}
					animate={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						duration: 1.5,
					}}
				>
					<SocialIcon
						bgColor="transparent"
						fgColor="#737373"
						url="https://github.com/kurtweber12"
					/>
					<div className="border-r border-[#737373] h-8" />
					<SocialIcon
						bgColor="transparent"
						fgColor="#737373"
						url="https://www.linkedin.com/in/kurt-weber-48153814a/"
					/>
					<div className="border-r border-[#737373] h-8" />
					<Link href="#contact" className="flex flex-row flex-shrink-0">
						{/* <p className="text-[#737373] text-xl font-light tracking-wider pl-2">
							Contact
						</p> */}
						<EnvelopeIcon className="h-8 w-8 mx-2 " color="#737373" />
					</Link>
				</motion.div>
			</div>
			<motion.div
				className="border-b border-neutral-500"
				initial={{
					opacity: 0,
					y: 10,
				}}
				animate={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					duration: 1.5,
					delay: 1.5,
				}}
			/>
		</header>
	);
};

export default Header;
