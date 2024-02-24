import { ProductsList } from "@ui/organisms/ProductsList";
import { getProductsListByCategoryId, getProductsList } from "@/api/products";
import { ProductsCategories, type ProductType } from "@/types";
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
	let products: ProductType[];
	if (category === ProductsCategories.all) {
		products = await getProductsList();
	} else {
		products = await getProductsListByCategoryId(Number(ProductsCategories[category]));
	}

	return (
		<section className="mx-auto max-w-md  sm:max-w-2xl sm:py-1 xl:max-w-6xl">
			<ProductsList products={products} />
		</section>
	);
}
