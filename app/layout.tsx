import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import UnderConstruction from "../components/ui/UnderConstruction";
import Navbar from "@/components/layout/navbar";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "AI Agents SaaS",
	description: "AI-powered lead management and automation platform",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
			>
				<Navbar />
				<main className="pb-16">{children}</main>
				<UnderConstruction />
			</body>
		</html>
	);
}
