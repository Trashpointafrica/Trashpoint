import React from "react";
import { check } from "@/app/assets/icons";
import Image from "next/image";
import Link from "next/link";

const SuccessModal = () => {
	return (
		<div className="z-[100] fixed top-0 left-0 w-full h-[100vh] bg-black/60 backdrop-blur-lg flex justify-center items-center">
			<div className="bg-white p-8 w-full max-w-[600px] rounded-xl  flex flex-col justify-center items-center gap-8">
				<span className="text-[--blue] text-3xl">Congratulations!</span>
				<div className="w-40">
					<Image
						src={check}
						width={0}
						height={0}
						style={{ width: "100%", height: "auto" }}
					/>
				</div>
				<p className="text-[--blue]">Request has been logged</p>
				<Link href="/dashboard">
					<button className="primarybtn w-full">Continue</button>
				</Link>
			</div>
		</div>
	);
};

export default SuccessModal;
