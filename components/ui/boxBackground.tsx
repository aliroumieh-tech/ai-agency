import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export function GridBackground({ children }: { children: ReactNode }) {
	return (
		<div className="relative flex h-[50rem] w-full bg-white dark:bg-black justify-center lg:top-30 md:top-100 sm:top-170 top-120">
			<div
				className={cn(
					"absolute inset-0",
					"[background-size:40px_40px]",
					"[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
					"dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
				)}
			/>
			{/* Radial gradient for the container to give a faded look */}
			<div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
			<div className="relative z-20 text-4xl sm:text-7xl">{children}</div>
		</div>
	);
}
