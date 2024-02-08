import { ProductListItem } from "../molecules/ProductListItem";
import type { ProductType } from "../types";

export const ProductsList = ({ products }: { products: ProductType[] }) => {
	return (
		<section className="mx-auto max-w-md  sm:max-w-2xl sm:py-1 xl:max-w-6xl">
			<ul
				data-testid="products-list"
				className="grid grid-cols-1 gap-8 sm:grid sm:grid-cols-2 2xl:grid 2xl:grid-cols-4"
			>
				{products.map((product) => {
					return (
						<li key={product.id}>
							<ProductListItem product={product} />
						</li>
					);
				})}
			</ul>
		</section>
	);
};
