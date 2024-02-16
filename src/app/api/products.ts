import type { ProductType } from "../types";

export type ProductApiResponse = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
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
		longDescription: response.longDescription,
		price: response.price,
		category: response.category,
		rating: { rate: response.rating.rate, count: response.rating.count },
		coverImage: {
			src: response.image,
			alt: response.title,
		},
	};
};

export const getProductsList = async (page = "0", take = "20") => {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=${take}&offset=${page}`,
	);
	const productsResponse = (await res.json()) as ProductApiResponse[];
	const products: ProductType[] = productsResponse.map(productResponseTypeToProductType);
	return products;
};

export const getProductById = async (id: ProductType["id"]) => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const productsResponse = (await res.json()) as ProductApiResponse;
	return productResponseTypeToProductType(productsResponse);
};
