import { ProductsList } from "./ProductsList";
import { getProductsList } from "@/api/products";

export const SuggestedProductsList = async () => {
	const products = await getProductsList();

	return (
		<div data-testid="related-products" className="hidden md:block">
			<ProductsList products={products.slice(-4)} />
		</div>
	);
};
