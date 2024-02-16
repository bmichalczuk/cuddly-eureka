import Link from "next/link";
import { SiteNavbar } from "../molecules/SiteNavbar";
export function SiteHeader() {
	return (
		<header className="m-0 flex w-full justify-between bg-slate-700 p-7 text-white">
			<div className="font-serif text-5xl italic text-white">
				<Link className="text-5xl font-bold italic" title="Go to home page" href="/">
					Cuddly<span className="text-3xl text-red-400">shop</span>
				</Link>
			</div>
			<SiteNavbar />
			<div className="p-5 font-bold ">Cart</div>
		</header>
	);
}
