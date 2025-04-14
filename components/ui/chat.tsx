"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import manImage from "../../public/man.jpg";
import botImage from "../../public/bot.png";
import chatImage from "../../public/chat.png";
import { TypingAnimation } from "../magicui/typing-animation";
import { BorderBeam } from "../magicui/border-beam";

const Chat = () => {
	const [isLoading, setIsLoading] = useState(true);

	// Simulate assistant "thinking" for 1 second
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 2000);
		return () => clearTimeout(timer);
	}, []);
	return (
		<div className="group flex items-center justify-center flex-col relative bg-white rounded-lg p-4 row-span-2 shadow-2xl h-[550px] lg:h-full">
			<div className="flex flex-col w-full space-y-4 group items-start justify-center flex-2 px-5">
				{/* User Message */}
				<div className="flex items-end justify-end w-full space-x-2 my-2 right-0 h-full">
					<div className="xl:max-w-[375px] lg:max-w-[300px] max-w-[375px] p-3 bg-blue-600 text-white rounded-xl rounded-tl-xl font-sans xl:text-base lg:text-sm sm:text-base text-sm  fade-in-right">
						Hey, I need help scheduling a team meeting that works well for
						everyone. Any suggestions for finding an optimal time slot?
					</div>
					<Image
						src={manImage}
						alt="User Icon"
						className="w-10 h-10 rounded-full object-contain"
						width={40}
						height={40}
					/>
				</div>

				{/* Assistant Message */}
				<div className="flex items-start justify-start space-x-2 my-2 h-full">
					<div className="bg-white rounded-full p-1 w-10 h-10 flex items-center justify-center">
						<Image
							src={botImage}
							alt="Assistant Icon"
							className="object-cover"
							width={30}
							height={30}
						/>
					</div>
					{isLoading ? (
						// Display the loading indicator (animated blinking dots)
						<div className="loading-dots pt-[10px]">
							<div className="bg-gray-500 w-3 h-3 rounded-full" />
							<div className="bg-gray-500 w-3 h-3 rounded-full" />
							<div className="bg-gray-500 w-3 h-3 rounded-full " />
						</div>
					) : (
						<div className="xl:max-w-[375px] lg:max-w-[300px] max-w-[375px] p-3 bg-pink-50 shadow-md text-slate-700 rounded-xl rounded-tr-xl ">
							<TypingAnimation className="font-sans xl:text-base lg:text-sm sm:text-base text-sm">
								Based on your calendar patterns and preferences, I recommend
								scheduling the team meeting for Tuesday at 2pm. This time slot
								has historically had the highest attendance rate, and it avoids
								conflicts with other recurring meetings.
							</TypingAnimation>
						</div>
					)}
				</div>
			</div>
			<div className="flex-1 h-full">
				<div className="absolute lg:left-10 md:left-5 left-0 lg:px-0 px-5 bottom-5 group-hover:translate-x-2 transition-all ease-linear duration-200">
					<Image
						src={chatImage}
						alt="connect"
						width={40}
						height={40}
					/>
					<h1 className="text-2xl font-semibold text-black font-sans pt-2">
						Real-time AI Collaboration
					</h1>
					<p className="md:text-sm text-xs font-mono text-gray-500 pr-5">
						Get instant support from your AI Assistant. Let it help manage
						tasks, provide answers, and keep your team on the same page.
					</p>
				</div>
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

export default Chat;
