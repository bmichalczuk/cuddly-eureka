import { getProductsList } from "../../../api/products";
import { ProductsList } from "./ProductsList";

export const SuggestedProductsList = async () => {
	const products = await getProductsList();

	return (
		<div data-testid="related-products" className="hidden md:block">
			<ProductsList products={products.slice(-4)} />
		</div>
	);
};
