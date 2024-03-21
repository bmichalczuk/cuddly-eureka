import { cookies } from "next/headers";
import {
	CartCreateDocument,
	type CartFragment,
	CartGetByIdDocument,
	CartAddProductDocument,
	type ProductFragment,
} from "../../gql/graphql";
import { executeGraohql } from "@/utils/utils";

export const getOrCreateCart = async (): Promise<CartFragment> => {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const cart = await getCartById(cartId);
		if (cart.cart) {
			return cart.cart;
		}
	}
	const cart = await createCart(cartId);
	if (!cart.cartFindOrCreate) {
		throw new Error("Failed to create cart");
	}
	cookies().set("cartId", cart.cartFindOrCreate.id, {
		httpOnly: true,
		sameSite: "lax",
		//secure: true
	});

	return cart.cartFindOrCreate;
};

export const addProductToCart = async (
	cartId: CartFragment["id"],
	productId: ProductFragment["id"],
	quantity = 1,
) => {
	const cart = await executeGraohql({
		query: CartAddProductDocument,
		variables: {
			id: cartId,
			productId,
			quantity: quantity,
		},
	});
	return cart;
};

export const getCartById = async (cartId: CartFragment["id"]) => {
	const cart = await executeGraohql({
		query: CartGetByIdDocument,
		variables: { id: cartId },
		next: { tags: ["cart"] },
	});
	return cart;
};

async function createCart(id?: CartFragment["id"]) {
	const cart = await executeGraohql({ query: CartCreateDocument, variables: { id: id } });
	return cart;
}
