import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Philosophy() {
	return (
		<div className="p-10 max-w-3xl mx-auto">
			{/* SEO METADATA - CRITICAL FOR ADSENSE */}
			<Head>
				<title>App Development Philosophy | Kurt & Leo Labs</title>
				<meta
					name="description"
					content="The development philosophy behind Kurt & Leo Labs: building fast, focused, privacy-first mobile apps like Summit Loan Calculator, DriveWise, and future finance tools."
				/>
			</Head>

			<div className="mb-8">
				<Link
					href="/notes"
					className="text-gray-400 hover:text-white transition text-sm"
				>
					← Back to Notes
				</Link>
			</div>

			<h1 className="text-4xl pb-6 font-semibold leading-tight">
				My Philosophy Behind Building Simple, Niche Mobile Apps
			</h1>

			{/* INTRO */}
			<p className="pb-6 text-gray-300 leading-relaxed">
				Over the last few years of building apps and tools, I have noticed
				something about how I like to use software. The tools I enjoy the most
				are simple, fast, and focused. They do one job really well. They do not
				try to replace everything else on my phone or my computer.
			</p>

			<p className="pb-8 text-gray-300 leading-relaxed">
				That is the core idea behind <strong>Kurt &amp; Leo Labs</strong>. Right
				now I am working on apps like <em>Summit Loan Calculator</em> and{" "}
				<em>DriveWise</em>, and planning tools like a compound portfolio tracker
				and an options profit calculator. The goal is always the same. I want to
				create software that solves a real problem, loads quickly, and does not
				overwhelm the user with clutter or extra steps.
			</p>

			{/* SECTION 1: THE PROBLEM WITH MODERN APPS */}
			<h2 className="text-2xl font-bold pb-4 text-white">
				The Problem With “Do Everything” Apps
			</h2>
			<p className="pb-6 text-gray-300 leading-relaxed">
				A lot of modern apps start as a simple idea and slowly turn into a long
				list of features. Extra charts, extra tabs, pop ups, forced accounts,
				and constant prompts to subscribe. They may look impressive on
				screenshots. In practice they are slow to open, confusing to use, and
				filled with things most people never touch.
			</p>
			<p className="pb-8 text-gray-300 leading-relaxed">
				I am not trying to build that type of experience. I want my apps to feel
				like clean utilities. Open the app, type in what you need, see the
				result, and move on with your day. By keeping the scope narrow, I can
				focus on speed, clarity, and a smooth flow instead of chasing every
				possible feature.
			</p>

			{/* SECTION 2: CORE TENETS */}
			<h2 className="text-2xl font-bold pb-4 text-white">
				Core Principles I Build Around
			</h2>
			<p className="pb-4 text-gray-300 leading-relaxed">
				When I design something like Summit or DriveWise, I think about how I
				would actually use it in real life. Maybe I am at a dealership,
				comparing two payment options, or sitting at my desk planning a loan
				payoff. In those moments I want answers fast. I do not want to fight
				with the interface. Because of that, every app I build is judged by a
				few simple ideas:
			</p>

			<ul className="list-disc ml-6 pb-8 text-gray-300 space-y-2">
				<li>
					<strong>Low friction:</strong> You should be able to use the core
					features without creating an account.
				</li>
				<li>
					<strong>Fast to open:</strong> The app should feel light. It should be
					ready to use in a moment, not after a long wait.
				</li>
				<li>
					<strong>Clear layout:</strong> Inputs and outputs are easy to
					understand. You should not need a tutorial.
				</li>
				<li>
					<strong>Privacy first:</strong> Whenever possible, data stays on the
					device using local storage like SwiftData.
				</li>
				<li>
					<strong>Honest pricing:</strong> I prefer simple, one time purchases
					instead of aggressive subscription walls.
				</li>
			</ul>

			{/* SECTION 3: THE ECOSYSTEM APPROACH */}
			<h2 className="text-2xl font-bold pb-4 text-white">
				Many Small Apps Instead of One Super App
			</h2>
			<p className="pb-6 text-gray-300 leading-relaxed">
				I like the idea of having a collection of small, focused apps instead of
				one giant super app. A loan calculator, a lease versus loan comparison
				tool, a compound portfolio tracker, and an options profit calculator all
				solve related but different problems. Forcing them into one app would
				make everything more complicated.
			</p>
			<p className="pb-6 text-gray-300 leading-relaxed">
				By keeping each tool separate, I can design it around its exact use
				case. Summit can focus on clean amortization schedules and payoff
				charts. DriveWise can focus on comparing total cost and flexibility
				between leasing and financing. A future compound tracker can focus on
				deposits, dividends, and growth. Users can choose only the tools they
				actually need and keep their home screen clean.
			</p>

			{/* SECTION 4: HOW THIS FITS WITH MY OTHER PROJECTS */}
			<h2 className="text-2xl font-bold pb-4 text-white">
				How This Fits With My Other Projects
			</h2>
			<p className="pb-6 text-gray-300 leading-relaxed">
				Outside of mobile apps, I also like working on things like trading
				tools, data projects, and hardware experiments with microcontrollers and
				LEDs. A lot of these ideas will stay on the desktop or in personal
				scripts. Some of them may eventually turn into mobile tools that regular
				users can benefit from, especially around tracking money, planning
				payments, or understanding risk.
			</p>
			<p className="pb-8 text-gray-300 leading-relaxed">
				Building in small, focused pieces keeps everything manageable. I can
				ship one app, improve it, then move to the next idea. Instead of getting
				stuck in one huge project that never feels finished, I get to keep
				learning, keep shipping, and keep creating tools that feel useful in
				real life.
			</p>

			<hr className="border-gray-700 mb-8" />

			<p className="text-gray-400 italic text-sm">
				This note is part of documenting that process. If you are interested in
				app development, finance tools, or building small utilities that
				actually get used, I hope this gives you some ideas. And if you found
				this through one of my apps, thank you for checking them out.
			</p>
		</div>
	);
}
