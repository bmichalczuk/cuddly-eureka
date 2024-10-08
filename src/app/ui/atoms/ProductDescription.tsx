import { type Route } from "next";
import Link from "next/link";
import { type ProductFragment } from "../../../gql/graphql";
import { formatPrice } from "@/utils/utils";

export const ProductDescription = ({
	categories,
	name,
	price,
	description,
	rating,
}: ProductFragment) => {
	return (
		<div className="border p-5">
			<h1 className="my-5 text-center text-3xl font-bold">{name}</h1>
			<p className="px-5">{description}</p>
			<div className="my-3 flex flex-row justify-between px-1">
				<div className="cursor-pointer font-serif italic hover:underline">
					<Link
						href={`/categories/${categories[0]?.name.toLowerCase()}/1` as Route}
						title="See more products in this category"
					>{`Category: ${categories[0]?.name || ""}`}</Link>
				</div>
				<div className="font-semibold " data-testid="product-price">
					<span className="sr-only">Cena:</span>
					{formatPrice(price)}
				</div>
			</div>

			<div className="text-right">{rating && Math.round(rating)}</div>
		</div>
	);
};
