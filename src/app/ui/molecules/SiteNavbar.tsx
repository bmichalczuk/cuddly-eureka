import clsx from "clsx";
import { ActiveLink } from "@ui/atoms/ActiveLink";

export const SiteNavbar = () => {
	const className = clsx("mx-3", "text-1xl", "text-blue-600", "hover:text-blue-600");
	const activeClassName = clsx("underline", "transition:transform");
	return (
		<nav>
			<ul className="flex flex-row justify-around border  p-5 align-middle">
				<li className="mx-3">
					<ActiveLink exact className={className} activeClassName={activeClassName} href="/">
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
						Products
					</ActiveLink>
				</li>
			</ul>
		</nav>
	);
};
