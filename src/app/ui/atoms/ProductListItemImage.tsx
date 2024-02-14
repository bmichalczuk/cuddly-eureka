import Image from "next/image";

export const ProductListItemImage = ({ alt, src }: { alt: string; src: string }) => {
	return (
		<div className="aspect-auto h-72 overflow-hidden rounded-md border ">
			<Image
				width={320}
				height={320}
				className="h-full w-full object-contain object-center p-4 transition-transform hover:scale-105 focus:scale-105"
				src={src}
				alt={alt}
			/>
		</div>
	);
};
