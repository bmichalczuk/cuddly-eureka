"use client";
import { useFormStatus } from "react-dom";

export const AddProductToCartButton = () => {
	const formStatus = useFormStatus();
	formStatus.pending;

	return (
		<button
			type="submit"
			className="w-full rounded-md border bg-slate-700 px-8 py-3 text-white disabled:cursor-wait disabled:bg-slate-300"
			disabled={formStatus.pending}
		>
			Add to cart
		</button>
	);
};
