import React from "react";
import { trashbucket } from "@/app/assets/images";
import Image from "next/image";

const Trashpoint = () => {
	return (
		// Remeber to remove the border
		<div className="flex flex-col items-center justify-center py-16 px-32 ">
			{/* First Group */}
			<div className=" flex justify-center items-center gap-32 py-16">
				<Image
					src={trashbucket}
					width={0}
					height={0}
					sizes="10vw"
					style={{ width: "500px", height: "500px" }}
					className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16  justify-center"
				/>
				<div className=" w-full max-w-[700px]">
					<span className="text-2xl font-bold mb-5">What is Trashpoint?</span>
					<p className="">
						TrashPoint is a tech-enabled system that connects recyclers with
						waste aggregators, tracks, and rewards users for recycling. From
						booking pickups to scheduling your nearest recycling center,
						TrashPoint helps you track your waste and its impact. For every
						waste you recycle, you are rewarded with coins – Trash-eco coins are
						accumulated over time and can be exchanged for goods, services, or
						donations to environmental causes.
					</p>
				</div>
			</div>

			{/* Second Group */}
			<div className=" flex justify-center items-center gap-32 py-16">
				<div className=" w-full max-w-[700px]">
					<span className="text-2xl font-bold mb-5">
						With Trashpoint, users can:
					</span>
					<ul className=" list-disc list-inside">
						<li>Locate nearby aggregators</li>
						<li>Schedule waste dropoff</li>
						<li>Track and monitor waste output and recycling habits</li>

						<li>
							Earn rewards for recycling, such as points, credits, or cash
						</li>
						<li>
							Access analytics to see the environmental impact of their
							recycling efforts
						</li>
					</ul>
				</div>
				<Image
					src={trashbucket}
					width={0}
					height={0}
					sizes="10vw"
					style={{ width: "500px", height: "500px" }}
					className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16  justify-center"
				/>
			</div>

			{/* Third Group */}
			<div className=" flex justify-center items-center gap-32 py-16">
				<Image
					src={trashbucket}
					width={0}
					height={0}
					sizes="10vw"
					style={{ width: "500px", height: "500px" }}
					className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16  justify-center"
				/>
				<div className=" w-full max-w-[700px]">
					<span className="text-2xl font-bold mb-5">
						With Trashpoint, users can:
					</span>
					<ul className=" list-disc list-inside">
						<li>Locate nearby recyclers</li>
						<li>Schedule waste pickups</li>
						<li>Track waste processed and monitor recycling rates</li>
						<li>
							Access analytics to see the environmental impact of the recycling
							efforts
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Trashpoint;
