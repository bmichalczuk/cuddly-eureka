"use client";
import { type ChangeEventHandler, useState, useEffect } from "react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { type Route } from "next";

export const SortProducts = () => {
	const pathname = usePathname();
	const router = useRouter();
	const sort = useSearchParams().get("sort");
	const order = useSearchParams().get("order");
	const [sortParams, setSortParams] = useState("");
	const handleSelect: ChangeEventHandler<HTMLSelectElement> = async (e) => {
		setSortParams(e.target.value);
	};

	useEffect(() => {
		router.push((pathname + sortParams) as Route);
	}, [sortParams, router, pathname]);
	useEffect(() => {
		if (sort && order) {
			setSortParams(`?sort=${sort}&order=${order}`);
		}
	}, [order, sort]);

	return (
		<select
			onChange={handleSelect}
			value={sortParams}
			name="product-sort"
			id="products-sort-select"
		>
			<option value="">Default</option>
			<option data-testid="sort-by-price" value="?sort=PRICE&order=ASC">
				Lowest price
			</option>
			<option data-testid="sort-by-price" value="?sort=PRICE&order=DESC">
				Highest price
			</option>
			<option data-testid="sort-by-rating" value="?sort=RATING&order=ASC">
				Lowest rating
			</option>
			<option data-testid="sort-by-rating" value="?sort=RATING&order=DESC">
				Highest Rating
			</option>
		</select>
	);
};
