export type ProductType = {
	id: string;
	name: string;
	price: number;
	category: string;
	coverImage?: {
		src: string;
		alt: string;
	};
	rating: number;
	description: string;
};

export enum ProductsCategories {
	"accesories" = 1,
	"hoodies" = 2,
	"t-shirts" = 3,
	"all" = "all",
}

export type linesType = {
	cartId: string;
	productQuantity: number;
	productId: number;
	productName: string;
	productSlug: string;
	productPrice: number;
}[];
