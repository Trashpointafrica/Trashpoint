import React from "react";
import Image from "next/image";
import {
	edo,
	cchub,
	mindshift,
	inoki,
	oldman,
	trash,
	lsquare,
	rsquare,
	edoInnovates,
} from "@/app/assets/images";

// Define partners as an array of objects
const partners = [
	{
		title: "mindshift logo",
		imgUrl: mindshift,
	},
	{
		title: "inoki logo",
		imgUrl: inoki,
	},
	{
		title: "edo innovates logo",
		imgUrl: edoInnovates,
	},
	{
		title: "edo state logo",
		imgUrl: edo,
	},
	{
		title: "cchub logo",
		imgUrl: cchub,
	},
];

// Main Hero Component
const Hero = () => {
	return (
		<div className="w-full bg-[--bgGrey] relative" id="Home">
			{/* Hero Section Starts */}
			<div className="w-full  md:px-16 md:py-2">
				<div className="bghero rounded">
					<div className="text-white w-full md:pl-32 pl-4">
						<span className="text-3xl sm:text-4xl md:text-5xl font-bold py-5 leading-tight">
							Recycle <span className="text-[--green]">Today</span>,<br />
							Sustain <span className="text-[--green]">Tomorrow</span>
						</span>
						<p className="text-sm md:text-base w-full md:w-[600px] mt-4">
							Your recycling efforts reduce waste, conserve resources, and
							protect our planet. Together, we can create a greener, cleaner
							future.
						</p>
						<button className="primarybtn mt-5">Get Started</button>
					</div>
				</div>
			</div>

			{/* Our Partners Section */}
			<h2 className="text-black text-center text-4xl font-bold py-8 md:py-32">
				Our Partners
			</h2>
			<div className="w-full flex flex-col justify-center items-center py-12">
				<div className="relative w-full flex justify-center items-center py-12 min-h-[200px]">
					<div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 absolute z-10">
						{partners.map((partner) => (
							<div
								className="w-[150px]  lg:w-[200px] bg-white shadow-[0_2px_6px_1px_#0000003d] rounded p-3 min-h-[100px] sm:min-h-[150px] flex items-center justify-center"
								key={partner.title}
							>
								<div className="relative w-[60px] sm:w-[90px]">
									<Image
										src={partner.imgUrl}
										width={0}
										height={0}
										alt={partner.title}
										sizes="100vw"
										style={{ width: "100%", height: "auto" }}
										unoptimized
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Old Man and Trash Section */}
			<div className="w-full flex flex-col lg:flex-row justify-center items-start gap-16 py-16 md:py-32 px-6 md:px-16">
				<div className="relative w-full md:w-[450px]">
					<Image
						src={oldman}
						width={0}
						height={0}
						alt="old man"
						sizes="100vw"
						style={{ width: "100%", height: "auto" }}
						unoptimized
					/>
				</div>

				<div className="w-full md:w-auto">
					<div className="relative w-full md:w-[400px]">
						<Image
							src={trash}
							width={0}
							height={0}
							alt="trash bin"
							sizes="100vw"
							style={{ width: "100%", height: "auto" }}
							unoptimized
						/>
					</div>
					<div className="w-full mt-3">
						<span className="text-xl md:text-2xl font-bold">
							A <span className="text-[--green]">Smooth-Running</span> Waste
							Management Experience
						</span>
						<p className=" mt-3  w-full md:w-[400px]">
							Kyrus Recycling Ventures is driven by the mission to reduce the
							environmental burden of waste in Nigeria by promoting recycling
							and behavioral change. In addition to addressing waste management
							challenges, Kyrus recognizes the critical need for research in
							this area to support sustainable practices.
						</p>
						<button className="primarybtn mt-5">Get Started</button>
					</div>
				</div>
			</div>

			{/* Left SVG (decorative) */}
			<div className="absolute left-0 bottom-[20%] lg:bottom-[40%] z-1">
				<div className="relative w-[80px] md:w-[150px]">
					<Image
						src={lsquare}
						width={0}
						height={0}
						alt="left square"
						sizes="100vw"
						style={{ width: "100%", height: "auto" }}
						unoptimized
					/>
				</div>
			</div>

			{/* Right SVG (decorative) */}
			<div className="absolute right-0 bottom-[10%] lg:bottom-[30%] z-1">
				<div className="relative w-[80px] md:w-[150px]">
					<Image
						src={rsquare}
						width={0}
						height={0}
						alt="right square"
						sizes="100vw"
						style={{ width: "100%", height: "auto" }}
						unoptimized
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
