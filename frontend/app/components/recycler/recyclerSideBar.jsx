"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LuLayoutDashboard } from "react-icons/lu";
import { LiaGiftsSolid } from "react-icons/lia";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { MdOutlineLogout } from "react-icons/md";
import { RiBook3Line } from "react-icons/ri";
import { MdHistory } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { sidebarSquare, tplogo } from "@/app/assets/images";

const RecyclerSideBar = () => {
	//Links for Recycler Dashboard Routes
	const Links = [
		{
			title: "Dashboard",
			url: "/dashboard",
			icon: <LuLayoutDashboard size={24} />,
		},
		{
			title: "Rewards",
			url: "/dashboard/rewards",
			icon: <LiaGiftsSolid size={24} />,
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
			icon: <IoNotificationsOutline size={24} />,
		},
		{
			title: "Support",
			url: "/dashboard/support",
			icon: <BiSupport size={24} />,
		},
		{
			title: "Settings",
			url: "/dashboard/user-settings",
			icon: <IoSettingsOutline size={24} />,
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

export default RecyclerSideBar;
