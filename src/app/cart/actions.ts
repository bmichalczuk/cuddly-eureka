"use server";
import { revalidateTag } from "next/cache";
import Stripe from "stripe";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { getCart } from "../../api/cart";

import {
	CartSetProductQuantityDocument,
	CartRemoveProductDocument,
	type CartFragment,
	type ProductFragment,
} from "../../gql/graphql";

import { executeGraohql } from "@/utils/utils";

export const changeProductQuantity = async (
	cartId: string,
	productId: string,
	quantity: number,
) => {
	await executeGraohql({
		query: CartSetProductQuantityDocument,
		variables: { cartId, productId, quantity },
	});
	revalidateTag("cart");
};

export const removeProductFromCart = async (
	cartId: CartFragment["id"],
	productId: ProductFragment["id"],
) => {
	await executeGraohql({ variables: { productId, cartId }, query: CartRemoveProductDocument });
};

export const handleStripePaymentAction = async () => {
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing STRIPE_SECRET_KEY env variable");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-10-16",
		typescript: true,
	});

	const cart = await getCart();
	if (!cart?.cart) {
		return;
	}
	const { cart: currentCart } = cart;
	const session = await stripe.checkout.sessions.create({
		metadata: {
			cartId: currentCart.id,
		},
		payment_method_types: ["card", "p24"],
		line_items: currentCart.items.map((item) => {
			return {
				price_data: {
					currency: "eur",
					product_data: {
						name: item.product.name,
						description: item.product.description,
						images: item.product.images.map((i) => i.url),
					},
					unit_amount: item.product.price,
				},
				quantity: item.quantity,
			};
		}),
		mode: "payment",
		success_url: `http://localhost:3000/cart/success?session_id={CHECKOUT_SESSION_ID}`,
		cancel_url: `http://localhost:3000/cart/canceled`,
	});

	if (!session.url) {
		throw new Error("Missing checkout Session.url");
	}
	console.log(session.url);
	cookies().set("cartId", "", {
		httpOnly: true,
		sameSite: "lax",
		//secure: true
	});
	redirect(session.url);
};
