import { type ReactNode } from "react";
import { Pagination } from "@/ui/molecules/Pagination";
export default function Layout({ children }: { children: ReactNode }) {
	return (
		<section className="mx-auto max-w-md px-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
			<Pagination />
			{children}
		</section>
	);
}
