"use client";

import { useFormState } from "react-dom";

import { contactAction } from "./contactAction";
import { Button } from "@/ui/atoms/Button";

export const ContactForm = () => {
	const [_state, action] = useFormState((_prevState: unknown, formData: FormData) => {
		return contactAction(formData);
	}, null);

	return (
		<form
			action={action}
			data-testid="add-review-form"
			className=" pjustify-center my-5 flex min-w-96 flex-col px-5"
		>
			<label className="min-w-full">Name</label>

			<input
				required={true}
				className="mb-5  block  border border-slate-500 p-2 "
				type="text"
				name="name"
			/>
			<label className="min-w-full"> Email</label>

			<input
				required={true}
				className=" min-w mb-5 block border border-slate-500 p-2 "
				type="email"
				name="email"
			/>
			<label className="mb-2 min-w-full"> Message</label>

			<textarea
				required={true}
				rows={5}
				className="mb-5 block w-full border  border-slate-500 p-2 "
				name="message"
			></textarea>
			<Button type="submit">Send</Button>
		</form>
	);
};
