import { cookies } from "next/headers";
import {
	CartAddProductDocument,
	CartCreateDocument,
	CartGetByIdDocument,
	type ProductFragment,
	type CartFragment,
	CartCompleteDocument,
} from "../gql/graphql";
import { executeGraphql } from "@/utils/utils";

export const getOrCreateCart = async (): Promise<CartFragment> => {
	const existingCart = await getCartFromCookies();
	if (existingCart) {
		return existingCart;
	}

	const cart = await createCart();
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

export const getCartFromCookies = async () => {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const cart = await getCartById(cartId);
		if (cart.cart) {
			return cart.cart;
		}
	}
};

export const getCartById = async (cartId: CartFragment["id"]) => {
	const cart = await executeGraphql({
		query: CartGetByIdDocument,
		variables: { id: cartId },
		next: { tags: ["cart"] },
		cache: "no-store",
	});
	return cart;
};

export async function createCart() {
	const cartId = cookies().get("cartId")?.value;
	const cart = await executeGraphql({
		query: CartCreateDocument,
		variables: { id: cartId },
		cache: "no-store",
	});
	return cart;
}

export async function addToCart(
	cartId: CartFragment["id"],
	productId: ProductFragment["id"],
	quantity = 1,
) {
	const cart = await executeGraphql({
		query: CartAddProductDocument,
		variables: { id: cartId, productId, quantity },
		cache: "no-store",
	});

	return cart;
}

export const completeCart = async (cartId: string, userEmail: string) => {
	await executeGraphql({
		query: CartCompleteDocument,
		variables: {
			cartId,
			userEmail,
		},
		cache: "no-store",
	});
};
