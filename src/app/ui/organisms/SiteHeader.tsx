import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Suspense } from "react";
import { SiteNavbar } from "../molecules/SiteNavbar";
import { SearchProductInput } from "../atoms/SearchProductInput";
export function SiteHeader() {
	return (
		<header className="flex w-full flex-row items-center  bg-slate-700 p-7 px-16 text-white">
			<div className="font-serif text-5xl italic text-white">
				<Link className="text-5xl font-bold italic" title="Go to home page" href="/">
					Cuddly<span className="text-3xl text-red-400">shop</span>
				</Link>
			</div>
			<SiteNavbar />
			<Suspense>
				<SearchProductInput />
			</Suspense>

			<div className="ml-1 flex flex-row p-5 font-bold">
				<ShoppingCart />
				<span className="mx-2">0</span>
			</div>
		</header>
	);
}
