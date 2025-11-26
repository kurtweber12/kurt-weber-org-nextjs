import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function LearningMLAndFutureTools() {
	return (
		<div className="p-10 max-w-3xl mx-auto">
			<Head>
				<title>
					Learning ML and My Plans for Future Finance Tools | Kurt & Leo Labs
				</title>
				<meta
					name="description"
					content="How I'm learning machine learning through Georgia Tech's OMSCS and personal projects like sentiment analysis and insider trading tools."
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
				Learning ML and My Plans for Future Finance Tools
			</h1>

			<p className="pb-6 text-gray-300 leading-relaxed">
				I have been spending more time learning machine learning, both through
				personal projects and through my master's program at Georgia Tech. I am
				enrolled in the OMSCS program, and a lot of the classes I have taken
				have pushed me to understand data, modeling, and evaluation in a deeper
				way. Studying ML in grad school has given me a better foundation, and
				building my own tools has helped me practice those ideas in real ways.
			</p>

			<p className="pb-8 text-gray-300 leading-relaxed">
				I enjoy learning by building. When I have a real project idea, it keeps
				me motivated to understand the concepts behind it. Machine learning fits
				perfectly with the type of finance tools I want to build under Kurt and
				Leo Labs, so combining school work with personal projects has been a
				great way to learn faster.
			</p>

			<h2 className="text-2xl font-bold pb-4 text-white">
				How Georgia Tech Has Helped My ML Journey
			</h2>

			<p className="pb-6 text-gray-300 leading-relaxed">
				Some of the courses in my program have already helped a lot. In Machine
				Learning, I built things like decision tree learners, random forests,
				and bagging algorithms. I also worked on Q learning in another course,
				which introduced me to reinforcement learning and how agents learn from
				rewards. In Data and Visual Analytics, I worked on data cleaning,
				feature selection, correlations, and modeling pipelines. These
				assignments forced me to think carefully about how data flows and how
				models need to be evaluated.
			</p>

			<p className="pb-8 text-gray-300 leading-relaxed">
				I also started learning more about NLP, embeddings, and sentiment
				scoring. Even though I am still improving in those areas, the class work
				has given me the confidence to start applying what I know to my own
				ideas. It also showed me where I need to shape up. For example, I want
				to get better at deep learning, evaluation metrics, and handling large
				text datasets. These skills will help me build some of the more advanced
				tools I want to create in the future.
			</p>

			<h2 className="text-2xl font-bold pb-4 text-white">
				The WallStreetBets Sentiment Analyzer
			</h2>

			<p className="pb-6 text-gray-300 leading-relaxed">
				One of the first ML projects I want to build is a sentiment analysis
				tool for WallStreetBets. Every earnings season, there is a lot of
				chatter about certain stocks. Some posts are hype, some are fear, and
				some actually contain useful insights. The idea is to gather posts,
				score the sentiment, and show how the mood shifts before earnings.
			</p>

			<p className="pb-8 text-gray-300 leading-relaxed">
				Even if the predictions are not perfect, it would still be valuable to
				see patterns. Building this tool would help me practice NLP, text
				embeddings, and classification models. It would also be fun to compare
				sentiment to actual price movements, especially for earnings plays. This
				ties in perfectly with my interest in data, trading, and machine
				learning.
			</p>

			<h2 className="text-2xl font-bold pb-4 text-white">
				The Insider Purchaser Recommendation Tool
			</h2>

			<p className="pb-6 text-gray-300 leading-relaxed">
				Another idea I have been working on is an insider purchaser tool. When
				executives or directors buy their own stock, it can sometimes signal
				confidence. I want to track insider buys, rank them, and show the most
				interesting ones. The next step would be using ML to try and classify
				which ones might lead to short term moves, longer term gains, or which
				ones should be ignored.
			</p>

			<p className="pb-8 text-gray-300 leading-relaxed">
				The scope of this idea might be large, and I may need to simplify it
				along the way. That is part of the learning process. Academic projects
				at Georgia Tech have shown me that most ideas start bigger than they end
				up. You refine the scope, adjust the problem, and build step by step.
				The same approach applies here. Even a smaller version of this tool
				would still be useful.
			</p>

			<h2 className="text-2xl font-bold pb-4 text-white">
				Learning ML By Building Real Tools
			</h2>

			<p className="pb-6 text-gray-300 leading-relaxed">
				The best way I learn is by working through real problems. ML is easier
				to understand when I can connect the concepts to something practical.
				The assignments in my classes have given me a strong base, but the
				personal projects help me apply everything. I get to practice what I
				learn, try new ideas, and see how models perform in real situations.
			</p>

			<p className="pb-8 text-gray-300 leading-relaxed">
				Even if these ideas change or grow into something different, the
				learning stays with me. Every project teaches me something about data,
				modeling, or design. That is what keeps me moving forward. I am excited
				to keep improving and exploring more advanced ML topics as I build new
				tools for Kurt and Leo Labs.
			</p>

			<hr className="border-gray-700 mb-8" />

			<p className="text-gray-400 italic text-sm">
				As I learn more about ML and continue through my master's program, I
				will keep documenting my progress here. These projects are still early,
				but they have already helped me become a stronger developer.
			</p>
		</div>
	);
}
