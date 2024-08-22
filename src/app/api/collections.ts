import {
	type CollectionList,
	CollectionsGetListDocument,
	CollectionGetDataDocument,
	CollectionsCardsGetDataDocument,
} from "../../gql/graphql";
import { executeGraohql } from "@/utils/utils";

export const getCollectionsList = async () => {
	const graphqlResponse = await executeGraohql({
		query: CollectionsGetListDocument,
		variables: {},
	});
	if (!graphqlResponse.collections) {
		throw new TypeError("GraphQL error: no data");
	}
	return graphqlResponse.collections.data;
};

export const getCollectionData = async (collectionName: CollectionList["data"][0]["slug"]) => {
	const graphqlResponse = await executeGraohql({
		query: CollectionGetDataDocument,
		variables: {
			slug: collectionName,
		},
	});

	if (!graphqlResponse.collection) {
		throw new TypeError("GraphQL error: no products");
	}
	return graphqlResponse.collection;
};

export const getCollectionsCardsData = async () => {
	const graphqlResponse = await executeGraohql({
		query: CollectionsCardsGetDataDocument,
		variables: {},
	});
	if (!graphqlResponse.collections) {
		throw new TypeError("GraphQL error: no collections data");
	}
	return graphqlResponse.collections.data;
};
