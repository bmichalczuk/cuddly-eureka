"use client";

import { Suspense, useOptimistic } from "react";
import { type ReviewFragment, type ProductFragment } from "../../../gql/graphql";
import { createReviewAction } from "../../../actions/product";
import { ProductReviewForm } from "../atoms/ProductReviewForm";
import { ProductReviewsList } from "../molecules/ProductReviewsList";

export const Reviews = async ({
	productId,
	reviews,
}: {
	productId: ProductFragment["id"];
	reviews: ReviewFragment[];
}) => {
	const [optimisticReviews, updateOptimisticReviews] = useOptimistic(reviews);

	const handleReviewForm = async (formData: FormData) => {
		const data = {
			productId: productId,
			title: formData.get("review-title") as string,
			author: formData.get("review-author") as string,
			description: formData.get("review-description") as string,
			email: formData.get("review-email") as string,
			rating: Number(formData.get("review-rating")),
		};
		updateOptimisticReviews((prev) => {
			return [...prev, data];
		});
		await createReviewAction(formData, productId);
	};

	return (
		<section className="flex flex-col lg:flex-row">
			<ProductReviewForm productId={productId} action={handleReviewForm} />

			<section className="flex-1">
				<Suspense>
					<ProductReviewsList reviews={optimisticReviews} />
				</Suspense>
			</section>
		</section>
	);
};
