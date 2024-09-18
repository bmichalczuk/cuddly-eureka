import { type ProductFragment } from "../../../gql/graphql";
import { createProductReview } from "../../../api/product";
import { Button } from "./Button";

export const ProductReviewForm = ({ productId }: { productId: ProductFragment["id"] }) => {
	const createReviewAction = async (formData: FormData) => {
		"use server";
		const data = {
			productId,
			title: formData.get("review-title") as string,
			author: formData.get("review-author") as string,
			description: formData.get("review-description") as string,
			email: formData.get("review-email") as string,
			rating: Number(formData.get("review-rating")),
		};
		await createProductReview(data);
	};

	return (
		<form
			action={createReviewAction}
			data-testid="add-review-form"
			className="flex flex-1 flex-col px-5"
		>
			<input required className="hidden" name="productId" value={productId} />
			<h4>Title:</h4>
			<input
				required
				className="mb-5 border border-slate-500  p-3"
				type="text"
				name="review-title"
			/>
			<h4>Opinion:</h4>
			<textarea
				required
				rows={10}
				className="mb-5 border border-slate-500  p-3"
				name="review-description"
			></textarea>
			<h4>Email adress:</h4>
			<input
				required
				className="mb-5 border  border-slate-500  p-3"
				type="email"
				name="review-email"
			/>
			<h4>Your mame:</h4>
			<input
				required
				className="mb-5 border  border-slate-500  p-3"
				type="text"
				name="review-author"
			/>
			<h4>Rate product:</h4>
			<select required name="review-rating" className="border border-slate-700 p-1">
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
			</select>
			<Button type="submit">Add review</Button>
		</form>
	);
};
