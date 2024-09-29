import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getOrdersByEmail } from "../../api/orders";
export default async function OrderPage() {
	const user = await currentUser();
	if (!user) {
		redirect("/sign-in");
	}

	const email = user.emailAddresses[0]?.emailAddress || "";

	if (!email) {
		return <div>User does not have email</div>;
	}

	const orders = await getOrdersByEmail(email);
	console.log(orders);
	console.log(email);
	return (
		<div>
			<h1>{user.firstName}&rsquo;s Orders</h1>

			{orders.length === 0 ? (
				<div>No orders found</div>
			) : (
				<ul>
					{orders.map((order) => {
						if (order.id && order.createdAt) {
							return (
								<li key={order.id}>
									<div>{order.id}</div>
									<div>
										<time dateTime={String(order.createdAt)}>{String(order.createdAt)}</time>
									</div>
								</li>
							);
						}
					})}
				</ul>
			)}
		</div>
	);
}
