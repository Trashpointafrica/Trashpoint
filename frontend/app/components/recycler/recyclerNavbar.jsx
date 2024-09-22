import React from "react";
import { IoNotifications } from "react-icons/io5";
import Image from "next/image";
import { oldman } from "@/app/assets/images";

const RecyclerNavbar = () => {
	return (
		<div className="w-full shadow-lg flex gap-5 justify-end items-center">
			<div className="bg-[--greenLight] p-1 rounded-xl w-12 h-12 flex justify-center items-center relative cursor-pointer">
				<div className="w-3 h-3 aspect-square bg-[--red] rounded-full text-white text-[12px] font-bold flex justify-center items-center absolute top-2 right-3 border-2 border-white" />
				<IoNotifications size={24} className="text-[--blue]" />
			</div>
			<div className="py-2 px-10 border-l flex justify-center items-center gap-5">
				<span className="font-bold">Jane Doe</span>

				<div className="w-14 h-14 flex rounded-full justify-center items-center relative overflow-clip">
					<Image
						src={oldman}
						width={0}
						height={0}
						alt="User Avatar"
						style={{
							width: "100%",
							height: "auto",
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default RecyclerNavbar;
