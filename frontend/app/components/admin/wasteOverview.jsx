import React from "react";
import { HiDownload, HiShare } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SimpleAreaChart } from "@/app/components/";
import { Suspense } from "react";

const WasteOverview = () => {
	const data = [
		{
			name: "Jan",
			value: 1600,
		},
		{
			name: "Feb",
			value: 1000,
		},
		{
			name: "Mar",
			value: 2000,
		},
		{
			name: "Apr",
			value: 2500,
		},
		{
			name: "May",
			value: 2800,
		},
		{
			name: "Jun",
			value: 3500,
		},
		{
			name: "Jul",
			value: 4600,
		},
		{
			name: "Aug",
			value: 3200,
		},
		{
			name: "Sept",
			value: 3800,
		},
		{
			name: "Oct",
		},
		{
			name: "Nov",
		},
		{
			name: "Dec",
		},
	];

	return (
		<div className="w-full flex flex-col gap-5">
			<div className="w-full flex justify-between items-end">
				<span className="text-2xl font-medium">Waste Overview</span>
				<div className="flex justify-end items-center gap-3">
					<div className="p-1 pl-5 text-sm  h-8 rounded-lg border border-[CFCFCF]  flex justify-between items-center text-[--grey]">
						<p>Monthly</p>
						<RiArrowDropDownLine size={36} />
					</div>
					<div className="p-1 w-8 h-8 rounded-lg bg-[--bgGrey] flex justify-center items-center">
						<HiShare size={20} />
					</div>
					<div className="p-1 w-8 h-8 rounded-lg bg-[--bgGrey] flex justify-center items-center">
						<HiDownload size={20} />
					</div>
				</div>
			</div>
			<div className="w-full  h-[400px] flex items-center justify-center">
				<Suspense fallback="Loading...">
					<SimpleAreaChart data={data} />
				</Suspense>
			</div>
		</div>
	);
};

export default WasteOverview;
