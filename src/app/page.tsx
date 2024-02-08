import { ProductsList } from "./ui/organisms/ProductsList";
import type { ProductType } from "./ui/types";

const PRODUCTS: ProductType[] = [
	{
		id: "1",
		name: "piesek",
		category: "pieski",
		price: 222,
		coverImage: { src: "/kubek.jpg", alt: "obrazek" },
	},
	{
		id: "2",
		name: "kotek",
		category: "kotek",
		price: 2222,
		coverImage: { src: "/kubek.jpg", alt: "obrazek" },
	},
	{
		id: "3",
		name: "ptaszek",
		category: "pieski",
		price: 222,
		coverImage: { src: "/kubek.jpg", alt: "obrazek" },
	},
	{
		id: "4",
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
