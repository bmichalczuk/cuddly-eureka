"use server";
import { revalidateTag } from "next/cache";
import { createProductReview } from "../api/product";
import { type ProductFragment } from "../gql/graphql";

export const createReviewAction = async (formData: FormData, productId: ProductFragment["id"]) => {
	const data = {
		productId,
		title: formData.get("headline") as string,
		author: formData.get("name") as string,
		description: formData.get("content") as string,
		email: formData.get("email") as string,
		rating: Number(formData.get("rating")),
	};
	const res = await createProductReview(data);
	console.log(res);

	revalidateTag("reviews");
	return res;
};
