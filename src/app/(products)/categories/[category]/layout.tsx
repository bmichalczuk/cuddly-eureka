import { type ReactNode } from "react";
import { getCategoriesList } from "@/api/products";

export const generateStaticParams = async () => {
	const categoriesList = await getCategoriesList();
	const params = categoriesList.map((category) => {
		return {
			category: category.name.toLowerCase(),
		};
	});
	return params;
};

export default function CategoryLayout({ children }: { children: ReactNode }) {
	return (
		<section className="mx-auto max-w-md  sm:max-w-2xl sm:py-1 xl:max-w-6xl">{children}</section>
	);
}
