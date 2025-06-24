import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import instantlyLogo from "../../public/instantly.jpeg";
import openaiLogo from "../../public/openai.jpeg";
import n8nLogo from "../../public/n8n.png";
import clickupLogo from "../../public/clickup.png";
import hubspotLogo from "../../public/hubspot.png";
import calendlyLogo from "../../public/calendly.png";
import Image, { StaticImageData } from "next/image";

const reviews = [
	{
		name: "instantly",
		img: instantlyLogo,
	},
	{
		name: "n8n",
		img: n8nLogo,
	},
	{
		name: "clickup",
		img: clickupLogo,
	},
	{
		name: "husbspot",
		img: hubspotLogo,
	},
	{
		name: "calendly",
		img: calendlyLogo,
	},
	{
		name: "openai",
		img: openaiLogo,
	},
];

const ReviewCard = ({ img, name }: { img: StaticImageData; name: string }) => {
	return (
		<figure
			className={cn(
				"relative h-full w-fit cursor-pointer overflow-hidden rounded-xl p-1"
			)}
		>
			<div className="flex flex-row items-center gap-2">
				<Image
					className="rounded-full"
					width="32"
					height="32"
					alt=""
					src={img}
				/>
				<div className="flex flex-col">
					<figcaption className="text-sm font-medium dark:text-white">
						{name}
					</figcaption>
				</div>
			</div>
		</figure>
	);
};

export function MarqueeDemo() {
	return (
		<div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
			<Marquee
				pauseOnHover
				className="[--duration:20s]"
			>
				{reviews.map((review) => (
					<ReviewCard
						key={review.name}
						{...review}
					/>
				))}
			</Marquee>
			<Marquee
				pauseOnHover
				reverse
				className="[--duration:20s]"
			>
				{reviews.map((review) => (
					<ReviewCard
						key={review.name}
						{...review}
					/>
				))}
			</Marquee>

			<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
			<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
		</div>
	);
}
