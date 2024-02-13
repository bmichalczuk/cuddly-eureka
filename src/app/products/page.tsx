import { ProductsList } from "../ui/organisms/ProductsList";
import { getProductsList } from "../api/products";

export default async function ProductsPage() {
	const products = await getProductsList();
	return (
		<div>
			<h1>Products</h1>
			<ProductsList products={products} />
		</div>
	);
}
