"use client";
import React, { useState } from "react";
import { IoLogoWhatsapp, IoMdClose } from "react-icons/io";
import Link from "next/link";

const WhatsApp = () => {
	const [toggle, setToggle] = useState(true);

	return (
		<div className="fixed bottom-0 right-0 z-50 flex gap-3 justify-end items-end pb-8 pr-5">
			{toggle && (
				<div className="h-16 flex  justify-center items-start gap-2">
					<div className="w-full rounded-md p-2 bg-white flex ">
						<p className="font-bold mr-2">Need Help?</p>
						<p>Chat with us</p>
					</div>
					<IoMdClose
						size={24}
						className=" cursor-pointer "
						onClick={() => setToggle(false)}
					/>
				</div>
			)}
			<Link
				href="https://wa.link/jbjt76"
				target="_blank"
				className="p-2 rounded-full shadow-2xl bg-white  flex justify-center items-center  border border-[--greenLight]"
			>
				<IoLogoWhatsapp
					size={40}
					className="text-[--green] hover:scale-105 transition"
				/>
			</Link>
		</div>
	);
};

export default WhatsApp;
