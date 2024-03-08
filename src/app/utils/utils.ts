import { type Route } from "next";
import { type ProductListItemFragment } from "../../gql/graphql";

export const formatPrice = (price: number) => {
	return new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(price / 100);
};

export const itemsPerPage = 4; //for pagination

export const createPaginationLinks = async (
	products: ProductListItemFragment[],
	baseLink: Route,
) => {
	const numberOfPages = Math.ceil(products.length / itemsPerPage);
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const links = [...new Array(numberOfPages)].map((page, i) => `${baseLink}${i + 1}` as Route);

	return links;
};

export const createPagesParams = (products: ProductListItemFragment[]) => {
	const numberOfPages = Math.ceil(products.length / itemsPerPage);
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	return [...new Array(numberOfPages)].map((page, i) => {
		return { page: String(i) };
	});
};

export const withDebounce = (fn: () => void, time = 500) => {
	let timeout: ReturnType<typeof setTimeout>;
	return () => {
		clearTimeout(timeout);
		timeout = setTimeout(fn, time);
	};
};
