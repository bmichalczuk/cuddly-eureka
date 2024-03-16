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
    "mutation CartAddProduct($id: ID!, $productId: String!, $quantity: Int) {\n  cartAddItem(\n    id: $id\n    input: {item: {productId: $productId, quantity: $quantity}}\n  ) {\n    id\n    items {\n      product {\n        ...Product\n      }\n      quantity\n    }\n  }\n}": types.CartAddProductDocument,
    "mutation CartCreate($id: ID) {\n  cartFindOrCreate(input: {}, id: $id) {\n    ...Cart\n  }\n}": types.CartCreateDocument,
    "fragment Cart on Cart {\n  id\n  items {\n    product {\n      id\n      name\n      price\n      description\n      rating\n      images {\n        url\n      }\n    }\n    quantity\n  }\n}": types.CartFragmentDoc,
    "query CartGetById($id: ID!) {\n  cart(id: $id) {\n    ...Cart\n  }\n}": types.CartGetByIdDocument,
    "mutation CartSetProductQuantity($cartId: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(id: $cartId, productId: $productId, quantity: $quantity) {\n    id\n  }\n}": types.CartSetProductQuantityDocument,
    "fragment CategoriesFragment on CategoryList {\n  data {\n    name\n    id\n  }\n}": types.CategoriesFragmentFragmentDoc,
    "query CategoriesGetList {\n  categories {\n    ...CategoriesFragment\n  }\n}": types.CategoriesGetListDocument,
    "fragment CollectionCard on Collection {\n  name\n  id\n  slug\n  products {\n    images {\n      id\n      height\n      alt\n      url\n      width\n    }\n  }\n}": types.CollectionCardFragmentDoc,
    "fragment CollectionData on CollectionList {\n  data {\n    name\n    description\n    slug\n  }\n}": types.CollectionDataFragmentDoc,
    "fragment Collection on Collection {\n  name\n  description\n  slug\n  products {\n    id\n    name\n    images {\n      alt\n      url\n    }\n    categories {\n      name\n    }\n    price\n  }\n}": types.CollectionFragmentDoc,
    "query CollectionGetData($slug: String) {\n  collection(slug: $slug) {\n    ...Collection\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.CollectionGetDataDocument,
    "query CollectionsCardsGetData {\n  collections(take: 10) {\n    data {\n      ...CollectionCard\n    }\n  }\n}": types.CollectionsCardsGetDataDocument,
    "query CollectionsGetList {\n  collections(take: 10) {\n    ...CollectionData\n  }\n}": types.CollectionsGetListDocument,
    "fragment Product on Product {\n  id\n  images {\n    url\n    alt\n  }\n  name\n  price\n  rating\n  description\n  categories {\n    name\n  }\n}": types.ProductFragmentDoc,
    "query ProductGetById($id: ID) {\n  product(id: $id) {\n    ...Product\n  }\n}": types.ProductGetByIdDocument,
    "fragment ProductListItem on Product {\n  id\n  name\n  images {\n    alt\n    url\n  }\n  categories {\n    name\n  }\n  price\n}": types.ProductListItemFragmentDoc,
    "fragment ProductsSearch on Product {\n  ...ProductListItem\n}": types.ProductsSearchFragmentDoc,
    "query ProductsGetList($take: Int, $skip: Int) {\n  products(take: $take, skip: $skip) {\n    data {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetListByCategoryId($slug: String) {\n  category(slug: $slug) {\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetListByCategoryIdDocument,
    "query ProductsSearch($search: String) {\n  products(search: $search) {\n    data {\n      ...ProductsSearch\n    }\n  }\n}": types.ProductsSearchDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddProduct($id: ID!, $productId: String!, $quantity: Int) {\n  cartAddItem(\n    id: $id\n    input: {item: {productId: $productId, quantity: $quantity}}\n  ) {\n    id\n    items {\n      product {\n        ...Product\n      }\n      quantity\n    }\n  }\n}"): typeof import('./graphql').CartAddProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate($id: ID) {\n  cartFindOrCreate(input: {}, id: $id) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Cart on Cart {\n  id\n  items {\n    product {\n      id\n      name\n      price\n      description\n      rating\n      images {\n        url\n      }\n    }\n    quantity\n  }\n}"): typeof import('./graphql').CartFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  cart(id: $id) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartSetProductQuantity($cartId: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(id: $cartId, productId: $productId, quantity: $quantity) {\n    id\n  }\n}"): typeof import('./graphql').CartSetProductQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CategoriesFragment on CategoryList {\n  data {\n    name\n    id\n  }\n}"): typeof import('./graphql').CategoriesFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetList {\n  categories {\n    ...CategoriesFragment\n  }\n}"): typeof import('./graphql').CategoriesGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CollectionCard on Collection {\n  name\n  id\n  slug\n  products {\n    images {\n      id\n      height\n      alt\n      url\n      width\n    }\n  }\n}"): typeof import('./graphql').CollectionCardFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CollectionData on CollectionList {\n  data {\n    name\n    description\n    slug\n  }\n}"): typeof import('./graphql').CollectionDataFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Collection on Collection {\n  name\n  description\n  slug\n  products {\n    id\n    name\n    images {\n      alt\n      url\n    }\n    categories {\n      name\n    }\n    price\n  }\n}"): typeof import('./graphql').CollectionFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionGetData($slug: String) {\n  collection(slug: $slug) {\n    ...Collection\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').CollectionGetDataDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsCardsGetData {\n  collections(take: 10) {\n    data {\n      ...CollectionCard\n    }\n  }\n}"): typeof import('./graphql').CollectionsCardsGetDataDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList {\n  collections(take: 10) {\n    ...CollectionData\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Product on Product {\n  id\n  images {\n    url\n    alt\n  }\n  name\n  price\n  rating\n  description\n  categories {\n    name\n  }\n}"): typeof import('./graphql').ProductFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID) {\n  product(id: $id) {\n    ...Product\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  images {\n    alt\n    url\n  }\n  categories {\n    name\n  }\n  price\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductsSearch on Product {\n  ...ProductListItem\n}"): typeof import('./graphql').ProductsSearchFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($take: Int, $skip: Int) {\n  products(take: $take, skip: $skip) {\n    data {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListByCategoryId($slug: String) {\n  category(slug: $slug) {\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListByCategoryIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsSearch($search: String) {\n  products(search: $search) {\n    data {\n      ...ProductsSearch\n    }\n  }\n}"): typeof import('./graphql').ProductsSearchDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
