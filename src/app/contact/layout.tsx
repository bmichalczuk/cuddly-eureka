import { type ReactNode } from "react";
export default function Layout({ children }: { children: ReactNode }) {
	return (
		<section className="min-h-full w-full max-w-md  sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
			{children}
		</section>
	);
}
