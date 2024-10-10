import { ContactForm } from "./ContactForm";

export default async function ContactPage() {
	return (
		<section className="mx-auto max-w-md  sm:max-w-2xl sm:py-1 xl:max-w-6xl">
			<h2 className="text-4xl">Contact us</h2>
			<ContactForm />
		</section>
	);
}
