import { ProductsGetListDocument, type TypedDocumentString } from "../../gql/graphql";
import type { ProductType } from "../types";

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

export type ProductApiResponse = {
	id: string;
	title: string;
	price: number;
	description: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};

const productResponseTypeToProductType = (response: ProductApiResponse): ProductType => {
	return {
		name: response.title,
		id: response.id,
		price: response.price,
		description: response.description,
		category: response.title,
		coverImage: {
			src: response.image,
			alt: response.title,
		},
		rating: 3,
	};
};

export type Product = {
	id: string;
	name: string;
	price: number;
	rating: number;
	description: string;
	category: "lorem";
	images?: {
		url: string;
	}[];
};

export type Root = {
	data: {
		products: {
			data: Array<{
				id: string;
				name: string;
				price: number;
				rating: number;
				description: string;
				images: Array<{
					url: string;
					alt: string;
				}>;
			}>;
		};
	};
};

export const getProductById = async (id: ProductType["id"]) => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const productsResponse = (await res.json()) as ProductApiResponse;
	return productResponseTypeToProductType(productsResponse);
};
