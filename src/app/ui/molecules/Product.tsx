import { revalidateTag } from "next/cache";
import { ProductCoverImage } from "../atoms/ProductCoverImage";
import { ProductDescription } from "../atoms/ProductDescription";
import type { ProductFragment } from "../../../gql/graphql";
import { AddToCartButton } from "../atoms/AddCartButton";
import { getOrCreateCart, addProductToCart } from "../../../api/cart";
/*
const addProductToCartAction = async (formData: FormData) => {
	"use server";
	console.log(formData);
};*/

export const Product = ({ product }: { product: ProductFragment }) => {
	const addProductToCartAction = async () => {
		"use server";
		const cart = await getOrCreateCart();

		await addProductToCart(cart.id, product.id);

		revalidateTag("cart");
	};
	return (
		<article className="lg:max-w-8xl mt-auto grid grid-cols-1 lg:m-12  lg:grid-cols-2 ">
			{product.images[0] && <ProductCoverImage {...product.images[0]} />}
			<form action={addProductToCartAction} className="flex flex-col">
				<ProductDescription {...product} />{" "}
				<input type="text" name="productId" value={product.id} hidden />
				<AddToCartButton />
			</form>
		</article>
	);
};
