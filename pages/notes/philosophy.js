import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Philosophy() {
	return (
		<div className="p-10 max-w-3xl mx-auto">
			<Head>
				<title>The Kurt & Leo Labs Philosophy | About Me</title>
				<meta
					name="description"
					content="A personal introduction to Kurt & Leo Labs. Why I like building software and physical products, and how I approach learning and creating new ideas."
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
				The Kurt & Leo Labs Philosophy
			</h1>

			<p className="pb-6 text-gray-300 leading-relaxed">
				I have always liked making things. When I was younger it was gaming
				stuff, small projects, and tinkering. As I got older I became more
				interested in technology, finance, data, and building tools that help
				people understand things in a simple way. I enjoy using tools that are
				fast and easy to understand, and I like creating that same experience in
				my own work.
			</p>

			<p className="pb-8 text-gray-300 leading-relaxed">
				Kurt and Leo Labs is a place for all of that. It is my home for the
				things I build, whether they are mobile apps, data tools, or physical
				products. I enjoy learning new skills and then putting those skills into
				something real. Sometimes that means writing code. Sometimes it means 3D
				printing something or working with an ESP32. The process of learning and
				building is what keeps me interested.
			</p>

			<h2 className="text-2xl font-bold pb-4 text-white">
				Why I Like Building Tools
			</h2>
			<p className="pb-6 text-gray-300 leading-relaxed">
				I like building tools that give simple answers. If I want to check a
				loan, compare a lease, calculate investment growth, or test a trading
				idea, I want to press a few buttons and get a clear result. A lot of
				apps today make this more complicated than it needs to be. They add too
				many steps or too many screens. I enjoy creating something that feels
				clean. You open it, type something in, and get the result.
			</p>

			<p className="pb-8 text-gray-300 leading-relaxed">
				This is why I build things like Summit Loan Calculator, DriveWise, and a
				compound portfolio tracker. These tools help me in my daily life. I like
				understanding numbers, tracking progress, and seeing how different
				choices change an outcome. If a tool helps me, there is a good chance it
				can help someone else, and that motivates me to finish it.
			</p>

			<h2 className="text-2xl font-bold pb-4 text-white">
				Making Physical Products
			</h2>
			<p className="pb-6 text-gray-300 leading-relaxed">
				I also enjoy building physical things. I like working with 3D printers,
				electronics, and LEDs. I have ideas for props, stands, LED lamps, and
				display pieces. I want to keep exploring how software and hardware can
				work together. I think it is fun to build something, power it on, and
				see it actually work in real life.
			</p>

			<p className="pb-8 text-gray-300 leading-relaxed">
				Some of these projects may turn into products that I can release or sell
				in the future. Others may stay as personal projects. Either way, they
				help me learn new skills, and they help me understand hardware at a
				deeper level. That eventually improves my software work too.
			</p>

			<h2 className="text-2xl font-bold pb-4 text-white">
				Learning and Building Over Time
			</h2>
			<p className="pb-6 text-gray-300 leading-relaxed">
				My goal is to keep learning. I enjoy taking on new challenges, like
				learning SwiftUI, Spring Boot, machine learning, Unity, Unreal Engine,
				or electronics. I like understanding how things work. I find that when I
				stay curious, I create better ideas and better tools.
			</p>

			<p className="pb-8 text-gray-300 leading-relaxed">
				Over time I want to grow Kurt and Leo Labs into a full collection of
				tools and products. Some will be simple apps. Some will be larger tools.
				Some may be physical items that I can ship. I am not trying to build a
				massive company. I just like creating things that are useful, clean, and
				enjoyable to use.
			</p>

			<hr className="border-gray-700 mb-8" />

			<p className="text-gray-400 italic text-sm">
				This note is the start of documenting that journey. If you are
				interested in building things or you enjoy simple tools that help you
				understand your finances or projects, I hope this gives you a good idea
				of what Kurt and Leo Labs is about.
			</p>
		</div>
	);
}
