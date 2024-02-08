import { type ProductType } from "../types";

export const ProductListItemDescription = ({ category, name, price }: ProductType) => {
	return (
		<div className="">
			<h2 className="m-2 text-center text-3xl font-bold">{name}</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt quia officiis architecto
				maxime dolorem,
			</p>
			<div className="mt-3 flex flex-row justify-between px-1">
				<div className="cursor-pointer font-serif italic hover:underline">{category}</div>
				<div className="font-semibold">{price}$</div>
			</div>
		</div>
	);
};
