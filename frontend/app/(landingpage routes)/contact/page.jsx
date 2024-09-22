import React from "react";
import { Navbar, Footer } from "@/app/components";
import Image from "next/image";
import { oldman2 } from "@/app/assets/images";
import { BsTwitterX, BsFacebook, BsInstagram } from "react-icons/bs";
import { PiMapPinFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const ContactUs = () => {
	return (
		<div className="w-full flex flex-col justify-center items-center">
			<Navbar />
			<div className="w-full min-h-[600px] flex flex-col justify-start items-center bg-[--bgGrey]">
				<span className="uppercase text-3xl text-[--blue] p-8 font-bold">
					Contact Us
				</span>

				<div className="w-full bg-white py-8 px-8 lg:px-32 flex flex-col lg:flex-row justify-center items-start gap-8">
					<div className="w-full max-w-[700px] flex flex-col justify-start items-start gap-5 ">
						<div className="w-full flex flex-col gap-2">
							<label className="font-medium"> Name</label>
							<input
								type="text"
								className="bg-[--bgGrey] p-2 rounded-md  focus:border-[--blue] outline-none border-2 border-[--bgGrey]"
							/>
						</div>
						<div className="w-full flex flex-col gap-2">
							<label className=" font-medium"> Phone Number</label>
							<input
								type="text"
								className="bg-[--bgGrey] p-2 rounded-md focus:border-[--blue] outline-none border-2 border-[--bgGrey]"
							/>
						</div>
						<div className="w-full flex flex-col gap-2">
							<label className=" font-medium"> Email</label>
							<input
								type="text"
								className="bg-[--bgGrey] p-2 rounded-md focus:border-[--blue] outline-none border-2 border-[--bgGrey]"
							/>
						</div>
						<div className="w-full flex flex-col gap-2">
							<label className=" font-medium"> Message</label>
							<textarea
								rows={10}
								type="text"
								className="bg-[--bgGrey] p-2 rounded-md focus:border-[--blue] outline-none border-2 border-[--bgGrey]"
							/>
						</div>
						<button className="primarybtn"> Send Message</button>
					</div>
					<div className="w-full max-w-[500px] rounded-3xl bg-[--blue] p-5 text-white flex flex-col justify-center items-center">
						<span className="text-3xl font-medium">Reach out to us !</span>
						<p className="p-5 text-center">
							Our team is ready and available to assist you with all your
							recycling needs reach out to us today!
						</p>
						<div className="relative w-full  py-5">
							<Image
								src={oldman2}
								width={0}
								height={0}
								style={{
									width: "100%",
									height: "auto",
									borderRadius: "16px",
								}}
							/>
						</div>
						<span className="font-medium text-lg py-3">
							For Further Inquiries
						</span>
						<div className="w-full flex justify-center gap-16 items-center text-sm">
							<p>kyrusrecycling@gmail.com</p>
							<p>+234 807 192 6379</p>
						</div>
						<div className="w-full flex justify-center gap-6 items-center py-5">
							<BsTwitterX size={24} />
							<BsInstagram size={24} />
							<BsFacebook size={24} />
						</div>
					</div>
				</div>

				<div className="w-full p-16 flex flex-col lg:flex-row justify-center items-start gap-16">
					<div className="flex">
						<PiMapPinFill size={32} className="text-[--green] mr-5" />
						<div className="flex flex-col justify-start items-start">
							<span className="font-medium text-lg">Head Office</span>
							<p className="w-[200px]">
								22 Ikhaladeran street, off Aerodrome close, Ekenhuan road, Benin
								City Edo state.
							</p>
						</div>
					</div>
					<div className="flex">
						<MdEmail size={32} className="text-[--green] mr-5" />
						<div className="flex flex-col justify-start items-start">
							<span className="font-medium text-lg">Contact Support</span>
							<p className="w-[200px]">kyrusrecycling@gmail.com</p>
						</div>
					</div>
					<div className="flex">
						<BsFillTelephoneFill size={32} className="text-[--green] mr-5" />
						<div className="flex flex-col justify-start items-start">
							<span className="font-medium text-lg">Mobile Number</span>
							<p className="w-[200px]">+234 807 192 6379</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ContactUs;
