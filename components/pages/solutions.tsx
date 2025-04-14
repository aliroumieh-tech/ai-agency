import React from "react";
import { TypewriterEffect } from "../ui/typewriter-effect";
import Chat from "../ui/chat";
import SmartAutomation from "../ui/smartAutomation";
import SeamlessIntegrations from "../ui/seamlessIntegrations";
import HandlingNotifications from "../ui/handlingNotifications";
import { SparklesText } from "../magicui/sparkles-text";

const Solution = () => {
	return (
		<div className="gap-10 flex-col relative flex  lg:h-[200dvh] h-[380dvh] w-full bg-white dark:bg-black items-center lg:top-30 md:top-100 sm:top-170 top-120 p-10 overflow-hidden z-1">
			<SparklesText className="text-5xl font-bold">
				Empower Your Business with AI Workflows
			</SparklesText>
			<p className="text-base font-mono text-gray-500 text-center -m-5">
				Generic AI tools wont suffice. Our platform is purpose-built to provide
				<br />
				exceptional AI-driven solutions for your unique business needs.
			</p>
			<TypewriterEffect
				className="text-3xl mt-5"
				words={[
					{ text: "How" },
					{ text: "It" },
					{ text: "Works" },
					{ text: "?" },
				]}
			/>

			<div className="w-full h-full grid lg:grid-cols-2 lg:grid-rows-4 gap-4">
				<Chat />
				<SeamlessIntegrations />
				<SmartAutomation />
				<HandlingNotifications />
			</div>
		</div>
	);
};

export default Solution;
