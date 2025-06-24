"use client";

import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { motion } from "motion/react";
import { BackgroundBeamsWithCollision } from "../../components/ui/background-beams-with-collision";
import { TimelineDemo } from "../../components/ui/timelineDemo";
import Comparision from "../../components/sections/comparision";
import FrequentlyAskedQA from "../../components/sections/frequentlyAskedQA";
import FooterSection from "../../components/sections/footer";
import TruthSection from "../../components/sections/whyYouFail";
import { Navbar } from "../../components/sections/navbar";
import Hero from "../../components/sections/hero";
import SubHero from "../../components/sections/sub-hero";

const Page = () => {
	return (
		<div className="h-screen">
			<ScrollProgress className="top-[0px]" />
			<div>
				<BackgroundBeamsWithCollision className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center z-10">
					<Navbar />
					<div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
						<div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
					</div>
					<div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
						<div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
					</div>
					<div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
						<div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
					</div>

					<div className="px-4 py-10 md:py-20 mt-10">
						<Hero />

						<motion.div
							initial={{
								opacity: 0,
								y: 10,
							}}
							animate={{
								opacity: 1,
								y: 0,
							}}
							transition={{
								duration: 0.3,
								delay: 1.2,
							}}
							className="relative z-10 mt-44 rounded-3xl max-w-screen border border-neutral-200 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
						>
							<SubHero />
							<TruthSection />
							<TimelineDemo />
							<Comparision />
							<FrequentlyAskedQA />
						</motion.div>
						<FooterSection />
					</div>
				</BackgroundBeamsWithCollision>
			</div>
		</div>
	);
};

export default Page;
