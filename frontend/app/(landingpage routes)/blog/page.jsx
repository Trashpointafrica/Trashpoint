import React from "react";
import { Navbar, Footer } from "@/app/components";

const BlogHome = () => {
	return (
		<div className="w-full flex flex-col justify-center items-center">
			<Navbar />
			<div className="w-full min-h-[600px]"></div>
			<Footer />
		</div>
	);
};

export default BlogHome;
