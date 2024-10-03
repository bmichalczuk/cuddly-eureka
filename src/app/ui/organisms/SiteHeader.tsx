import Link from "next/link";
import { Suspense } from "react";
import { SignInButton, SignedIn, SignedOut /*UserButton */ } from "@clerk/nextjs";
import UserButton from "../atoms/CustomUserButton";
import { SiteNavbar } from "../molecules/SiteNavbar";
import { SearchProductInput } from "../atoms/SearchProductInput";
import { CartLink } from "../atoms/CartLink";
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

			<CartLink />
			<SignedIn>
				<UserButton />
			</SignedIn>
			<SignedOut>
				<SignInButton />
			</SignedOut>
		</header>
	);
}
