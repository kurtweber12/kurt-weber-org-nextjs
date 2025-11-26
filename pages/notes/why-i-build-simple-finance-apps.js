import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function WhyIBuildSimpleFinanceApps() {
	return (
		<div className="p-10 max-w-3xl mx-auto">
			<Head>
				<title>Why I Build Simple Finance Apps | Kurt & Leo Labs</title>
				<meta
					name="description"
					content="Why I prefer building simple, focused finance apps instead of large super apps. A look at how Summit, LeaseLimit, and other tools are designed for clarity, speed, and real use cases."
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
				Why I Build a Collection of Simple Finance Apps
			</h1>

			<p className="pb-6 text-gray-300 leading-relaxed">
				When I work on finance tools, I always focus on building apps that are
				simple, clean, and fast. I like using tools that do one job really well,
				so that is the style I build in. A tool should give a clear result
				without forcing the user through extra screens or confusing layouts.
				That is why I build a collection of small apps instead of one large
				super app.
			</p>

			<p className="pb-8 text-gray-300 leading-relaxed">
				Right now I am working on tools like{" "}
				<strong>Summit Loan Calculator</strong> and <strong>LeaseLimit</strong>.
				I also plan to release a compound portfolio tracker and an options
				profit calculator. Each tool has a specific purpose. When the purpose is
				clear, the design becomes cleaner and the experience becomes nicer to
				use.
			</p>

			<h2 className="text-2xl font-bold pb-4 text-white">
				The Problem With Super Apps
			</h2>

			<p className="pb-6 text-gray-300 leading-relaxed">
				A lot of finance apps try to be everything. They add too many features,
				too many screens, and too many steps. This often makes the app slow to
				open and hard to understand. You spend more time tapping through menus
				than using the actual tool.
			</p>

			<p className="pb-8 text-gray-300 leading-relaxed">
				That does not match how I like to use apps in real life. When I need a
				payment estimate, a payoff schedule, or a lease comparison, I want the
				answer right away. I do not want to deal with pop ups or forced
				accounts. I want to enter the numbers, see the results, and move on.
			</p>

			<h2 className="text-2xl font-bold pb-4 text-white">
				The Principles Behind My Apps
			</h2>

			<p className="pb-4 text-gray-300 leading-relaxed">
				When I design tools like Summit or LeaseLimit, I follow a few simple
				ideas that help keep each app focused and easy to use.
			</p>

			<ul className="list-disc ml-6 pb-8 text-gray-300 space-y-2">
				<li>
					<strong>Fast to open:</strong> The app should feel light and ready in
					a moment.
				</li>
				<li>
					<strong>Easy layout:</strong> Inputs should be clear and results
					should be obvious.
				</li>
				<li>
					<strong>Low friction:</strong> You should not need an account to use
					core features.
				</li>
				<li>
					<strong>Local storage first:</strong> I use solutions like SwiftData
					so your information stays on the device.
				</li>
				<li>
					<strong>No unnecessary features:</strong> If something does not add
					real value, it does not get added.
				</li>
			</ul>

			<h2 className="text-2xl font-bold pb-4 text-white">
				Why I Prefer Many Small Apps
			</h2>

			<p className="pb-6 text-gray-300 leading-relaxed">
				A collection of small apps gives me more control over the design and
				makes the experience better for users. Summit can focus on loan math and
				amortization. LeaseLimit can focus on calculating overage fees on a
				lease and help create track miles to prevent those fees. A future
				compound tracker can focus on deposits, growth, and progress. Each tool
				has its own space to be simple and effective.
			</p>

			<p className="pb-8 text-gray-300 leading-relaxed">
				This also makes development easier. I can ship one tool, improve it, and
				then move to the next idea. I avoid getting stuck in one giant project.
				Everything stays manageable and enjoyable to build.
			</p>

			<h2 className="text-2xl font-bold pb-4 text-white">
				A Clean Ecosystem That Feels Good To Use
			</h2>

			<p className="pb-6 text-gray-300 leading-relaxed">
				By building small apps, I can create a clean ecosystem where each tool
				does exactly what it was designed to do. Users can download only what
				they need. The apps stay fast, focused, and clear.
			</p>

			<p className="pb-8 text-gray-300 leading-relaxed">
				Over time this collection of tools will grow. Each one adds something
				helpful. Each one stays simple. And everything fits together under the
				same idea. Fast. Focused. Easy to understand.
			</p>

			<hr className="border-gray-700 mb-8" />

			<p className="text-gray-400 italic text-sm">
				If you enjoy simple finance tools or you like learning how things work,
				I hope this gives you a clear look into how I think about building the
				apps in Kurt and Leo Labs.
			</p>
		</div>
	);
}
