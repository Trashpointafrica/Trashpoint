import React from "react";
import { Navbar, Footer } from "@/app/components";
import { lsquare, rsquare } from "@/app/assets/images";
import Image from "next/image";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
	return (
		<div className="w-full flex flex-col justify-center items-center">
			<Navbar />
			<div className="w-full min-h-[600px] flex flex-col justify-start items-center bg-[--bgGrey] relative">
				{/* Water Mark Squares */}
				<div className="absolute bottom-0 left-0 overflow-clip h-[600px] z-10">
					<Image
						src={lsquare}
						width={0}
						height={0}
						style={{
							width: "200px",
							height: "auto",
						}}
						className=""
					/>
				</div>
				<div className="absolute top-0 right-0 overflow-clip h-[600px] z-10">
					<Image
						src={rsquare}
						width={0}
						height={0}
						style={{
							width: "200px",
							height: "auto",
						}}
						className=""
					/>
				</div>

				{/* FAq Section */}

				<div className="z-20 w-full py-16 px-5 lg:px-16  flex flex-col justify-start items-center">
					<span className="text-4xl font-bold text-[--blue] pb-16">FAQ</span>

					<div className="w-full max-w-[1200px]">
						<Accordion
							type="single"
							collapsible
							className="w-full rounded-md flex flex-col justify-start items-start gap-8 mt-5 text-sm"
						>
							<AccordionItem
								value="item-1"
								className="w-full bg-white px-5 py-3"
							>
								<AccordionTrigger className="lg:text-lg font-bold">
									What is Kyrus?
								</AccordionTrigger>

								<AccordionContent className=" p-5 font-semibold text-[14px] md:text-[16px] lg:text-[18px] leading-8  flex justify-center">
									<p>
										Kyrus is a platform that simplifies waste management and
										recycling by connecting individuals, businesses, and
										recycling companies. Through our app, users can manage their
										waste, recycle more efficiently, and earn rewards in the
										form of Kyrus, which can be redeemed for goods, services, or
										converted into real currency.
									</p>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem
								value="item-2"
								className="w-full bg-white px-5 py-3"
							>
								<AccordionTrigger className="lg:text-lg font-bold">
									How do I earn Cash backs?
								</AccordionTrigger>

								<AccordionContent className=" p-5 font-semibold text-[14px] md:text-[16px] lg:text-[18px] leading-8  flex justify-center">
									<p>
										You earn Cash backs by recycling your waste. Simply use the
										app to locate a recycling center, schedule a pickup, or drop
										off your recyclables. Based on the type and amount of
										material recycled, you will earn cash backs that can be
										redeemed for rewards or used to support environmental
										causes.
									</p>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem
								value="item-3"
								className="w-full bg-white px-5 py-3"
							>
								<AccordionTrigger className="lg:text-lg font-bold">
									Can businesses use Kyrus?
								</AccordionTrigger>

								<AccordionContent className=" p-5 font-semibold text-[14px] md:text-[16px] lg:text-[18px] leading-8  flex justify-center">
									<p>
										Yes! Kyrus offers specialized waste management services for
										businesses of all sizes. We help companies recycle more
										efficiently, reduce waste-related costs, and achieve
										sustainability goals through custom waste management
										programs. Businesses can also track their waste and
										recycling efforts through our reporting tools.
									</p>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem
								value="item-4"
								className="w-full bg-white px-5 py-3"
							>
								<AccordionTrigger className="lg:text-lg font-bold">
									What types of waste can I recycle with Kyrus?
								</AccordionTrigger>

								<AccordionContent className=" p-5 font-semibold text-[14px] md:text-[16px] lg:text-[18px] leading-8  flex justify-center">
									<p>
										Kyrus is a platform that simplifies waste management and
										recycling by connecting individuals, businesses, and
										recycling companies. Through our app, users can manage their
										waste, recycle more efficiently, and earn rewards in the
										form of Kyrus, which can be redeemed for goods, services, or
										converted into real currency.
									</p>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem
								value="item-5"
								className="w-full bg-white px-5 py-3"
							>
								<AccordionTrigger className="lg:text-lg font-bold">
									Is Kyrus available in my area?
								</AccordionTrigger>

								<AccordionContent className=" p-5 font-semibold text-[14px] md:text-[16px] lg:text-[18px] leading-8  flex justify-center">
									<p>
										Kyrus is expanding to more locations, but availability may
										vary depending on your city or region. You can check the app
										to see if our services are available in your area or sign up
										for updates when we launch near you.
									</p>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem
								value="item-6"
								className="w-full bg-white px-5 py-3"
							>
								<AccordionTrigger className="lg:text-lg font-bold">
									What if I have a large amount of waste to manage?
								</AccordionTrigger>

								<AccordionContent className=" p-5 font-semibold text-[14px] md:text-[16px] lg:text-[18px] leading-8  flex justify-center">
									<p>
										For large volumes of waste, such as bulk items from
										renovations or business waste, you can use the app to
										schedule special pickups or get in touch with one of our
										partner recycling companies. We provide tailored solutions
										for businesses and large-scale waste needs.
									</p>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem
								value="item-7"
								className="w-full bg-white px-5 py-3"
							>
								<AccordionTrigger className="lg:text-lg font-bold">
									How does Kyrus help the environment?
								</AccordionTrigger>

								<AccordionContent className=" p-5 font-semibold text-[14px] md:text-[16px] lg:text-[18px] leading-8  flex justify-center">
									<p>
										Kyrus incentivizes recycling and sustainable waste
										management practices by making it easier and more rewarding
										to recycle. By promoting recycling and reducing landfill
										waste, we help conserve natural resources, lower carbon
										emissions, and minimize the environmental impact of waste.
									</p>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem
								value="item-8"
								className="w-full bg-white px-5 py-3"
							>
								<AccordionTrigger className="lg:text-lg font-bold">
									Can I refer others to Kyrus?
								</AccordionTrigger>

								<AccordionContent className=" p-5 font-semibold text-[14px] md:text-[16px] lg:text-[18px] leading-8  flex justify-center">
									<p>
										Yes! We encourage you to refer friends, family, or
										businesses to join Kyrus. You can earn additional Kyrus for
										successful referrals and help expand our community of
										environmentally conscious recyclers.
									</p>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem
								value="item-7"
								className="w-full bg-white px-5 py-3"
							>
								<AccordionTrigger className="lg:text-lg font-bold">
									How do I contact Kyrus customer support?
								</AccordionTrigger>

								<AccordionContent className=" p-5 font-semibold text-[14px] md:text-[16px] lg:text-[18px] leading-8  flex justify-center">
									<p>
										You can reach out to our customer support team directly
										through the app or by visiting our website. We’re here to
										help with any questions or issues related to our services,
										recycling programs, or account management.
									</p>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem
								value="item-8"
								className="w-full bg-white px-5 py-3"
							>
								<AccordionTrigger className="lg:text-lg font-bold">
									How does the app track my recycling progress?
								</AccordionTrigger>

								<AccordionContent className=" p-5 font-semibold text-[14px] md:text-[16px] lg:text-[18px] leading-8  flex justify-center">
									<p>
										Kyrus app allows you to track your recycling habits by
										logging the type and quantity of waste you recycle. The app
										generates detailed reports that show your environmental
										impact, including how much waste you’ve diverted from
										landfills and how many Kyrus you’ve earned.
									</p>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Faq;
