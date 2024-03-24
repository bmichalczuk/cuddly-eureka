import { ShoppingCart } from "lucide-react";
import { cookies } from "next/headers";
import Link from "next/link";
import { getCartById } from "../../../api/cart";
import { ActiveLink } from "./ActiveLink";

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
		<ActiveLink
			href="/cart"
			title="Go to cart"
			className="mx-5 flex flex-row items-center justify-center rounded-md p-5 align-middle text-lg font-bold  hover:bg-slate-600 focus:bg-slate-600"
			activeClassName="text-red-400"
			exact
		>
			<ShoppingCart />
			<span className="ml-1">({(cart && cart.items.length) || 0})</span>
		</ActiveLink>
	);
};
