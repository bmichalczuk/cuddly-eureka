import { ProductsList } from "@ui/organisms/ProductsList";
import { getProductsListByCategoryId } from "@/api/products";
import { ProductsCategories } from "@/types";

export const generateStaticParams = () => {
	return [
		{ category: "all" },
		{ category: "t-shirts" },
		{ category: "accesories" },
		{ category: "hoodies" },
	];
};

export default async function ProductsPage({
	params: { category },
}: {
	params: { page: string; category: ProductsCategories };
}) {
	const products = await getProductsListByCategoryId(Number(ProductsCategories[category]));

	return (
		<section className="mx-auto max-w-md  sm:max-w-2xl sm:py-1 xl:max-w-6xl">
			<ProductsList products={products} />
		</section>
	);
}
