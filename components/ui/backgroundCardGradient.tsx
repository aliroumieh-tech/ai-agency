"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";

import Image, { StaticImageData } from "next/image";

export function BackgroundGradientCard({
	image,
	text,
	title,
}: {
	image: StaticImageData;
	title: string;
	text: string;
}) {
	return (
		<div>
			<BackgroundGradient className="rounded-[22px] bg-black w-full sm:h-64 h-2/5 p-4 sm:p-10 dark:bg-zinc-900">
				<Image
					src={image}
					alt="brain"
					width={50}
					height={50}
					className="object-contain"
				/>
				<p className="text-2xl xl:text-2xl lg:text-[22.5px] text-white mt-4 mb-2 dark:text-neutral-200">
					{title}
				</p>

				<p className="text-sm text-neutral-100 dark:text-neutral-400">{text}</p>
			</BackgroundGradient>
		</div>
	);
}
