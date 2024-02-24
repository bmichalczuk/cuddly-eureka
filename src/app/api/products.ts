import {
	ProductsGetListDocument,
	type TypedDocumentString,
	ProductsGetListByCategoryIdDocument,
	ProductGetByIdDocument,
	type ProductListItemFragment,
} from "../../gql/graphql";
import type { ProductsCategories } from "../types";

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

export const getProductsList = async () => {
	const graphqlResponse = await executeGraohql(ProductsGetListDocument, {});
	if (!graphqlResponse.products.data) {
		throw new TypeError("GraphQL error: no data");
	}
	return graphqlResponse.products.data;
};

export const getProductsListByCategoryId = async (id: ProductsCategories) => {
	const graphqlResponse = await executeGraohql(ProductsGetListByCategoryIdDocument, {
		id: String(id),
	});
	if (!graphqlResponse.category) {
		throw new TypeError("GraphQL error: no such category");
	}
	return graphqlResponse.category.products;
};

export const getProductById = async (id: ProductListItemFragment["id"]) => {
	const data = await executeGraohql(ProductGetByIdDocument, { id });
	console.log(data.product?.images);
	if (!data.product) {
		throw new TypeError("GraphQL error: no such products");
	}
	return data.product;
};
