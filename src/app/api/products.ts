import {
	ProductsGetListDocument,
	type TypedDocumentString,
	ProductsGetListByCategoryIdDocument,
	ProductGetByIdDocument,
} from "../../gql/graphql";
import type { ProductType, ProductsCategories } from "../types";

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

export const getProductsList = async (): Promise<ProductType[]> => {
	const graphqlResponse = await executeGraohql(ProductsGetListDocument, {});
	return graphqlResponse.products.data.map((product) => {
		return {
			description: product.description,
			id: product.id,
			coverImage: product.images[0] && { alt: product.name, src: product.images[0]?.url || "" },
			name: product.name,
			price: product.price,
			category: product.categories[0]?.name || "",
			rating: 3,
		};
	});
};

export const getProductsListByCategoryId = async (
	id: ProductsCategories,
): Promise<ProductType[]> => {
	const graphqlResponse = await executeGraohql(ProductsGetListByCategoryIdDocument, {
		id: String(id),
	});
	if (!graphqlResponse.category) {
		throw new TypeError("GraphQL error: no such category");
	}
	return graphqlResponse.category.products.map((product) => {
		return {
			description: product.description,
			id: product.id,
			coverImage: product.images[0] && { alt: product.name, src: product.images[0]?.url || "" },
			name: product.name,
			price: product.price,
			category: product.categories[0]?.name || "",
			rating: 3,
		};
	});
};

export const getProductById = async (id: string): Promise<ProductType> => {
	const data = await executeGraohql(ProductGetByIdDocument, { id });
	if (!data.product) {
		throw new TypeError("GraphQL error: no such products");
	}
	return {
		category: data.product.categories[0]?.name || "",
		id: data.product.id,
		description: data.product.description,
		name: data.product.name,
		price: data.product.price,
		rating: 3,
	};
};
