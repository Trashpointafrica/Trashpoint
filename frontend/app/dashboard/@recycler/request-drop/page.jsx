"use client";
import React, { useState } from "react";
import { SuccessModal, FailedModal, SummaryModal } from "@/app/components";
import { IoSearch } from "react-icons/io5";

const RequestDropOff = () => {
	const Recyclables = [
		{
			type: "plastics",
			state: "active",
		},
		{
			type: " PET plastics",
			state: "active",
		},
		{
			type: "paper",
			state: "disabled",
		},
		{
			type: "glass",
			state: "disabled",
		},
		{
			type: "nylon",
			state: "disabled",
		},
		{
			type: "metals",
			state: "disabled",
		},
	];

	const [submitted, setSubmitted] = useState(false);
	const [bookingStatus, setBookingStatus] = useState("success");
	const [formData, setFormData] = useState({
		type: "drop off",
		date: "09/07/2024",
		category: "plastics",
		aggregator: "James Nelson",
	});

	// Generalized handleChange function
	const handleChange = (e) => {
		const { name, value } = e.target;

		// Update state dynamically based on input name
		setFormData({
			...formData,
			[name]: value,
		});
	};

	return (
		<>
			<SummaryModal props={{ submitted, formData, setSubmitted }} />
			{bookingStatus && bookingStatus === "success" ? (
				<SuccessModal />
			) : bookingStatus === "failed" ? (
				<FailedModal />
			) : null}
			<div className="w-full flex flex-col gap-16">
				<div className="w-full flex justify-between items-center">
					<span className="text-black text-2xl font-semibold capitalize">
						Recycle Now!
					</span>
					<p className="py-3 px-5 bg-[--bgGrey2] rounded-lg text-[--grey]">
						6th Sept. 2024
					</p>
				</div>

				<div className="flex gap-8 justify-center items-start">
					<div className="w-full flex flex-col gap-8 ">
						<div className="w-full bg-white p-5 rounded-xl shadow-sm flex flex-col justify-start items-start gap-3">
							<span className="font-semibold text-lg">
								Select Waste Category
							</span>
							<div className="flex gap-5 flex-wrap items-center justify-start py-3">
								{Recyclables.map((item) => (
									<div
										key={item.type}
										className={` ${
											item.state !== "active" &&
											" cursor-not-allowed opacity-50"
										} flex items-center justify-center gap-5 py-3 px-5 rounded-lg border-2   cursor-pointer`}
									>
										<div className="w-4 h-4 rounded-md border-2  bg-[--bgGrey]" />
										<p className="font-semibold capitalize">{item.type}</p>
									</div>
								))}
							</div>
						</div>

						<div className="w-full bg-white p-5 rounded-xl shadow-sm flex flex-col justify-start items-start gap-5">
							<span className="font-semibold text-lg">
								Additional Information
							</span>

							<div className="flex flex-col gap-1 w-full">
								<label className="font-semibold">Your Location</label>
								<div className="border-2 rounded-lg w-full flex items-center">
									<input
										type="text"
										className="w-full p-3"
										placeholder="Input your address..."
									/>
									<div className="bg-[--green] text-white flex justify-center items-center p-3 rounded-r-lg">
										<IoSearch size={24} />
									</div>
								</div>
							</div>
							<div className="flex flex-col gap-1 w-full border-2 rounded-lg px-3 pb-5">
								<span className="text-lg font-semibold py-5 border-b w-full">
									Available Aggregators
								</span>

								<table className="w-full my-3 overflow-x-auto">
									<thead className="w-full font-bold bg-[--bgGrey] p-3">
										<tr>
											<td>Name</td>
											<td>Phone</td>
											<td>Address</td>
											<td>Est. Distance</td>
											<td>Available Time</td>
											<td>Available Day</td>
										</tr>
									</thead>
									<tbody className="w-full">
										<tr>
											<td>James</td>
											<td>07012356890</td>
											<td>Uniben Maingate</td>
											<td>10km</td>
											<td>2pm</td>
											<td>Wednesday</td>
										</tr>
										<tr>
											<td>Michael</td>
											<td>09112356890</td>
											<td>Upper Mission Road</td>
											<td>18km</td>
											<td>3pm</td>
											<td>Wednesday</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>

					<div className="w-full flex flex-col gap-8 ">
						<div className="w-full bg-white p-5 rounded-xl shadow-sm flex flex-col justify-start items-start gap-3">
							<span className="font-semibold text-lg">Delivery Type</span>

							<div className="w-full flex gap-8 items-center justify-between py-5 px-8 border-2  rounded-lg">
								<div className="flex gap-3 items-center justify-start">
									<div className="w-8 h-8 rounded-full border-2  bg-[--bgGrey]" />
									<div className="flex flex-col">
										<span className="font-bold">Drop Off</span>
										<p>You bring the waste to us.</p>
									</div>
								</div>
								<div className="flex gap-3 items-center justify-start">
									<div className="w-8 h-8 rounded-full border-2  bg-[--bgGrey]" />
									<div className="flex flex-col">
										<span className="font-bold">Pick Up</span>
										<p>We come to you to collect the waste.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full bg-white p-5 rounded-xl shadow-sm flex flex-col justify-start items-start gap-5">
							<span className="font-semibold text-lg">
								Additional Information
							</span>

							<div className="flex flex-col gap-1 w-full">
								<label className="font-semibold">Date</label>
								<input
									type="date"
									className="w-full border-2 p-3 rounded-lg "
									placeholder="Select Date..."
								/>
							</div>
							<div className="flex flex-col gap-1 w-full">
								<label className="font-semibold">Description (optional)</label>
								<textarea
									className="w-full border-2 p-3 rounded-md "
									placeholder="What other information do you wish to share ...."
									rows={5}
								/>
							</div>

							<div className="w-full flex flex-col gap-6 items-center justify-start p-5 rounded-lg">
								<button
									className="primarybtn"
									onClick={() => setSubmitted(true)}
								>
									Continue
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default RequestDropOff;
