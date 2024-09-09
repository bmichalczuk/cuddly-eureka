import { redirect } from "next/navigation";
import Stripe from "stripe";

export default async function CartSuccess({
	searchParams,
}: {
	searchParams: { session_id?: string };
}) {
	if (!process.env.STRIPE_SECRET_KEY) {
		return null;
	}
	if (!searchParams.session_id) {
		redirect("/products");
	}
	console.log("succes");
	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2024-06-20",
		typescript: true,
	});

	const stripeCheckoutSession = await stripe.checkout.sessions.retrieve(searchParams.session_id);
	console.log(stripeCheckoutSession);

	return (
		<div>
			<h2>Payment status: </h2>
			<div>{stripeCheckoutSession.payment_status || "unknown"}</div>
		</div>
	);
}
