import Link from "next/link";
import type { ProductType } from "../../types";

import { ProductListItemImage } from "@/ui/atoms/ProductListItemImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";

export type ProductListItemProps = {
	product: ProductType;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<Link href={`/product/${product.id}`}>
			<article className="flex  flex-col  rounded-md">
				{product.coverImage && <ProductListItemImage {...product.coverImage} />}

				<ProductListItemDescription {...product} />
			</article>
		</Link>
	);
};
