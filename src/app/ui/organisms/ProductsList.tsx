import { ProductListItem } from "../molecules/ProductListItem";
import type { ProductListItemFragment } from "../../../gql/graphql";

export const ProductsList = ({ products }: { products: ProductListItemFragment[] }) => {
	return (
		<section>
			<ul
				data-testid="products-list"
				className="m-auto my-8 grid gap-8  sm:grid-cols-2 md:max-w-4xl md:grid-cols-3 lg:max-w-7xl lg:grid-cols-4"
			>
				{products.map((product) => {
					return (
						<li key={product.id} className="overflow-hidden rounded-md border border-slate-300">
							<ProductListItem product={product} />
						</li>
					);
				})}
			</ul>
		</section>
	);
};
