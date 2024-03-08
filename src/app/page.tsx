import { Suspense } from "react";
import { getCollectionsCardsData } from "./api/collections";
import { CollectionsList } from "./ui/molecules/CollectionsList";
import { getProductsList } from "./api/products";
import { ProductsList } from "./ui/organisms/ProductsList";

const collectionList = await getCollectionsCardsData();
const products = await getProductsList();
export default function Home() {
	return (
		<main>
			<section className="my-5">
				<CollectionsList collectionsList={collectionList} />
			</section>

			<aside>
				<h2 className="mb-4 text-4xl">Products you might like:</h2>
				<Suspense>
					<ProductsList products={products} />
				</Suspense>
			</aside>
		</main>
	);
}
