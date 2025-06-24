import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import apollo from "../../public/apollo.png";
import apify from "../../public/apify.png";
import apifyApollo from "../../public/apifyApollo.png";
import apifyTwitter from "../../public/apifyTwitter.png";
import apolloInterface from "../../public/apolloInterface.jpg";
import zapier from "../../public/zapier.png";
import zapierWorkflow from "../../public/zapierWorkflow.png";
import instantlyInterface from "../../public/instantlyInterface.png";
import instantlyWorkflow from "../../public/instantlyWorkflow.png";
import instantlyCampain from "../../public/instantlyCampain.png";
import instantlyFollowUp from "../../public/instantlyFollowUp.jpg";
import warmedUpEmails from "../../public/warmedUpEmails.png";
import emailDelivary from "../../public/emailDelivary.png";
import emailWarmUp from "../../public/emailWarmUp.png";
import analyticemail from "../../public/analyticemail.png";
import azTesting1 from "../../public/az testing.jpg";
import azTesting2 from "../../public/azz testing1.jpg";
import azTesting3 from "../../public/az testing3.jpg";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.3,
		},
	},
};

const itemVariants: Variants = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
};

const imageVariants: Variants = {
	hidden: { scale: 0.9, opacity: 0 },
	visible: {
		scale: 1,
		opacity: 1,
		transition: {
			duration: 0.6,
			ease: "backOut",
		},
	},
};

export function TimelineDemo() {
	const data = [
		{
			title: "Precision Lead Sourcing",
			content: (
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
				>
					<motion.p
						className="mb-8 text-xs font-normal text-neutral-800 md:text-base dark:text-neutral-200"
						variants={itemVariants}
					>
						We use industry-leading sales intelligence tools to identify and
						verify only high-value decision-makers who perfectly match your
						ideal customer profile. No generic lists—only targeted leads that
						fit your criteria. <br />
						<br />
						<span className="font-semibold">Our Hunting Formula:</span>
						<br />
						✓ Decision-makers only (C-level, VPs, Directors)
						<br />
						✓ Custom filters(revenue, tech stack, location, etc.)
						<br />
						✓ Real-time verification to eliminate outdated contacts
						<br />
						✓ ICP-aligned targeting based on your ideal customer traits
						<br />✓ Competitor intelligence (identify accounts using similar
						solutions)
					</motion.p>
					<motion.div
						className="grid grid-cols-2 gap-4"
						variants={containerVariants}
					>
						{[
							{ src: apolloInterface, alt: "Apollo Interface" },
							{ src: apify, alt: "Apify" },
							{ src: apollo, alt: "Apollo" },
							{ src: apifyApollo, alt: "Apify Apollo" },
						].map((img, index) => (
							<motion.div
								key={index}
								variants={imageVariants}
							>
								<Image
									src={img.src}
									alt={img.alt}
									width={500}
									height={500}
									className="h-20 w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-full"
								/>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			),
		},
		{
			title: "Deep Social & Website Research",
			content: (
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
				>
					<motion.p
						className="mb-8 text-xs font-normal text-neutral-800 md:text-base dark:text-neutral-200"
						variants={itemVariants}
					>
						Every lead undergoes thorough analysis: LinkedIn activity, company
						websites, and public profiles. This enables hyper-personalized
						messaging that resonates, not robotic templates.
						<br />
						<br />
						<span className="font-semibold">How We Personalize: </span>
						<br />
						✓ Career-change opportunities (promotions, job changes, or published
						pain points)
						<br />
						✓ Strategic company movements (funding rounds, expansions, or tech
						migrations)
						<br />✓ Hidden warm introductions (mutual connections, alumni
						networks, or event attendees)
					</motion.p>
					<motion.div
						className="grid grid-cols-2 gap-4"
						variants={containerVariants}
					>
						{[
							{ src: zapier, alt: "Zapier" },
							{ src: apify, alt: "Apify" },
							{ src: zapierWorkflow, alt: "Zapier Workflow" },
							{ src: apifyTwitter, alt: "Apify Twitter" },
						].map((img, index) => (
							<motion.div
								key={index}
								variants={imageVariants}
							>
								<Image
									src={img.src}
									alt={img.alt}
									width={500}
									height={500}
									className="h-20 w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-full"
								/>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			),
		},
		{
			title: "AI-Optimized Email Sequences with Persistent Follow-Ups",
			content: (
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
				>
					<motion.p
						className="mb-4 text-xs font-normal text-neutral-800 md:text-base dark:text-neutral-200"
						variants={itemVariants}
					>
						We craft high-converting email copy tailored to your industry, then
						automatically deliver it through a strategic sequence of 4-5
						follow-ups. Our writers combine proven psychological triggers with
						your unique value proposition, while our system ensures your message
						stays top-of-mind with timed reminders that feel natural, not
						spammy. <br />
						<br />
						<span className="font-semibold">Our Writing Playbook: </span>
						<br />
						✓ Industry-specific messaging frameworks <br />
						✓ 4-5 strategically spaced follow-ups <br />
						✓ Natural, conversation-style sequencing <br />✓ Avoids spam
						triggers while maintaining persistence
					</motion.p>
					<motion.div
						className="grid grid-cols-2 gap-4"
						variants={containerVariants}
					>
						<motion.div variants={imageVariants}>
							<Image
								src={instantlyInterface}
								alt="startup template"
								width={500}
								height={500}
								className="h-20 w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-full"
							/>
						</motion.div>
						<motion.div variants={imageVariants}>
							<Image
								src={instantlyCampain}
								alt="startup template"
								width={500}
								height={500}
								className="h-20 w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-full"
							/>
						</motion.div>
						<motion.div variants={imageVariants}>
							<Image
								src={instantlyWorkflow}
								alt="startup template"
								width={500}
								height={500}
								className="h-20 w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-full"
							/>
						</motion.div>
						<motion.div variants={imageVariants}>
							<Image
								src={instantlyFollowUp}
								alt="startup template"
								width={500}
								height={500}
								className="h-20 w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-full"
							/>
						</motion.div>
					</motion.div>
				</motion.div>
			),
		},
		{
			title: "High-Velocity Delivery",
			content: (
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
				>
					<motion.p
						className="mb-4 text-xs font-normal text-neutral-800 md:text-base dark:text-neutral-200"
						variants={itemVariants}
					>
						Our system ensures your campaigns land in inboxes (not spam folders)
						at scale, using proprietary domain warming and AI-driven throttling.
						<br />
						<br />
						<span className="font-semibold">Our Scaling Tech: </span>
						<br />
						✓ Pre-warmed domains (6+ months aged, with active engagement
						history)
						<br />
						✓ Dynamic send-rate optimization (prevents sudden spikes that
						trigger spam filters)
						<br />
						✓ Time-zone intelligence (emails arrive at each prospects peak
						activity hours)
						<br />
						✓ Bounce & complaint firewall (auto-pauses campaigns if risks
						emerge)
						<br />
						✓ Multi-channel sync (coordinates with LinkedIn for touchpoint
						reinforcement)
						<br />✓ SPF/DKIM/DMARC configured (enterprise-grade email
						authentication)
					</motion.p>
					<motion.div
						className="grid grid-cols-2 gap-4"
						variants={containerVariants}
					>
						<motion.div variants={imageVariants}>
							<Image
								src={emailWarmUp}
								alt="startup template"
								width={500}
								height={500}
								className="h-20 w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-full"
							/>
						</motion.div>
						<motion.div variants={imageVariants}>
							<Image
								src={analyticemail}
								alt="startup template"
								width={500}
								height={500}
								className="h-20 w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-full"
							/>
						</motion.div>
						<motion.div variants={imageVariants}>
							<Image
								src={warmedUpEmails}
								alt="startup template"
								width={500}
								height={500}
								className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-full"
							/>
						</motion.div>
						<motion.div variants={imageVariants}>
							<Image
								src={emailDelivary}
								alt="startup template"
								width={500}
								height={500}
								className="h-20 w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-full"
							/>
						</motion.div>
					</motion.div>
				</motion.div>
			),
		},
		{
			title: "Continuous A/Z Testing",
			content: (
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
				>
					<motion.p
						className="mb-4 text-xs font-normal text-neutral-800 md:text-base dark:text-neutral-200"
						variants={itemVariants}
					>
						We dynamically test subject lines, CTAs, and templates across
						campaigns. Real-time analytics identify top performers,
						automatically scaling what works.
						<br />
						<br />
						<span className="font-semibold">Our Optimization Engine: </span>
						<br />
						✓ Subject line showdowns (tests 5+ variants to find the highest open
						rates)
						<br />
						✓ CTA effectiveness battles (measures clicks/replies to determine
						winners)
						<br />✓ Automated template scaling (instantly ramps up
						top-performing email variants)
					</motion.p>
					<motion.div
						className="grid grid-cols-2 gap-4"
						variants={containerVariants}
					>
						<motion.div variants={imageVariants}>
							<Image
								src={azTesting1}
								alt="startup template"
								width={500}
								height={500}
								className="h-20 w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-72"
							/>
						</motion.div>
						<motion.div variants={imageVariants}>
							<Image
								src={azTesting2}
								alt="startup template"
								width={500}
								height={500}
								className="h-20 w-full rounded-lg object-fill shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-72"
							/>
						</motion.div>
						<motion.div variants={imageVariants}>
							<Image
								src={azTesting3}
								alt="startup template"
								width={500}
								height={500}
								className="h-20 w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-72"
							/>
						</motion.div>
						<motion.div variants={imageVariants}>
							<Image
								src={emailDelivary}
								alt="startup template"
								width={500}
								height={500}
								className="h-20 w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-72"
							/>
						</motion.div>
					</motion.div>
				</motion.div>
			),
		},
	];

	return (
		<div
			className="relative w-full overflow-clip mt-10"
			id="how-it-works"
		>
			<Timeline data={data} />
		</div>
	);
}
