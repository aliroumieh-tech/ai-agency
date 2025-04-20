import React from "react";

const PrivacyPolicy = () => {
	return (
		<div className="max-w-4xl mx-auto px-4 py-8 pt-44">
			<header className="text-center mb-12">
				<h1 className="text-4xl font-bold mb-4">AI Agents SaaS</h1>
				<h2 className="text-3xl font-bold mb-8">🛡️ Privacy Policy</h2>
				<p className="text-gray-600">Last updated: April 20, 2025</p>
			</header>

			<p className="mb-8">
				Your privacy is important to us. This Privacy Policy explains how we
				collect, use, and protect your information when you interact with our
				services, including our website, forms, and AI solutions.
			</p>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">
					🔍 What Information We Collect
				</h2>
				<p className="mb-4">We may collect the following types of data:</p>
				<ul className="list-disc pl-6 space-y-2">
					<li>Personal Info: Name, email address, phone number</li>
					<li>
						Lead Details: Company name, project information, budget, or service
						interest
					</li>
					<li>
						Usage Data: Page views, session duration, clicks (via analytics
						tools)
					</li>
					<li>
						Message Content: If you use WhatsApp, Facebook, or Instagram to
						contact us
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">
					🎯 Why We Collect Your Data
				</h2>
				<p className="mb-4">We use your information to:</p>
				<ul className="list-disc pl-6 space-y-2">
					<li>Respond to your inquiries</li>
					<li>Provide AI and lead management services</li>
					<li>Improve website and user experience</li>
					<li>Send project updates or marketing materials (if you opt in)</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">
					🤝 Do We Share Your Data?
				</h2>
				<p className="mb-4">
					No, we do not sell or rent your information. We may share limited data
					only with:
				</p>
				<ul className="list-disc pl-6 space-y-2">
					<li>Meta/Facebook for ad integration and analytics</li>
					<li>Our hosting and email providers (e.g., Vercel, Gmail)</li>
					<li>
						Automation tools (like Zapier, if connected) — only when necessary
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">
					🔐 How We Protect Your Data
				</h2>
				<p className="mb-4">We take security seriously. Our systems use:</p>
				<ul className="list-disc pl-6 space-y-2">
					<li>HTTPS encryption</li>
					<li>Secure cloud hosting (Vercel, Firebase, etc.)</li>
					<li>Role-based access to sensitive data</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">📬 Your Rights</h2>
				<p className="mb-4">You have the right to:</p>
				<ul className="list-disc pl-6 space-y-2">
					<li>Request a copy of your data</li>
					<li>Ask us to delete your information</li>
					<li>Opt-out of marketing emails</li>
				</ul>
				<p className="mt-4">
					Contact us at roumieh029@gmail.com for data requests.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">
					🗑️ Data Deletion Instructions
				</h2>
				<p className="mb-4">
					To request data deletion, please email roumieh029@gmail.com with
					subject: Delete My Data. We will process your request within 7
					business days.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">📍 Contact</h2>
				<p className="mb-4">
					If you have any questions about this Privacy Policy, contact us at:
				</p>
				<p className="font-medium">📧 roumieh029@gmail.com</p>
			</section>
		</div>
	);
};

export default PrivacyPolicy;
