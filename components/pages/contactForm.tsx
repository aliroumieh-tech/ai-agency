"use client";

import React, { useEffect, useState } from "react";

// Define an interface for the form data (optional, remove if not using TypeScript)
interface FormDataType {
	name: string;
	email: string;
	phoneNumber: string;
	cityCountry: string;
	topic: string;
	message: string;
	time: Date;
}

const ContactForm = () => {
	const [formData, setFormData] = useState<FormDataType | null>(null);

	// This handler will capture and extract form values when the user submits the form.
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		// Use the FormData API to extract form values.
		const fData = new FormData(event.currentTarget);

		// Build an object with your desired keys.
		const data: FormDataType = {
			name: fData.get("name")?.toString() || "",
			email: fData.get("email")?.toString() || "",
			phoneNumber: fData.get("phoneNumber")?.toString() || "",
			cityCountry: fData.get("cityCountry")?.toString() || "",
			topic: fData.get("topic")?.toString() || "",
			message: fData.get("message")?.toString() || "",
			time: new Date(),
		};

		setFormData(data);
	};

	useEffect(() => {
		if (formData) {
			const storeLeads = async () => {
				try {
					const response = await fetch(
						"https://agency-roumieh.app.n8n.cloud/webhook-test/website-form",
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify(formData),
						}
					);
					console.log("Response Status:", response.status);
				} catch (error) {
					console.error("Error storing leads:", error);
				}
			};

			storeLeads();
		}
	}, [formData]);

	return (
		<form
			onSubmit={handleSubmit}
			action="POST"
			className="top-100 p-10 bg-black"
		>
			<div className="grid md:grid-cols-2 grid-cols-1 gap-x-8">
				<div className="relative mb-6">
					<input
						type="text"
						name="name"
						id="name-input"
						className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
						placeholder="Name..."
						required
					/>
				</div>
				<div className="relative mb-6">
					<input
						type="email"
						name="email"
						id="email-input"
						className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
						placeholder="Email Address..."
						required
					/>
				</div>
			</div>
			<div className="grid md:grid-cols-2 grid-cols-1 gap-x-8">
				<div className="relative mb-6">
					<input
						type="text"
						name="phoneNumber"
						id="phoneNumber-input"
						className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
						placeholder="Phone Number..."
						required
					/>
				</div>
				<div className="relative mb-6">
					<input
						type="text"
						name="cityCountry"
						id="city-country-input"
						className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
						placeholder="City, Country..."
						required
					/>
				</div>
			</div>
			<div className="relative mb-6">
				<input
					type="text"
					name="topic"
					id="topic-input"
					className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
					placeholder="Topic..."
					required
				/>
			</div>
			<div className="relative mb-6">
				<textarea
					name="message"
					id="message-input"
					className="block w-full h-40 px-5 py-2.5 bg-white leading-7 resize-none text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-2xl placeholder-gray-400 focus:outline-none"
					placeholder="Your Message..."
					required
				></textarea>
			</div>
			<div className="flex items-center justify-center">
				<button
					type="submit"
					className="w-52 h-12 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 rounded-full shadow-xs text-white text-base font-semibold leading-6"
				>
					Send Message
				</button>
			</div>
		</form>
	);
};

export default ContactForm;
