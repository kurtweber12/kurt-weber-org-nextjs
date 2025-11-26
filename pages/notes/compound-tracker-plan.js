import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function CompoundTrackerPlan() {
	return (
		<div className="p-10 max-w-3xl mx-auto">
			<Head>
				<title>
					My Plan for the Compound Portfolio Tracker | Kurt & Leo Labs
				</title>
				<meta
					name="description"
					content="A detailed breakdown of how I plan to build the Compound Portfolio Tracker, including market data, backend design, and the personal reasons behind the project."
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
				My Plan for the Compound Portfolio Tracker
			</h1>

			<p className="pb-6 text-gray-300 leading-relaxed">
				The idea for the Compound Portfolio Tracker started when I wanted a
				simple way to see how my own investments would grow over time. I have
				dividend stocks, crypto staking rewards, and covered calls that bring in
				income on different schedules. I wanted to view everything together and
				understand the long-term compounding effect. I also wanted to experiment
				with portfolio construction and see how different assets could create
				consistent monthly cash inflow that builds on itself.
			</p>

			<p className="pb-8 text-gray-300 leading-relaxed">
				There are tools online that do parts of this, but I could not find one
				that combines deposits, contributions, dividends, staking, and income in
				a way that is clean and easy to understand. That is when I decided to
				build my own tracker. It also gave me the perfect excuse to learn
				backend development with Spring Boot, which has been something I have
				wanted to dive into for a while.
			</p>

			<h2 className="text-2xl font-bold pb-4 text-white">
				Why This App Needs a Backend
			</h2>

			<p className="pb-6 text-gray-300 leading-relaxed">
				Most of the apps I build work completely on the device. Summit Loan
				Calculator and LeaseLimit do not need servers. All of their calculations
				are quick and predictable. But the Compound Portfolio Tracker needs
				reliable access to market data and dividend information that changes
				often. Stocks move. Crypto prices change. Dividends get updated. Income
				from covered calls depends on expiration cycles and premiums.
			</p>

			<p className="pb-8 text-gray-300 leading-relaxed">
				Doing all of that on the device would mean pulling APIs constantly,
				storing large amounts of data locally, and burning through rate limits.
				A backend solves this. It lets me cache data, schedule updates, reduce
				requests, and send the app exactly what it needs. It keeps the app fast
				and reduces API costs. It also makes long-term storage and cross-device
				syncing possible if I want to add those features later.
			</p>

			<h2 className="text-2xl font-bold pb-4 text-white">
				Using massive.io For Market Data
			</h2>

			<p className="pb-6 text-gray-300 leading-relaxed">
				For stock, options, and dividend data, I plan to use massive.io. It is
				fast and reliable, and it gives me the flexibility to pull historical
				prices, dividend histories, upcoming ex-dividend dates, and option
				chains. This will let the app support more advanced features like
				estimating annual income, projecting dividend growth, and tracking
				covered call strategies.
			</p>

			<p className="pb-8 text-gray-300 leading-relaxed">
				The backend can fetch and store this data on a schedule, so when the app
				requests it, everything loads instantly. This makes the app feel light
				even though the calculations behind it are more complex.
			</p>

			<h2 className="text-2xl font-bold pb-4 text-white">
				Building the Backend With Spring Boot
			</h2>

			<p className="pb-6 text-gray-300 leading-relaxed">
				I chose Spring Boot for the backend because I wanted a real project to
				learn it with, and this app was the perfect opportunity. Spring Boot is
				stable, scalable, and great for APIs and background tasks. It also has
				very good support for storing data with PostgreSQL, which I will use for
				positions, transactions, market data, and user history.
			</p>

			<p className="pb-8 text-gray-300 leading-relaxed">
				I like that the backend lets me expand the app later. I can add a web
				version, an Android version, or a desktop version and have them all
				share the same data source. That flexibility is something I wanted from
				the start.
			</p>

			<h2 className="text-2xl font-bold pb-4 text-white">
				What I Want This App To Do
			</h2>

			<p className="pb-4 text-gray-300 leading-relaxed">
				The Compound Portfolio Tracker is designed for long-term planning. I
				want it to show how investments grow with steady contributions and
				consistent income. Some of the main features I want to build include:
			</p>

			<ul className="list-disc ml-6 pb-8 text-gray-300 space-y-2">
				<li>Tracking deposits and withdrawals</li>
				<li>Tracking stock positions, average cost, and allocation</li>
				<li>Viewing contributions versus portfolio value</li>
				<li>Dividend tracking and estimated yield</li>
				<li>Crypto staking income and projected rewards</li>
				<li>Covered call income tracking</li>
				<li>Monthly income calendar</li>
				<li>Graphs that show real compounding over time</li>
				<li>Forecasting models like Monte Carlo simulations</li>
			</ul>

			<p className="pb-8 text-gray-300 leading-relaxed">
				The goal is not to create another trading app. I want this to be a tool
				that helps people understand their long-term progress. It should make
				financial planning feel clear instead of overwhelming.
			</p>

			<h2 className="text-2xl font-bold pb-4 text-white">
				A Long-Term, Evolving Project
			</h2>

			<p className="pb-6 text-gray-300 leading-relaxed">
				This app will take time to build. There are a lot of parts, and I want
				the experience to feel smooth and reliable. I am not rushing it. This is
				a long-term project that I want to support for years. It fits perfectly
				into the idea behind Kurt and Leo Labs. It is a clean, focused tool that
				solves a real problem for me, and I am sure it will help others too.
			</p>

			<p className="pb-8 text-gray-300 leading-relaxed">
				Working on this project has already helped me grow as a developer. It
				has pushed me into backend development, taught me more about data
				management, and helped me understand how real financial tools need to
				work behind the scenes. I am excited to keep building it.
			</p>

			<hr className="border-gray-700 mb-8" />

			<p className="text-gray-400 italic text-sm">
				If you are interested in long-term investing, steady income, or building
				financial tools, I hope this gives you a good picture of what the
				Compound Portfolio Tracker will become.
			</p>
		</div>
	);
}
