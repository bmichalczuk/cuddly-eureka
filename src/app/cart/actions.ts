"use server";

import { revalidateTag } from "next/cache";
import { CartSetProductQuantityDocument } from "../../gql/graphql";
import { executeGraohql } from "@/utils/utils";

export const changeProductQuantity = async (
	cartId: string,
	productId: string,
	quantity: number,
) => {
	await executeGraohql({
		query: CartSetProductQuantityDocument,
		variables: { cartId, productId, quantity },
	});
	revalidateTag("cart");
};
