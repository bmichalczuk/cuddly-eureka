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
	longDescription: string;
};
