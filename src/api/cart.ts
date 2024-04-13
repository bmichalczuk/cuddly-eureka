import { cookies } from "next/headers";
import {
	CartCreateDocument,
	type CartFragment,
	CartGetByIdDocument,
	CartAddProductDocument,
	type ProductFragment,
} from "../gql/graphql";
import { executeGraohql } from "@/utils/utils";

export const getOrCreateCart = async (): Promise<CartFragment> => {
	const cart = await getCart();
	if (cart?.cart) {
		return cart.cart;
	}

	const cartId = cookies().get("cartId")?.value;
	const newCart = await createCart(cartId);
	if (!newCart.cartFindOrCreate) {
		throw new Error("Failed to create cart");
	}
	cookies().set("cartId", newCart.cartFindOrCreate.id, {
		httpOnly: true,
		sameSite: "lax",
		//secure: true
	});

	return newCart.cartFindOrCreate;
};

export const getCart = async () => {
	const cartId = cookies().get("cartId")?.value;

	if (!cartId) {
		return;
	}

	const cart = await getCartById(cartId);
	if (cart) {
		return cart;
	}
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
		cache: "no-store",
	});
	return cart;
};

export const getCartById = async (cartId: CartFragment["id"]) => {
	const cart = await executeGraohql({
		query: CartGetByIdDocument,
		variables: { id: cartId },
		next: { tags: ["cart"] },
		cache: "no-store",
	});
	return cart;
};

async function createCart(id?: CartFragment["id"]) {
	const cart = await executeGraohql({ query: CartCreateDocument, variables: { id: id } });
	return cart;
}
