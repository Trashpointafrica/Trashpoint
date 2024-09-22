"use client";
import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { LiaTrophySolid } from "react-icons/lia";
import { MdHistory } from "react-icons/md";
import { RiBook3Line } from "react-icons/ri";
import { MdNotificationsNone } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image;
import { sidebarSquare, tplogo } from "@/app/assets/images";

const AggregatorSideBar = () => {
	const Links = [
		{
			title: "Dashboard",
			url: "/dashboard",
			icon: <MdOutlineDashboard size={24} />,
		},
		{
			title: "Rewards",
			url: "/dashboard/rewards",
			icon: <LiaTrophySolid size={24} />,
		},
		{
			title: "History",
			url: "/dashboard/history",
			icon: <MdHistory size={24} />,
		},
		{
			title: "Learn",
			url: "/dashboard/learn",
			icon: <RiBook3Line size={24} />,
		},
		{
			title: "Notifications",
			url: "/dashboard/notifications",
			icon: <MdNotificationsNone size={24} />,
		},
	];
	const pathname = usePathname();

	return (
		<div className="h-[100vh] w-[240px] sidebarGradient flex flex-col justify-between items-center text-white overflow-clip">
			<div className="w-full justify-start items-center flex flex-col">
				<div className="py-8 ">
					<Image
						src={tplogo}
						width={0}
						height={0}
						alt="sidebar square"
						style={{
							width: "150px",
							height: "auto",
						}}
					/>
				</div>

				<div className="w-full">
					{/* Renders SideBar Items as a list */}
					{Links.map((item) => (
						<Link key={item.title} href={item.url}>
							<div
								className={`px-8 py-5 flex items-center gap-5 font-medium ${
									pathname === item.url && "bg-[#FFFFFF33]"
								}`}
							>
								{item.icon}
								<p>{item.title}</p>
							</div>
						</Link>
					))}
				</div>
			</div>

			<div className=" w-full pr-6 flex justify-center items-center relative ">
				<Image
					src={sidebarSquare}
					width={0}
					height={0}
					alt="sidebar square"
					style={{
						width: "100%",
						height: "auto",
					}}
				/>

				<div className="flex gap-5 items-center cursor-pointer absolute font-medium">
					<MdOutlineLogout size={24} />
					<p>Logout</p>
				</div>
			</div>
		</div>
	);
};
export default AggregatorSideBar;
