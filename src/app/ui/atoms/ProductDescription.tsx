import { type ProductType } from "@/types";
import { formatPrice } from "@/utils";

export const ProductDescription = ({ category, name, price, description, rating }: ProductType) => {
	return (
		<div className="border p-5">
			<h1 className="my-5 text-center text-3xl font-bold">{name}</h1>
			<p className="px-5">{description}</p>
			<div className="my-3 flex flex-row justify-between px-1">
				<div className="cursor-pointer font-serif italic hover:underline">{`Category: ${category}`}</div>
				<div className="font-semibold">
					<span className="sr-only">Cena:</span>
					{formatPrice(price)}
				</div>
			</div>

			<div className="text-right">
				{`${rating.rate} `}
				<div>{`${rating.count} reviews`}</div>
			</div>
		</div>
	);
};
