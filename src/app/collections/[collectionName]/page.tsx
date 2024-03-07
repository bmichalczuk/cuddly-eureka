import { Suspense } from "react";
import Link from "next/link";
import { type Metadata } from "next";
import { getCollectionData, getCollectionsList } from "@/api/collections";
import { ProductsList } from "@/ui/organisms/ProductsList";

export const generateStaticParams = async () => {
	const res = await getCollectionsList();
	return res.map((collection) => {
		return {
			collectionName: collection.slug,
		};
	});
};

export async function generateMetadata({
	params: { collectionName },
}: {
	params: { collectionName: string };
}): Promise<Metadata> {
	const collections = await getCollectionsList();
	const collection = collections.find((collection) => collection.slug === collectionName);
	return {
		title: collection?.name,
		description: collection?.description,
	};
}

const collections = await getCollectionsList();

export default async function CollectionPage({ params }: { params: { collectionName: string } }) {
	const collection = await getCollectionData(params.collectionName);
	return (
		<section className="m-auto max-w-7xl border  p-5 text-slate-700">
			<h2 className="mb-5 text-center font-serif text-3xl font-bold">{collection.name}</h2>
			<p className="text-xl">{collection.description}</p>

			<ProductsList products={collection.products} />

			<Suspense>
				<aside className="text-center">
					<h2>Other collections You might like:</h2>
					<ul className="flex flex-row justify-center">
						{collections
							.filter((collection) => collection.slug !== params.collectionName)
							.map((collection) => {
								return (
									<li className="mx-4 my-1" key={collection.slug}>
										<Link
											className="hover:text-red-400 hover:underline"
											href={`/collections/${collection.slug}`}
										>
											{collection.name}
										</Link>
									</li>
								);
							})}
					</ul>
				</aside>
			</Suspense>
		</section>
	);
}
