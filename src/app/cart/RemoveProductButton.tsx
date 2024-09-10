"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { type CartFragment, type ProductFragment } from "../../gql/graphql";
import { removeProductFromCart } from "./actions";

export function RemoveButton({
	productId,
	cartId,
}: {
	productId: ProductFragment["id"];
	cartId: CartFragment["id"];
}) {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();

	return (
		<button
			disabled={isPending}
			title="Remove item from cart"
			onClick={() =>
				startTransition(async () => {
					await removeProductFromCart(cartId, productId);
					router.refresh();
				})
			}
			className="hover:red-indigo-500 text-sm font-medium text-red-600 disabled:cursor-wait disabled:text-slate-400"
		>
			Remove
		</button>
	);
}
