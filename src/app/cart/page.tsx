import Image from "next/image";
import { getCartFromCookies } from "../../api/cart";
import { ProductQuantity } from "./ProductQuantity";
import { RemoveButton } from "./RemoveProductButton";
import { handleStripePaymentAction } from "./actions";
import { formatPrice } from "@/utils/utils";
import { Button } from "@/ui/atoms/Button";

export default async function CartPage() {
	const cart = await getCartFromCookies();

	console.log(cart);
	if (!cart || cart.items.length < 1) {
		return <div className="p-5 text-center text-2xl">Your cart is empty, add some products.</div>;
	}
	return (
		<div>
			<section className="text-slate-700 ">
				<h1 className="my-5 mb-10 text-3xl">
					Order <span className="font-bold">#{cart.id}</span> summary
				</h1>
				<table className="m-auto min-w-full text-xl">
					<thead>
						<tr className="700 border bg-slate-700 p-5 text-white">
							<th className="px-10 py-3">Product</th>
							<th className="px-10 py-3">Quantity</th>
							<th className="px-10 py-3">Price</th>
							<th></th>
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
										{
											<ProductQuantity
												quantity={item.quantity}
												productId={item.product.id}
												cartId={cart.id}
											/>
										}
									</td>

									<td className="px-10 py-3">{formatPrice(item.product.price)}</td>
									<td className="px-10 py-3">
										{<RemoveButton cartId={cart.id} productId={item.product.id} />}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
				<form action={handleStripePaymentAction} className="flex border-red-800">
					<Button title="Pay with Stripe" type="submit" className="ml-auto mt-2 ">
						Pay
					</Button>
				</form>
			</section>
		</div>
	);
}
