"use server";
import { revalidateTag } from "next/cache";

import {
	CartSetProductQuantityDocument,
	CartRemoveProductDocument,
	type CartFragment,
	type ProductFragment,
} from "../../gql/graphql";

import { executeGraphql } from "@/utils/utils";

export const changeProductQuantity = async (
	cartId: string,
	productId: string,
	quantity: number,
) => {
	await executeGraphql({
		query: CartSetProductQuantityDocument,
		variables: { cartId, productId, quantity },
	});
	revalidateTag("cart");
};

export const removeProductFromCart = async (
	cartId: CartFragment["id"],
	productId: ProductFragment["id"],
) => {
	await executeGraphql({ variables: { productId, cartId }, query: CartRemoveProductDocument });
};
