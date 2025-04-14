"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import React, {
	ComponentPropsWithoutRef,
	useEffect,
	useMemo,
	useState,
} from "react";
import gmailImage from "../../public/gmail.png";
import notionImage from "../../public/notion.png";
import slackImage from "../../public/slack.png";
import instaImage from "../../public/insta.png";

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
	const animations = {
		initial: { scale: 0, opacity: 0 },
		animate: { scale: 1, opacity: 1, originY: 0 },
		exit: { scale: 0, opacity: 0 },
		transition: { type: "spring", stiffness: 350, damping: 40 },
	};

	return (
		<motion.div
			{...animations}
			layout
			className="mx-auto w-full"
		>
			{children}
		</motion.div>
	);
}

export interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
	children: React.ReactNode;
	delay?: number;
}

export const AnimatedList = React.memo(
	({ children, className, delay = 1000, ...props }: AnimatedListProps) => {
		const [index, setIndex] = useState(0);
		const childrenArray = useMemo(
			() => React.Children.toArray(children),
			[children]
		);

		useEffect(() => {
			if (index < childrenArray.length - 1) {
				const timeout = setTimeout(() => {
					setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length);
				}, delay);

				return () => clearTimeout(timeout);
			}
		}, [index, delay, childrenArray.length]);

		const itemsToShow = useMemo(() => {
			const result = childrenArray.slice(0, index + 1).reverse();
			return result;
		}, [index, childrenArray]);

		return (
			<div
				className={cn(`flex flex-col items-center gap-4`, className)}
				{...props}
			>
				<AnimatePresence>
					{itemsToShow.map((item) => (
						<AnimatedListItem key={(item as React.ReactElement).key}>
							{item}
						</AnimatedListItem>
					))}
				</AnimatePresence>
			</div>
		);
	}
);

AnimatedList.displayName = "AnimatedList";

interface Item {
	name: string;
	description: string;
	icon: StaticImageData;
	color: string;
	time: string;
}

let notifications = [
	{
		name: "Replied to Clara’s email",
		description: "Sent a quick update about the project timeline.",
		time: "15m ago",
		icon: gmailImage,
		color: "white",
	},
	{
		name: "Marked task as complete",
		description: "Checked off ‘Design system audit’ in Notion.",
		time: "12m ago",
		icon: notionImage,
		color: "white",
	},
	{
		name: "Rescheduled team meeting",
		description: "Moved the Marketing sync to 3PM per Alex’s message.",
		time: "10m ago",
		icon: slackImage,
		color: "white",
	},
	{
		name: "Tagged you in Notion",
		description: "Added a comment under 'Q2 Roadmap' for your review.",
		time: "9m ago",
		icon: notionImage,
		color: "white",
	},
	{
		name: "Archived Instagram DM",
		description: "Sophie’s message has been saved for later.",
		time: "7m ago",
		icon: instaImage,
		color: "white",
	},
	{
		name: "Accepted calendar invite",
		description: "Added ‘Weekly Sync’ to your calendar.",
		time: "6m ago",
		icon: gmailImage,
		color: "white",
	},
	{
		name: "Joined daily standup",
		description: "Entered the Slack call on your behalf.",
		time: "5m ago",
		icon: slackImage,
		color: "white",
	},
	{
		name: "Summarized new doc",
		description: "Generated quick insights from ‘Growth Experiments’.",
		time: "4m ago",
		icon: notionImage,
		color: "white",
	},
	{
		name: "Saved Instagram mention",
		description: "Archived @creativestudio's story to your highlights.",
		time: "2m ago",
		icon: instaImage,
		color: "white",
	},
	{
		name: "Verified new login",
		description: "Confirmed access from your MacBook in Beirut.",
		time: "Just now",
		icon: gmailImage,
		color: "white",
	},
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
	return (
		<figure
			className={cn(
				"relative mx-auto min-h-fit w-full md:max-w-[400px] max-w-[350px] cursor-pointer overflow-hidden rounded-2xl p-4",
				// animation styles
				"transition-all duration-200 ease-in-out hover:scale-[103%]",
				// light styles
				"bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
				// dark styles
				"transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
			)}
		>
			<div className="flex flex-row items-center gap-3">
				<div
					className="flex size-10 items-center justify-center rounded-2xl"
					style={{
						backgroundColor: color,
					}}
				>
					<span className="text-lg">
						<Image
							src={icon}
							alt="icon"
							width={40}
							height={40}
						/>
					</span>
				</div>
				<div className="flex flex-col overflow-hidden">
					<figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
						<span className="text-sm sm:text-lg">{name}</span>
						<span className="mx-1">·</span>
						<span className="text-xs text-gray-500">{time}</span>
					</figcaption>
					<p className="text-sm font-normal dark:text-white/60">
						{description}
					</p>
				</div>
			</div>
		</figure>
	);
};

export function AnimatedListDemo({ className }: { className?: string }) {
	return (
		<div
			className={cn(
				"relative flex md:h-[400px] h-[325px] w-full flex-col overflow-hidden p-2",
				className
			)}
		>
			<AnimatedList>
				{notifications.map((item, idx) => (
					<Notification
						{...item}
						key={idx}
					/>
				))}
			</AnimatedList>

			<div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
		</div>
	);
}
