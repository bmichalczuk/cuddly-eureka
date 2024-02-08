import { ProductsList } from "./ui/organisms/ProductsList";
import type { ProductType } from "./ui/types";

const PRODUCTS: ProductType[] = [
	{
		name: "piesek",
		category: "pieski",
		price: 222,
		coverImage: { src: "/kubek.jpg", alt: "obrazek" },
	},
	{
		name: "kotek",
		category: "kotek",
		price: 2222,
		coverImage: { src: "/kubek.jpg", alt: "obrazek" },
	},
	{
		name: "ptaszek",
		category: "pieski",
		price: 222,
		coverImage: { src: "/kubek.jpg", alt: "obrazek" },
	},
	{
		name: "chomik",
		category: "chomiki",
		price: 22,
		coverImage: { src: "/kubek.jpg", alt: "obrazek" },
	},
];

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between py-24">
			<ProductsList products={PRODUCTS} />
		</main>
	);
}
