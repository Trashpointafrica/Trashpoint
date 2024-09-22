import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";

const AggregatorNavbar = () => {
	return (
		<div className="w-full bg-white shadow-md flex  justify-between items-start px-6 py-2">
			<div>
				<h1 className="text-2xl  text-[--blue]">Aggregator Dashboard</h1>
				<p> Usman James</p>
			</div>
			<div className="flex justify-end items-center gap-5">
				<div className="bg-[--bgGrey2] p-1 rounded-xl w-12 h-12 flex justify-center items-center relative cursor-pointer">
					<div className="w-3 h-3 aspect-square bg-[--red] rounded-full  text-[12px] font-bold flex justify-center items-center absolute top-2 right-3 border-2 " />
					<IoNotificationsOutline size={32} className="text-[--blue] " />
				</div>
				<input
					type="text"
					placeholder="Search...."
					className=" bg-[--bgGrey2] p-2 rounded-md"
				/>
			</div>
		</div>
	);
};

export default AggregatorNavbar;
