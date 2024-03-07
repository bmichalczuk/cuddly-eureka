import { type CollectionCardFragment } from "../../../gql/graphql";
import { CardLink } from "../atoms/CardLink";

export const CollectionsList = ({
	collectionsList,
}: {
	collectionsList: CollectionCardFragment[];
}) => {
	return (
		<section>
			<h2 className="mb-4 text-4xl">Check our hottest collections:</h2>
			<ul className="row-span-full  grid   md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
				{collectionsList.map((collection) => {
					return (
						<li key={collection.slug} className="mx-4 auto-rows-fr overflow-hidden">
							<CardLink collection={collection} />
						</li>
					);
				})}
			</ul>
		</section>
	);
};
