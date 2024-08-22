import { cookies } from "next/headers";
import {
	CartAddProductDocument,
	CartCreateDocument,
	CartGetByIdDocument,
	type ProductFragment,
	type CartFragment,
} from "../../gql/graphql";
import { executeGraohql } from "@/utils/utils";

export function getOrCreateCart() {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		return getCartById(cartId);
	} else {
		return createCart();
	}
}
export const getCartById = async (cartId: CartFragment["id"]) => {
	const cart = await executeGraohql({
		query: CartGetByIdDocument,
		variables: { id: cartId },
		next: { tags: ["cart"] },
		cache: "no-store",
	});
	return cart;
};

export async function createCart(id?: CartFragment["id"]) {
	const cart = await executeGraohql({ query: CartCreateDocument, variables: { id: id } });
	return cart;
}

export async function addToCart(
	cartId: CartFragment["id"],
	productId: ProductFragment["id"],
	quantity: number,
) {
	const cart = await executeGraohql({
		query: CartAddProductDocument,
		variables: { id: cartId, productId, quantity },
		cache: "no-store",
	});

	return cart;
}
