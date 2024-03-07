import { getCollectionsCardsData } from "./api/collections";
import { CollectionsList } from "./ui/molecules/CollectionsList";

const collectionList = await getCollectionsCardsData();

export default function Home() {
	return (
		<main>
			<CollectionsList collectionsList={collectionList} />
		</main>
	);
}
