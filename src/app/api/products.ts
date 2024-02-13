import type { ProductType } from "../ui/types";

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

const productResponseToProductType = (response: ProductApiResponse): ProductType => {
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

export const getProductsList = async () => {
	const res = await fetch("https://naszsklep-api.vercel.app/api/products");
	const productsResponse = (await res.json()) as ProductApiResponse[];
	const products: ProductType[] = productsResponse.map(productResponseToProductType);
	return products;
};
