// pages/terms.tsx or app/terms/page.tsx

export default function TermsOfService() {
	return (
		<div className="max-w-4xl mx-auto px-4 py-16 text-gray-800">
			<h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

			<p className="mb-4">Last updated: [Month Day, Year]</p>

			<h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
			<p className="mb-6">
				By accessing and using our website or services, you agree to be bound by
				these Terms of Service and all applicable laws. If you do not agree,
				please do not use our site or services.
			</p>

			<h2 className="text-xl font-semibold mb-2">2. Use of Our Services</h2>
			<p className="mb-6">
				You agree to use our services only for lawful purposes and in accordance
				with these terms. You may not use our services to violate any applicable
				laws, infringe on others' rights, or distribute harmful content.
			</p>

			<h2 className="text-xl font-semibold mb-2">3. Account Registration</h2>
			<p className="mb-6">
				You may be required to register for an account. You are responsible for
				maintaining the confidentiality of your account credentials and all
				activities that occur under your account.
			</p>

			<h2 className="text-xl font-semibold mb-2">4. Intellectual Property</h2>
			<p className="mb-6">
				All content, trademarks, and intellectual property on this site are
				owned by us or our licensors and may not be used without permission.
			</p>

			<h2 className="text-xl font-semibold mb-2">5. Termination</h2>
			<p className="mb-6">
				We reserve the right to suspend or terminate your access to our services
				at any time for any reason, including violation of these terms.
			</p>

			<h2 className="text-xl font-semibold mb-2">6. Limitation of Liability</h2>
			<p className="mb-6">
				To the maximum extent permitted by law, we shall not be liable for any
				indirect, incidental, or consequential damages arising from the use of
				our services.
			</p>

			<h2 className="text-xl font-semibold mb-2">7. Changes to These Terms</h2>
			<p className="mb-6">
				We may update these Terms of Service from time to time. Changes will be
				posted on this page with an updated revision date.
			</p>

			<h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
			<p className="mb-6">
				If you have any questions about these Terms, please contact us at{" "}
				<a
					href="mailto:support@yourdomain.com"
					className="text-blue-600 underline"
				>
					support@yourdomain.com
				</a>
				.
			</p>
		</div>
	);
}
