import { type Route } from "next";
import { type ProductListItemFragment } from "../gql/graphql";

export const formatPrice = (price: number) => {
	return new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(price / 100);
};

export const createPaginationLinks = async (
	products: ProductListItemFragment[],
	baseLink: Route,
) => {
	const numberOfPages = Math.ceil(products.length / 4);
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const links = [...new Array(numberOfPages)].map((page, i) => `${baseLink}${i + 1}` as Route);

	return links;
};
