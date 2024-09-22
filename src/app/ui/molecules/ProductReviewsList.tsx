import { type ReviewFragment } from "../../../gql/graphql";
import { ProductReview } from "../atoms/ProductReview";

export const ProductReviewsList = ({ reviews }: { reviews: ReviewFragment[] }) => {
	return (
		<ul>
			{reviews.map((review) => {
				return (
					<li key={review.email} className="mb-6">
						<ProductReview review={review} />
					</li>
				);
			})}
		</ul>
	);
};
