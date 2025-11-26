import React from "react";
import Link from "next/link";
// garbage comment

const NotesIndex = () => {
    const notes = [
        {
            title: "The Kurt & Leo Labs Philosophy",
            slug: "philosophy",
            excerpt:
                "Why I like building tools, learning new things, and turning ideas into simple apps or physical products.",
            date: "2025-11-26",
            tag: "About Me",
        },
        {
            title: "Why I Build a Collection of Simple Finance Apps",
            slug: "why-i-build-simple-finance-apps",
            excerpt:
                "How I design clean, fast tools like Summit and LeaseLimit, and why I prefer focused finance apps over one big super app.",
            date: "2025-11-26",
            tag: "Product Philosophy",
        },
        {
            title: "My Plan for the Compound Portfolio Tracker",
            slug: "compound-tracker-plan",
            excerpt:
                "A breakdown of how I want to build my portfolio tracker using massive.io data, Spring Boot, and a backend-first approach for reliability and scale.",
            date: "2025-11-26",
            tag: "App Roadmap",
        },
        {
            title: "Learning ML and My Plans for Future Finance Tools",
            slug: "learning-ml-and-future-tools",
            excerpt:
                "A look at how I'm self-learning machine learning and experimenting with project ideas like sentiment analysis and insider trading tools.",
            date: "2025-11-26",
            tag: "Learning Journey",
        },
        {
            title: "Exploring Hardware, ESP32 Projects, and My Return to Electronics",
            slug: "exploring-hardware-and-esp32",
            excerpt:
                "How experimenting with ESP32 projects led me back into hardware design, PCB ideas, and learning electronics fundamentals again.",
            date: "2025-11-26",
            tag: "Hardware",
        },
        {
            title: "How I Think About UI and UX Design",
            slug: "ui-ux-philosophy",
            excerpt:
                "My approach to UI and UX design, how I find inspiration, and why I like each app to feel unique as I improve my visual design skills.",
            date: "2025-11-26",
            tag: "Design",
        },
    ];

    return (
        <div className="p-10 max-w-3xl mx-auto">
            <h1 className="text-4xl pb-3 font-semibold">Notes & Ideas</h1>
            <p className="pb-8 text-gray-300">
                A living collection of development logs, app ideas, hardware
                experiments, and thoughts behind Kurt & Leo Labs projects.
            </p>

            <div className="space-y-8">
                {notes.map((note) => (
                    <Link key={note.slug} href={`/notes/${note.slug}`}>
                        <div className="p-6 mb-4 bg-white/5 hover:bg-white/10 rounded-xl transition cursor-pointer">
                            <p className="text-xs uppercase tracking-wide text-gray-400 pb-1">
                                {note.tag} - {note.date}
                            </p>
                            <h2 className="text-2xl pb-2 font-medium">
                                {note.title}
                            </h2>
                            <p className="text-gray-300">{note.excerpt}</p>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-12 text-center text-gray-500 text-sm">
                <Link href="/privacy-policy">Privacy Policy</Link>
                <span className="px-2">•</span>
                <Link href="/contact">Contact</Link>
            </div>
        </div>
    );
};

export default NotesIndex;
