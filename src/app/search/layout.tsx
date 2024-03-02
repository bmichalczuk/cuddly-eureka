import { type ReactNode } from "react";

export default function SearchLayout({ children }: { children: ReactNode }) {
	return <section className="mx-auto max-w-4xl p-5 text-center">{children}</section>;
}
