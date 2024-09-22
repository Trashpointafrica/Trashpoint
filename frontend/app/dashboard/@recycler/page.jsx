import {
	recycleNow,
	redeemPoints,
	history,
	learn,
	curve,
	airtime,
	cash,
	waterbottle,
	discount,
} from "@/app/assets/images";

import Image from "next/image";
import React from "react";
import { AiOutlineRise } from "react-icons/ai";
import Link from "next/link";

const RecyclerDashboard = () => {
	const Actions = [
		{
			title: "Recycle Now",
			desc: "Request a drop off or a Pick Up",
			img: recycleNow,
			url: "/dashboard/request-drop",
		},
		{
			title: "Redeem Points",
			desc: "Convert your points to rewards",
			img: redeemPoints,
			url: "#",
		},
		{
			title: "History",
			desc: "Check out your recycling history",
			img: history,
			url: "/dashboard/history",
		},
		{
			title: "Learn",
			desc: "Learn a lot more about the world of Recycling",
			img: learn,
			url: "/dashboard/learn",
		},
	];

	const RewardOptions = [
		{
			title: "Cash",
			desc: "Get up to 5000 naira cash",
			img: cash,
			limit: "500 points and above",
			status: "active",
		},
		{
			title: "Airtime",
			desc: "Get airtime for all networks",
			img: airtime,
			limit: "500 points and above",
			status: "active",
		},
		{
			title: "Reusable water bottles",
			desc: "Get up to 5000 naira cash",
			img: waterbottle,
			limit: "1500 points and above",
			status: "coming soon",
		},
		{
			title: "Discounts",
			desc: "Get airtime for all networks",
			img: discount,
			limit: "1500 points and above",
			status: "comming soon",
		},
	];

	return (
		<div className="w-full flex flex-col justify-start items-start  min-h-[100vh]">
			{/* Points Display Component */}
			<div className="w-full py-8 pt-0">
				<div className="w-full flex justify-between items-center">
					<span className="text-black text-2xl font-semibold capitalize">
						Welcome back to trashpoint
					</span>
					<p className="py-3 px-5 bg-[--bgGrey2] rounded-lg text-[--grey]">
						6th Sept. 2024
					</p>
				</div>

				<div className="w-full py-5 flex gap-16 justify-start items-center">
					<div className="rounded-lg w-full max-w-[350px]  flex flex-col justify-start items-start bg-[--blue] text-white py-5">
						<span className="px-8 py-3 text-2xl font-semibold">
							Points Earned
						</span>

						<div className="w-full flex justify-end items-center gap-8 py-5">
							<span className="pl-3 text-4xl font-bold">4,000</span>
							<p className="py-3 px-5 bg-white text-[--blue] rounded-l-xl font-medium">
								Points
							</p>
						</div>

						<div className="flex justify-start items-center gap-2 py-3 px-8 w-full">
							<span>40% Increase</span>
							<div className="p-[3px] border border-[--green] text-[--green] rounded-sm text-xs">
								<AiOutlineRise />
							</div>
						</div>
					</div>

					<div className="w-full p-5 rounded-lg bg-[--blueLight] ">
						<div className="border-b-2 border-[--bgGrey2] w-full pb-5">
							<span className=" text-2xl font-semibold w-full">
								Recycling Overview
							</span>
						</div>

						<div className="flex justify-start items-start">
							<div className="flex flex-col justify border-r-2 border-[--bgGrey2] p-5 w-full">
								<p>Total Recycling Cycles</p>
								<span className="text-5xl font-bold py-3 text-[--blue]">
									500
								</span>
							</div>
							<div className="flex flex-col justify border-r-2 border-[--bgGrey2] p-5 w-full">
								<p>Completed Requests</p>
								<span className="text-5xl font-bold py-3 text-[--blue]">
									148
								</span>
							</div>
							<div className="flex flex-col justify p-5 w-full">
								<p>Pending Requests</p>
								<span className="text-5xl font-bold py-3 text-[--blue]">2</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Actions Component */}
			<div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-16 ">
				{Actions.map((item) => (
					<Link href={item.url} key={item.title}>
						<div className="w-full h-[300px] rounded-lg shadow-lg bg-white flex flex-col gap-2 justify-center items-center p-8 text-center">
							<div className="w-40">
								<Image
									src={item.img}
									width={0}
									height={0}
									style={{ width: "100%", height: "auto" }}
								/>
							</div>
							<span className="font-semibold text-lg">{item.title}</span>
							<p>{item.desc}</p>
						</div>
					</Link>
				))}
			</div>

			{/* Available Rewards Component */}
			<div className="py-8 w-full ">
				<span className="text-2xl font-semibold">Available Rewards</span>

				<div className="flex justify-start items-start gap-8 py-3">
					{RewardOptions.map((item) => (
						<div className="flex flex-col  rounded-xl overflow-clip shadow-lg bg-white w-[250px] relative">
							<div className="w-full h-[150px] overflow-clip">
								<Image
									src={item.img}
									width={0}
									height={0}
									alt={item.desc}
									style={{
										width: "100%",
										height: "auto",
									}}
								/>
							</div>

							<div className="w-full flex justify-center items-center relative overflow-clip">
								<div className="flex flex-col justify-center items-start p-5 z-10">
									<span className="font-semibold">{item.title}</span>
									<p className=" text-sm">{item.desc}</p>
									<p className="text-[--green] text-sm">{item.limit}</p>
								</div>

								<Image
									src={curve}
									width={0}
									height={0}
									alt="curve svg"
									style={{
										width: "100%",
										height: "auto",
									}}
									className="left-[-60px] bottom-0 absolute "
								/>
							</div>

							<div
								className={`absolute top-0 left-0 w-full h-full bg-[--overlay] flex justify-center items-center text-center text-white z-50 ${
									item.status === "active" && "hidden"
								}`}
							>
								<p>Comming Soon...</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default RecyclerDashboard;
