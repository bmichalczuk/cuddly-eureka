import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { SiteHeader } from "./ui/organisms/SiteHeader";
import { SiteFooter } from "./ui/molecules/SiteFooter";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Products",
	description: "Super sklep",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={`${inter.className} flex min-h-svh flex-col `}>
					<SiteHeader />
					<main className="mx-auto flex max-w-md flex-auto flex-col   sm:max-w-2xl  md:max-w-4xl lg:max-w-7xl">
						{children}
					</main>
					<SiteFooter />
				</body>
			</html>
		</ClerkProvider>
	);
}
