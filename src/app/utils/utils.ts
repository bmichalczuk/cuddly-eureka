import { type Route } from "next";
import { type TypedDocumentString, type ProductListItemFragment } from "../../gql/graphql";

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

export const executeGraohql = async <TResult, TVariables>({
	query,
	variables,
	next,
	cashe,
}: {
	query: TypedDocumentString<TResult, TVariables>;
	variables: TVariables;
	next?: NextFetchRequestConfig;
	cashe?: RequestCache;
}): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL) {
		throw TypeError("GRAPHQL_URL is not defined");
	}
	const res = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		body: JSON.stringify({
			query,
			variables,
		}),
		headers: { "Content-Type": "application/json" },
		next,
		cashe,
	});

	type GraphQLResponse<T> =
		| { data?: undefined; errors: { message: string }[] }
		| { data: T; errors?: undefined };

	const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;

	if (graphqlResponse.errors) {
		throw TypeError(`GraphQL Error`, { cause: graphqlResponse.errors });
	}

	return graphqlResponse.data;
};
