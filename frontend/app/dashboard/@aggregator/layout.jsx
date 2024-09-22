import React from "react";
import { AggregatorNavbar } from "@/app/components";

const AggregatorLayout = ({ children }) => {
	return (
		<div className="w-full flex flex-col justify-start items-start">
			<AggregatorNavbar />
			{children}
		</div>
	);
};

export default AggregatorLayout;
