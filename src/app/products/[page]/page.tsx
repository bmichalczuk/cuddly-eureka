import { type Route } from "next";
import { getProductsList } from "../../../api/products";
import { type ProductSortBy, type SortDirection } from "../../../gql/graphql";
import { ProductsList } from "@ui/organisms/ProductsList";
import { Pagination } from "@/ui/molecules/Pagination";
import { createPaginationLinks, createPagesParams } from "@/utils/utils";
import { SortProducts } from "@/ui/molecules/SortProducts";
export const generateStaticParams = async () => {
	const products = await getProductsList();
	return createPagesParams(products);
};
const allProducts = await getProductsList();

export default async function ProductsPage({
	params: { page },
	searchParams,
}: {
	params: { page: string };
	searchParams: { sort: ProductSortBy; order: SortDirection };
}) {
	const links =
		searchParams.order && searchParams.sort
			? (await createPaginationLinks(allProducts, "/products/" as Route)).map(
					(link) => `${link}?sort=${searchParams.sort}&order=${searchParams.order}` as Route,
				)
			: await createPaginationLinks(allProducts, "/products/" as Route);
	const products =
		searchParams.order && searchParams.sort
			? await getProductsList(Number(page), searchParams.sort, searchParams.order || "")
			: await getProductsList(Number(page));

	return (
		<section className="mx-auto max-w-md  sm:max-w-2xl sm:py-1 xl:max-w-6xl">
			<SortProducts />
			<Pagination pages={links} />
			<ProductsList products={products} />
		</section>
	);
}
