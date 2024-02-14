import { ProductsList } from "../ui/organisms/ProductsList";
import { getProductsList } from "../api/products";

export default async function ProductsPage() {
	const products = await getProductsList();
	return (
		<section className="mx-auto max-w-md  sm:max-w-2xl sm:py-1 xl:max-w-6xl">
			<ul
				data-testid="products-list"
				className=" grid grid-cols-1 gap-8 sm:grid sm:grid-cols-2 2xl:grid 2xl:grid-cols-4"
			>
				<ProductsList products={products} />
			</ul>
		</section>
	);
}
