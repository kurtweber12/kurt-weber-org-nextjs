import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function ExploringHardware() {
	return (
		<div className="p-10 max-w-3xl mx-auto">
			<Head>
				<title>
					Exploring Hardware: ESP32, Pico W, and Nano | Kurt & Leo Labs
				</title>
				<meta
					name="description"
					content="My journey back into electronics using the ESP32, Raspberry Pi Pico W, and Arduino Nano. Re-learning the basics of circuits, firmware, and building physical props."
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
				Exploring Hardware: ESP32, Pico W, and the Arduino Nano
			</h1>

			<p className="pb-6 text-gray-300 leading-relaxed">
				Over the last year I started getting more interested in hardware again,
				especially small electronics projects and microcontrollers. Most of my
				work is in software, but experimenting with different boards like the
				ESP32 and the Raspberry Pi Pico W has brought me back to the hardware
				world. It has been fun to see how software and electronics can connect
				together in real ways. I like building things I can actually hold, not
				just things on a screen.
			</p>

			<p className="pb-8 text-gray-300 leading-relaxed">
				It is a little ironic because I originally started college as an
				electrical engineering major (and took Circuits I and Digital Logic)
				before switching to industrial engineering and eventually moving fully
				into software. Now, years later, I am back to reading about circuits,
				voltages, and components. It feels like everything has come full circle,
				even if I have to re-learn a lot of the basics.
			</p>

			<h2 className="text-2xl font-bold pb-4 text-white">
				Choosing the Right Board
			</h2>

			<p className="pb-6 text-gray-300 leading-relaxed">
				I have been experimenting with a few different microcontrollers, and
				each one fits a different purpose for me:
			</p>

			<ul className="list-disc ml-6 pb-8 text-gray-300 space-y-2">
				<li>
					<strong>ESP32:</strong> This is my go-to for anything that needs Wi-Fi
					or Bluetooth. It is fast and cheap, making it perfect for smart home
					projects or web-connected displays.
				</li>
				<li>
					<strong>Raspberry Pi Pico W:</strong> I really enjoy using this with
					MicroPython. It feels very approachable, and the dual-core processor
					is surprisingly powerful for handling tasks while maintaining a Wi-Fi
					connection.
				</li>
				<li>
					<strong>Arduino Nano:</strong> I still use the Nano for simple,
					offline logic. It is reliable, has 5V logic which works well with
					certain LED strips, and is incredibly compact for small props.
				</li>
			</ul>

			<h2 className="text-2xl font-bold pb-4 text-white">
				Projects I Want to Build
			</h2>

			<p className="pb-6 text-gray-300 leading-relaxed">
				Some of the projects I am exploring involve custom lighting, props, and
				display pieces. For example, I want to build LED-based desk accessories,
				controlled lighting systems, sound-reactive lamps, and even themed props
				like the Juggernog machine replica.
			</p>

			<p className="pb-8 text-gray-300 leading-relaxed">
				I am currently looking at how to integrate the Pico W or ESP32 into
				custom PCB designs. Instead of jamming a full development board into a
				case, I want to design boards where the microcontroller mounts directly
				to the PCB, making the final product cleaner and more professional. It
				is a big jump in difficulty, but that is the part I find most exciting.
			</p>

			<h2 className="text-2xl font-bold pb-4 text-white">
				Learning the Fundamentals Again
			</h2>

			<p className="pb-6 text-gray-300 leading-relaxed">
				Even though I enjoy working with these boards, I realized I need a
				stronger foundation in electronics if I want to design safe and reliable
				projects. Things like managing power correctly, handling different
				voltages (3.3V vs 5V), and understanding component values all matter
				once you move beyond a breadboard. So I picked up the book{" "}
				<em>Practical Electronics for Inventors</em> to learn more about the
				fundamentals.
			</p>

			<p className="pb-8 text-gray-300 leading-relaxed">
				It has been helpful to revisit concepts like Ohm’s law, current flow,
				and reading schematics. Learning these fundamentals again gives me the
				confidence to eventually design my own carrier boards for the Nano or
				Pico and understand exactly what is happening in the circuit.
			</p>

			<h2 className="text-2xl font-bold pb-4 text-white">My Bench Setup</h2>

			<p className="pb-4 text-gray-300 leading-relaxed">
				Since getting back into this, I have started building out a small
				electronics bench to handle both the coding and the assembly side of
				things:
			</p>

			<ul className="list-disc ml-6 pb-8 text-gray-300 space-y-2">
				<li>
					<strong>Microcontrollers:</strong> ESP32 Dev Kit V1, Raspberry Pi Pico
					W, Arduino Nano (Clones & Originals).
				</li>
				<li>
					<strong>IDE:</strong> VS Code (PlatformIO) for C++ projects and Thonny
					for MicroPython.
				</li>
				<li>
					<strong>Design:</strong> Fusion 360 for 3D printed enclosures and
					mounting brackets.
				</li>
				<li>
					<strong>Power:</strong> Bench power supply for testing LED strips at
					higher amperages.
				</li>
			</ul>

			<hr className="border-gray-700 mb-8" />

			<p className="text-gray-400 italic text-sm">
				As I continue swapping between the Pico W, Nano, and ESP32, I will keep
				documenting my progress here. This is only the beginning of my hardware
				journey, and I am excited to see where it leads.
			</p>
		</div>
	);
}
