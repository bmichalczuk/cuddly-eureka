import { type ReactNode } from "react";
import { type Metadata } from "next";
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

export async function generateMetadata({
	params: { category },
}: {
	params: { page: string; category: string };
}): Promise<Metadata> {
	const categoryList = await getCategoriesList();
	const title = categoryList.find((obj) => obj.name.toLowerCase() === category)?.name;

	return {
		title: title,
	};
}

export default function CategoryLayout({ children }: { children: ReactNode }) {
	return (
		<section className="mx-auto min-h-full max-w-md px-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
			{children}
		</section>
	);
}
