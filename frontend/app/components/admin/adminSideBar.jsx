"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuLayoutDashboard } from "react-icons/lu";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiUsersThreeBold } from "react-icons/pi";
import { BsClipboardData } from "react-icons/bs";
import { LiaGiftsSolid } from "react-icons/lia";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { MdOutlineLogout } from "react-icons/md";

const AdminSideBar = ({ params }) => {
	//Links for Admin Dashboard Routes
	const Links = [
		{
			title: "Dashboard",
			url: "/dashboard",
			icon: <LuLayoutDashboard size={24} />,
		},
		{
			title: "Recyclers",
			url: "/dashboard/recyclers",
			icon: <PiUsersThreeBold size={24} />,
		},
		{
			title: "Aggregators",
			url: "/dashboard/aggregators",
			icon: <LiaShippingFastSolid size={24} />,
		},
		{
			title: "Recycling Data",
			url: "/dashboard/recyclingData",
			icon: <BsClipboardData size={24} />,
		},
		{
			title: "Rewards",
			url: "/dashboard/rewards",
			icon: <LiaGiftsSolid size={24} />,
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
	];

	const pathname = usePathname();

	return (
		<div className="h-[100vh] w-[240px] bg-black flex flex-col justify-between items-center text-white">
			<div className="w-full">
				<div className="p-5">LOGO</div>

				<div className="">
					{/* Renders SideBar Items as a list */}
					{Links.map((item) => (
						<Link key={item.title} href={item.url}>
							<div
								className={`px-8 py-5 flex items-center gap-5 font-medium ${
									pathname === item.url && "bg-[--green]"
								}`}
							>
								{item.icon}
								<p>{item.title}</p>
							</div>
						</Link>
					))}
				</div>
			</div>

			<div className="py-8 flex gap-5 items-center cursor-pointer">
				{" "}
				<MdOutlineLogout size={24} /> Logout
			</div>
		</div>
	);
};

export default AdminSideBar;
