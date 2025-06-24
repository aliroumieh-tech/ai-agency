import { motion } from "motion/react";
import React from "react";

const Comparision = () => {
	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
			variants={{
				visible: { transition: { staggerChildren: 0.1 } },
			}}
			className="mt-16 py-12 px-6 sm:px-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]"
		>
			{/* Section Header with Decorative Elements */}
			<motion.div
				variants={{
					hidden: { opacity: 0, y: 20 },
					visible: {
						opacity: 1,
						y: 0,
						transition: { duration: 0.6, ease: "backOut" },
					},
				}}
				className="relative max-w-3xl mx-auto text-center mb-12"
			>
				<div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-blue-100/30 blur-xl"></div>
				<div className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full bg-blue-100/30 blur-xl"></div>

				<h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 relative z-10">
					<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">
						Traditional Sourcing vs Our AI-Powered Approach
					</span>
				</h3>
				<p className="text-gray-500 max-w-2xl mx-auto">
					See the difference that matters for your pipeline
				</p>
			</motion.div>

			{/* Comparison Grid */}
			<div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
				{/* Traditional Column - Animated from left */}
				<motion.div
					variants={{
						hidden: { x: -50, opacity: 0 },
						visible: {
							x: 0,
							opacity: 1,
							transition: {
								type: "spring",
								stiffness: 100,
								damping: 10,
							},
						},
					}}
					className="relative bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
				>
					<div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shadow-sm">
						<svg
							className="w-5 h-5 text-red-500"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</div>

					<div className="flex items-center gap-4 mb-6">
						<div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
							<svg
								className="w-6 h-6 text-red-500"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</div>
						<h4 className="text-lg font-bold text-red-800">
							Traditional Outreach
						</h4>
					</div>

					<ul className="space-y-4">
						{[
							"Generic email blasts to purchased lists",
							"20-30% contact accuracy",
							"1-2% response rates",
							"Manual follow-ups (easy to miss)",
							"High spam complaints",
						].map((item, index) => (
							<motion.li
								key={index}
								initial={{ x: -20, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{ delay: 0.2 + index * 0.1 }}
								viewport={{ once: true }}
								className="flex items-start gap-3 text-gray-700"
							>
								<span className="text-red-500 mt-0.5 flex-shrink-0">✕</span>
								<span>{item}</span>
							</motion.li>
						))}
					</ul>
				</motion.div>

				{/* Our Approach Column - Animated from right */}
				<motion.div
					variants={{
						hidden: { x: 50, opacity: 0 },
						visible: {
							x: 0,
							opacity: 1,
							transition: {
								type: "spring",
								stiffness: 100,
								damping: 10,
								delay: 0.2,
							},
						},
					}}
					className="relative bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
				>
					<div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shadow-sm">
						<svg
							className="w-5 h-5 text-green-600"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M5 13l4 4L19 7"
							/>
						</svg>
					</div>

					<div className="flex items-center gap-4 mb-6">
						<div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
							<svg
								className="w-6 h-6 text-green-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M5 13l4 4L19 7"
								/>
							</svg>
						</div>
						<h4 className="text-lg font-bold text-green-800">Our AI System</h4>
					</div>

					<ul className="space-y-4">
						{[
							"Hyper-targeted decision-makers only",
							"92%+ contact accuracy guarantee",
							"5-15% average response rates",
							"Automated 4-5 follow-up sequences",
							"98% inbox placement rate",
						].map((item, index) => (
							<motion.li
								key={index}
								initial={{ x: 20, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{ delay: 0.3 + index * 0.1 }}
								viewport={{ once: true }}
								className="flex items-start gap-3 text-gray-700"
							>
								<span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
								<span>{item}</span>
							</motion.li>
						))}
					</ul>
				</motion.div>
			</div>

			{/* Results CTA - Animated after columns */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{
					opacity: 1,
					y: 0,
					transition: {
						delay: 0.6,
						type: "spring",
						stiffness: 100,
					},
				}}
				viewport={{ once: true }}
				className="mt-12 flex flex-col items-center"
			>
				<div className="relative inline-flex items-center gap-3 bg-blue-50/80 px-6 py-3 rounded-full border border-blue-100 mb-6">
					<span className="relative flex h-3 w-3">
						<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
						<span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
					</span>
					<span className="text-sm font-medium text-blue-800">
						Clients see 3-5x more meetings within 30 days
					</span>
				</div>

				<motion.div
					whileHover={{ scale: 1.03 }}
					whileTap={{ scale: 0.98 }}
					transition={{ type: "spring", stiffness: 400 }}
				>
					<button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3 rounded-lg font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300">
						<a
							href="/calendar-meeting"
							className="relative z-10 flex items-center gap-2"
						>
							Get Your Free Audit
							<svg
								className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M14 5l7 7m0 0l-7 7m7-7H3"
								/>
							</svg>
						</a>
						<span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
					</button>
				</motion.div>
			</motion.div>
		</motion.section>
	);
};

export default Comparision;
