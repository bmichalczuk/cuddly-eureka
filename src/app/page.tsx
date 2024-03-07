import { getCollectionsCardsData } from "./api/collections";
import { CollectionsList } from "./ui/molecules/CollectionsList";

const collectionList = await getCollectionsCardsData();

export default function Home() {
	return (
		<main>
			<h1>Welcome To CuddlyShop</h1>
			<CollectionsList collectionsList={collectionList} />
		</main>
	);
}
