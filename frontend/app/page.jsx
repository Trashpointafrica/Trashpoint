import {
	Navbar,
	Hero,
	AppInfo,
	OurServices,
	Offer,
	Trashpoint,
	Testimonials,
	Footer,
	Recyclables,
} from "@/app/components";

const LandingPage = () => {
	return (
		<div className="w-full flex flex-col justify-center items-center">
			<Navbar />
			<Hero />
			<OurServices />
			<Recyclables />
			<Offer />
			<Trashpoint />
			<AppInfo />
			<Testimonials />
			<Footer />
		</div>
	);
};

export default LandingPage;

import React from "react";
