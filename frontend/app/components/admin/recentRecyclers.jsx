import React from "react";
import Image from "next/image";

const recyclers = [
	{
		name: "Taiwo Kehinde",
		email: "taiwokehinde@gmail.com",
		img: "/",
	},
	{
		name: "Peter Joseph",
		email: "peterj@gmail.com",
		img: "/",
	},
	{
		name: "john mandelas",
		email: "mandeyforyou@gmail.com",
		img: "/",
	},
	{
		name: "Omolewa Okenia",
		email: "Omolewababy11@gmail.com",
		img: "/",
	},
];

const RecentRecyclers = () => {
	return (
		<div className="w-full max-w-[650px] flex flex-col gap-5">
			<span className="text-2xl font-medium">Recent Recyclers</span>
			<div className="flex flex-col rounded-xl bg-[#F5F6FF] border shadow-sm ">
				{recyclers.map((item) => (
					<div
						className="w-full flex items-center justify-start gap-3 py-5 px-8 border-b"
						key={item.name}
					>
						<Image
							src={item.img}
							width={0}
							height={0}
							alt="recycler"
							className="rounded-full border-2 "
							style={{ width: "60px", height: "60px" }}
						/>
						<div className="flex flex-col text-sm">
							<span className="capitalize font-bold">{item.name}</span>
							<p>{item.email}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default RecentRecyclers;
