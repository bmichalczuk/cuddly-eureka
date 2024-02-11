"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import type { Route } from "next";

type ActiveLinkProps<T extends string> = {
	children: ReactNode;
	href: Route<T>;
	className: string;
	activeClassName: string;
	exact: boolean;
};

export const ActiveLink = <T extends string>({
	children,
	className,
	activeClassName,
	exact,
	href,
}: ActiveLinkProps<T>) => {
	const pathname = usePathname();

	const isActive = exact ? pathname === href : pathname.startsWith(String(href));

	return (
		<Link className={clsx(className, isActive && activeClassName)} href={href}>
			{children}
		</Link>
	);
};
