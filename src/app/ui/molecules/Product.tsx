import { ProductCoverImage } from "../atoms/ProductCoverImage";
import { ProductDescription } from "../atoms/ProductDescription";
import type { ProductPageFragment } from "../../../gql/graphql";

export const Product = ({ product }: { product: ProductPageFragment }) => {
	return (
		<article className="lg:max-w-8xl mt-auto grid grid-cols-1 lg:m-12  lg:grid-cols-2">
			{product.images[0] && <ProductCoverImage {...product.images[0]} />}
			<ProductDescription {...product} />
		</article>
	);
};
