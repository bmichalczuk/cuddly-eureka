import { type ProductFragment } from "../../../gql/graphql";
import { Button } from "./Button";

export const ProductReviewForm = ({
	productId,
	action,
}: {
	productId: ProductFragment["id"];
	action: (formData: FormData) => Promise<void>;
}) => {
	return (
		<form action={action} data-testid="add-review-form" className="flex flex-1 flex-col px-5">
			<input required className="hidden" name="productId" value={productId} />
			<h4>Title:</h4>
			<input required className="mb-5 border border-slate-500  p-3" type="text" name="headline" />
			<h4>Opinion:</h4>
			<textarea
				required
				rows={10}
				className="mb-5 border border-slate-500  p-3"
				name="content"
			></textarea>
			<h4>Email adress:</h4>
			<input required className="mb-5 border  border-slate-500  p-3" type="email" name="email" />
			<h4>Your name:</h4>
			<input required className="mb-5 border  border-slate-500  p-3" type="text" name="name" />
			<h4>Rate product:</h4>
			<select required name="rating" className="border border-slate-700 p-1">
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
