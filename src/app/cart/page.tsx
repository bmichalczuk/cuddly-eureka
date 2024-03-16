import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";
import { IncrementProductQuantity } from "./IncrementProductQuantity";
import { formatPrice } from "@/utils/utils";
import { getCartById } from "@/api/cart";

export default async function CartPage() {
	const cartId = cookies().get("cartId")?.value;

	if (!cartId) {
		redirect("/");
	}

	const { cart } = await getCartById(cartId);
	console.log(cart);
	if (!cart) {
		redirect("/");
	}

	return (
		<section className="text-slate-700 ">
			<h1 className="my-5 mb-10 text-3xl">
				Order <span className="font-bold">#{cart.id}</span> summary
			</h1>
			<table className="m-auto text-xl ">
				<thead>
					<tr className="700 border bg-slate-700 p-5 text-white">
						<th className="px-10 py-3">Product</th>
						<th className="px-10 py-3">Quantity</th>
						<th className="px-10 py-3">Price</th>
					</tr>
				</thead>
				<tbody>
					{cart.items.map((item) => {
						if (!item.product) {
							return null;
						}
						return (
							<tr className="border-b border-slate-500" key={item.product.id}>
								<td className="px-10 py-3">
									{item.product.images[0]?.url && (
										<Image
											className="mx-2 inline-block"
											height={50}
											width={50}
											alt={`${item.product.name} photo`}
											src={item.product.images[0].url}
										/>
									)}
									{item.product.name}
								</td>
								<td className="px-10 py-3 text-center">
									{item.quantity}{" "}
									<IncrementProductQuantity
										quantity={item.quantity}
										productId={item.product.id}
										cartId={cart.id}
									/>
								</td>

								<td className="px-10 py-3">{formatPrice(item.product.price)}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</section>
	);
}
