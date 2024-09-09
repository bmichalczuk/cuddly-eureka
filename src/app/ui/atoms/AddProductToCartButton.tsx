"use client";
import { useFormStatus } from "react-dom";
import { Button } from "./Button";

export const AddProductToCartButton = () => {
	const formStatus = useFormStatus();
	formStatus.pending;

	return (
		<Button type="submit" disabled={formStatus.pending}>
			Add to cart
		</Button>
	);
};
