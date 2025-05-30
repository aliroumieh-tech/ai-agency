"use client";
import { cn } from "@/lib/utils";
import { useMotionValue, motion } from "motion/react";
import React from "react";

export const HeroHighlight = ({
	children,
	className,
	containerClassName,
}: {
	children: React.ReactNode;
	className?: string;
	containerClassName?: string;
}) => {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	function handleMouseMove({
		currentTarget,
		clientX,
		clientY,
	}: React.MouseEvent<HTMLDivElement>) {
		if (!currentTarget) return;
		const { left, top } = currentTarget.getBoundingClientRect();
		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}

	return (
		<div
			className={cn(
				"relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black",
				containerClassName
			)}
			onMouseMove={handleMouseMove}
		>
			<div
				className="pointer-events-none absolute inset-0 dark:hidden"
				style={{
					backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23d4d4d4' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
				}}
			/>
			<motion.div
				className="pointer-events-none absolute inset-0 opacity-0 transition duration-300"
				style={{
					WebkitMaskImage: `radial-gradient(
            200px circle at ${mouseX}px ${mouseY}px,
            black 0%,
            transparent 100%
          )`,
					maskImage: `radial-gradient(
            200px circle at ${mouseX}px ${mouseY}px,
            black 0%,
            transparent 100%
          )`,
				}}
			/>
			<div className={cn("relative z-20", className)}>{children}</div>
		</div>
	);
};

export const Highlight = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<motion.span
			initial={{
				backgroundSize: "0% 100%",
				opacity: 0.5, // Text starts off as transparent
			}}
			animate={{
				backgroundSize: "100% 100%",
				opacity: 1, // Text becomes fully visible
			}}
			transition={{
				duration: 2,
				ease: "linear",
				delay: 0.5,
			}}
			style={{
				backgroundRepeat: "no-repeat",
				backgroundPosition: "left center",
				display: "inline",
			}}
			className={cn(
				`relative sm:text-start text-center text-sm md:text-base lg:text-base xl:text-lg rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 p-1 dark:from-indigo-500 dark:to-purple-500`,
				className
			)}
		>
			{children}
		</motion.span>
	);
};
