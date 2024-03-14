import { ShoppingCart } from "lucide-react";
import { cookies } from "next/headers";
import Link from "next/link";
import { getCartById } from "@/api/cart";

export const CartLink = async () => {
	const cartId = cookies().get("cartId")?.value;
	if (!cartId) {
		return (
			<Link href="/cart" className="ml-1 flex flex-row p-5 font-bold">
				<ShoppingCart />
				<span className="mx-2">0</span>
			</Link>
		);
	}

	const { cart } = await getCartById(cartId);

	return (
		<Link
			href="/cart"
			title="Go to cart"
			className="mx-5  flex flex-row items-center justify-center rounded-md p-5 align-middle font-bold  hover:bg-slate-600 focus:bg-slate-600"
		>
			<ShoppingCart />
			<span className="">({(cart && cart.items.length) || 0})</span>
		</Link>
	);
};
