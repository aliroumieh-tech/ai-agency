import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const FAQ_DATA = [
	{
		id: "product",
		question: "How does your AI lead generation work?",
		answer: [
			"Our system combines machine learning with sales intelligence to identify and engage high-value prospects. We analyze millions of data points to find decision-makers who match your ideal customer profile.",
			"The AI then crafts hyper-personalized emails and manages the entire outreach sequence, including 4-5 automated follow-ups optimized for maximum response rates.",
		],
	},
	{
		id: "results",
		question: "What results can I expect?",
		answer: [
			"Most clients see 3-5x more qualified meetings within their first 30 days. Our average response rate is 5-15%, significantly higher than traditional cold outreach.",
			"We guarantee 92%+ contact accuracy and 98% inbox placement rate for all campaigns.",
		],
	},
	{
		id: "integration",
		question: "How does it integrate with my existing tools?",
		answer: [
			"Our platform seamlessly connects with popular CRMs like Salesforce and HubSpot, as well as email providers. Setup takes less than 5 minutes with our one-click integrations.",
			"All lead data and engagement metrics sync automatically to your existing systems.",
		],
	},
	{
		id: "pricing",
		question: "What's your pricing model?",
		answer: [
			"We offer flexible plans based on your outreach volume, starting with a pay-as-you-go option at $99/month for 300 leads.",
			"Enterprise plans include dedicated account management and custom AI training for your specific industry.",
		],
	},
	{
		id: "support",
		question: "What kind of support do you provide?",
		answer: [
			"Every customer gets a dedicated onboarding specialist and 24/7 chat support. We also provide bi-weekly performance reviews and optimization recommendations.",
			"Our team is available for strategy sessions to help you maximize results from the platform.",
		],
	},
];

const FrequentlyAskedQA = () => {
	return (
		<section className="w-full max-w-4xl mx-auto py-30 px-4 sm:px-6">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-100px" }}
				className="text-center mb-12"
			>
				<h2 className="text-3xl font-bold text-blue-600 mb-3">
					Frequently Asked Questions
				</h2>
				<p className="text-gray-600 max-w-2xl mx-auto">
					Everything you need to know about our AI-powered lead generation
				</p>
			</motion.div>

			<Accordion
				type="single"
				collapsible
				className="w-full space-y-4"
				defaultValue="product"
			>
				{FAQ_DATA.map((item, index) => (
					<motion.div
						key={item.id}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: index * 0.1 }}
						viewport={{ once: true }}
					>
						<AccordionItem
							value={item.id}
							className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
						>
							<AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-medium text-gray-900">
								<span className="flex items-center gap-3">
									<span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
										{index + 1}
									</span>
									{item.question}
								</span>
							</AccordionTrigger>
							<AccordionContent className="px-6 pb-4 text-gray-700">
								<div className="flex flex-col gap-3">
									{item.answer.map((text, i) => (
										<p
											key={i}
											className="leading-relaxed"
										>
											{text}
										</p>
									))}
								</div>
							</AccordionContent>
						</AccordionItem>
					</motion.div>
				))}
			</Accordion>

			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ delay: FAQ_DATA.length * 0.1 + 0.3 }}
				viewport={{ once: true }}
				className="mt-12 text-center"
			>
				<p className="text-gray-600 mb-6">
					Still have questions? We’re happy to help you through a 1-on-1 demo.
				</p>
				<a
					href="/calendar-meeting"
					className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
				>
					Book your free demo
				</a>
			</motion.div>
		</section>
	);
};

export default FrequentlyAskedQA;
