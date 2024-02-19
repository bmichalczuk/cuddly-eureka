import type { ProductType } from "../types";

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
		rating: response.rating,
	};
};

type GraphQLResponseType<T> =
	| { data?: undefined; errors: { message: string }[] }
	| { data: T; errors?: undefined };

export type ProductsGraphqlResponse = {
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

export type Product = {
	id: string;
	name: string;
	price: number;
	rating: number;
	description: string;
	category: "lorem";
	images: {
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

export const getProductsList = async (): Promise<ProductType[]> => {
	const res = await fetch(`https://graphql.hyperfunctor.com/graphql`, {
		method: "POST",
		body: JSON.stringify({
			query: /* GraphQL */ `
				query ProductsGetList {
					products {
						data {
							id
							images {
								url
								alt
							}
							name
							price
							rating
							description
						}
					}
				}
			`,
		}),
		headers: { "Content-Type": "application/json" },
	});
	const ProductsGraphqlResponse =
		(await res.json()) as GraphQLResponseType<ProductsGraphqlResponse>;

	if (ProductsGraphqlResponse.errors) {
		console.log(ProductsGraphqlResponse);
		throw TypeError(ProductsGraphqlResponse.errors[0].message);
	}

	return ProductsGraphqlResponse.data?.products.data.map((product) => {
		return {
			description: product.description,
			id: product.id,
			coverImage: { alt: product.name, src: product.images[0].url },
			name: product.name,
			price: product.price,
			rating: { rate: product.rating, count: 22 },
			category: "lorem",
		};
	});
};

export const getProductById = async (id: ProductType["id"]) => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const productsResponse = (await res.json()) as ProductApiResponse;
	return productResponseTypeToProductType(productsResponse);
};
