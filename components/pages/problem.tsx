"use client";

import React from "react";
import { LampContainer } from "../ui/lamp";
import { motion } from "motion/react";
import { BackgroundGradientCard } from "../ui/backgroundCardGradient";
import brainImage from "../../public/brain.png";
import boltImage from "../../public/bolt.png";
import timerImage from "../../public/timer.png";

const backgroundGradientData = [
	{
		image: boltImage,
		title: "Time Drains",
		text: "Managing tasks manually or juggling multiple tools eats into valuable time.",
	},
	{
		image: brainImage,
		title: "Slow Decision-Making",
		text: "Traditional data processing methods are too slow, causing businesses to lag behind market changes and miss crucial opportunities.",
	},
	{
		image: timerImage,
		title: "Data Overload",
		text: "Businesses struggle to make sense of vast amounts of complex data, missing out on valuable insights that could drive growth and innovation.",
	},
];

const Problem = () => {
	return (
		<div className="relative h-screen bg-black z-1">
			<LampContainer>
				<motion.h1
					initial={{ opacity: 0.5, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: "easeInOut",
					}}
					className="lg:mt-8 md:mt-10 lg:translate-y-0 md:-translate-y-7 lg:leading-[4.2rem] bg-gradient-to-b from-slate-300 to-slate-100 lg:py-20 bg-clip-text text-center text-3xl sm:text-4xl font-bold tracking-tight text-transparent md:text-5xl lg:text-6xl"
				>
					Shining a light on Your <br /> Problems That we will Solve!
				</motion.h1>
			</LampContainer>
			<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-full lg:justify-between lg:bottom-10 bottom-0 px-5 bg-black -mt-64 pb-12">
				{backgroundGradientData.map((item, i) => (
					<BackgroundGradientCard
						image={item.image}
						text={item.text}
						title={item.title}
						key={i}
					/>
				))}
			</div>
		</div>
	);
};

export default Problem;
