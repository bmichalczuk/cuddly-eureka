/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query ProductGetById($id: ID) {\n  product(id: $id) {\n    id\n    images {\n      url\n      alt\n    }\n    name\n    price\n    rating\n    description\n    categories {\n      name\n    }\n  }\n}": types.ProductGetByIdDocument,
    "query ProductsGetList {\n  products {\n    data {\n      id\n      images {\n        url\n        alt\n      }\n      name\n      price\n      rating\n      description\n      categories {\n        name\n      }\n    }\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetListByCategoryId($id: ID) {\n  category(id: $id) {\n    products {\n      id\n      images {\n        url\n        alt\n      }\n      name\n      price\n      rating\n      description\n      categories {\n        name\n      }\n    }\n  }\n}": types.ProductsGetListByCategoryIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID) {\n  product(id: $id) {\n    id\n    images {\n      url\n      alt\n    }\n    name\n    price\n    rating\n    description\n    categories {\n      name\n    }\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList {\n  products {\n    data {\n      id\n      images {\n        url\n        alt\n      }\n      name\n      price\n      rating\n      description\n      categories {\n        name\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListByCategoryId($id: ID) {\n  category(id: $id) {\n    products {\n      id\n      images {\n        url\n        alt\n      }\n      name\n      price\n      rating\n      description\n      categories {\n        name\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListByCategoryIdDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
