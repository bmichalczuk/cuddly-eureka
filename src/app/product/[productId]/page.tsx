import { Suspense } from "react";
import type { Metadata } from "next";
import { getProductById } from "../../../api/products";
import { getProductReviews } from "../../../api/product";
import { Product } from "@/ui/molecules/Product";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProductList";
import { Reviews } from "@/ui/organisms/ProductReviews";
export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const product = await getProductById(params.productId);
	return {
		title: product.name,
		description: product.description,
	};
}

export default async function ProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);

	const reviews = await getProductReviews(params.productId);
	return (
		<section aria-busy={product ? false : true}>
			<Product product={product} />

			<aside>
				<Suspense>
					<SuggestedProductsList />
				</Suspense>
				<Reviews reviews={reviews} productId={product.id} />
			</aside>
		</section>
	);
}
