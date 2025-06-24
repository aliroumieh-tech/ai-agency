"use client";

import Image from "next/image";
import logo from "../../public/websiteLogo.png";

const pipelineFireLogo = () => (
	<Image
		src={logo}
		alt="pipelineFire Logo"
		className="object-cover size-10"
	/>
);
export default pipelineFireLogo;
