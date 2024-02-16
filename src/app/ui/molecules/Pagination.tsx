import { ActiveLink } from "../atoms/ActiveLink";

export const Pagination = async () => {
	return (
		<ul aria-label="pagination" className="mx-auto my-0 flex flex-row justify-center   text-center">
			<li>
				<ActiveLink
					className="m-1 border border-slate-700 bg-white px-4 py-2  text-slate-700"
					activeClassName="bg-slate-100"
					href="/products/1"
					exact={true}
					title="Go to page 1"
				>
					1
				</ActiveLink>
			</li>
			<li>
				<ActiveLink
					className="m-1 border border-slate-700 bg-white px-4 py-2  text-slate-700"
					activeClassName="bg-slate-100"
					href="/products/2"
					exact={true}
					title="Go to page 2"
				>
					2
				</ActiveLink>
			</li>
			<li>
				<ActiveLink
					className="m-1 border border-slate-700 bg-white px-4 py-2  text-slate-700"
					activeClassName="bg-slate-100"
					href="/products/3"
					exact={true}
					title="Go to page 3"
				>
					3
				</ActiveLink>
			</li>
			<li>
				<ActiveLink
					className="m-1 border border-slate-700 bg-white px-4 py-2  text-slate-700"
					activeClassName="bg-slate-100"
					href="/products/4"
					exact={true}
					title="Go to page 4"
				>
					4
				</ActiveLink>
			</li>
			<li>
				<ActiveLink
					className="m-1 border border-slate-700 bg-white px-4 py-2  text-slate-700"
					activeClassName="bg-slate-100"
					href="/products/5"
					exact={true}
					title="Go to page 5"
				>
					5
				</ActiveLink>
			</li>
		</ul>
	);
};
