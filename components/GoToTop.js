import Link from "next/link";
import React from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

const GoToTop = () => {
	return (
		<div className="sticky bottom-32 sm:bottom-4 flex flex-row justify-center">
			<Link
				href="#hero"
				className="flex flex-row bg-neutral-900 py-2 px-4 rounded-full opacity-100 md:opacity-40 md:hover:opacity-100"
			>
				<ArrowUpIcon className="h-6 text-[#f7ab0a]" />
				<div className="text-[#f7ab0a]">Top</div>
			</Link>
		</div>
	);
};

export default GoToTop;
