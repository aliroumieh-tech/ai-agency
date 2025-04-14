import React from "react";
import Image from "next/image";
import networkIcon from "../../public/connect.png";
import { BorderBeam } from "../magicui/border-beam";
import { OrbitingCirclesDemo } from "../magicui/orbiting-circles";

const SeamlessIntegrations = () => {
	return (
		<div className="group flex items-center justify-center flex-col relative bg-white rounded-lg p-4 row-span-2 shadow-2xl h-full w-full">
			<OrbitingCirclesDemo />
			<div className="absolute md:left-10 left-0 md:px-0 px-5 bottom-5 group-hover:translate-x-2 transition-all ease-linear duration-200">
				<Image
					src={networkIcon}
					alt="connect"
					width={40}
					height={40}
				/>
				<h1 className="text-2xl font-semibold text-black font-sans pt-1">
					Integrations
				</h1>
				<p className="text-sm font-mono text-gray-500">
					Supports 100+ Integrations and counting
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

export default SeamlessIntegrations;
