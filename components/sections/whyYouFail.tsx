// components/TruthSection.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../../public/websiteLogo.png"; // Replace with your logo path
import { BsCheck2Circle, BsArrowDownRight } from "react-icons/bs";

const companyMistakes = [
	"Burn cash on paid ads",
	"Assume social media brings clients",
	"Manually chase leads one by one",
	"Hold endless 1-on-1 conversations",
	"End up in spam with cold emails",
	"Send boring, generic outreach",
	"Use outdated or no CRM at all",
];

const pipelineFireWay = [
	"93% of our leads come from cold outreach",
	"Automated lead scraping & verification",
	"AI qualifies leads before outreach",
	"AI writes hyper-personalized messages",
	"Email replies are automated with AI",
	"Leads book meetings on autopilot",
	"Automation runs everything with n8n, Make, Apify",
];

export default function TruthSection() {
	return (
		<section className="bg-white py-16 px-4 text-gray-800">
			<div className="max-w-6xl mx-auto text-center mb-14">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
				>
					Here’s the truth:
					<br />
					<span className="text-primary">
						Most Companies are Doing Marketing the Wrong Way
					</span>
				</motion.h2>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
				{/* Left: Mistakes */}
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.7 }}
					className="bg-gray-900 text-white rounded-2xl p-6 shadow-md"
				>
					<h3 className="text-xl font-semibold mb-4">Most Companies</h3>
					<ul className="space-y-3 text-sm sm:text-base">
						{companyMistakes.map((text, i) => (
							<li
								key={i}
								className="flex items-start gap-2"
							>
								<BsArrowDownRight className="text-pink-500 mt-1" />
								<span>{text}</span>
							</li>
						))}
					</ul>
				</motion.div>

				{/* Right: PipelineFire Way */}
				<motion.div
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.7 }}
					className="bg-gray-100 rounded-2xl p-6 shadow-md"
				>
					<div className="flex items-center gap-3 mb-4">
						<Image
							src={logo}
							alt="PipelineFire Logo"
							width={40}
							height={40}
							className="rounded-full"
						/>
						<div>
							<p className="font-semibold text-lg">PipelineFire</p>
							<p className="text-sm text-gray-500">@pipelinefire</p>
						</div>
					</div>
					<h3 className="text-xl font-semibold mb-4">The PipelineFire Way</h3>
					<ul className="space-y-3 text-sm sm:text-base">
						{pipelineFireWay.map((text, i) => (
							<li
								key={i}
								className="flex items-start gap-2"
							>
								<BsCheck2Circle className="text-purple-600 mt-1" />
								<span>{text}</span>
							</li>
						))}
					</ul>
				</motion.div>
			</div>
		</section>
	);
}
