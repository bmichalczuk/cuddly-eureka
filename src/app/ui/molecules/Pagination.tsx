import type { Route } from "next";
import { ActiveLink } from "../atoms/ActiveLink";

export const Pagination = async ({ pages }: { pages: Route<string>[] }) => {
	const classname = "m-1 border border-slate-700 bg-white px-4 py-2  text-slate-700";
	const activeClassName = "bg-slate-300 border-2";
	return (
		<ul aria-label="pagination" className="mx-auto my-0 flex flex-row justify-center   text-center">
			{pages.map((href, i) => {
				return (
					<li key={href}>
						<ActiveLink
							className={classname}
							activeClassName={activeClassName}
							href={href}
							exact={true}
							title={`Go to page ${i + 1}`}
						>
							{i + 1}
						</ActiveLink>
					</li>
				);
			})}
		</ul>
	);
};
