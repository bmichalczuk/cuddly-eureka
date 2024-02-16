import { ActiveLink } from "@ui/atoms/ActiveLink";

export const SiteNavbar = () => {
	const className = "text-lg bg-none px-4 py-2 mx-1 ";
	const activeClassName = "text-red-400 ";
	return (
		<nav>
			<ul className="flex flex-row justify-around   p-5 align-middle" role="navigation">
				<li className="mx-3">
					<ActiveLink  exact className={className} activeClassName={activeClassName} href="/">
						Home
					</ActiveLink>
				</li>
				<li className="mx-3">
					<ActiveLink
						exact
						className={className}
						activeClassName={activeClassName}
						href="/products"
					>
						All
					</ActiveLink>
				</li>
			</ul>
		</nav>
	);
};
