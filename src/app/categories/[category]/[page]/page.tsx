import { type Route } from "next";
import { ProductsList } from "@ui/organisms/ProductsList";
import { getProductsListByCategoryName } from "../../../../../api/products";
import { Pagination } from "@/ui/molecules/Pagination";
import { createPaginationLinks, createPagesParams, itemsPerPage } from "@/utils/utils";

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
			<h2 className="mb-8 text-center text-4xl text-slate-700">
				{products[0]?.categories[0]?.name}
			</h2>
			<Pagination pages={paginationPagesLinks} />
			<ProductsList products={products} />
		</>
	);
}
