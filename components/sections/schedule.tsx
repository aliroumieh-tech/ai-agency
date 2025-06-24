"use client";

// pages/book.tsx (or /app/book/page.tsx if using App Router)
import { useEffect } from "react";

export default function BookDemo() {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://assets.calendly.com/assets/external/widget.js";
		script.async = true;
		document.body.appendChild(script);
	}, []);

	return (
		<section className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-b from-white to-blue-50">
			<h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-700">
				Book Your Free Demo
			</h1>
			<p className="text-center text-gray-600 mb-8 max-w-xl">
				Pick a time that works for you. This 30-min session will help us
				understand your goals and show you how our automation can grow your
				business.
			</p>

			<div
				className="calendly-inline-widget w-full max-w-3xl"
				data-url="https://calendly.com/roumieh029/30min"
				style={{ minWidth: "320px", height: "700px" }}
			/>
		</section>
	);
}
