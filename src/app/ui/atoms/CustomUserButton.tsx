"use client";

import { UserButton } from "@clerk/nextjs";

const DotIcon = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
			<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
		</svg>
	);
};

export default function Home() {
	return (
		<header>
			<UserButton>
				<UserButton.MenuItems>
					<UserButton.Link label="See your orders" labelIcon={<DotIcon />} href="/orders" />
				</UserButton.MenuItems>
			</UserButton>
		</header>
	);
}
