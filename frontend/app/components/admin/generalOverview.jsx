import React from "react";
import { PiToolboxFill } from "react-icons/pi";
import { FaChartPie } from "react-icons/fa";
import { FaRecycle } from "react-icons/fa6";
import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";

const GeneralOverview = () => {
	return (
		<div className="w-full ">
			<span className="text-2xl font-medium">Overview</span>
			<div className="flex gap-8 mt-5 text-[#00000099]">
				<div className="flex flex-col p-5 bg-[#8D6E631A] min-w-[300px] rounded-2xl gap-3  border shadow-sm">
					<div className="flex justify-center items-center  w-10 h-10 rounded-full bg-black text-white">
						<PiToolboxFill size={24} />
					</div>
					<span className="font-medium">Total Recyclers</span>
					<span className="font-bold text-black text-2xl">200</span>
					<div className="flex items-center gap-1 text-xs">
						<div className="w-6 h-6 bg-[#8D6E634D] flex items-center justify-center rounded-full text-[#8D6E63]">
							<FiArrowUpRight size={16} />
						</div>
						<p>60%</p>
					</div>
				</div>

				<div className="flex flex-col p-5 bg-[#2240931A] min-w-[300px] rounded-2xl gap-3  border shadow-sm">
					<div className="flex justify-center items-center  w-10 h-10 rounded-full bg-black text-white">
						<FaChartPie size={24} />
					</div>
					<span className="font-medium">Total Aggregators</span>
					<span className="font-bold text-black text-2xl">200</span>
					<div className="flex items-center gap-1 text-xs">
						<div className="w-6 h-6 bg-[#2240934D] flex items-center justify-center rounded-full text-[--blue]">
							<FiArrowDownLeft size={16} />
						</div>
						<p>20%</p>
					</div>
				</div>

				<div className="flex flex-col p-5 bg-[#FFEB3B1A] min-w-[300px] rounded-2xl gap-3  border shadow-sm">
					<div className="flex justify-center items-center  w-10 h-10 rounded-full bg-black text-white">
						<FaRecycle size={24} />
					</div>
					<span className="font-medium">Total Waste Collected</span>
					<span className="font-bold text-black text-2xl">200</span>
					<div className="flex items-center gap-1 text-xs">
						<div className="w-6 h-6 bg-[#FFEB3B4D] flex items-center justify-center rounded-full text-[--yellow]">
							<FiArrowUpRight size={16} />
						</div>
						<p>50%</p>
					</div>
				</div>

				<div className="flex flex-col p-6 bg-[#4CAF501A] w-full rounded-2xl gap-3  border shadow-sm">
					<span className="text-2xl font-bold text-black">All Orders</span>
					<div className="flex justify-between items-start w-full">
						<div className="flex flex-col gap-4">
							<span className="font-medium">Pending</span>
							<span className="font-bold text-black text-2xl">5</span>
						</div>
						<div className="flex flex-col gap-4">
							<span className="font-medium">Processing</span>
							<span className="font-bold text-black text-2xl">0</span>
						</div>
						<div className="flex flex-col gap-4">
							<span className="font-medium">Delivered</span>
							<span className="font-bold text-black text-2xl">30</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GeneralOverview;
