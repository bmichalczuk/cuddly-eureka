import { Suspense } from "react";
import type { Metadata } from "next";
import { ProductDescription } from "@ui/atoms/ProductDescription";
import { getProductById, getProductsList } from "@/api/products";
import { ProductCoverImage } from "@ui/atoms/ProductCoverImage";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProductList";

export const generateStaticParams = async () => {
	const products = await getProductsList();
	return products
		.map((product) => {
			return { productId: product.id };
		})
		.slice(0, 2);
};

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const product = await getProductById(params.productId);

	return {
		title: product.name,
	};
}

export default async function ProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);
	return (
		<>
			<article className="lg:max-w-8xl mt-auto grid grid-cols-1 md:grid-cols-2  lg:m-12">
				<ProductCoverImage {...product.coverImage} />
				<ProductDescription {...product} />
			</article>
			<aside>
				<Suspense>
					<SuggestedProductsList />
				</Suspense>
			</aside>
		</>
	);
}
