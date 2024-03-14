import { cookies } from "next/headers";
import {
	CartCreateDocument,
	type CartFragment,
	CartGetByIdDocument,
	CartAddProductDocument,
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
	return cart.cartFindOrCreate;
};

export const addProductToCart = async (cartId: string, productId: string, quantity = 1) => {
	const cart = await executeGraohql(CartAddProductDocument, {
		id: cartId,
		productId,
		quantity: quantity,
	});
	return cart;
};

export const getCartById = async (cartId: CartFragment["id"]) => {
	const cart = await executeGraohql(CartGetByIdDocument, { id: cartId });
	return cart;
};

async function createCart(id?: CartFragment["id"]) {
	const cart = await executeGraohql(CartCreateDocument, { id: id });
	return cart;
}
