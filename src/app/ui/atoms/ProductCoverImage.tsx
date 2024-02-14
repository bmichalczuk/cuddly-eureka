import Image from "next/image";

export const ProductCoverImage = ({ alt, src }: { alt: string; src: string }) => {
	return (
		<div className="aspect-square h-full min-w-20 overflow-hidden rounded-md border bg-slate-50 transition-transform  ">
			<Image
				width={320}
				height={500}
				className="h-full w-full object-cover object-center p-4"
				src={src}
				alt={alt}
			/>
		</div>
	);
};
