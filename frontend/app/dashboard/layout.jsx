import React from "react";
import { MainSideBar } from "../components";

const DashboardLayout = ({ admin, recycler, aggregator }) => {
	const sessionUser = "recycler";

	return (
		<div className="w-full flex justify-start items-start">
			<div className="flex-none">
				<MainSideBar role={sessionUser} />
			</div>

			<div className="flex-1 h-[100vh] overflow-y-clip">
				{sessionUser === "admin"
					? admin
					: sessionUser === "aggregator"
					? aggregator
					: recycler}
			</div>
		</div>
	);
};

export default DashboardLayout;
