import React from "react";
import { About, Team, Values, Navbar, Footer } from "../../components";

const AboutPage = () => {
	return (
		<div className="w-full flex flex-col justify-start items-center">
			<Navbar />
			<About />
			<Values />
			<Team />
			<Footer />
		</div>
	);
};

export default AboutPage;
