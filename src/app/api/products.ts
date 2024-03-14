import {
	ProductsGetListDocument,
	ProductsGetListByCategoryIdDocument,
	ProductGetByIdDocument,
	type ProductListItemFragment,
	CategoriesGetListDocument,
	type CategoriesFragmentFragment,
	ProductsSearchDocument,
} from "../../gql/graphql";
import { executeGraohql } from "@/utils/utils";

export const getProductsList = async (page?: number) => {
	const gqlVariables = page ? { take: 4, skip: (page - 1) * 4 } : {};

	const graphqlResponse = await executeGraohql(ProductsGetListDocument, gqlVariables);
	if (!graphqlResponse.products.data) {
		throw new TypeError("GraphQL error: no data");
	}
	return graphqlResponse.products.data;
};

export const getProductsListByCategoryName = async (
	name: CategoriesFragmentFragment["data"][0]["name"],
) => {
	const graphqlResponse = await executeGraohql(ProductsGetListByCategoryIdDocument, {
		slug: name,
	});
	if (!graphqlResponse.category) {
		throw new TypeError("GraphQL error: no such category");
	}
	return graphqlResponse.category.products;
};

export const getProductById = async (id: ProductListItemFragment["id"]) => {
	const data = await executeGraohql(ProductGetByIdDocument, { id });

	if (!data.product) {
		throw new TypeError("GraphQL error: no such products");
	}
	return data.product;
};

export const getCategoriesList = async () => {
	const data = await executeGraohql(CategoriesGetListDocument, {});
	if (!data.categories.data) {
		throw new TypeError("GraphQL error: no such products");
	}
	return data.categories.data;
};

export const searchProducts = async (search: string) => {
	const res = await executeGraohql(ProductsSearchDocument, { search: search });
	if (!res.products) {
		throw new TypeError("GraphQL error: no such products");
	}
	return res.products.data;
};
