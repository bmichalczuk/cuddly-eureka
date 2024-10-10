"use server";

import { contatSchema } from "./contactSchema";

export const contactAction = async (data: FormData) => {
	const parsedData = await contatSchema.safeParseAsync(Object.fromEntries(data));
	if (parsedData.success) {
		console.log(parsedData.data);
	} else {
		console.log(parsedData.error.flatten().fieldErrors);
	}
};
