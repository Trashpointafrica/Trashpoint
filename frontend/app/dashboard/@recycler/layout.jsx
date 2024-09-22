import React from "react";
import { RecyclerNavbar } from "@/app/components";

const RecyclerLayout = ({ children }) => {
	return (
		<div className="w-full flex flex-col justify-start items-start ">
			<RecyclerNavbar />
			<div className="py-16 px-8 pt-3 w-full bg-[--bgGrey] h-[100vh] overflow-y-scroll ">
				{children}
			</div>
		</div>
	);
};

export default RecyclerLayout;
