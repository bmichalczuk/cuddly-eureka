import Image from "next/image";

export const ProductCoverImage = ({ alt, src }: { alt: string; src: string }) => {
	return (
		<div className="m-auto aspect-square max-w-md overflow-hidden  rounded-md border bg-slate-50 transition-transform lg:max-w-2xl  ">
			<Image
				width={800}
				height={800}
				className="h-full w-full object-cover object-center lg:p-4"
				src={src}
				alt={alt}
			/>
		</div>
	);
};
