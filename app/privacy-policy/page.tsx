import React from "react";

const PrivacyPolicy = () => {
	return (
		<div className="max-w-4xl mx-auto px-4 py-8 pt-44">
			<header className="text-center mb-12">
				<h1 className="text-4xl font-bold mb-4">AI Lead Management Platform</h1>
				<h2 className="text-3xl font-bold mb-8">🛡️ Privacy Policy</h2>
				<p className="text-gray-600">Last updated: April 20 2025</p>
			</header>

			<p className="mb-8">
				Your privacy is important to us. This Privacy Policy explains how we
				collect, use, and protect your information when you interact with our
				services, including our website, forms, lead management platform, and AI
				solutions.
			</p>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">
					🔍 Information We Collect
				</h2>
				<p className="mb-4">We may collect the following types of data:</p>
				<ul className="list-disc pl-6 space-y-2">
					<li>Personal Information: Name, email address, phone number</li>
					<li>
						Business Details: Company name, project information, service
						interest
					</li>
					<li>
						Social Media Data: Instagram account details (username, profile
						info, direct messages, comments, insights)
					</li>
					<li>
						Usage Data: Page views, session duration, clicks (analytics tools)
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">
					🎯 Why We Collect Your Data
				</h2>
				<p className="mb-4">We use your information to:</p>
				<ul className="list-disc pl-6 space-y-2">
					<li>Provide lead management and customer engagement services</li>
					<li>Allow businesses to manage their Instagram communications</li>
					<li>Improve our platform and enhance user experience</li>
					<li>Send updates or relevant information (if you opt-in)</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">🤝 Data Sharing Policy</h2>
				<p className="mb-4">
					We do not sell, rent, or share your information with third parties
					except in the following cases:
				</p>
				<ul className="list-disc pl-6 space-y-2">
					<li>Meta/Facebook, for Instagram Business account integration</li>
					<li>Hosting and infrastructure providers (e.g., Vercel, Firebase)</li>
					<li>
						Automation tools (such as n8n or Zapier) used to deliver our
						services
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">
					🔐 How We Protect Your Data
				</h2>
				<p className="mb-4">
					We implement industry-standard security measures, including:
				</p>
				<ul className="list-disc pl-6 space-y-2">
					<li>HTTPS encryption across our platform</li>
					<li>Secure cloud hosting environments</li>
					<li>Role-based access control for sensitive information</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">📬 Your Rights</h2>
				<p className="mb-4">You have the right to:</p>
				<ul className="list-disc pl-6 space-y-2">
					<li>Request access to your data</li>
					<li>Request deletion of your account and associated data</li>
					<li>Opt-out of marketing communications at any time</li>
				</ul>
				<p className="mt-4">
					To exercise any of these rights, please contact us at
					roumieh029@gmail.com.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">
					🗑️ Data Deletion Instructions
				</h2>
				<p className="mb-4">
					To request deletion of your account and associated Instagram data,
					please email agency.roumieh@gmail.com with the subject line: Delete My
					Data. We will process all data deletion requests within 7 business
					days.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">📍 Contact</h2>
				<p className="mb-4">
					If you have any questions about this Privacy Policy or your data
					rights, contact us at:
				</p>
				<p className="font-medium">📧 agency.roumieh@gmail.com</p>
			</section>
		</div>
	);
};

export default PrivacyPolicy;
