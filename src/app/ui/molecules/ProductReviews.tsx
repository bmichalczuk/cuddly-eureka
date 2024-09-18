import { type ProductFragment } from "../../../gql/graphql";
import { ProductReview } from "../atoms/ProductReview";
import { getProductReviews } from "../../../api/products";
import { Button } from "../atoms/Button";
import { ProductReviewForm } from "../atoms/ProductReviewForm";

export const Reviews = async ({ productId }: { productId: ProductFragment["id"] }) => {
	const reviews = await getProductReviews(productId);

	return (
		<section className="flex flex-col lg:flex-row">
			<section className="flex-1">
				<ul>
					{reviews.map((review) => {
						return (
							<li key={review.email} className="mb-6">
								<ProductReview review={review} />
							</li>
						);
					})}
				</ul>
				<Button>See all </Button>
			</section>
			<ProductReviewForm productId={productId} />
		</section>
	);
};
