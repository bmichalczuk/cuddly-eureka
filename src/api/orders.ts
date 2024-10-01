import { type OrderFragment, OrdersGetByEmailDocument, OrderGetByIdDocument } from "../gql/graphql";
import { executeGraphql } from "@/utils/utils";

export const getOrdersByEmail = async (email: string): Promise<OrderFragment[]> => {
	const orders = await executeGraphql({
		query: OrdersGetByEmailDocument,
		variables: {
			email: email,
		},
	});

	if (!orders.orders) {
		throw new TypeError("GraphQL error: no such orders");
	}
	return orders.orders.data;
};

export const getOrderById = async (orderId: OrderFragment["id"]) => {
	const order = await executeGraphql({
		query: OrderGetByIdDocument,
		variables: { orderId },
	});

	if (!order.order) {
		throw new TypeError("GraphQL error: no such order");
	}
	return order.order;
};
