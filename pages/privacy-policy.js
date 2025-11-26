import React from "react";

const PrivacyPolicy = () => {
	return (
		<div className="p-10">
			<h1 className="text-4xl pb-6">Kurt Weber Privacy Policy</h1>

			<p className="pb-4">
				This privacy policy describes how applications and websites developed by
				Kurt Weber (“we”, “us”, “our”) handle user information.
			</p>

			<h2 className="text-2xl pb-2">Information We Collect</h2>
			<p className="pb-4">
				We do not collect any personal information directly. However, some of
				our apps or websites use third-party services that collect data
				automatically for functionality and advertising, such as:
			</p>

			<ul className="list-disc ml-6 pb-4">
				<li>Google AdSense / AdMob</li>
				<li>Google Analytics (if enabled)</li>
			</ul>

			<p className="pb-6">
				These third-party services may collect information such as: device
				identifiers, IP address, app interactions, cookies, and diagnostic data,
				in order to display advertisements or improve their services. We do not
				have access to or control over the data collected by these providers.
			</p>

			{/* THIS IS THE CORE ADSENSE REQUIREMENT SECTION */}
			<h2 className="text-2xl pt-6 pb-2">
				Third-Party Advertising and Cookies
			</h2>
			<p className="pb-4">
				This site uses Google AdSense and/or AdMob (via the linked AdSense
				account) to monetize content. **Google, as a third-party vendor, uses
				cookies to serve personalized and non-personalized ads** based on a
				user's prior visits to this website or other websites.
			</p>
			<p className="pb-6">
				Google's use of advertising cookies enables it and its partners to serve
				ads to our users based on their visit to our sites and/or other sites on
				the Internet.
			</p>

			<h2 className="text-2xl pb-2">Your Choices and Opting Out</h2>
			<p className="pb-6">
				Users may opt-out of personalized advertising by visiting
				<a
					href="https://adssettings.google.com/"
					className="text-blue-600 underline"
				>
					{" "}
					Google's Ads Settings
				</a>
				. You can also direct users to opt out of some third-party vendors' use
				of cookies for personalized advertising by visiting
				<a
					href="https://www.aboutads.info/"
					className="text-blue-600 underline"
				>
					{" "}
					www.aboutads.info
				</a>
				.
			</p>

			<h2 className="text-2xl pb-2">Children’s Privacy</h2>
			<p className="pb-6">
				Our apps and websites are not directed to children under the age of 13.
				We do not knowingly collect personal data from children.
			</p>

			<h2 className="text-2xl pb-2">Contact Us</h2>
			<p>
				If you have questions about this privacy policy, please reach out to us
				using our dedicated
				<a href="/#contact" className="text-blue-600 underline">
					Contact Page
				</a>
				.
			</p>
		</div>
	);
};

export default PrivacyPolicy;
