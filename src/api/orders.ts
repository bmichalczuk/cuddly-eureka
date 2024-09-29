import { type OrderFragment, OrdersGetByEmailDocument } from "../gql/graphql";
import { executeGraphql } from "@/utils/utils";

export const getOrdersByEmail = async (email: string): Promise<OrderFragment[]> => {
	const orders = await executeGraphql({
		query: OrdersGetByEmailDocument,
		variables: {
			email: email,
		},
	});
	return orders.orders.data;
};
