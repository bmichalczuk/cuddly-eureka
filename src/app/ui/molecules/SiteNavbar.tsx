import { ActiveLink } from "@ui/atoms/ActiveLink";

export const SiteNavbar = () => {
	const className = "text-lg bg-none px-4 py-2 mx-1 ";
	const activeClassName = "text-red-400 ";
	return (
		<nav>
			<ul className="flex flex-row justify-start p-5 align-middle" role="navigation">
				<li className="mx-1">
					<ActiveLink exact className={className} activeClassName={activeClassName} href="/">
						Home
					</ActiveLink>
				</li>
				<li className="mx-1">
					<ActiveLink
						exact={false}
						className={className}
						activeClassName={activeClassName}
						href="/products/1"
					>
						All
					</ActiveLink>
				</li>
				<li className="mx-1">
					<ActiveLink
						exact={false}
						className={className}
						activeClassName={activeClassName}
						href="/categories/t-shirts/1"
					>
						T-shirts
					</ActiveLink>
				</li>
				<li className="mx-1">
					<ActiveLink
						exact={false}
						className={className}
						activeClassName={activeClassName}
						href="/categories/hoodies/1"
					>
						Hoodies
					</ActiveLink>
				</li>
				<li className="mx-1">
					<ActiveLink
						exact={false}
						className={className}
						activeClassName={activeClassName}
						href="/categories/accessories/1"
					>
						Accessories
					</ActiveLink>
				</li>
			</ul>
		</nav>
	);
};
