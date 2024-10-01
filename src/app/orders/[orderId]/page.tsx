import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { getOrderById } from "../../../api/orders";
import { formatPrice, formatDate } from "@/utils/utils";
export default async function OrderDetailsPage({ params }: { params: { orderId: string } }) {
	const user = await currentUser();
	if (!user) {
		redirect("/sign-in");
	}

	type linesType = {
		cartId: string;
		productQuantity: number;
		productId: number;
		productName: string;
		productSlug: string;
		productPrice: number;
	}[];

	const order = await getOrderById(params.orderId);
	const products = order.lines as linesType;

	return (
		<section className="mx-auto max-w-md  sm:max-w-2xl sm:py-1 xl:max-w-6xl">
			<Link
				className=" flex flex-row items-center py-2 align-middle text-xl tracking-wide hover:underline"
				title="Go back to order list"
				href="/orders"
			>
				{" "}
				<ChevronLeft />
				Go back
			</Link>
			<h2 className="py-4 text-center text-2xl">Order detail for order: {order.id}</h2>
			<p className="py-1 text-lg">Created at {formatDate(String(order.createdAt))}</p>
			<p className="py-1 text-lg">Last updated: {formatDate(String(order.updatedAt))} </p>
			<p className="py-1 text-lg">
				Current status: <span className="font-bold tracking-wide text-red-400">{order.status}</span>
			</p>
			<table className="m-auto min-w-full text-xl">
				<tbody>
					<thead>
						<tr className="700 border bg-slate-700 p-5 text-white">
							<th className="px-10 py-3">Lp</th>
							<th className="px-10 py-3">Name</th>
							<th className="px-10 py-3">Quantity</th>
							<th className="px-10 py-3">Total Price</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{products.map((product, i) => {
							return (
								<tr className="border border-b border-slate-500" key={order.id}>
									<td className="px-10 py-3">{i + 1}</td>
									<td className="px-10 py-3">{product.productName}</td>
									<td className="px-10 py-3">{product.productQuantity}</td>
									<td className="px-10 py-3">{formatPrice(product.productPrice)}</td>
								</tr>
							);
						})}
						<tr className="border border-b border-slate-500">
							<td className="px-10 py-3"></td>
							<td className="px-10 py-3 text-right">Total: </td>
							<td className="px-10 py-3">
								{products.reduce((total, current) => {
									return total + current.productQuantity;
								}, 0)}
							</td>
							<td className="px-10 py-3">
								{formatPrice(
									products.reduce((totalPrice, current) => {
										return totalPrice + current.productPrice;
									}, 0),
								)}
							</td>
						</tr>
					</tbody>
				</tbody>
			</table>
		</section>
	);
}
