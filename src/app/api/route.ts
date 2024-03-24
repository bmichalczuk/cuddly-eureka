import { NextResponse, type NextRequest } from "next/server";

export const runtime = "edge";
export const dynamic = "force-dynamic";
//export const dynamicParams = true;
//export const revalidate = 123;

export async function GET(_request: NextRequest): Promise<Response> {
	return NextResponse.json("hello");
	/*return new Response(JSON.stringify("Hello, world!"), {
		headers: {
			"content-type": "application/json",
		},
		status: 200,
	});*/
}
