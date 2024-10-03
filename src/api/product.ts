import {
	ProductCreateReviewDocument,
	ProductGetReviewsDocument,
	type ProductFragment,
	ProductGetImagesDocument,
} from "../gql/graphql";
import { executeGraphql } from "@/utils/utils";

export const createProductReview = async ({
	productId,
	author,
	description,
	email,
	rating,
	title,
}: {
	author: string;
	description: string;
	email: string;
	productId: ProductFragment["id"];
	rating: number;
	title: string;
}) => {
	const res = await executeGraphql({
		query: ProductCreateReviewDocument,
		variables: { productId, title, description, email, rating, author },
	});
	if (!res.reviewCreate.id) {
		throw new TypeError("GraphQL error: no such product");
	}
	return res.reviewCreate.id;
};

export const getProductReviews = async (productId: ProductFragment["id"]) => {
	const res = await executeGraphql({
		query: ProductGetReviewsDocument,
		variables: {
			productId: productId,
		},
		next: { tags: ["reviews"] },
	});
	if (!res.product) {
		throw new TypeError("GraphQL error: no such product");
	}
	return res.product.reviews;
};

export const getProductImages = async (productId: ProductFragment["id"]) => {
	const res = await executeGraphql({
		query: ProductGetImagesDocument,
		variables: {
			productId: productId,
		},
		next: { tags: ["reviews"] },
	});
	if (!res.product) {
		throw new TypeError("GraphQL error: no such product");
	}
	return res.product.images;
};
