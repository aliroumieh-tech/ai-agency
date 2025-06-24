import { motion } from "motion/react";
import React from "react";

const Hero = () => {
	return (
		<>
			<h1 className="relative px-3 z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-5xl dark:text-slate-300">
				{"LET AI HANDLE YOUR OUTREACH WHILE YOU FOCUS ON CLOSING"
					.split(" ")
					.map((word, index) => (
						<motion.span
							key={index}
							initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
							animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
							transition={{
								duration: 0.3,
								delay: index * 0.1,
								ease: "easeInOut",
							}}
							className={`mr-2 inline-block ${
								index === 9
									? "text-[#C5A939] dark:text-[#DECC84]"
									: "text-slate-700 dark:text-slate-300"
							}`}
						>
							{word}
						</motion.span>
					))}
			</h1>
			<motion.p
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: 1,
				}}
				transition={{
					duration: 0.3,
					delay: 0.8,
				}}
				className="relative px-2 z-1 mx-auto max-w-xl py-4 text-center text-base sm:text-lg font-normal text-neutral-600 dark:text-neutral-400"
			>
				Leverage AI to generate qualified leads, craft hyper-personalized cold
				emails, and automate your follow-ups—all in one seamless system.
			</motion.p>
			<motion.div
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: 1,
				}}
				transition={{
					duration: 0.3,
					delay: 1,
				}}
				className="relative z-10 mt-8 text-sm sm:text-base flex flex-wrap items-center justify-center gap-4"
			>
				<a
					href="/calendar-meeting"
					className="sm:w-60 w-48 text-center transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
				>
					Book a Free Demo
				</a>
				<a
					href="#how-it-works"
					className="sm:w-60 text-center w-48 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900"
				>
					Explore Our Features
				</a>
			</motion.div>
		</>
	);
};

export default Hero;
