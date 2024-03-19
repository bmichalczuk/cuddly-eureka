"use client";
import { useOptimistic } from "react";
import { changeProductQuantity } from "./actions";

export const IncrementProductQuantity = ({
	productId,
	cartId,
	quantity,
}: {
	productId: string;
	cartId: string;
	quantity: number;
}) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(quantity);

	return (
		<form>
			<button
				type="submit"
				className="ml-2 h-8 w-8 border bg-slate-50"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await changeProductQuantity(cartId, productId, optimisticQuantity + 1);
				}}
			>
				+
			</button>
		</form>
	);
};
