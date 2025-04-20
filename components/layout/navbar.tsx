"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
	MobileNav,
	MobileNavHeader,
	MobileNavMenu,
	MobileNavToggle,
	UiNavbar,
	NavbarButton,
	NavbarLogo,
	NavBody,
	NavItems,
} from "../ui/resizable-navbar";

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const navigationItems = [
		{ name: "Home", link: "/" },
		{ name: "Pricing", link: "/pricing" },
		{ name: "About", link: "/about" },
		{ name: "Contact", link: "/contact" },
		{ name: "Privacy Policy", link: "/privacy-policy" },
	];

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<UiNavbar className="max-w-5xl">
			{/* Desktop Navigation */}
			<NavBody>
				<NavbarLogo />
				<NavItems items={navigationItems} />
				<div className="relative z-20 flex items-center justify-end gap-2">
					<NavbarButton
						href="/login"
						variant="secondary"
					>
						Log in
					</NavbarButton>
					<NavbarButton
						href="/signup"
						variant="primary"
					>
						Sign up
					</NavbarButton>
				</div>
			</NavBody>

			{/* Mobile Navigation */}
			<MobileNav>
				<MobileNavHeader>
					<NavbarLogo />
					<MobileNavToggle
						isOpen={isMobileMenuOpen}
						onClick={toggleMobileMenu}
					/>
				</MobileNavHeader>

				<MobileNavMenu
					isOpen={isMobileMenuOpen}
					onClose={closeMobileMenu}
				>
					<div className="flex w-full flex-col space-y-4">
						{navigationItems.map((item, index) => (
							<Link
								key={index}
								href={item.link}
								className="w-full rounded-md px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
								onClick={closeMobileMenu}
							>
								{item.name}
							</Link>
						))}
						<div className="mt-4 flex flex-col space-y-2">
							<NavbarButton
								href="/login"
								variant="secondary"
								className="w-full"
							>
								Log in
							</NavbarButton>
							<NavbarButton
								href="/signup"
								variant="primary"
								className="w-full"
							>
								Sign up
							</NavbarButton>
						</div>
					</div>
				</MobileNavMenu>
			</MobileNav>
		</UiNavbar>
	);
};

export default Navbar;
