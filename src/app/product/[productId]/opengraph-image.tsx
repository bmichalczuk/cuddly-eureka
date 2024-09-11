import { ImageResponse } from "next/og";
import { getProductById } from "../../../api/products";

export const runtime = "edge";

export const contentType = "image/png";
export const size = {
	width: 1200,
	height: 600,
};

export default async function OpenGraphImage({ params }: { params: { productId: string } }) {
	const { images, name, categories, description } = await getProductById(params.productId);

	return new ImageResponse(
		(
			<div className="" tw="w-full h-full flex flex-col items-center justify-center">
				<img
					src={images[0]?.url ?? ""}
					alt={images[0]?.alt ?? ""}
					style={{
						maxHeight: "40%",
					}}
				/>
				<p>{name}</p>
				<p>{categories[0]?.name}</p>
				<p>{description}</p>
			</div>
		),
	);
}
