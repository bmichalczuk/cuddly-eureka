import { type ReactNode } from "react";

export default function CategoryLayout({ children }: { children: ReactNode }) {
	return (
		<section className="mx-auto min-h-full max-w-md px-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
			{children}
		</section>
	);
}
