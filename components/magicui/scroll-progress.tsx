"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps, useScroll } from "motion/react";
import React from "react";

type ScrollProgressProps = Omit<
	React.HTMLAttributes<HTMLElement>,
	keyof MotionProps
>;

export const ScrollProgress = React.forwardRef<
	HTMLDivElement,
	ScrollProgressProps
>((props, ref) => {
	const { scrollYProgress } = useScroll();
	const { className, ...rest } = props;

	return (
		<motion.div
			ref={ref}
			className={cn(
				"fixed inset-x-0 top-0 z-50 h-px origin-left bg-gradient-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92]",
				className
			)}
			style={{
				scaleX: scrollYProgress,
			}}
			{...rest}
		/>
	);
});

ScrollProgress.displayName = "ScrollProgress";
