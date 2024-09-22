"use client";
import React, { useCallback } from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Link from "next/link";

const SummaryModal = ({ props }) => {
	const handleStateChange = useCallback(() => {
		props.setSubmitted(false);
	}, [props.setSubmitted]);

	return (
		<>
			{props.submitted && (
				<div className="z-[100] fixed top-0 left-0 w-full h-[100vh] bg-black/60 backdrop-blur-lg flex justify-center items-center">
					<div className="bg-white p-8 w-full max-w-[600px] rounded-xl  flex flex-col justify-center items-center gap-8">
						<div className="flex justify-between items-center w-full">
							<span className="text-3xl font-semibold text-black">Summary</span>
							<div className="text-[--green] cursor-pointer hover:scale-125 transition">
								<IoArrowBackCircleOutline
									size={40}
									onClick={() => handleStateChange()}
								/>
							</div>
						</div>
						<div className="flex justify-between items-center w-full gap-3 px-6 text-lg">
							<div className="flex flex-col">
								<span>Selected Category</span>
								<p className="font-bold capitalize">
									{props.formData.category || "not set"}
								</p>
							</div>

							<div className="flex flex-col">
								<span>Delivery Type</span>
								<p className="font-bold capitalize">
									{props.formData.type || "not set"}
								</p>
							</div>
						</div>
						<div className="flex justify-between items-center w-full gap-3 px-6 text-lg">
							<div className="flex flex-col">
								<span>Aggregator</span>
								<p className="font-bold capitalize">
									{props.formData.aggregator || "not set"}
								</p>
							</div>

							<div className="flex flex-col">
								<span>Date</span>
								<p className="font-bold capitalize">
									{props.formData.date || "not set"}
								</p>
							</div>
						</div>

						<button className="primarybtn w-full mt-5">Confirm</button>
					</div>
				</div>
			)}
		</>
	);
};

export default SummaryModal;
