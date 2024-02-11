import Link from "next/link";
import { SiteNavbar } from "../molecules/SiteNavbar";
export function SiteHeader() {
	return (
		<header className="bg-gray-100-100 flex flex-row justify-around border-b-2  p-5 px-10">
			<h1>
				<Link className="text-5xl font-bold italic" title="Go to home page" href="/">
					Cuddly
				</Link>
			</h1>
			<SiteNavbar />
			<div className="p-5 font-bold ">Cart</div>
		</header>
	);
}
