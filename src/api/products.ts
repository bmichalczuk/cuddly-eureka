import {
	ProductsGetListDocument,
	ProductsGetListByCategoryIdDocument,
	ProductGetByIdDocument,
	type ProductListItemFragment,
	CategoriesGetListDocument,
	type CategoriesFragmentFragment,
	ProductsSearchDocument,
	type ProductSortBy,
	type SortDirection,
} from "../gql/graphql";
import { executeGraphql } from "@/utils/utils";

export const getProductsList = async (
	page?: number,
	orderBy?: ProductSortBy,
	order?: SortDirection,
) => {
	const take = page && 4;
	const skip = page && page - 1;

	const graphqlResponse = await executeGraphql({
		query: ProductsGetListDocument,
		variables: {
			take,
			skip,
			orderBy,
			order,
		},
	});
	if (!graphqlResponse.products.data) {
		throw new TypeError("GraphQL error: no data");
	}
	return graphqlResponse.products.data;
};

export const getProductsListByCategoryName = async (
	name: CategoriesFragmentFragment["data"][0]["name"],
) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetListByCategoryIdDocument,
		variables: {
			slug: name,
		},
	});
	if (!graphqlResponse.category) {
		throw new TypeError("GraphQL error: no such category");
	}
	return graphqlResponse.category.products;
};

export const getProductById = async (id: ProductListItemFragment["id"]) => {
	const data = await executeGraphql({ query: ProductGetByIdDocument, variables: { id } });

	if (!data.product) {
		throw new TypeError("GraphQL error: no such products");
	}
	return data.product;
};

export const getCategoriesList = async () => {
	const data = await executeGraphql({ query: CategoriesGetListDocument, variables: {} });

	if (!data.categories.data) {
		throw new TypeError("GraphQL error: no such products");
	}
	return data.categories.data;
};

export const searchProducts = async (search: string) => {
	const res = await executeGraphql({
		query: ProductsSearchDocument,
		variables: { search: search },
	});

	if (!res.products) {
		throw new TypeError("GraphQL error: no such products");
	}
	return res.products.data;
};
