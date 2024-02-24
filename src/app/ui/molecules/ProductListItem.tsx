import Link from "next/link";
import type { ProductListItemFragment } from "../../../gql/graphql";
import { ProductListItemImage } from "@/ui/atoms/ProductListItemImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";

export type ProductListItemProps = {
	product: ProductListItemFragment;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	console.log(product.images);
	return (
		<Link href={`/product/${product.id}`}>
			<article className="flex  flex-col  rounded-md">
				{product.images[0] && <ProductListItemImage {...product.images[0]} />}

				<ProductListItemDescription {...product} />
			</article>
		</Link>
	);
};
