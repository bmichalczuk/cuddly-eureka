import type { ProductType } from "../types";
import { ProductListItemImage } from "@/app/ui/atoms/ProductListItemImage";
import { ProductListItemDescription } from "@/app/ui/atoms/ProductListItemDescription";
export type ProductListItemProps = {
	product: ProductType;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<article className="border border-gray-300 p-2 shadow-md transition-transform hover:shadow-lg">
			<ProductListItemImage {...product.coverImage} />

			<ProductListItemDescription {...product} />
		</article>
	);
};
