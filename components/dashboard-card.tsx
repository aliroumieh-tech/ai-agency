// Reusable Card Component for Dashboard Sections
"use client"; // Keep this as client-side if it directly uses hooks or state, otherwise can be RSC

import React, { ReactNode } from "react";

interface DashboardCardProps {
	icon: ReactNode;
	title: string;
	description: string;
	action: ReactNode; // Can be a button or a status message
}

export function DashboardCard({
	icon,
	title,
	description,
	action,
}: DashboardCardProps) {
	return (
		<div className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm p-6 flex flex-col sm:flex-row sm:items-start gap-4 border border-zinc-200 dark:border-zinc-800">
			{/* Icon */}
			<div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
				{icon}
			</div>

			{/* Content & Action */}
			<div className="flex-grow flex flex-col gap-3 sm:gap-4">
				{/* Title & Description */}
				<div>
					<h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
						{title}
					</h2>
					<p className="text-sm text-zinc-600 dark:text-zinc-400">
						{description}
					</p>
				</div>

				{/* Action Area */}
				<div className="mt-auto pt-2 sm:pt-0">
					{" "}
					{/* Pushes action to bottom on small screens */}
					{action}
				</div>
			</div>
		</div>
	);
}
