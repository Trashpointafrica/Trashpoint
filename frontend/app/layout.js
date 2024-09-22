import "./globals.css";
import { Red_Hat_Display } from "next/font/google";
import ReactQueryProvider from "@/app/utils/ReactQueryProvider";
import { WhatsApp } from "./components";

const redHat = Red_Hat_Display({ subsets: ["latin"] });
export const metadata = {
	title: "Trashpoint",
	description: "Earn cash backs on every waste you recycle",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`relative ${redHat.className}`}>
				<WhatsApp />
				<ReactQueryProvider>{children}</ReactQueryProvider>
			</body>
		</html>
	);
}
