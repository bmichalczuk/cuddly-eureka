import { ProductsList } from "./ProductsList";
import { getProductsList } from "@/api/products";

export const SuggestedProductsList = async () => {
	const products = await getProductsList();
	return <ProductsList products={products.slice(-4)} />;
};
