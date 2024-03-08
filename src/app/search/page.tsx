import { searchProducts } from "@/api/products";
import { ProductsList } from "@/ui/organisms/ProductsList";

export default async function SearchProduct({ searchParams }: { searchParams: { query: string } }) {
	if (!searchParams.query) {
		return <p className="text-center text-2xl font-bold">No products found</p>;
	} else if (searchParams.query.length < 2) {
		return (
			<p className="text-center text-2xl font-bold">Word must contain at least 2 characters</p>
		);
	}

	const products = await searchProducts(searchParams.query);

	return (
		<>
			<h2 className="my-5 text-center text-2xl font-bold">Search Product: {searchParams.query}</h2>
			{products.length > 0 ? <ProductsList products={products} /> : <p>No products found</p>}
		</>
	);
}
