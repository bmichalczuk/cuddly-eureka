import { ProductsList } from "@ui/organisms/ProductsList";
import { getProductsList } from "@/api/products";

export const generateStaticParams = () => {
	return [{ page: "1" }, { page: "2" }, { page: "3" }, { page: "4" }, { page: "5" }];
};

export default async function ProductsPage({ params: { page } }: { params: { page: string } }) {
	const products = await getProductsList(page);

	return (
		<section className="mx-auto max-w-md  sm:max-w-2xl sm:py-1 xl:max-w-6xl">
			<ProductsList products={products} />
		</section>
	);
}
