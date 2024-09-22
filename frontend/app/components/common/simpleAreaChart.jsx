"use client";
import React from "react";
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

const SimpleAreaChart = ({ data }) => {
	return (
		<ResponsiveContainer width="100%" height="100%">
			<AreaChart
				width={100}
				height={100}
				data={data}
				margin={{
					top: 0,
					right: 0,
					left: 0,
					bottom: 0,
				}}
			>
				<CartesianGrid stroke="#F2F4F5" vertical={false} />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Area
					type="monotone"
					dataKey="value"
					stroke="#224093"
					fill="#2240931A"
				/>
			</AreaChart>
		</ResponsiveContainer>
	);
};

export default SimpleAreaChart;
