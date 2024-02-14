import { type ProductType } from "@/types";
import { formatPrice } from "@/utils";

export const ProductListItemDescription = ({ category, name, price }: ProductType) => {
	return (
		<div className="bg-slate-59 grid flex-1 grid-cols-2 grid-rows-2 px-5 py-5">
			<h2 className=" col-span-2 mb-3 text-center ">{name}</h2>

			<div className="text-s cursor-pointer font-serif italic hover:underline">{category}</div>
			<div className="text-right font-semibold">
				<span className="sr-only">Cena:</span>
				{formatPrice(price)}
			</div>
		</div>
	);
};
