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
	const params = [...new Array(numberOfPages)].map((page, i) => {
		return { page: String(i) };
	});
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const priceDescParams = [...new Array(numberOfPages)].map((page, i) => {
		return { page: String(i) + "?SORT=PRICE&ORDER=DESC" };
	});

	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const priceAscParams = [...new Array(numberOfPages)].map((page, i) => {
		return { page: String(i) + "?SORT=PRICE&ORDER=ASC" };
	});

	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const ratingAscParams = [...new Array(numberOfPages)].map((page, i) => {
		return { page: String(i) + "?SORT=RATING&ORDER=ASC" };
	});

	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const ratingDescParams = [...new Array(numberOfPages)].map((page, i) => {
		return { page: String(i) + "?SORT=RATING&ORDER=DESC" };
	});

	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

	return [
		...params,
		...priceAscParams,
		...priceDescParams,
		...ratingAscParams,
		...ratingDescParams,
	];
};

export const withDebounce = (fn: () => void, time = 500) => {
	let timeout: ReturnType<typeof setTimeout>;
	return () => {
		clearTimeout(timeout);
		timeout = setTimeout(fn, time);
	};
};

export const executeGraphql = async <TResult, TVariables>({
	query,
	variables,
	next,
	cache,
}: {
	query: TypedDocumentString<TResult, TVariables>;
	variables: TVariables;
	next?: NextFetchRequestConfig;
	cache?: RequestCache;
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
		cache,
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
