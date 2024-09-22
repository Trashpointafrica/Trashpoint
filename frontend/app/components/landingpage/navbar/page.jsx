"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { kyruslogo } from "@/app/assets/images";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const pageLinks = [
		{
			title: "Home",
			url: "/",
		},
		{
			title: "About Us",
			url: "about",
		},
		{
			title: "Blog",
			url: "blog", //"blog"
		},
		{
			title: "Our Services",
			url: "ourservices", //"ourservices"
		},
		{
			title: "Faq",
			url: "faq", //"faq"
		},
		{
			title: "T&C",
			url: "termsandconditions", //"terms and conditions"
		},
		{
			title: "Contact Us",
			url: "contact", //"contact"
		},
	];

	return (
		<>
			{/* Announcement Bar */}
			<div className="w-full text-xs md:text-sm bg-[--blue] py-1 md:py-3 flex justify-center items-center text-white">
				<span>Earn cash backs on every waste you recycle</span>
			</div>

			{/* Main Navbar */}
			<div className="w-full px-4 md:px-16 py-1 md:py-3 flex justify-between items-center border-b-2">
				{/* Logo */}
				<div className="w-[60px] relative">
					<Image
						src={kyruslogo}
						width={0}
						height={0}
						sizes="100vw"
						style={{ width: "100%", height: "auto" }}
						alt="Kyrus Logo"
					/>
				</div>

				{/* Desktop Menu */}
				<ul className="hidden lg:flex gap-5 items-center justify-center font-medium">
					{pageLinks.map((item, index) => (
						<li key={index} className="hover:text-[--blue]">
							<Link href={`/${item.url}`}>{item.title}</Link>
						</li>
					))}
				</ul>

				{/* Desktop Trashpoint Button */}
				<div className="hidden lg:block">
					<Link href="#">
						<button className="primarybtn">Get Started</button>
					</Link>
				</div>

				{/* Hamburger Menu Icon (Visible on mobile) */}
				<div className="block lg:hidden">
					<button onClick={toggleMenu}>
						{isMenuOpen ? (
							<FiX size={28} className="text-[--blue]" />
						) : (
							<FiMenu size={28} className="text-[--blue]" />
						)}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				className={`fixed top-0 right-0 h-full w-full bg-white z-50 transform ${
					isMenuOpen ? "translate-x-0" : "translate-x-full"
				} transition-transform duration-300 ease-in-out lghidden`}
			>
				<div className="flex flex-col justify-start items-center mt-12">
					{/* Close Icon */}
					<div className="absolute top-5 right-5">
						<button onClick={toggleMenu}>
							<FiX size={28} className="text-[--blue]" />
						</button>
					</div>

					{/* Mobile Nav Links */}
					<ul className="flex flex-col gap-5 items-center font-medium">
						{pageLinks.map((item, index) => (
							<li
								key={index}
								className="hover:text-[--blue] hover:bg-gray-100 text-2xl p-4 rounded transition-all duration-200"
							>
								<Link
									href={`/${item.url}`}
									onClick={() => setIsMenuOpen(false)}
								>
									{item.title}
								</Link>
							</li>
						))}
					</ul>

					{/* Mobile Trashpoint Button */}
					<div className="w-full flex justify-center px-4">
						<Link href="#">
							<button className="primarybtn w-full">Trashpoint</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
