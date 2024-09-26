"use client";

import { title } from "process";
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
	title?: string;
};

const shortenHref = (href: string) => href.slice(0, href.lastIndexOf("/"));

export const ActiveLink = <T extends string>({
	children,
	className,
	activeClassName,
	exact,
	href,
}: ActiveLinkProps<T>) => {
	const pathname = usePathname();
	const isActive = exact ? pathname === href : pathname.startsWith(shortenHref(href));

	return (
		<Link
			role="link"
			title={title}
			className={clsx(className, isActive && activeClassName)}
			href={href}
			aria-current={isActive ? "page" : undefined}
		>
			{children}
		</Link>
	);
};
