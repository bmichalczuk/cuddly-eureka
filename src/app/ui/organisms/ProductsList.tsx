import { ProductListItem } from "../molecules/ProductListItem";
import type { ProductType } from "../../types";

export const ProductsList = ({ products }: { products: ProductType[] }) => {
	return (
		<>
			{products.map((product) => {
				return (
					<li key={product.id}>
						<ProductListItem product={product} />
					</li>
				);
			})}
		</>
	);
};
