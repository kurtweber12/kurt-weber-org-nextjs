import Link from "next/link";
import React from "react";

const Apps = () => {
	return (
		<main className="flex flex-col p-10">
			<h1 className="text-4xl pb-6 underline">Apps</h1>
			<div className="flex flex-col items-start space-y-2">
				<button>
					<Link href="/apps/lease-limit">
						<h2 className="text-2xl border rounded-xl w-48 py-2 hover:text-green-600 hover:border-green-600 transition-all bg-neutral-900">
							Lease Limit
						</h2>
					</Link>
				</button>
				<button>
					<Link href="/apps/rate-rite">
						<h2 className="text-2xl border rounded-xl w-48 py-2 hover:text-green-600 hover:border-green-600 transition-all bg-neutral-900">
							Rate Rite
						</h2>
					</Link>
				</button>
				<button>
					<Link href="/apps/noise-maker-academy">
						<h2 className="text-2xl border rounded-xl w-48 py-2 hover:text-green-600 hover:border-green-600 transition-all bg-neutral-900">
							Noise Maker Academy
						</h2>
					</Link>
				</button>
			</div>
			{/* <p>
				We do not collect any data as a result of using or downloading our
				application.
			</p> */}
		</main>
	);
};

export default Apps;
