import clsx from "clsx";
import { type ReviewFragment } from "../../../gql/graphql";

export const ProductReview = ({ review }: { review: ReviewFragment }) => {
	return (
		<article className=" max-w-3xl border-slate-700">
			<h3 className="text-base font-bold">{review.title}</h3>
			<p className="m-2 text-sm text-slate-700">{review.description}</p>
			<p
				className={clsx(
					"font-bold",
					review.rating >= 4
						? "text-green-700"
						: review.rating < 2
							? "text-red-700"
							: "text-yellow-700",
				)}
			>
				{review.rating}/5
			</p>
			<div className="flex flex-row justify-around text-xs italic text-gray-700">
				<span>{review.author}</span>
				<span>{review.email}</span>
			</div>
		</article>
	);
};
