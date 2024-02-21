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
	"Accessories" = 1,
	"Hoodies" = 2,
	"T-Shirts" = 3,
}
