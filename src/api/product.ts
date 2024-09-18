import { revalidateTag } from "next/cache";
import { ProductCreateReviewDocument, type ProductFragment } from "../gql/graphql";
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
	await executeGraphql({
		query: ProductCreateReviewDocument,
		variables: { productId, title, description, email, rating, author },
	});
	revalidateTag("product");
};
