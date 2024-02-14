import { ProductsList } from "../ui/organisms/ProductsList";
import { getProductsList } from "../api/products";

export default async function ProductsPage() {
	const products = await getProductsList();
	return (
		<section className="mx-auto max-w-md  sm:max-w-2xl sm:py-1 xl:max-w-6xl">
			<ProductsList products={products} />
		</section>
	);
}
