"use client";
import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";

import { getUsers } from "../server/actions";

const ApiTesting = () => {
	const [state, setState] = useState("");
	// fetches data
	const { data: name, isLoading } = useQuery({
		queryFn: () => getUsers(),
		queryKey: ["Testing API"],
	});

	//Carry out actions
	const {
		data: userList,
		isPending,
		mutateAsync: fetchUsers,
	} = useMutation({
		mutationFn: getUsers,
		onSuccess: () => {
			setState(userList);
		},
		onError: () => {},
	});

	if (isLoading) {
		return (
			<div>
				<p>Loading.....</p>
			</div>
		);
	}
	if (isPending) {
		return (
			<div>
				<p>Request is Pending.....</p>
			</div>
		);
	}

	return (
		<div className="w-full h-[100vh] flex flex-col gap-16 justify-center items-center">
			<button onClick={async () => await fetchUsers()}>Fetch Data</button>

			<div>{name.title}</div>
			<div>{state || "No data fetched yet"}</div>
		</div>
	);
};

export default ApiTesting;
