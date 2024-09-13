import { type ProductFragment } from "../../../gql/graphql";
import { ProductReview } from "../atoms/ProductReview";
import { getProductReviews } from "../../../api/products";

export const Reviews = async ({ productId }: { productId: ProductFragment["id"] }) => {
	const reviews = await getProductReviews(productId);

	return (
		<section className="flex flex-col md:flex-row">
			<ul className="flex-auto">
				{reviews.map((review) => {
					return (
						<li key={review.email} className="mb-6">
							<ProductReview review={review} />
						</li>
					);
				})}
			</ul>
			<form>
				<h2>Give Your opininon</h2>
				<input type="text" />
				<input type="text" />
				<input type="text" />
				<textarea name="" id=""></textarea>
				<input type="text" />
				<input type="text" />
			</form>
		</section>
	);
};
