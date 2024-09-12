"use client";
import { useOptimistic } from "react";
import { changeProductQuantity } from "../../actions/cart";

export const ProductQuantity = ({
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
		<form className="flex flex-row items-center justify-between">
			<button
				type="submit"
				className="h-8 w-8 border bg-slate-50"
				data-testid="decrement"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity - 1);
					await changeProductQuantity(cartId, productId, optimisticQuantity - 1);
				}}
			>
				-
			</button>
			<span className=" m-3 inline-block w-10   text-center" data-testid="quantity">
				{optimisticQuantity}
			</span>
			<button
				type="submit"
				className="h-8 w-8 border bg-slate-50"
				data-testid="increment"
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
