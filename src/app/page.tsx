import { Suspense } from "react";
import { getCollectionsCardsData } from "../api/collections";
import { CollectionsList } from "./ui/molecules/CollectionsList";

import { SuggestedProductsList } from "./ui/organisms/SuggestedProductList";

const collectionList = await getCollectionsCardsData();
export default function Home() {
	return (
		<main>
			<section className="my-5">
				<CollectionsList collectionsList={collectionList} />
			</section>

			<aside>
				<h2 className="mb-4 text-4xl">Products you might like:</h2>
				<Suspense>
					<SuggestedProductsList />
				</Suspense>
			</aside>
		</main>
	);
}
