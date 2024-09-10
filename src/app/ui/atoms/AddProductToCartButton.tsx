"use client";
import { useFormStatus } from "react-dom";
import { Button } from "./Button";

export const AddProductToCartButton = () => {
	const formStatus = useFormStatus();
	formStatus.pending;

	return (
		<Button type="submit" disabled={formStatus.pending} className="ml-auto block">
			Add to cart
		</Button>
	);
};
