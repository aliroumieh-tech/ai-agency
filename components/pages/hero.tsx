import { TypewriterEffect } from "../ui/typewriter-effect";
import { Highlight } from "../ui/hero-highlight";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";

export default function Hero() {
	return (
		<div className="w-full flex h-full flex-col">
			<div className="flex flex-col sm:h-full lg:items-start items-center pt-0 sm:pt-52 md:pt-64 lg:pt-0 font-mono">
				<TypewriterEffect
					className="xl:min-h-[144px]"
					words={[
						{ text: "Automate" },
						{ text: "Success" },
						{ text: "with" },
						{ text: "AI" },
						{ text: "Agents" },
						{ text: "Built" },
						{ text: "for" },
						{ text: "You." },
					]}
				/>
				<Highlight className="mt-3 lg:mt-5">
					<strong className="text-black font-mono">
						Focus on what matters—your growth.
					</strong>{" "}
					{""}
					<span className="font-mono">Let us handle the rest. </span>
				</Highlight>
				<InteractiveHoverButton className="mt-10 lg:mt-10">
					Start Your 7 days free trial
				</InteractiveHoverButton>
			</div>
		</div>
	);
}
