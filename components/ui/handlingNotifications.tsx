import React from "react";
import { BorderBeam } from "../magicui/border-beam";
import Image from "next/image";
import emailsImage from "../../public/emails.png";
import { AnimatedListDemo } from "../magicui/animated-list";

const HandlingNotifications = () => {
	return (
		<div className="group flex  flex-col relative bg-white rounded-lg p-4 row-span-2 shadow-2xl h-[550px] lg:h-full">
			<AnimatedListDemo />
			<div className="absolute lg:left-10 md:left-5 left-0 lg:pr-5 lg:px-0 px-5 bottom-5 group-hover:translate-x-2 transition-all ease-linear duration-200">
				<Image
					src={emailsImage}
					alt="connect"
					width={40}
					height={40}
				/>
				<h1 className="md:text-2xl text-xl font-semibold text-black font-sans pt-2">
					Handle Notifications, Messages & Tasks — Effortlessly
				</h1>
				<p className="md:text-sm text-xs font-mono text-gray-500">
					Whether it’s a Slack ping, a Notion update, or a new email — your AI
					assistant is already on it. It reads, filters, summarizes, and even
					replies when needed.
				</p>
			</div>

			<BorderBeam
				duration={6}
				size={400}
				className="from-transparent via-red-500 to-transparent"
			/>
			<BorderBeam
				duration={6}
				delay={3}
				size={400}
				className="from-transparent via-blue-500 to-transparent"
			/>
		</div>
	);
};

export default HandlingNotifications;
