import React from "react";
import { Navbar, Footer } from "@/app/components";
import { lsquare, rsquare } from "@/app/assets/images";
import Image from "next/image";

const OurServices = () => {
	return (
		<div className="w-full flex flex-col justify-center items-center">
			<Navbar />
			<div className="relative w-full min-h-[600px] bg-[--bgGrey]  flex justify-center items-center overflow-y-auto">
				<div className="top-0 py-16 px-5 flex flex-col justify-center items-center text-center z-10 absolute">
					<span className="text-4xl font-bold text-[--blue] mb-12">
						OUR SERVICES
					</span>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
						{/* First Service Card */}
						<div className="bg-white shadow-lg rounded-lg flex flex-col justify-start items-center pb-8">
							<span className="w-full text-2xl font-bold text-white bg-[--blue] p-3 rounded-t-lg">
								Business Waste Management Solutions
							</span>
							<p className=" p-8">
								We understand that businesses generate a wide variety of waste.
								Kyrus offers customized waste management solutions for companies
								of all sizes, helping you reduce costs, improve efficiency, and
								meet sustainability goals. We handle everything from routine
								waste collection to specialized recycling programs, ensuring
								your business stays eco-friendly.
							</p>
							<button className="primarybtn">Know more</button>
						</div>

						{/* Second Service Card */}
						<div className="bg-white shadow-lg rounded-lg flex flex-col justify-start items-center pb-8">
							<span className="w-full text-2xl font-bold text-white bg-[--blue] p-3 rounded-t-lg">
								Waste Collection and Recycling
							</span>
							<p className=" p-8">
								We provide efficient and flexible waste collection services
								tailored to your needs. Whether you're a household looking to
								recycle everyday items or a business managing large volumes of
								waste, we've got you covered. With our platform, you can easily
								schedule pickups or find drop-off locations for your
								recyclables.
							</p>
							<button className="primarybtn">Know more</button>
						</div>
					</div>
				</div>

				{/* Water Mark Squares */}
				<div className="absolute bottom-0 left-0 overflow-clip h-[600px]">
					<Image
						src={lsquare}
						width={0}
						height={0}
						style={{
							width: "200px",
							height: "auto",
						}}
						className=""
					/>
				</div>
				<div className="absolute bottom-0 right-0 overflow-clip h-[600px]">
					<Image
						src={rsquare}
						width={0}
						height={0}
						style={{
							width: "200px",
							height: "auto",
						}}
						className=""
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default OurServices;
