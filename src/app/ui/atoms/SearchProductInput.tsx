"use client";

import { type ChangeEventHandler, useState } from "react";

import { useRouter, useSearchParams } from "next/navigation";
import { type Route } from "next";
import { withDebounce } from "@/utils";
export const SearchProductInput = () => {
	const searchParams = useSearchParams();
	const searchValue = searchParams.get("search") as string;
	const [value, setValue] = useState(searchValue || "");

	const router = useRouter();

	const handleInputChange: ChangeEventHandler<HTMLInputElement> = async (event) => {
		// eslint-disable-next-line prefer-const
		event.preventDefault();
		const redirectTo = (path: Route) => withDebounce(() => router.replace(path), 500);
		setValue(event.target.value);

		redirectTo(event.target.value.length > 0 ? `/search?search=${event.target.value}` : "/")();
	};

	return (
		<input
			className="ml-auto mr-0 h-12 rounded-md bg-slate-300 px-2 py-5 text-slate-700 focus:bg-slate-50"
			type="text"
			name="Search Product"
			value={value}
			onInput={handleInputChange}
			role="searchbox"
		/>
	);
};
