export type ProductType = {
	id: string;
	name: string;
	price: number;
	category: string;
	coverImage: {
		src: string;
		alt: string;
	};
	rating: {
		rate: number;
		count: number;
	};
	description: string;
	longDescription: string;
};
