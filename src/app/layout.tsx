import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
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
		<html lang="en">
			<body className={inter.className}>
				<header>
					<h1>CudlySklep</h1>
				</header>
				<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
					{children}
				</section>
				<footer className="">
					<Link href="/Regulamin">Regulamin</Link>bmichalczuk @2024{" "}
					<Link href="/PolitykaPrywatnosci">Polityka Prywatnosci</Link>
				</footer>
			</body>
		</html>
	);
}
