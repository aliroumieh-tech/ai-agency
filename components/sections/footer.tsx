import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../../public/websiteLogo.png";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className="bg-white text-gray-800 px-6 py-10 mt-16">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
				{/* Logo + Name */}
				<div className="flex flex-col items-center md:items-start">
					<Image
						src={logo}
						alt="Logo"
						className="w-10 h-10 mb-2"
					/>
					<span className="text-xl font-semibold">PipelineFire</span>
				</div>

				{/* Links */}
				<div className="flex justify-center space-x-6">
					<a
						href="/privacy-policy"
						className="hover:underline text-sm text-gray-600"
					>
						Privacy Policy
					</a>
					<a
						href="/terms-of-service"
						className="hover:underline text-sm text-gray-600"
					>
						Terms of Service
					</a>
				</div>

				{/* Socials */}
				<div className="flex justify-center md:justify-end space-x-4">
					<a
						href="https://www.facebook.com/share/1AY7J1y5PZ/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaFacebookF className="hover:text-blue-500 text-gray-600 transition text-lg" />
					</a>
					<a
						href="https://www.instagram.com/pipeline.fire/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaInstagram className="hover:text-pink-500 text-gray-600 transition text-lg" />
					</a>
					<a
						href="https://linkedin.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaLinkedinIn className="hover:text-blue-400 text-gray-600 transition text-lg" />
					</a>
				</div>
			</div>

			<div className="text-center text-sm text-gray-500 mt-8">
				© 2025 PipelineFire. All rights reserved.
			</div>
		</footer>
	);
}
