/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: unknown; output: unknown; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: unknown; output: unknown; }
};

export type Cart = {
  id: Scalars['ID']['output'];
  items: Array<CartItem>;
};

export type CartItem = {
  product: Product;
  quantity: Scalars['Int']['output'];
};

export type CartItemInput = {
  productId: Scalars['String']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type Category = {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
};

export type CategoryList = {
  data: Array<Category>;
  meta: ListMeta;
};

export type Collection = {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
};

export type CollectionList = {
  data: Array<Collection>;
  meta: ListMeta;
};

export type ListMeta = {
  /** The total number of items matching the query */
  count: Scalars['Int']['output'];
  /** The total number of items in the database */
  total: Scalars['Int']['output'];
};

export type Mutation = {
  cartAddItem: Cart;
  cartChangeItemQuantity: Cart;
  cartComplete: Order;
  cartFindOrCreate: Cart;
  cartRemoveItem: Cart;
  reviewCreate: Cart;
};


export type MutationCartAddItemArgs = {
  id: Scalars['ID']['input'];
  input: MutationCartAddItemInput;
};


export type MutationCartChangeItemQuantityArgs = {
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};


export type MutationCartCompleteArgs = {
  cartId: Scalars['ID']['input'];
  userEmail: Scalars['String']['input'];
};


export type MutationCartFindOrCreateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input: MutationCartFindOrCreateInput;
};


export type MutationCartRemoveItemArgs = {
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
};


export type MutationReviewCreateArgs = {
  author: Scalars['String']['input'];
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  productId: Scalars['ID']['input'];
  rating: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type MutationCartAddItemInput = {
  item: CartItemInput;
};

export type MutationCartFindOrCreateInput = {
  items?: InputMaybe<Array<CartItemInput>>;
};

export type Order = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  lines: Scalars['JSON']['output'];
  status: OrderStatus;
  totalAmount: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderList = {
  data: Array<Order>;
  meta: ListMeta;
};

export type OrderSortBy =
  | 'DEFAULT'
  | 'STATUS'
  | 'TOTAL';

export type OrderStatus =
  | 'CANCELLED'
  | 'CREATED'
  | 'FULFILLED'
  | 'PAID';

export type Product = {
  categories: Array<Category>;
  collections: Array<Collection>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images: Array<ProductImage>;
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
  reviews: Array<Review>;
  slug: Scalars['String']['output'];
};

export type ProductImage = {
  alt: Scalars['String']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type ProductList = {
  data: Array<Product>;
  meta: ListMeta;
};

export type ProductSortBy =
  | 'DEFAULT'
  | 'NAME'
  | 'PRICE'
  | 'RATING';

export type Query = {
  cart?: Maybe<Cart>;
  categories: CategoryList;
  category?: Maybe<Category>;
  collection?: Maybe<Collection>;
  collections: CollectionList;
  order?: Maybe<Order>;
  orders: OrderList;
  product?: Maybe<Product>;
  products: ProductList;
};


export type QueryCartArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCategoriesArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionsArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrdersArgs = {
  email: Scalars['String']['input'];
  order?: SortDirection;
  orderBy?: OrderSortBy;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductsArgs = {
  order?: SortDirection;
  orderBy?: ProductSortBy;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};

export type Review = {
  author: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  product: Product;
  rating: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ReviewList = {
  data: Array<Review>;
  meta: ListMeta;
};

export type SortDirection =
  | 'ASC'
  | 'DESC';

export type CartAddProductMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  productId: Scalars['String']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CartAddProductMutation = { cartAddItem: { id: string, items: Array<{ quantity: number, product: { id: string, name: string, price: number, rating?: number | null, description: string, images: Array<{ url: string, alt: string }>, categories: Array<{ name: string }> } }> } };

export type CartCompleteMutationVariables = Exact<{
  cartId: Scalars['ID']['input'];
  userEmail: Scalars['String']['input'];
}>;


export type CartCompleteMutation = { cartComplete: { id: string, lines: unknown, status: OrderStatus, totalAmount: number, updatedAt: unknown, createdAt: unknown } };

export type CartCreateMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
}>;


export type CartCreateMutation = { cartFindOrCreate: { id: string, items: Array<{ quantity: number, product: { id: string, name: string, price: number, description: string, rating?: number | null, images: Array<{ url: string }> } }> } };

export type CartFragment = { id: string, items: Array<{ quantity: number, product: { id: string, name: string, price: number, description: string, rating?: number | null, images: Array<{ url: string }> } }> };

export type CartGetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CartGetByIdQuery = { cart?: { id: string, items: Array<{ quantity: number, product: { id: string, name: string, price: number, description: string, rating?: number | null, images: Array<{ url: string }> } }> } | null };

export type CartRemoveProductMutationVariables = Exact<{
  cartId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
}>;


export type CartRemoveProductMutation = { cartRemoveItem: { id: string } };

export type CartSetProductQuantityMutationVariables = Exact<{
  cartId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
}>;


export type CartSetProductQuantityMutation = { cartChangeItemQuantity: { id: string, items: Array<{ quantity: number }> } };

export type CategoriesFragmentFragment = { data: Array<{ name: string, id: string }> };

export type CategoriesGetListQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesGetListQuery = { categories: { data: Array<{ name: string, id: string }> } };

export type CollectionCardFragment = { name: string, id: string, slug: string, products: Array<{ images: Array<{ id: string, height: number, alt: string, url: string, width: number }> }> };

export type CollectionDataFragment = { data: Array<{ name: string, description: string, slug: string }> };

export type CollectionFragment = { name: string, description: string, slug: string, products: Array<{ id: string, name: string, price: number, images: Array<{ alt: string, url: string }>, categories: Array<{ name: string }> }> };

export type CollectionGetDataQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type CollectionGetDataQuery = { collection?: { name: string, description: string, slug: string, products: Array<{ id: string, name: string, price: number, rating?: number | null, images: Array<{ alt: string, url: string }>, categories: Array<{ name: string }> }> } | null };

export type CollectionsCardsGetDataQueryVariables = Exact<{ [key: string]: never; }>;


export type CollectionsCardsGetDataQuery = { collections: { data: Array<{ name: string, id: string, slug: string, products: Array<{ images: Array<{ id: string, height: number, alt: string, url: string, width: number }> }> }> } };

export type CollectionsGetListQueryVariables = Exact<{ [key: string]: never; }>;


export type CollectionsGetListQuery = { collections: { data: Array<{ name: string, description: string, slug: string }> } };

export type OrderFragment = { id: string, createdAt: unknown, totalAmount: number, lines: unknown, status: OrderStatus, updatedAt: unknown };

export type OrderGetByIdQueryVariables = Exact<{
  orderId: Scalars['ID']['input'];
}>;


export type OrderGetByIdQuery = { order?: { id: string, createdAt: unknown, totalAmount: number, lines: unknown, status: OrderStatus, updatedAt: unknown } | null };

export type OrdersGetByEmailQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type OrdersGetByEmailQuery = { orders: { data: Array<{ id: string, createdAt: unknown, totalAmount: number, lines: unknown, status: OrderStatus, updatedAt: unknown }> } };

export type ProductCreateReviewMutationVariables = Exact<{
  productId: Scalars['ID']['input'];
  author: Scalars['String']['input'];
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  rating: Scalars['Int']['input'];
  title: Scalars['String']['input'];
}>;


export type ProductCreateReviewMutation = { reviewCreate: { id: string } };

export type ProductFragment = { id: string, name: string, price: number, rating?: number | null, description: string, images: Array<{ url: string, alt: string }>, categories: Array<{ name: string }> };

export type ProductGetByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
}>;


export type ProductGetByIdQuery = { product?: { id: string, name: string, price: number, rating?: number | null, description: string, images: Array<{ url: string, alt: string }>, categories: Array<{ name: string }> } | null };

export type ProductGetImagesQueryVariables = Exact<{
  productId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type ProductGetImagesQuery = { product?: { images: Array<{ alt: string, height: number, id: string, url: string, width: number }> } | null };

export type ProductGetReviewsQueryVariables = Exact<{
  productId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type ProductGetReviewsQuery = { product?: { reviews: Array<{ author: string, description: string, email: string, rating: number, title: string }> } | null };

export type ProductListItemFragment = { id: string, name: string, rating?: number | null, price: number, images: Array<{ alt: string, url: string }>, categories: Array<{ name: string }> };

export type ProductsSearchFragment = { id: string, name: string, rating?: number | null, price: number, images: Array<{ alt: string, url: string }>, categories: Array<{ name: string }> };

export type ProductsGetListQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProductSortBy>;
  order?: InputMaybe<SortDirection>;
}>;


export type ProductsGetListQuery = { products: { data: Array<{ id: string, name: string, rating?: number | null, price: number, images: Array<{ alt: string, url: string }>, categories: Array<{ name: string }> }> } };

export type ProductsGetListByCategoryIdQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type ProductsGetListByCategoryIdQuery = { category?: { products: Array<{ id: string, name: string, rating?: number | null, price: number, images: Array<{ alt: string, url: string }>, categories: Array<{ name: string }> }> } | null };

export type ProductsSearchQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type ProductsSearchQuery = { products: { data: Array<{ id: string, name: string, rating?: number | null, price: number, images: Array<{ alt: string, url: string }>, categories: Array<{ name: string }> }> } };

export type ReviewFragment = { author: string, description: string, email: string, rating: number, title: string };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const CartFragmentDoc = new TypedDocumentString(`
    fragment Cart on Cart {
  id
  items {
    product {
      id
      name
      price
      description
      rating
      images {
        url
      }
    }
    quantity
  }
}
    `, {"fragmentName":"Cart"}) as unknown as TypedDocumentString<CartFragment, unknown>;
export const CategoriesFragmentFragmentDoc = new TypedDocumentString(`
    fragment CategoriesFragment on CategoryList {
  data {
    name
    id
  }
}
    `, {"fragmentName":"CategoriesFragment"}) as unknown as TypedDocumentString<CategoriesFragmentFragment, unknown>;
export const CollectionCardFragmentDoc = new TypedDocumentString(`
    fragment CollectionCard on Collection {
  name
  id
  slug
  products {
    images {
      id
      height
      alt
      url
      width
    }
  }
}
    `, {"fragmentName":"CollectionCard"}) as unknown as TypedDocumentString<CollectionCardFragment, unknown>;
export const CollectionDataFragmentDoc = new TypedDocumentString(`
    fragment CollectionData on CollectionList {
  data {
    name
    description
    slug
  }
}
    `, {"fragmentName":"CollectionData"}) as unknown as TypedDocumentString<CollectionDataFragment, unknown>;
export const CollectionFragmentDoc = new TypedDocumentString(`
    fragment Collection on Collection {
  name
  description
  slug
  products {
    id
    name
    images {
      alt
      url
    }
    categories {
      name
    }
    price
  }
}
    `, {"fragmentName":"Collection"}) as unknown as TypedDocumentString<CollectionFragment, unknown>;
export const OrderFragmentDoc = new TypedDocumentString(`
    fragment Order on Order {
  id
  createdAt
  totalAmount
  lines
  status
  updatedAt
}
    `, {"fragmentName":"Order"}) as unknown as TypedDocumentString<OrderFragment, unknown>;
export const ProductFragmentDoc = new TypedDocumentString(`
    fragment Product on Product {
  id
  images {
    url
    alt
  }
  name
  price
  rating
  description
  categories {
    name
  }
}
    `, {"fragmentName":"Product"}) as unknown as TypedDocumentString<ProductFragment, unknown>;
export const ProductListItemFragmentDoc = new TypedDocumentString(`
    fragment ProductListItem on Product {
  id
  name
  rating
  images {
    alt
    url
  }
  categories {
    name
  }
  price
}
    `, {"fragmentName":"ProductListItem"}) as unknown as TypedDocumentString<ProductListItemFragment, unknown>;
export const ProductsSearchFragmentDoc = new TypedDocumentString(`
    fragment ProductsSearch on Product {
  ...ProductListItem
}
    fragment ProductListItem on Product {
  id
  name
  rating
  images {
    alt
    url
  }
  categories {
    name
  }
  price
}`, {"fragmentName":"ProductsSearch"}) as unknown as TypedDocumentString<ProductsSearchFragment, unknown>;
export const ReviewFragmentDoc = new TypedDocumentString(`
    fragment Review on Review {
  author
  description
  email
  rating
  title
}
    `, {"fragmentName":"Review"}) as unknown as TypedDocumentString<ReviewFragment, unknown>;
export const CartAddProductDocument = new TypedDocumentString(`
    mutation CartAddProduct($id: ID!, $productId: String!, $quantity: Int) {
  cartAddItem(
    id: $id
    input: {item: {productId: $productId, quantity: $quantity}}
  ) {
    id
    items {
      product {
        ...Product
      }
      quantity
    }
  }
}
    fragment Product on Product {
  id
  images {
    url
    alt
  }
  name
  price
  rating
  description
  categories {
    name
  }
}`) as unknown as TypedDocumentString<CartAddProductMutation, CartAddProductMutationVariables>;
export const CartCompleteDocument = new TypedDocumentString(`
    mutation CartComplete($cartId: ID!, $userEmail: String!) {
  cartComplete(cartId: $cartId, userEmail: $userEmail) {
    id
    lines
    status
    totalAmount
    updatedAt
    createdAt
  }
}
    `) as unknown as TypedDocumentString<CartCompleteMutation, CartCompleteMutationVariables>;
export const CartCreateDocument = new TypedDocumentString(`
    mutation CartCreate($id: ID) {
  cartFindOrCreate(input: {}, id: $id) {
    ...Cart
  }
}
    fragment Cart on Cart {
  id
  items {
    product {
      id
      name
      price
      description
      rating
      images {
        url
      }
    }
    quantity
  }
}`) as unknown as TypedDocumentString<CartCreateMutation, CartCreateMutationVariables>;
export const CartGetByIdDocument = new TypedDocumentString(`
    query CartGetById($id: ID!) {
  cart(id: $id) {
    ...Cart
  }
}
    fragment Cart on Cart {
  id
  items {
    product {
      id
      name
      price
      description
      rating
      images {
        url
      }
    }
    quantity
  }
}`) as unknown as TypedDocumentString<CartGetByIdQuery, CartGetByIdQueryVariables>;
export const CartRemoveProductDocument = new TypedDocumentString(`
    mutation cartRemoveProduct($cartId: ID!, $productId: ID!) {
  cartRemoveItem(id: $cartId, productId: $productId) {
    id
  }
}
    `) as unknown as TypedDocumentString<CartRemoveProductMutation, CartRemoveProductMutationVariables>;
export const CartSetProductQuantityDocument = new TypedDocumentString(`
    mutation CartSetProductQuantity($cartId: ID!, $productId: ID!, $quantity: Int!) {
  cartChangeItemQuantity(id: $cartId, productId: $productId, quantity: $quantity) {
    id
    items {
      quantity
    }
  }
}
    `) as unknown as TypedDocumentString<CartSetProductQuantityMutation, CartSetProductQuantityMutationVariables>;
export const CategoriesGetListDocument = new TypedDocumentString(`
    query CategoriesGetList {
  categories {
    ...CategoriesFragment
  }
}
    fragment CategoriesFragment on CategoryList {
  data {
    name
    id
  }
}`) as unknown as TypedDocumentString<CategoriesGetListQuery, CategoriesGetListQueryVariables>;
export const CollectionGetDataDocument = new TypedDocumentString(`
    query CollectionGetData($slug: String) {
  collection(slug: $slug) {
    ...Collection
    products {
      ...ProductListItem
    }
  }
}
    fragment Collection on Collection {
  name
  description
  slug
  products {
    id
    name
    images {
      alt
      url
    }
    categories {
      name
    }
    price
  }
}
fragment ProductListItem on Product {
  id
  name
  rating
  images {
    alt
    url
  }
  categories {
    name
  }
  price
}`) as unknown as TypedDocumentString<CollectionGetDataQuery, CollectionGetDataQueryVariables>;
export const CollectionsCardsGetDataDocument = new TypedDocumentString(`
    query CollectionsCardsGetData {
  collections(take: 10) {
    data {
      ...CollectionCard
    }
  }
}
    fragment CollectionCard on Collection {
  name
  id
  slug
  products {
    images {
      id
      height
      alt
      url
      width
    }
  }
}`) as unknown as TypedDocumentString<CollectionsCardsGetDataQuery, CollectionsCardsGetDataQueryVariables>;
export const CollectionsGetListDocument = new TypedDocumentString(`
    query CollectionsGetList {
  collections(take: 10) {
    ...CollectionData
  }
}
    fragment CollectionData on CollectionList {
  data {
    name
    description
    slug
  }
}`) as unknown as TypedDocumentString<CollectionsGetListQuery, CollectionsGetListQueryVariables>;
export const OrderGetByIdDocument = new TypedDocumentString(`
    query OrderGetById($orderId: ID!) {
  order(id: $orderId) {
    ...Order
  }
}
    fragment Order on Order {
  id
  createdAt
  totalAmount
  lines
  status
  updatedAt
}`) as unknown as TypedDocumentString<OrderGetByIdQuery, OrderGetByIdQueryVariables>;
export const OrdersGetByEmailDocument = new TypedDocumentString(`
    query OrdersGetByEmail($email: String!) {
  orders(email: $email) {
    data {
      ...Order
    }
  }
}
    fragment Order on Order {
  id
  createdAt
  totalAmount
  lines
  status
  updatedAt
}`) as unknown as TypedDocumentString<OrdersGetByEmailQuery, OrdersGetByEmailQueryVariables>;
export const ProductCreateReviewDocument = new TypedDocumentString(`
    mutation ProductCreateReview($productId: ID!, $author: String!, $description: String!, $email: String!, $rating: Int!, $title: String!) {
  reviewCreate(
    author: $author
    description: $description
    email: $email
    productId: $productId
    rating: $rating
    title: $title
  ) {
    id
  }
}
    `) as unknown as TypedDocumentString<ProductCreateReviewMutation, ProductCreateReviewMutationVariables>;
export const ProductGetByIdDocument = new TypedDocumentString(`
    query ProductGetById($id: ID) {
  product(id: $id) {
    ...Product
  }
}
    fragment Product on Product {
  id
  images {
    url
    alt
  }
  name
  price
  rating
  description
  categories {
    name
  }
}`) as unknown as TypedDocumentString<ProductGetByIdQuery, ProductGetByIdQueryVariables>;
export const ProductGetImagesDocument = new TypedDocumentString(`
    query ProductGetImages($productId: ID) {
  product(id: $productId) {
    images {
      alt
      height
      id
      url
      width
    }
  }
}
    `) as unknown as TypedDocumentString<ProductGetImagesQuery, ProductGetImagesQueryVariables>;
export const ProductGetReviewsDocument = new TypedDocumentString(`
    query ProductGetReviews($productId: ID) {
  product(id: $productId) {
    reviews {
      ...Review
    }
  }
}
    fragment Review on Review {
  author
  description
  email
  rating
  title
}`) as unknown as TypedDocumentString<ProductGetReviewsQuery, ProductGetReviewsQueryVariables>;
export const ProductsGetListDocument = new TypedDocumentString(`
    query ProductsGetList($take: Int, $skip: Int, $orderBy: ProductSortBy, $order: SortDirection) {
  products(take: $take, skip: $skip, orderBy: $orderBy, order: $order) {
    data {
      ...ProductListItem
    }
  }
}
    fragment ProductListItem on Product {
  id
  name
  rating
  images {
    alt
    url
  }
  categories {
    name
  }
  price
}`) as unknown as TypedDocumentString<ProductsGetListQuery, ProductsGetListQueryVariables>;
export const ProductsGetListByCategoryIdDocument = new TypedDocumentString(`
    query ProductsGetListByCategoryId($slug: String) {
  category(slug: $slug) {
    products {
      ...ProductListItem
    }
  }
}
    fragment ProductListItem on Product {
  id
  name
  rating
  images {
    alt
    url
  }
  categories {
    name
  }
  price
}`) as unknown as TypedDocumentString<ProductsGetListByCategoryIdQuery, ProductsGetListByCategoryIdQueryVariables>;
export const ProductsSearchDocument = new TypedDocumentString(`
    query ProductsSearch($search: String) {
  products(search: $search) {
    data {
      ...ProductsSearch
    }
  }
}
    fragment ProductListItem on Product {
  id
  name
  rating
  images {
    alt
    url
  }
  categories {
    name
  }
  price
}
fragment ProductsSearch on Product {
  ...ProductListItem
}`) as unknown as TypedDocumentString<ProductsSearchQuery, ProductsSearchQueryVariables>;