import Hero from "@/components/pages/hero";
import Navbar from "@/components/layout/navbar";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import Solution from "@/components/pages/solutions";
import Problem from "@/components/pages/problem";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import Pricing from "@/components/pages/pricing";
import ContactForm from "@/components/pages/contactForm";

const Page = () => {
	return (
		<div className="h-screen">
			<ScrollProgress className="top-[0px]" />
			<HeroHighlight>
				<BackgroundBeamsWithCollision className="flex flex-col">
					<div className="flex lg:flex-row flex-col px-10 md:gap-10 gap-10 h-full">
						<div className="flex-2 w-full">
							<Navbar />
							<Hero />
						</div>
						<div className="flex-[1.7] items-start w-full">
							<HeroVideoDialog
								className="block dark:hidden"
								animationStyle="from-center"
								videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
								thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
								thumbnailAlt="Hero Video"
							/>
							<HeroVideoDialog
								className="hidden dark:block"
								animationStyle="from-center"
								videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
								thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
								thumbnailAlt="Hero Video"
							/>
						</div>
					</div>
				</BackgroundBeamsWithCollision>
			</HeroHighlight>
			<Problem />
			<Solution />
			<Pricing />
			{/* <GoogleGeminiEffectDemo /> */}
			<ContactForm />
		</div>
	);
};

export default Page;
