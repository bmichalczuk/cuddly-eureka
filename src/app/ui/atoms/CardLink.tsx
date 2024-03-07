import Link from "next/link";
import Image from "next/image";
import type { CollectionCardFragment } from "../../../gql/graphql";

export const CardLink = ({ collection }: { collection: CollectionCardFragment }) => {
	const images = collection.products
		.map((product) => {
			return product.images;
		})
		.flat();

	return (
		<Link
			href={`/collections/${collection.slug}`}
			title={`Go to ${collection.name} collection`}
			className="lg-max-w-md flex h-full flex-col rounded-md border border-slate-300 bg-gray-50 p-5 text-slate-700 transition-transform hover:border-slate-500 hover:bg-white focus:bg-white md:max-w-sm"
		>
			<h2 className="mb-5 text-center font-bold">{collection.name}</h2>
			<ul className="grid grid-cols-2">
				{images.map((image) => {
					return (
						<li key={image.id} className="overflow-hidden border-0">
							<Image src={image.url} alt={image.alt} width={100} height={100} />
						</li>
					);
				})}
			</ul>
		</Link>
	);
};
