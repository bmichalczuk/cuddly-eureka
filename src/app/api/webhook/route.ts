import { revalidatePath } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";

export const runtime = "edge";
export const dynamic = "force-dynamic";
//export const dynamicParams = true;
//export const revalidate = 123;

export async function GET(request: NextRequest): Promise<Response> {
	const json: unknown = await request.json();
	if (
		typeof json === "object" &&
		json &&
		"productId" in json &&
		typeof json.productId === "string"
	) {
		json.productId;
		revalidatePath(`/product/${json.productId}`);
		revalidatePath(`/products`);
		return NextResponse.json(null, { status: 200 });
	}
	return NextResponse.json({ messsage: "invalid body" }, { status: 400 });
}
