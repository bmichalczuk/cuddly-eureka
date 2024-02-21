import { ProductCoverImage } from "../atoms/ProductCoverImage";
import { ProductDescription } from "../atoms/ProductDescription";
import type { ProductType } from "@/types";

export const Product = ({ product }: { product: ProductType }) => {
	return (
		<article className="lg:max-w-8xl mt-auto grid grid-cols-1 lg:m-12  lg:grid-cols-2">
			{product.coverImage && <ProductCoverImage {...product.coverImage} />}
			<ProductDescription {...product} />
		</article>
	);
};
