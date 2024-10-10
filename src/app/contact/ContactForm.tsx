"use client";

import { useFormState } from "react-dom";

import { contactAction } from "./contactAction";
import { Button } from "@/ui/atoms/Button";

export const ContactForm = () => {
	const [state, action] = useFormState((_prevState: unknown, formData: FormData) => {
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
/*<h4>Title:</h4>
			<input required className="mb-5 border border-slate-500  p-3" type="text" name="headline" />
			<h4>Opinion:</h4>
			
			<h4>Email adress:</h4>
			<input required className="mb-5 border  border-slate-500  p-3" type="email" name="email" />
			<h4>Your name:</h4>
			<input required className="mb-5 border  border-slate-500  p-3" type="text" name="name" />
			<h4>Rate product:</h4>
			<select required name="rating" className="border border-slate-700 p-1">
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
			</select>*/
