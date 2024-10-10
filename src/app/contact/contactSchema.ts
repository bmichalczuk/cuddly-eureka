import * as zod from "zod";

export const contatSchema = zod.object({
	name: zod.string().min(3).max(20),
	email: zod.string().email(),
	message: zod.string().min(10).max(100),
});

export type ContactFormData = zod.TypeOf<typeof contatSchema>;
