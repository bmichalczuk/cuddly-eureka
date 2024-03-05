import { searchProducts } from "@/api/products";
import { ProductsList } from "@/ui/organisms/ProductsList";

export default async function SearchProduct({
	searchParams,
}: {
	searchParams: { search: string };
}) {
	if (!searchParams.search) {
		return <p className="text-center text-2xl font-bold">No products found</p>;
	} else if (searchParams.search.length < 2) {
		return (
			<p className="text-center text-2xl font-bold">Word must contain at least 2 characters</p>
		);
	}

	const products = await searchProducts(searchParams.search);

	return (
		<>
			<h2 className="my-5 text-center text-2xl font-bold">Search Product: {searchParams.search}</h2>
			{products.length > 0 ? <ProductsList products={products} /> : <p>No products found</p>}
		</>
	);
}
