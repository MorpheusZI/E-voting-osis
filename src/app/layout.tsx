import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Raleway, Poppins } from "next/font/google";

const montserrat = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "E-voting",
	description: "Website E-voting",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/penusimg2.png" />
			</head>
			<body className={montserrat.className}>{children}</body>
		</html>
	);
}
