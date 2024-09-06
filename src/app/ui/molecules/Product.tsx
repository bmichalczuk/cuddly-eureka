import { cookies } from "next/headers";
import { ProductCoverImage } from "../atoms/ProductCoverImage";
import { ProductDescription } from "../atoms/ProductDescription";
import { type ProductFragment } from "../../../gql/graphql";
import { AddProductToCartButton } from "../atoms/AddProductToCartButton";
import { addToCart, getOrCreateCart } from "@/api/cart";

export const Product = async ({ product }: { product: ProductFragment }) => {
	async function addProductToCartAction() {
		"use server";

		const cart = await getOrCreateCart();
		cookies().set("cartId", cart.id);
		await addToCart(cart.id, product.id);
	}

	return (
		<form
			action={addProductToCartAction}
			className="lg:max-w-8xl mt-auto grid grid-cols-1 lg:m-12  lg:grid-cols-2"
		>
			{product.images[0] && <ProductCoverImage {...product.images[0]} />}
			<div>
				<ProductDescription {...product} />
				<AddProductToCartButton />
			</div>
		</form>
	);
};
