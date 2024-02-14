import { ProductDescription } from "@ui/atoms/ProductDescription";
import { getProductById } from "@/api/products";
import { ProductCoverImage } from "@ui/atoms/ProductCoverImage";
export default async function ProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);
	return (
		<article className="lg:max-w-8xl mt-auto grid grid-cols-1 md:grid-cols-2  lg:m-12">
			<ProductCoverImage {...product.coverImage} />
			<ProductDescription {...product} />
		</article>
	);
}
