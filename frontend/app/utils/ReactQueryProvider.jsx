// app/providers.tsx or app/layout.tsx (depending on your app structure)
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

const ReactQueryProvider = ({ children }) => {
	// Create a client once per session, not on every render
	const [queryClient] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
};

export default ReactQueryProvider;
