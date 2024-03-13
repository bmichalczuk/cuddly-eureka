import { cookies } from "next/headers";
import { ProductCoverImage } from "../atoms/ProductCoverImage";
import { ProductDescription } from "../atoms/ProductDescription";
import type { ProductFragment } from "../../../gql/graphql";
import { getOrCreateCart, addProductToCart } from "@/api/cart";
/*
const addProductToCartAction = async (formData: FormData) => {
	"use server";
	console.log(formData);
};*/

export const Product = ({ product }: { product: ProductFragment }) => {
	const addProductToCartAction = async () => {
		"use server";
		const cart = await getOrCreateCart();
		cookies().set("cartId", cart.id, {
			httpOnly: true,
			sameSite: "lax",
			//secure: true,
		});
		await addProductToCart(cart.id, product.id);

		console.log(cart);
	};
	return (
		<article className="lg:max-w-8xl mt-auto grid grid-cols-1 lg:m-12  lg:grid-cols-2 ">
			{product.images[0] && <ProductCoverImage {...product.images[0]} />}
			<form action={addProductToCartAction} className="flex flex-col">
				<ProductDescription {...product} />{" "}
				<input type="text" name="productId" value={product.id} hidden />
				<button
					type="submit"
					className="my-8 mr-4 w-full max-w-xs self-end rounded-md border bg-slate-700 px-8 py-3 text-white"
				>
					Add to cart
				</button>
			</form>
		</article>
	);
};
