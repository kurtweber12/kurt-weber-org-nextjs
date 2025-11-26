import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className="w-full py-6 sm:py-8 flex flex-col items-center text-neutral-400 text-sm">
			<div className="flex gap-6 mb-4">
				<Link href="/privacy-policy">Privacy Policy</Link>
				<Link href="/notes">Engineering Notes</Link>
			</div>
			<p className="text-neutral-500 text-xs">
				© {new Date().getFullYear()} Kurt Weber — Lurt & Leo Labs
			</p>
		</footer>
	);
};

export default Footer;
