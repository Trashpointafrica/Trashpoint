import React from "react";
import {
	GeneralOverview,
	WasteOverview,
	RecentPickups,
	RecentRecyclers,
} from "@/app/components/";

const AdminDashboard = () => {
	return (
		<div className="flex flex-col justify-start items-start gap-12 pb-32">
			<GeneralOverview />
			<div className="w-full flex items-start justify-start gap-16">
				<WasteOverview />
				<RecentRecyclers />
			</div>

			<RecentPickups />
		</div>
	);
};

export default AdminDashboard;
