import { type ProductType } from "@/types";
import { formatPrice } from "@/utils";

export const ProductDescription = ({
	category,
	name,
	price,
	longDescription,
	rating,
}: ProductType) => {
	return (
		<div className="border">
			<h2 className="m-2 text-center text-3xl font-bold">{name}</h2>
			<p>{longDescription}</p>
			<div className="mt-3 flex flex-row justify-between px-1">
				<div className="cursor-pointer font-serif italic hover:underline">{category}</div>
				<div className="font-semibold">
					<span className="sr-only">Cena:</span>
					{formatPrice(price)}
				</div>
				<div>{rating.rate}</div>
			</div>
		</div>
	);
};
