import Link from "next/link";

export function SiteHeader() {
	return (
		<header className="bg-gray-100-100 border-b-2 border-gray-400 p-5 px-10">
			<h1>
				<Link className="text-5xl font-bold italic" title="Go to home page" href="/">
					Cuddly
				</Link>
			</h1>
		</header>
	);
}
