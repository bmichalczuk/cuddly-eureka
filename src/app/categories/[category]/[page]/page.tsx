import { ProductsList } from "@ui/organisms/ProductsList";
import { getProductsListByCategoryName } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";
import { createPaginationLinks, createPagesParams, itemsPerPage } from "@/utils";

export const generateStaticParams = async ({ params }: { params: { category: string } }) => {
	const products = await getProductsListByCategoryName(params.category);
	return createPagesParams(products);
};

export default async function ProductsPage({
	params: { page, category },
}: {
	params: { page: string; category: string };
}) {
	const res = await getProductsListByCategoryName(category);
	const products = res.slice((Number(page) - 1) * itemsPerPage, Number(page) * itemsPerPage);
	const paginationPagesLinks = await createPaginationLinks(
		res,
		`/categories/${category}/` as Route,
	);

	return (
		<>
			<Pagination pages={paginationPagesLinks} />
			<ProductsList products={products} />
		</>
	);
}
