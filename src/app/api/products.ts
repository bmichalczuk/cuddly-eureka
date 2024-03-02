import {
	ProductsGetListDocument,
	type TypedDocumentString,
	ProductsGetListByCategoryIdDocument,
	ProductGetByIdDocument,
	type ProductListItemFragment,
	CategoriesGetListDocument,
	type CategoriesFragmentFragment,
	ProductsSearchDocument,
} from "../../gql/graphql";

export const executeGraohql = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables: TVariables,
): Promise<TResult> => {
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

export const getProductsList = async (page?: number) => {
	const gqlVariables = page ? { take: 4, skip: (page - 1) * 4 } : {};

	const graphqlResponse = await executeGraohql(ProductsGetListDocument, gqlVariables);
	if (!graphqlResponse.products.data) {
		throw new TypeError("GraphQL error: no data");
	}
	return graphqlResponse.products.data;
};

export const getProductsListByCategoryName = async (
	name: CategoriesFragmentFragment["data"][0]["name"],
) => {
	const graphqlResponse = await executeGraohql(ProductsGetListByCategoryIdDocument, {
		slug: name,
	});
	if (!graphqlResponse.category) {
		throw new TypeError("GraphQL error: no such category");
	}
	return graphqlResponse.category.products;
};

export const getProductById = async (id: ProductListItemFragment["id"]) => {
	const data = await executeGraohql(ProductGetByIdDocument, { id });

	if (!data.product) {
		throw new TypeError("GraphQL error: no such products");
	}
	return data.product;
};

export const getCategoriesList = async () => {
	const data = await executeGraohql(CategoriesGetListDocument, {});
	if (!data.categories.data) {
		throw new TypeError("GraphQL error: no such products");
	}
	return data.categories.data;
};

export const searchProducts = async (search: string) => {
	const res = await executeGraohql(ProductsSearchDocument, { search: search });
	if (!res.products.data) {
		throw new TypeError("GraphQL error: no such products");
	}
	return res.products.data;
};
