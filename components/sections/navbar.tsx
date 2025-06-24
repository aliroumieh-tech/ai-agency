import logo from "../../public/websiteLogo.png";
import Image from "next/image";

export const Navbar = () => {
	return (
		<nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
			<div className="flex items-center gap-2">
				<Image
					src={logo}
					alt="pipelineFire Logo"
					className="object-cover size-12"
				/>
				<h1 className="text-base font-bold md:text-2xl">PipelineFire</h1>
			</div>
			<a
				href="/calendar-meeting"
				className="w-fit transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-fit dark:bg-white dark:text-black dark:hover:bg-gray-200"
			>
				Get Started Now
			</a>
		</nav>
	);
};
