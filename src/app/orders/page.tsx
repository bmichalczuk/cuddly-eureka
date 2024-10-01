import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { type Route } from "next";
import { getOrdersByEmail } from "../../api/orders";
import { formatPrice, formatDate } from "@/utils/utils";
type linesType = {
	cartId: string;
	productQuantity: number;
	productId: number;
	productName: string;
	productSlug: string;
	productPrice: number;
}[];

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
	return (
		<div className="mx-auto max-w-md  sm:max-w-2xl sm:py-1 xl:max-w-6xl">
			<h1 className="py-2 text-2xl">{user.firstName}&rsquo;s Orders</h1>

			{orders.length === 0 ? (
				<div>No orders found</div>
			) : (
				<table className="m-auto min-w-full text-xl">
					<tbody>
						<thead>
							<tr className="700 border bg-slate-700 p-5 text-white">
								<th className="px-10 py-3">Order</th>
								<th className="px-10 py-3">Quantity</th>
								<th className="px-10 py-3">Total price</th>
								<th className="px-10 py-3">Order status</th>
								<th className="px-10 py-3">Date</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{orders.map((order, i) => {
								return (
									<tr className="border border-b border-slate-500" key={order.id}>
										<td className="px-10 py-3">{i + 1}</td>

										<td className="px-10 py-3">{(order.lines as linesType).length}</td>
										<td className="px-10 py-3">{formatPrice(order.totalAmount)}</td>
										<td className="px-10 py-3">{order.status}</td>
										<td className="px-10 py-3">{formatDate(String(order.createdAt))}</td>
										<td className="px-10 py-3">
											<Link
												className="font-bold tracking-wide text-red-400 hover:underline focus:underline"
												title="check order details "
												href={`/orders/${order.id}` as Route}
											>
												Details
											</Link>{" "}
										</td>
									</tr>
								);
							})}
						</tbody>
					</tbody>
				</table>
			)}
		</div>
	);
}
/*
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
</ul>;
*/
