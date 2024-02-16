import { type ReactNode } from "react";

export default function StaticLayout({ children }: { children: ReactNode }) {
	return <div className="mx-auto max-w-md py-10 text-center">{children}</div>;
}
