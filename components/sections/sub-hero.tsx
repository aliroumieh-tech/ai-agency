import { motion } from "motion/react";
import React from "react";
import { MarqueeDemo } from "../magicui/marqueeUsers";

const SubHero = () => {
	return (
		<>
			<div className="flex justify-center items-center h-full w-full bg-white px-4 z-1">
				<div className="w-full max-w-6xl rounded-2xl ring-1 ring-blue-100 bg-gradient-to-br from-white to-gray-50 p-10 text-center shadow-sm">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={{
							hidden: {},
							visible: {
								transition: {
									staggerChildren: 0.1,
									when: "beforeChildren",
								},
							},
						}}
					>
						{/* Animated Heading */}
						<motion.h1
							className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl dark:text-slate-300"
							variants={{
								hidden: {},
								visible: {
									transition: { staggerChildren: 0.1 },
								},
							}}
						>
							{"SMART SALES TEAMS DON'T PROSPECT—THEY LET AI DO IT. WHEN WILL YOU?"
								.split(" ")
								.map((word, index) => (
									<motion.span
										key={index}
										variants={{
											hidden: { opacity: 0, filter: "blur(4px)", y: 10 },
											visible: { opacity: 1, filter: "blur(0px)", y: 0 },
										}}
										transition={{
											duration: 0.3,
											ease: "easeInOut",
										}}
										className="mr-2 inline-block text-slate-900"
									>
										{word}
									</motion.span>
								))}
						</motion.h1>

						{/* Other elements with delayed appearance */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{
								opacity: 1,
								y: 0,
								transition: {
									delay:
										"SMART SALES TEAMS DON'T PROSPECT—THEY LET AI DO IT. WHEN WILL YOU?".split(
											" "
										).length *
											0.1 +
										0.3,
									duration: 0.5,
								},
							}}
						>
							<p className="mt-6 text-gray-600 max-w-3xl mx-auto text-base">
								No more manual prospecting—we fill your calendar with qualified
								calls, effortlessly.
							</p>

							<div className="mt-8 flex justify-center gap-4 flex-wrap">
								<a
									href="/calendar-meeting"
									className="bg-black text-white px-6 py-2 rounded-md font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800"
								>
									Explore More
								</a>
								<a
									href="#how-it-works"
									className="bg-white text-black border border-gray-300 px-6 py-2 rounded-md font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100"
								>
									See How It Works
								</a>
							</div>

							<div className="mt-20 flex flex-col items-center gap-4">
								<h1 className="text-gray-600 text-sm md:text-lg">
									Trusted by fast-growing startups
								</h1>
								<MarqueeDemo />
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default SubHero;
