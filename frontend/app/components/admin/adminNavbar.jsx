import React from "react";
import { IoNotifications } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";

const AdminNavbar = () => {
	return (
		<div className="w-full shadow-md flex gap-5 justify-end items-center">
			<div className="bg-[--bgGrey2] p-1 rounded-xl w-12 h-12 flex justify-center items-center relative cursor-pointer">
				<div className="w-3 h-3 aspect-square bg-[--red] rounded-full text-white text-[12px] font-bold flex justify-center items-center absolute top-2 right-3 border-2 border-white" />
				<IoNotifications size={32} />
			</div>
			<div className="p-3 border-l flex justify-center items-center">
				<div className="w-14 h-14 rounded-full border-4 flex justify-center items-center">
					img
				</div>
				<div className="flex flex-col justify-center items-center px-3">
					<p className="text-xs font-bold">Admin User</p>
					<p className="text-xs">admin@trashpoint.com</p>
				</div>
				<div className="relative cursor-pointer">
					<RiArrowDropDownLine size={32} />
				</div>
			</div>
		</div>
	);
};

export default AdminNavbar;
