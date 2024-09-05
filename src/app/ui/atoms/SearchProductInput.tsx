"use client";

import { useEffect, useState, type ChangeEventHandler } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "@/utils/useDebounce";

export const SearchProductInput = () => {
	const searchParams = useSearchParams();
	const searchValue = searchParams.get("search")?.toString();
	const [value, setValue] = useState(searchValue ?? "");

	const router = useRouter();

	const debouncedSearch = useDebounce(value, 500);

	const handleInputChange: ChangeEventHandler<HTMLInputElement> = async (event) => {
		// eslint-disable-next-line prefer-const
		event.preventDefault();
		setValue(event.target.value);
		if (value.length < 1) {
			router.push("/");
		}
	};

	useEffect(() => {
		if (debouncedSearch.length > 0) {
			router.push(`/search?query=${debouncedSearch}`);
		}
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
