import React from "react";
import Image from "next/image";
import { cash, airtime, curve } from "@/app/assets/images/";

const Rewards = () => {
	return (
		<div className="w-full min-h-[100vh] ">
			<div className="flex  justify-between items-center ">
				<span className="text-2xl font-semibold ">Redeem your points</span>
				<div>
					<p className="bg-[--bgGrey2]  text-[--grey] rounded-md py-3 px-5">
						6th Sept 2024
					</p>
				</div>
			</div>
			<div className="w-full py-3 flex justify-start items-center gap-6 ">
				<div className=" min-w-[250px] text-lg flex justify-between items-center  bg-[--yellowLight] rounded-md py-2 px-5 gap-6">
					<h2 className="font-semibold">Available points</h2>
					<p className="font-bold">150</p>
				</div>
				<div className="min-w-[250px] text-lg flex justify-between items-center  bg-[--greenLight] rounded-md py-2 px-5 gap-6">
					{" "}
					<h2 className="font-semibold ">Conversion rate</h2>
					<p className=" font-bold">1 point = 1 naira</p>{" "}
				</div>
			</div>
			<div className=" w-full flex flex-col justify-start items-start gap-5 py-8">
				<span className="text-2xl font-semibold ">Available reward</span>
				<div className="flex justify-start items-center gap-6">
					{/* Cash Option */}
					<div className="flex rounded-xl overflow-clip shadow-lg bg-white">
						<div className="w-40">
							<Image
								src={cash}
								width={0}
								height={0}
								alt="cash reward"
								style={{
									width: "100%",
									height: "auto",
								}}
							/>
						</div>
						<div className="w-full flex justify-center items-center relative overflow-clip">
							<div className="flex flex-col justify-center items-start px-5 z-10">
								<span className="font-semibold">Cash</span>
								<p className=" text-sm">Get up to 5,000 naira cash</p>
								<p className="text-[--green] text-sm">500 points and above.</p>
							</div>

							<Image
								src={curve}
								width={0}
								height={0}
								alt="cash reward"
								style={{
									width: "100%",
									height: "auto",
								}}
								className="left-[-60px] bottom-0 absolute "
							/>
						</div>
					</div>
					{/* Airtime Option */}
					<div className="flex rounded-xl overflow-clip shadow-lg bg-white">
						<div className="w-40">
							<Image
								src={airtime}
								width={0}
								height={0}
								alt="airtime reward"
								style={{
									width: "100%",
									height: "auto",
								}}
							/>
						</div>
						<div className="w-full flex justify-center items-center relative overflow-clip">
							<div className="flex flex-col justify-center items-start px-5 z-10">
								<span className="font-semibold">Airtime</span>
								<p className=" text-sm">Get airtime for all networks.</p>
								<p className="text-[--green] text-sm">100 points and above.</p>
							</div>

							<Image
								src={curve}
								width={0}
								height={0}
								alt="cash reward"
								style={{
									width: "100%",
									height: "auto",
								}}
								className="left-[-60px] bottom-0 absolute "
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full flex flex-col justify-start items-start gap-6 rounded-lg bg-[--white] p-8 bg-white shadow">
				<span className="w-full text-xl font-semibold">
					Select Rewards Preference
				</span>

				<div className="flex gap-32 justify-start items-start ">
					{/* Input Amount To Redeem */}
					<div className="">
						<span className="block font-semibold pb-3">
							Input the amount of point to redeem.
						</span>
						<input
							type="text"
							className="border border-gray-300 rounded-md p-3 "
							placeholder="Type here..."
						/>
					</div>

					{/* Choose Your Reward */}
					<div className="">
						<span className="block font-semibold pb-3">Choose your reward</span>
						<div className="flex gap-8 items-start justify-start">
							<div className="border-2 border-[--bgGrey2] rounded-xl p-5 flex gap-32 items-center justify-center">
								<div className="flex gap-3 items-start justify-start p-3">
									<input
										type="checkbox"
										name="cash"
										id="cash"
										className="cursor-pointer"
									/>
									<div className="flex flex-col">
										<span className="font-semibold">Cash</span>
										<p>Access Bank</p>
										<p>0785247940</p>
									</div>
								</div>
								<div className="flex gap-3 items-start justify-start p-3">
									<input
										type="checkbox"
										name="airtime"
										id="airtime"
										className="cursor-pointer"
									/>
									<div className="flex flex-col">
										<span className="font-semibold">Airtime</span>
										<p>Phone Number</p>
										<p>07013939475</p>
									</div>
								</div>
							</div>
							<button className="primarybtn">Submit</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Rewards;
