import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function UIUXPhilosophy() {
	return (
		<div className="p-10 max-w-3xl mx-auto">
			<Head>
				<title>How I Think About UI and UX Design | Kurt & Leo Labs</title>
				<meta
					name="description"
					content="My approach to UI and UX design, how I find inspiration, and why each app I build has its own unique style."
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
				How I Think About UI and UX Design
			</h1>

			<p className="pb-6 text-gray-300 leading-relaxed">
				One of the parts of app development I enjoy the most is designing the UI
				and UX. I like building clean interfaces that are easy to understand and
				feel satisfying to use. I also like giving each app its own personality.
				Even though my apps share a similar style, I try to make each one feel
				unique in some way. Designing things this way helps me grow as a
				developer and as a visual designer.
			</p>

			<p className="pb-8 text-gray-300 leading-relaxed">
				I see every new project as a chance to improve my design skills. I like
				experimenting with different layouts, animations, and visual styles. I
				want the UI to feel simple and direct, but also smooth and polished. I
				want someone to open the app and immediately understand where to go and
				what to do next without any confusion.
			</p>

			<h2 className="text-2xl font-bold pb-4 text-white">
				How I Find Inspiration
			</h2>

			<p className="pb-6 text-gray-300 leading-relaxed">
				A lot of my inspiration comes from the apps I use every day. I pay
				attention to what works well and what feels frustrating. For example,
				Robinhood has one of the cleanest and most satisfying mobile interfaces
				I have ever used. It feels modern, light, and fast. The animations are
				smooth, and the screens are simple but powerful. On the other hand, some
				apps I use, like the Chase credit card app, feel cluttered or
				inconsistent. They work fine, but the experience is not as enjoyable.
			</p>

			<p className="pb-8 text-gray-300 leading-relaxed">
				I also watch YouTube videos about design, UI trends, and app breakdowns.
				Seeing how other designers think about spacing, color, typography, and
				structure helps me shape my own style. I like when creators explain why
				they made certain design choices. It makes it easier to understand how
				everything fits together.
			</p>

			<h2 className="text-2xl font-bold pb-4 text-white">
				Making Each App Feel Unique
			</h2>

			<p className="pb-6 text-gray-300 leading-relaxed">
				Even though I have a certain style I like—clean layouts, strong clarity,
				and simple flows—I try to give each app its own identity. Sometimes that
				means using different accent colors. Sometimes it means changing the
				layout structure or trying new components. These small differences help
				each app stand out and feel like a complete product rather than a
				template copied over from the last project.
			</p>

			<p className="pb-8 text-gray-300 leading-relaxed">
				This approach also helps me improve my design instincts. Every time I
				try something new, I learn more about what works and what does not. It
				also helps me practice making decisions quickly. Instead of endlessly
				tweaking things, I focus on creating a solid UI and improving it with
				every project I build.
			</p>

			<h2 className="text-2xl font-bold pb-4 text-white">
				Balancing Simplicity and Personality
			</h2>

			<p className="pb-6 text-gray-300 leading-relaxed">
				A big part of UI and UX design is balancing personality with clarity. I
				want the apps to feel nice to use, but the interface should never get in
				the way. Inputs should be obvious. Buttons should be clear. The user
				should not have to think hard or dig through menus to get results. This
				is something I constantly refine as I build more tools. Simplicity is
				not the same as being plain. You can still have style and personality
				while keeping the experience clean.
			</p>

			<p className="pb-8 text-gray-300 leading-relaxed">
				Over time I want to keep getting better at visualizing ideas, creating
				layouts, and designing complete experiences. Every app I build helps me
				practice this, and each project teaches me something new about how
				people interact with software. I enjoy the learning process, and I am
				excited to keep improving.
			</p>

			<hr className="border-gray-700 mb-8" />

			<p className="text-gray-400 italic text-sm">
				As I build more apps and expand Kurt and Leo Labs, I will keep exploring
				new UI and UX ideas. Design is something I always want to grow in, and
				each project gives me another chance to level up.
			</p>
		</div>
	);
}
