import { type ReactNode } from "react";

export default function StaticLayout({ children }: { children: ReactNode }) {
	return (
		<section data-testid="group-layout" className="mx-auto max-w-md text-center">
			{children}
		</section>
	);
}
