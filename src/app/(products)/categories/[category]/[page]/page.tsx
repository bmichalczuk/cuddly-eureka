import { ProductsList } from "@ui/organisms/ProductsList";
import { getProductsListByCategoryName } from "@/api/products";
import { ProductsCategories } from "@/types";
import { Pagination } from "@/ui/molecules/Pagination";
import { createPaginationLinks } from "@/utils";

export const generateStaticParams = async ({ params }: { params: { category: string } }) => {
	const products = await getProductsListByCategoryName(params.category);

	return [{ page: "1" }, { page: "2" }, { page: "3" }];
};

export default async function ProductsPage({
	params: { category },
}: {
	params: { page: string; category: string };
}) {
	const products = await getProductsListByCategoryName(category);

	return <ProductsList products={products} />;
}
