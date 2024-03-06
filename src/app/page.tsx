import Link from "next/link";

export default function Home() {
	return (
		<main>
			<h1>Welcome To CuddlyShop</h1>
			<p>
				<Link title="Go to collections page" href="/collections">
					check our latest collections:
				</Link>
			</p>
		</main>
	);
}
