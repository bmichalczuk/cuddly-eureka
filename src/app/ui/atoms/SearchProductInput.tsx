"use client";

import { type ChangeEventHandler, useState, useEffect } from "react";

import { useRouter, useSearchParams } from "next/navigation";
import { type Route } from "next";
import useDebounce from "@/utils/useDebounce";

export const SearchProductInput = () => {
	const searchParams = useSearchParams();
	const searchValue = searchParams.get("search") as string;
	const [value, setValue] = useState(searchValue || "");

	const router = useRouter();

	const debouncedSearch = useDebounce(value, 500);

	const handleInputChange: ChangeEventHandler<HTMLInputElement> = async (event) => {
		// eslint-disable-next-line prefer-const
		event.preventDefault();

		setValue(event.target.value);
	};

	useEffect(() => {
		const redirectTo = (path: Route) => {
			console.log(path);

			router.replace(path);
		};
		redirectTo(value.length > 0 ? `/search?query=${value}` : "/");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedSearch, router]);

	return (
		<input
			className="ml-auto mr-0 h-12 rounded-md bg-slate-300 px-2 py-5 text-slate-700 focus:bg-slate-50"
			type="text"
			name="Search Product"
			value={value}
			onChange={handleInputChange}
			role="searchbox"
		/>
	);
};
