import Link from "next/link";
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

	if (stripeCheckoutSession.payment_status === "paid") {
		return (
			<div className="pt-24 text-center text-2xl">
				<p>Thank you for your payment. </p>
				<p>You can search for more products now.</p>
				<Link
					className="mt-5 block text-slate-700 hover:cursor-pointer hover:underline focus:underline "
					href="/products"
					title="Go to products"
				>
					Continue shoping
				</Link>
			</div>
		);
	}
	return (
		<div className="p-5 text-center text-2xl">
			<h2>Payment status: </h2>
			<div>{stripeCheckoutSession.payment_status || "unknown"}</div>
			<Link href="/products">Continue shoping</Link>
		</div>
	);
}
