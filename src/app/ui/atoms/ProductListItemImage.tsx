import Image from "next/image";

export const ProductListItemImage = ({ alt, src }: { alt: string; src: string }) => {
	return (
		<div className=" aspect-square overflow-hidden rounded-md border bg-slate-50 transition-transform hover:scale-105 hover:bg-slate-100">
			<Image
				width={320}
				height={320}
				className="hover-scale-105 h-full w-full object-cover object-center p-4 transition-transform"
				src={src}
				alt={alt}
			/>
		</div>
	);
};
