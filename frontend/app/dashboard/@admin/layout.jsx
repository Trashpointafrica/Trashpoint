import React from "react";
import { AdminNavbar } from "@/app/components";

const AdminLayout = ({ children }) => {
	return (
		<div className="w-full min-h-[100vh]">
			<AdminNavbar />
			<div className="p-8 w-full h-[100vh] overflow-y-scroll">{children}</div>
		</div>
	);
};

export default AdminLayout;
