import { type Route } from "next";
import { getProductsList } from "../../../api/products";
import { ProductsList } from "@ui/organisms/ProductsList";
import { Pagination } from "@/ui/molecules/Pagination";
import { createPaginationLinks, createPagesParams } from "@/utils/utils";

export const generateStaticParams = async () => {
	const products = await getProductsList();
	return createPagesParams(products);
};
const allProducts = await getProductsList();

const links = await createPaginationLinks(allProducts, "/products/" as Route);

export default async function ProductsPage({ params: { page } }: { params: { page: string } }) {
	const products = await getProductsList(Number(page));

	return (
		<section className="mx-auto max-w-md  sm:max-w-2xl sm:py-1 xl:max-w-6xl">
			<Pagination pages={links} />
			<ProductsList products={products} />
		</section>
	);
}
