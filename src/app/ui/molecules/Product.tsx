import { ProductCoverImage } from "../atoms/ProductCoverImage";
import { ProductDescription } from "../atoms/ProductDescription";
import type { ProductPageFragment } from "../../../gql/graphql";

export const Product = ({ product }: { product: ProductPageFragment }) => {
	async function addProductToCartAction() {
		"use server";
		console.log(product.images[0]);
	}

	return (
		<article className="lg:max-w-8xl mt-auto grid grid-cols-1 lg:m-12  lg:grid-cols-2">
			<form action={addProductToCartAction}>
				{product.images[0] && <ProductCoverImage {...product.images[0]} />}
				<ProductDescription {...product} />
				<button
					type="submit"
					className="w-full rounded-md border bg-slate-700 px-8 py-3 text-white"
				>
					Add to cart
				</button>
			</form>
		</article>
	);
};
