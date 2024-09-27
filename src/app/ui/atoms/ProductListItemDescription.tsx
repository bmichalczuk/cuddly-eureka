import clsx from "clsx";
import type { ProductListItemFragment } from "../../../gql/graphql";
import { formatPrice } from "@/utils/utils";

export const ProductListItemDescription = ({
	categories,
	name,
	price,
	rating,
}: ProductListItemFragment) => {
	const productRating = Number(rating?.toPrecision(3)) ?? 0;
	return (
		<div className="bg-slate-59 grid flex-1 grid-cols-2 grid-rows-2 px-5 py-5">
			<h2 className=" col-span-2 mb-3 text-center ">{name}</h2>

			<div className="text-s cursor-pointer font-serif italic hover:underline">
				{categories[0]?.name || ""}
			</div>
			<div className="text-right font-semibold">
				<span className="sr-only">Cena:</span>
				<span data-testid="product-price">{formatPrice(price)}</span>
			</div>
			<div
				data-testid="product-rating"
				className={clsx(
					"font-bold",
					"text-right",
					"text-s",
					"col-span-2",

					productRating >= 4
						? "text-green-700"
						: productRating < 2
							? "text-red-700"
							: "text-yellow-700",
				)}
			>
				{productRating}/5
			</div>
		</div>
	);
};
