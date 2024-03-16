"use server";

import { CartSetProductQuantityDocument } from "../../gql/graphql";
import { executeGraohql } from "@/utils/utils";

export const changeProductQuantity = (cartId: string, productId: string, quantity: number) => {
	return executeGraohql(CartSetProductQuantityDocument, { cartId, productId, quantity });
};
